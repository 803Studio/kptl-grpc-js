// GENERATED CODE -- DO NOT EDIT!

// package: employee
// file: employee/employee.proto

import * as employee_employee_pb from "../employee/employee_pb";
import * as comm_headers_pb from "../comm/headers_pb";
import * as grpc from "@grpc/grpc-js";

interface IEmployeeService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  deliver: grpc.MethodDefinition<employee_employee_pb.OperateRequest, employee_employee_pb.OperateResponse>;
  browses: grpc.MethodDefinition<employee_employee_pb.OperateRequest, employee_employee_pb.OperateResponse>;
  deliverRecords: grpc.MethodDefinition<employee_employee_pb.FindRecordsReq, employee_employee_pb.OperateResponse>;
  completeSelfInformation: grpc.MethodDefinition<employee_employee_pb.SelfInformation, comm_headers_pb.ResponseHeader>;
  findEmployeeInformation: grpc.MethodDefinition<employee_employee_pb.FindEmployeeInfoReq, employee_employee_pb.FindEmployeeResponse>;
  findEmployeeSimpleInformation: grpc.MethodDefinition<employee_employee_pb.SplitPage, employee_employee_pb.FindEmployeeSimpleResponse>;
}

export const EmployeeService: IEmployeeService;

export interface IEmployeeServer extends grpc.UntypedServiceImplementation {
  deliver: grpc.handleUnaryCall<employee_employee_pb.OperateRequest, employee_employee_pb.OperateResponse>;
  browses: grpc.handleUnaryCall<employee_employee_pb.OperateRequest, employee_employee_pb.OperateResponse>;
  deliverRecords: grpc.handleUnaryCall<employee_employee_pb.FindRecordsReq, employee_employee_pb.OperateResponse>;
  completeSelfInformation: grpc.handleUnaryCall<employee_employee_pb.SelfInformation, comm_headers_pb.ResponseHeader>;
  findEmployeeInformation: grpc.handleUnaryCall<employee_employee_pb.FindEmployeeInfoReq, employee_employee_pb.FindEmployeeResponse>;
  findEmployeeSimpleInformation: grpc.handleUnaryCall<employee_employee_pb.SplitPage, employee_employee_pb.FindEmployeeSimpleResponse>;
}

export class EmployeeClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  deliver(argument: employee_employee_pb.OperateRequest, callback: grpc.requestCallback<employee_employee_pb.OperateResponse>): grpc.ClientUnaryCall;
  deliver(argument: employee_employee_pb.OperateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<employee_employee_pb.OperateResponse>): grpc.ClientUnaryCall;
  deliver(argument: employee_employee_pb.OperateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<employee_employee_pb.OperateResponse>): grpc.ClientUnaryCall;
  browses(argument: employee_employee_pb.OperateRequest, callback: grpc.requestCallback<employee_employee_pb.OperateResponse>): grpc.ClientUnaryCall;
  browses(argument: employee_employee_pb.OperateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<employee_employee_pb.OperateResponse>): grpc.ClientUnaryCall;
  browses(argument: employee_employee_pb.OperateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<employee_employee_pb.OperateResponse>): grpc.ClientUnaryCall;
  deliverRecords(argument: employee_employee_pb.FindRecordsReq, callback: grpc.requestCallback<employee_employee_pb.OperateResponse>): grpc.ClientUnaryCall;
  deliverRecords(argument: employee_employee_pb.FindRecordsReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<employee_employee_pb.OperateResponse>): grpc.ClientUnaryCall;
  deliverRecords(argument: employee_employee_pb.FindRecordsReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<employee_employee_pb.OperateResponse>): grpc.ClientUnaryCall;
  completeSelfInformation(argument: employee_employee_pb.SelfInformation, callback: grpc.requestCallback<comm_headers_pb.ResponseHeader>): grpc.ClientUnaryCall;
  completeSelfInformation(argument: employee_employee_pb.SelfInformation, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<comm_headers_pb.ResponseHeader>): grpc.ClientUnaryCall;
  completeSelfInformation(argument: employee_employee_pb.SelfInformation, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<comm_headers_pb.ResponseHeader>): grpc.ClientUnaryCall;
  findEmployeeInformation(argument: employee_employee_pb.FindEmployeeInfoReq, callback: grpc.requestCallback<employee_employee_pb.FindEmployeeResponse>): grpc.ClientUnaryCall;
  findEmployeeInformation(argument: employee_employee_pb.FindEmployeeInfoReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<employee_employee_pb.FindEmployeeResponse>): grpc.ClientUnaryCall;
  findEmployeeInformation(argument: employee_employee_pb.FindEmployeeInfoReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<employee_employee_pb.FindEmployeeResponse>): grpc.ClientUnaryCall;
  findEmployeeSimpleInformation(argument: employee_employee_pb.SplitPage, callback: grpc.requestCallback<employee_employee_pb.FindEmployeeSimpleResponse>): grpc.ClientUnaryCall;
  findEmployeeSimpleInformation(argument: employee_employee_pb.SplitPage, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<employee_employee_pb.FindEmployeeSimpleResponse>): grpc.ClientUnaryCall;
  findEmployeeSimpleInformation(argument: employee_employee_pb.SplitPage, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<employee_employee_pb.FindEmployeeSimpleResponse>): grpc.ClientUnaryCall;
}
