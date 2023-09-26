// GENERATED CODE -- DO NOT EDIT!

// package: job
// file: job/job.proto

import * as job_job_pb from "../job/job_pb";
import * as grpc from "@grpc/grpc-js";

interface IJobService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  findAllJobs: grpc.MethodDefinition<job_job_pb.FindAllJobRequest, job_job_pb.FindJobResponse>;
  findJobByName: grpc.MethodDefinition<job_job_pb.FindJobByNameRequest, job_job_pb.FindJobResponse>;
  findJobById: grpc.MethodDefinition<job_job_pb.FindJobByIdRequest, job_job_pb.FindJobResponse>;
  findJobsByIndustry: grpc.MethodDefinition<job_job_pb.FindJobsByIndustryReq, job_job_pb.FindJobResponse>;
  findJobs: grpc.MethodDefinition<job_job_pb.FindJobRequest, job_job_pb.FindJobResponse>;
  findJobsByType: grpc.MethodDefinition<job_job_pb.FindJobsByTypeReq, job_job_pb.FindSimplifyJobResponse>;
  saveJobs: grpc.MethodDefinition<job_job_pb.JobMessage, job_job_pb.SaveJobResponse>;
  findJobsSimplify: grpc.MethodDefinition<job_job_pb.FindAllJobRequest, job_job_pb.FindSimplifyJobResponse>;
  updateJobs: grpc.MethodDefinition<job_job_pb.JobMessage, job_job_pb.SaveJobResponse>;
}

export const JobService: IJobService;

export interface IJobServer extends grpc.UntypedServiceImplementation {
  findAllJobs: grpc.handleUnaryCall<job_job_pb.FindAllJobRequest, job_job_pb.FindJobResponse>;
  findJobByName: grpc.handleUnaryCall<job_job_pb.FindJobByNameRequest, job_job_pb.FindJobResponse>;
  findJobById: grpc.handleUnaryCall<job_job_pb.FindJobByIdRequest, job_job_pb.FindJobResponse>;
  findJobsByIndustry: grpc.handleUnaryCall<job_job_pb.FindJobsByIndustryReq, job_job_pb.FindJobResponse>;
  findJobs: grpc.handleUnaryCall<job_job_pb.FindJobRequest, job_job_pb.FindJobResponse>;
  findJobsByType: grpc.handleUnaryCall<job_job_pb.FindJobsByTypeReq, job_job_pb.FindSimplifyJobResponse>;
  saveJobs: grpc.handleUnaryCall<job_job_pb.JobMessage, job_job_pb.SaveJobResponse>;
  findJobsSimplify: grpc.handleUnaryCall<job_job_pb.FindAllJobRequest, job_job_pb.FindSimplifyJobResponse>;
  updateJobs: grpc.handleUnaryCall<job_job_pb.JobMessage, job_job_pb.SaveJobResponse>;
}

export class JobClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  findAllJobs(argument: job_job_pb.FindAllJobRequest, callback: grpc.requestCallback<job_job_pb.FindJobResponse>): grpc.ClientUnaryCall;
  findAllJobs(argument: job_job_pb.FindAllJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<job_job_pb.FindJobResponse>): grpc.ClientUnaryCall;
  findAllJobs(argument: job_job_pb.FindAllJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<job_job_pb.FindJobResponse>): grpc.ClientUnaryCall;
  findJobByName(argument: job_job_pb.FindJobByNameRequest, callback: grpc.requestCallback<job_job_pb.FindJobResponse>): grpc.ClientUnaryCall;
  findJobByName(argument: job_job_pb.FindJobByNameRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<job_job_pb.FindJobResponse>): grpc.ClientUnaryCall;
  findJobByName(argument: job_job_pb.FindJobByNameRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<job_job_pb.FindJobResponse>): grpc.ClientUnaryCall;
  findJobById(argument: job_job_pb.FindJobByIdRequest, callback: grpc.requestCallback<job_job_pb.FindJobResponse>): grpc.ClientUnaryCall;
  findJobById(argument: job_job_pb.FindJobByIdRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<job_job_pb.FindJobResponse>): grpc.ClientUnaryCall;
  findJobById(argument: job_job_pb.FindJobByIdRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<job_job_pb.FindJobResponse>): grpc.ClientUnaryCall;
  findJobsByIndustry(argument: job_job_pb.FindJobsByIndustryReq, callback: grpc.requestCallback<job_job_pb.FindJobResponse>): grpc.ClientUnaryCall;
  findJobsByIndustry(argument: job_job_pb.FindJobsByIndustryReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<job_job_pb.FindJobResponse>): grpc.ClientUnaryCall;
  findJobsByIndustry(argument: job_job_pb.FindJobsByIndustryReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<job_job_pb.FindJobResponse>): grpc.ClientUnaryCall;
  findJobs(argument: job_job_pb.FindJobRequest, callback: grpc.requestCallback<job_job_pb.FindJobResponse>): grpc.ClientUnaryCall;
  findJobs(argument: job_job_pb.FindJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<job_job_pb.FindJobResponse>): grpc.ClientUnaryCall;
  findJobs(argument: job_job_pb.FindJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<job_job_pb.FindJobResponse>): grpc.ClientUnaryCall;
  findJobsByType(argument: job_job_pb.FindJobsByTypeReq, callback: grpc.requestCallback<job_job_pb.FindSimplifyJobResponse>): grpc.ClientUnaryCall;
  findJobsByType(argument: job_job_pb.FindJobsByTypeReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<job_job_pb.FindSimplifyJobResponse>): grpc.ClientUnaryCall;
  findJobsByType(argument: job_job_pb.FindJobsByTypeReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<job_job_pb.FindSimplifyJobResponse>): grpc.ClientUnaryCall;
  saveJobs(argument: job_job_pb.JobMessage, callback: grpc.requestCallback<job_job_pb.SaveJobResponse>): grpc.ClientUnaryCall;
  saveJobs(argument: job_job_pb.JobMessage, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<job_job_pb.SaveJobResponse>): grpc.ClientUnaryCall;
  saveJobs(argument: job_job_pb.JobMessage, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<job_job_pb.SaveJobResponse>): grpc.ClientUnaryCall;
  findJobsSimplify(argument: job_job_pb.FindAllJobRequest, callback: grpc.requestCallback<job_job_pb.FindSimplifyJobResponse>): grpc.ClientUnaryCall;
  findJobsSimplify(argument: job_job_pb.FindAllJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<job_job_pb.FindSimplifyJobResponse>): grpc.ClientUnaryCall;
  findJobsSimplify(argument: job_job_pb.FindAllJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<job_job_pb.FindSimplifyJobResponse>): grpc.ClientUnaryCall;
  updateJobs(argument: job_job_pb.JobMessage, callback: grpc.requestCallback<job_job_pb.SaveJobResponse>): grpc.ClientUnaryCall;
  updateJobs(argument: job_job_pb.JobMessage, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<job_job_pb.SaveJobResponse>): grpc.ClientUnaryCall;
  updateJobs(argument: job_job_pb.JobMessage, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<job_job_pb.SaveJobResponse>): grpc.ClientUnaryCall;
}
