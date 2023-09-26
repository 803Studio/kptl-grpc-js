// package: global
// file: global/headers.proto

import * as jspb from "google-protobuf";

export class ResponseHeader extends jspb.Message {
  getStatus(): ResponseStatusMap[keyof ResponseStatusMap];
  setStatus(value: ResponseStatusMap[keyof ResponseStatusMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseHeader.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseHeader): ResponseHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseHeader;
  static deserializeBinaryFromReader(message: ResponseHeader, reader: jspb.BinaryReader): ResponseHeader;
}

export namespace ResponseHeader {
  export type AsObject = {
    status: ResponseStatusMap[keyof ResponseStatusMap],
    message: string,
  }
}

export interface ResponseStatusMap {
  OK: 0;
  INTERNALERR: 1;
  USERNOTFOUND: 10001;
}

export const ResponseStatus: ResponseStatusMap;

