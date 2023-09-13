// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var employee_Employee_pb = require('../employee/Employee_pb.js');

function serialize_employee_OperateRequest(arg) {
  if (!(arg instanceof employee_Employee_pb.OperateRequest)) {
    throw new Error('Expected argument of type employee.OperateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employee_OperateRequest(buffer_arg) {
  return employee_Employee_pb.OperateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_employee_OperateResponse(arg) {
  if (!(arg instanceof employee_Employee_pb.OperateResponse)) {
    throw new Error('Expected argument of type employee.OperateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employee_OperateResponse(buffer_arg) {
  return employee_Employee_pb.OperateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// 定义员工服务
var EmployeeService = exports.EmployeeService = {
  deliver: {
    path: '/employee.Employee/Deliver',
    requestStream: false,
    responseStream: false,
    requestType: employee_Employee_pb.OperateRequest,
    responseType: employee_Employee_pb.OperateResponse,
    requestSerialize: serialize_employee_OperateRequest,
    requestDeserialize: deserialize_employee_OperateRequest,
    responseSerialize: serialize_employee_OperateResponse,
    responseDeserialize: deserialize_employee_OperateResponse,
  },
  browses: {
    path: '/employee.Employee/Browses',
    requestStream: false,
    responseStream: false,
    requestType: employee_Employee_pb.OperateRequest,
    responseType: employee_Employee_pb.OperateResponse,
    requestSerialize: serialize_employee_OperateRequest,
    requestDeserialize: deserialize_employee_OperateRequest,
    responseSerialize: serialize_employee_OperateResponse,
    responseDeserialize: deserialize_employee_OperateResponse,
  },
};

exports.EmployeeClient = grpc.makeGenericClientConstructor(EmployeeService);
