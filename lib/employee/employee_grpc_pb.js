// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var employee_employee_pb = require('../employee/employee_pb.js');
var comm_headers_pb = require('../comm/headers_pb.js');

function serialize_comm_ResponseHeader(arg) {
  if (!(arg instanceof comm_headers_pb.ResponseHeader)) {
    throw new Error('Expected argument of type comm.ResponseHeader');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_comm_ResponseHeader(buffer_arg) {
  return comm_headers_pb.ResponseHeader.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_employee_FindEmployeeInfoReq(arg) {
  if (!(arg instanceof employee_employee_pb.FindEmployeeInfoReq)) {
    throw new Error('Expected argument of type employee.FindEmployeeInfoReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employee_FindEmployeeInfoReq(buffer_arg) {
  return employee_employee_pb.FindEmployeeInfoReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_employee_FindEmployeeResponse(arg) {
  if (!(arg instanceof employee_employee_pb.FindEmployeeResponse)) {
    throw new Error('Expected argument of type employee.FindEmployeeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employee_FindEmployeeResponse(buffer_arg) {
  return employee_employee_pb.FindEmployeeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_employee_FindEmployeeSimpleResponse(arg) {
  if (!(arg instanceof employee_employee_pb.FindEmployeeSimpleResponse)) {
    throw new Error('Expected argument of type employee.FindEmployeeSimpleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employee_FindEmployeeSimpleResponse(buffer_arg) {
  return employee_employee_pb.FindEmployeeSimpleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_employee_FindRecordsReq(arg) {
  if (!(arg instanceof employee_employee_pb.FindRecordsReq)) {
    throw new Error('Expected argument of type employee.FindRecordsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employee_FindRecordsReq(buffer_arg) {
  return employee_employee_pb.FindRecordsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_employee_OperateRequest(arg) {
  if (!(arg instanceof employee_employee_pb.OperateRequest)) {
    throw new Error('Expected argument of type employee.OperateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employee_OperateRequest(buffer_arg) {
  return employee_employee_pb.OperateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_employee_OperateResponse(arg) {
  if (!(arg instanceof employee_employee_pb.OperateResponse)) {
    throw new Error('Expected argument of type employee.OperateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employee_OperateResponse(buffer_arg) {
  return employee_employee_pb.OperateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_employee_SelfInformation(arg) {
  if (!(arg instanceof employee_employee_pb.SelfInformation)) {
    throw new Error('Expected argument of type employee.SelfInformation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employee_SelfInformation(buffer_arg) {
  return employee_employee_pb.SelfInformation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_employee_SplitPage(arg) {
  if (!(arg instanceof employee_employee_pb.SplitPage)) {
    throw new Error('Expected argument of type employee.SplitPage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employee_SplitPage(buffer_arg) {
  return employee_employee_pb.SplitPage.deserializeBinary(new Uint8Array(buffer_arg));
}


// 定义员工服务
var EmployeeService = exports.EmployeeService = {
  deliver: {
    path: '/employee.Employee/deliver',
    requestStream: false,
    responseStream: false,
    requestType: employee_employee_pb.OperateRequest,
    responseType: employee_employee_pb.OperateResponse,
    requestSerialize: serialize_employee_OperateRequest,
    requestDeserialize: deserialize_employee_OperateRequest,
    responseSerialize: serialize_employee_OperateResponse,
    responseDeserialize: deserialize_employee_OperateResponse,
  },
  browses: {
    path: '/employee.Employee/browses',
    requestStream: false,
    responseStream: false,
    requestType: employee_employee_pb.OperateRequest,
    responseType: employee_employee_pb.OperateResponse,
    requestSerialize: serialize_employee_OperateRequest,
    requestDeserialize: deserialize_employee_OperateRequest,
    responseSerialize: serialize_employee_OperateResponse,
    responseDeserialize: deserialize_employee_OperateResponse,
  },
  deliverRecords: {
    path: '/employee.Employee/deliverRecords',
    requestStream: false,
    responseStream: false,
    requestType: employee_employee_pb.FindRecordsReq,
    responseType: employee_employee_pb.OperateResponse,
    requestSerialize: serialize_employee_FindRecordsReq,
    requestDeserialize: deserialize_employee_FindRecordsReq,
    responseSerialize: serialize_employee_OperateResponse,
    responseDeserialize: deserialize_employee_OperateResponse,
  },
  completeSelfInformation: {
    path: '/employee.Employee/completeSelfInformation',
    requestStream: false,
    responseStream: false,
    requestType: employee_employee_pb.SelfInformation,
    responseType: comm_headers_pb.ResponseHeader,
    requestSerialize: serialize_employee_SelfInformation,
    requestDeserialize: deserialize_employee_SelfInformation,
    responseSerialize: serialize_comm_ResponseHeader,
    responseDeserialize: deserialize_comm_ResponseHeader,
  },
  findEmployeeInformation: {
    path: '/employee.Employee/findEmployeeInformation',
    requestStream: false,
    responseStream: false,
    requestType: employee_employee_pb.FindEmployeeInfoReq,
    responseType: employee_employee_pb.FindEmployeeResponse,
    requestSerialize: serialize_employee_FindEmployeeInfoReq,
    requestDeserialize: deserialize_employee_FindEmployeeInfoReq,
    responseSerialize: serialize_employee_FindEmployeeResponse,
    responseDeserialize: deserialize_employee_FindEmployeeResponse,
  },
  findEmployeeSimpleInformation: {
    path: '/employee.Employee/findEmployeeSimpleInformation',
    requestStream: false,
    responseStream: false,
    requestType: employee_employee_pb.SplitPage,
    responseType: employee_employee_pb.FindEmployeeSimpleResponse,
    requestSerialize: serialize_employee_SplitPage,
    requestDeserialize: deserialize_employee_SplitPage,
    responseSerialize: serialize_employee_FindEmployeeSimpleResponse,
    responseDeserialize: deserialize_employee_FindEmployeeSimpleResponse,
  },
};

exports.EmployeeClient = grpc.makeGenericClientConstructor(EmployeeService);
