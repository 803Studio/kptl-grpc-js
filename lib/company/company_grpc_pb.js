// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var company_company_pb = require('../company/company_pb.js');
var global_headers_pb = require('../global/headers_pb.js');

function serialize_company_CommonCompanyReq(arg) {
  if (!(arg instanceof company_company_pb.CommonCompanyReq)) {
    throw new Error('Expected argument of type company.CommonCompanyReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_company_CommonCompanyReq(buffer_arg) {
  return company_company_pb.CommonCompanyReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_company_CommonCompanyResponse(arg) {
  if (!(arg instanceof company_company_pb.CommonCompanyResponse)) {
    throw new Error('Expected argument of type company.CommonCompanyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_company_CommonCompanyResponse(buffer_arg) {
  return company_company_pb.CommonCompanyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_company_CommonResponse(arg) {
  if (!(arg instanceof company_company_pb.CommonResponse)) {
    throw new Error('Expected argument of type company.CommonResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_company_CommonResponse(buffer_arg) {
  return company_company_pb.CommonResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_company_Company(arg) {
  if (!(arg instanceof company_company_pb.Company)) {
    throw new Error('Expected argument of type company.Company');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_company_Company(buffer_arg) {
  return company_company_pb.Company.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_company_FindAllCompaniesReq(arg) {
  if (!(arg instanceof company_company_pb.FindAllCompaniesReq)) {
    throw new Error('Expected argument of type company.FindAllCompaniesReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_company_FindAllCompaniesReq(buffer_arg) {
  return company_company_pb.FindAllCompaniesReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_company_FindCompanyByIdResponse(arg) {
  if (!(arg instanceof company_company_pb.FindCompanyByIdResponse)) {
    throw new Error('Expected argument of type company.FindCompanyByIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_company_FindCompanyByIdResponse(buffer_arg) {
  return company_company_pb.FindCompanyByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_company_FindCompanyByIndustryReq(arg) {
  if (!(arg instanceof company_company_pb.FindCompanyByIndustryReq)) {
    throw new Error('Expected argument of type company.FindCompanyByIndustryReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_company_FindCompanyByIndustryReq(buffer_arg) {
  return company_company_pb.FindCompanyByIndustryReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_company_FindCompanyByNameReq(arg) {
  if (!(arg instanceof company_company_pb.FindCompanyByNameReq)) {
    throw new Error('Expected argument of type company.FindCompanyByNameReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_company_FindCompanyByNameReq(buffer_arg) {
  return company_company_pb.FindCompanyByNameReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_company_RegisteredCompanyReq(arg) {
  if (!(arg instanceof company_company_pb.RegisteredCompanyReq)) {
    throw new Error('Expected argument of type company.RegisteredCompanyReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_company_RegisteredCompanyReq(buffer_arg) {
  return company_company_pb.RegisteredCompanyReq.deserializeBinary(new Uint8Array(buffer_arg));
}


// 定义公司服务
var CompanyServiceService = exports.CompanyServiceService = {
  registeredCompany: {
    path: '/company.CompanyService/registeredCompany',
    requestStream: false,
    responseStream: false,
    requestType: company_company_pb.Company,
    responseType: company_company_pb.CommonResponse,
    requestSerialize: serialize_company_Company,
    requestDeserialize: deserialize_company_Company,
    responseSerialize: serialize_company_CommonResponse,
    responseDeserialize: deserialize_company_CommonResponse,
  },
  updateCompany: {
    path: '/company.CompanyService/updateCompany',
    requestStream: false,
    responseStream: false,
    requestType: company_company_pb.RegisteredCompanyReq,
    responseType: company_company_pb.CommonResponse,
    requestSerialize: serialize_company_RegisteredCompanyReq,
    requestDeserialize: deserialize_company_RegisteredCompanyReq,
    responseSerialize: serialize_company_CommonResponse,
    responseDeserialize: deserialize_company_CommonResponse,
  },
  findCompanyByName: {
    path: '/company.CompanyService/findCompanyByName',
    requestStream: false,
    responseStream: false,
    requestType: company_company_pb.FindCompanyByNameReq,
    responseType: company_company_pb.CommonCompanyResponse,
    requestSerialize: serialize_company_FindCompanyByNameReq,
    requestDeserialize: deserialize_company_FindCompanyByNameReq,
    responseSerialize: serialize_company_CommonCompanyResponse,
    responseDeserialize: deserialize_company_CommonCompanyResponse,
  },
  findCompanyById: {
    path: '/company.CompanyService/findCompanyById',
    requestStream: false,
    responseStream: false,
    requestType: company_company_pb.CommonCompanyReq,
    responseType: company_company_pb.FindCompanyByIdResponse,
    requestSerialize: serialize_company_CommonCompanyReq,
    requestDeserialize: deserialize_company_CommonCompanyReq,
    responseSerialize: serialize_company_FindCompanyByIdResponse,
    responseDeserialize: deserialize_company_FindCompanyByIdResponse,
  },
  findAllCompanies: {
    path: '/company.CompanyService/findAllCompanies',
    requestStream: false,
    responseStream: false,
    requestType: company_company_pb.FindAllCompaniesReq,
    responseType: company_company_pb.CommonCompanyResponse,
    requestSerialize: serialize_company_FindAllCompaniesReq,
    requestDeserialize: deserialize_company_FindAllCompaniesReq,
    responseSerialize: serialize_company_CommonCompanyResponse,
    responseDeserialize: deserialize_company_CommonCompanyResponse,
  },
  boundCompany: {
    path: '/company.CompanyService/boundCompany',
    requestStream: false,
    responseStream: false,
    requestType: company_company_pb.CommonCompanyReq,
    responseType: company_company_pb.CommonResponse,
    requestSerialize: serialize_company_CommonCompanyReq,
    requestDeserialize: deserialize_company_CommonCompanyReq,
    responseSerialize: serialize_company_CommonResponse,
    responseDeserialize: deserialize_company_CommonResponse,
  },
  verifyCompany: {
    path: '/company.CompanyService/verifyCompany',
    requestStream: false,
    responseStream: false,
    requestType: company_company_pb.CommonCompanyReq,
    responseType: company_company_pb.CommonResponse,
    requestSerialize: serialize_company_CommonCompanyReq,
    requestDeserialize: deserialize_company_CommonCompanyReq,
    responseSerialize: serialize_company_CommonResponse,
    responseDeserialize: deserialize_company_CommonResponse,
  },
  findCompanyByIndustry: {
    path: '/company.CompanyService/findCompanyByIndustry',
    requestStream: false,
    responseStream: false,
    requestType: company_company_pb.FindCompanyByIndustryReq,
    responseType: company_company_pb.CommonCompanyResponse,
    requestSerialize: serialize_company_FindCompanyByIndustryReq,
    requestDeserialize: deserialize_company_FindCompanyByIndustryReq,
    responseSerialize: serialize_company_CommonCompanyResponse,
    responseDeserialize: deserialize_company_CommonCompanyResponse,
  },
};

exports.CompanyServiceClient = grpc.makeGenericClientConstructor(CompanyServiceService);
