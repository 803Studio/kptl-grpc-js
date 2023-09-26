// GENERATED CODE -- DO NOT EDIT!

// package: users
// file: users/user.proto

import * as users_user_pb from "../users/user_pb";
import * as grpc from "@grpc/grpc-js";

interface IAuthService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  login: grpc.MethodDefinition<users_user_pb.LoginRequest, users_user_pb.LoginResponse>;
}

export const AuthService: IAuthService;

export interface IAuthServer extends grpc.UntypedServiceImplementation {
  login: grpc.handleUnaryCall<users_user_pb.LoginRequest, users_user_pb.LoginResponse>;
}

export class AuthClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  login(argument: users_user_pb.LoginRequest, callback: grpc.requestCallback<users_user_pb.LoginResponse>): grpc.ClientUnaryCall;
  login(argument: users_user_pb.LoginRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<users_user_pb.LoginResponse>): grpc.ClientUnaryCall;
  login(argument: users_user_pb.LoginRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<users_user_pb.LoginResponse>): grpc.ClientUnaryCall;
}
