// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var users_user_pb = require('../users/user_pb.js');

function serialize_users_LoginRequest(arg) {
  if (!(arg instanceof users_user_pb.LoginRequest)) {
    throw new Error('Expected argument of type users.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_LoginRequest(buffer_arg) {
  return users_user_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_LoginResponse(arg) {
  if (!(arg instanceof users_user_pb.LoginResponse)) {
    throw new Error('Expected argument of type users.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_LoginResponse(buffer_arg) {
  return users_user_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthService = exports.AuthService = {
  login: {
    path: '/users.Auth/Login',
    requestStream: false,
    responseStream: false,
    requestType: users_user_pb.LoginRequest,
    responseType: users_user_pb.LoginResponse,
    requestSerialize: serialize_users_LoginRequest,
    requestDeserialize: deserialize_users_LoginRequest,
    responseSerialize: serialize_users_LoginResponse,
    responseDeserialize: deserialize_users_LoginResponse,
  },
};

exports.AuthClient = grpc.makeGenericClientConstructor(AuthService);
