const fsp = require('node:fs/promises')
const path = require('node:path')

const JS_LIB = './lib'
const JS_REQ_STAR = `"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });

`

async function getLibInfo() {
  const dir = await fsp.opendir(JS_LIB)
  const ret = []

  for await (const dirent of dir) {
    if (dirent.isDirectory()) {
      ret.push(await getSubInfo(dirent.name))
    }
  }

  return ret
}

async function getSubInfo(name) {
  const baseName = (s) => s.split('.')[0]
  const PATH = path.join(JS_LIB, name)
  const dir = await fsp.opendir(PATH)
  const ret = {
    name,
    js: [],
    ts: []
  }

  for await (const dirent of dir) {
    if (dirent.isFile() && !dirent.name.startsWith('index')) {
      if (dirent.name.endsWith('.js')) {
        ret.js.push(baseName(dirent.name))
      } else if (dirent.name.endsWith('.ts')) {
        ret.ts.push(baseName(dirent.name))
      }
    }
  }

  return ret
}

async function genIndex() {
  const info = await getLibInfo()

  for (const sub of info) {
    await genJSIndex(sub.name, sub.js)
    await genTSIndex(sub.name, sub.ts)
  }

  await fsp.writeFile(path.join(JS_LIB, 'index.js'), `//
${info.map(sub => `const ${sub.name} = require('./${sub.name}')`).join('\n')}

module.exports = {
  ${info.map(sub => sub.name).join(', ')}
}
`)

  await fsp.writeFile(path.join(JS_LIB, 'index.d.ts'), `//
${info.map(sub => `export * as ${sub.name} from './${sub.name}'`).join('\n')}
`)
}

function genJSIndex(pkg, items) {
  const temp = `//package ${pkg}
//${new Date}

${JS_REQ_STAR}

${items.map(item => `__exportStar(require("./${item}"), exports);`).join('\n')}
`
  return fsp.writeFile(path.join(JS_LIB, pkg, 'index.js'), temp)
}

function genTSIndex(pkg, items) {
  const temp = `//package ${pkg}
//${new Date}

${items.map(item => `export * from './${item}'`).join('\n')}
`

  return fsp.writeFile(path.join(JS_LIB, pkg, 'index.d.ts'), temp)
}

genIndex()
