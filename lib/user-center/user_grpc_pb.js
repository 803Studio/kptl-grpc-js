// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user$center_user_pb = require('../user-center/user_pb.js');

function serialize_usercenter_LoginRequest(arg) {
  if (!(arg instanceof user$center_user_pb.LoginRequest)) {
    throw new Error('Expected argument of type usercenter.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_usercenter_LoginRequest(buffer_arg) {
  return user$center_user_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_usercenter_LoginResponse(arg) {
  if (!(arg instanceof user$center_user_pb.LoginResponse)) {
    throw new Error('Expected argument of type usercenter.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_usercenter_LoginResponse(buffer_arg) {
  return user$center_user_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserService = exports.UserService = {
  login: {
    path: '/usercenter.User/Login',
    requestStream: false,
    responseStream: false,
    requestType: user$center_user_pb.LoginRequest,
    responseType: user$center_user_pb.LoginResponse,
    requestSerialize: serialize_usercenter_LoginRequest,
    requestDeserialize: deserialize_usercenter_LoginRequest,
    responseSerialize: serialize_usercenter_LoginResponse,
    responseDeserialize: deserialize_usercenter_LoginResponse,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);
