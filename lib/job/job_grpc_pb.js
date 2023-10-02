// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var job_job_pb = require('../job/job_pb.js');
var comm_headers_pb = require('../comm/headers_pb.js');

function serialize_job_FindAllJobRequest(arg) {
  if (!(arg instanceof job_job_pb.FindAllJobRequest)) {
    throw new Error('Expected argument of type job.FindAllJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_job_FindAllJobRequest(buffer_arg) {
  return job_job_pb.FindAllJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_FindJobByIdRequest(arg) {
  if (!(arg instanceof job_job_pb.FindJobByIdRequest)) {
    throw new Error('Expected argument of type job.FindJobByIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_job_FindJobByIdRequest(buffer_arg) {
  return job_job_pb.FindJobByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_FindJobByNameRequest(arg) {
  if (!(arg instanceof job_job_pb.FindJobByNameRequest)) {
    throw new Error('Expected argument of type job.FindJobByNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_job_FindJobByNameRequest(buffer_arg) {
  return job_job_pb.FindJobByNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_FindJobRequest(arg) {
  if (!(arg instanceof job_job_pb.FindJobRequest)) {
    throw new Error('Expected argument of type job.FindJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_job_FindJobRequest(buffer_arg) {
  return job_job_pb.FindJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_FindJobResponse(arg) {
  if (!(arg instanceof job_job_pb.FindJobResponse)) {
    throw new Error('Expected argument of type job.FindJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_job_FindJobResponse(buffer_arg) {
  return job_job_pb.FindJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_FindJobsByIndustryReq(arg) {
  if (!(arg instanceof job_job_pb.FindJobsByIndustryReq)) {
    throw new Error('Expected argument of type job.FindJobsByIndustryReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_job_FindJobsByIndustryReq(buffer_arg) {
  return job_job_pb.FindJobsByIndustryReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_FindJobsByTypeReq(arg) {
  if (!(arg instanceof job_job_pb.FindJobsByTypeReq)) {
    throw new Error('Expected argument of type job.FindJobsByTypeReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_job_FindJobsByTypeReq(buffer_arg) {
  return job_job_pb.FindJobsByTypeReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_FindSimplifyJobResponse(arg) {
  if (!(arg instanceof job_job_pb.FindSimplifyJobResponse)) {
    throw new Error('Expected argument of type job.FindSimplifyJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_job_FindSimplifyJobResponse(buffer_arg) {
  return job_job_pb.FindSimplifyJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_JobMessage(arg) {
  if (!(arg instanceof job_job_pb.JobMessage)) {
    throw new Error('Expected argument of type job.JobMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_job_JobMessage(buffer_arg) {
  return job_job_pb.JobMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_SaveJobResponse(arg) {
  if (!(arg instanceof job_job_pb.SaveJobResponse)) {
    throw new Error('Expected argument of type job.SaveJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_job_SaveJobResponse(buffer_arg) {
  return job_job_pb.SaveJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// 定义员工服务
var JobService = exports.JobService = {
  findAllJobs: {
    path: '/job.Job/findAllJobs',
    requestStream: false,
    responseStream: false,
    requestType: job_job_pb.FindAllJobRequest,
    responseType: job_job_pb.FindJobResponse,
    requestSerialize: serialize_job_FindAllJobRequest,
    requestDeserialize: deserialize_job_FindAllJobRequest,
    responseSerialize: serialize_job_FindJobResponse,
    responseDeserialize: deserialize_job_FindJobResponse,
  },
  findJobByName: {
    path: '/job.Job/findJobByName',
    requestStream: false,
    responseStream: false,
    requestType: job_job_pb.FindJobByNameRequest,
    responseType: job_job_pb.FindJobResponse,
    requestSerialize: serialize_job_FindJobByNameRequest,
    requestDeserialize: deserialize_job_FindJobByNameRequest,
    responseSerialize: serialize_job_FindJobResponse,
    responseDeserialize: deserialize_job_FindJobResponse,
  },
  findJobById: {
    path: '/job.Job/findJobById',
    requestStream: false,
    responseStream: false,
    requestType: job_job_pb.FindJobByIdRequest,
    responseType: job_job_pb.FindJobResponse,
    requestSerialize: serialize_job_FindJobByIdRequest,
    requestDeserialize: deserialize_job_FindJobByIdRequest,
    responseSerialize: serialize_job_FindJobResponse,
    responseDeserialize: deserialize_job_FindJobResponse,
  },
  findJobsByIndustry: {
    path: '/job.Job/findJobsByIndustry',
    requestStream: false,
    responseStream: false,
    requestType: job_job_pb.FindJobsByIndustryReq,
    responseType: job_job_pb.FindJobResponse,
    requestSerialize: serialize_job_FindJobsByIndustryReq,
    requestDeserialize: deserialize_job_FindJobsByIndustryReq,
    responseSerialize: serialize_job_FindJobResponse,
    responseDeserialize: deserialize_job_FindJobResponse,
  },
  findJobs: {
    path: '/job.Job/findJobs',
    requestStream: false,
    responseStream: false,
    requestType: job_job_pb.FindJobRequest,
    responseType: job_job_pb.FindJobResponse,
    requestSerialize: serialize_job_FindJobRequest,
    requestDeserialize: deserialize_job_FindJobRequest,
    responseSerialize: serialize_job_FindJobResponse,
    responseDeserialize: deserialize_job_FindJobResponse,
  },
  findJobsByType: {
    path: '/job.Job/findJobsByType',
    requestStream: false,
    responseStream: false,
    requestType: job_job_pb.FindJobsByTypeReq,
    responseType: job_job_pb.FindSimplifyJobResponse,
    requestSerialize: serialize_job_FindJobsByTypeReq,
    requestDeserialize: deserialize_job_FindJobsByTypeReq,
    responseSerialize: serialize_job_FindSimplifyJobResponse,
    responseDeserialize: deserialize_job_FindSimplifyJobResponse,
  },
  saveJobs: {
    path: '/job.Job/saveJobs',
    requestStream: false,
    responseStream: false,
    requestType: job_job_pb.JobMessage,
    responseType: job_job_pb.SaveJobResponse,
    requestSerialize: serialize_job_JobMessage,
    requestDeserialize: deserialize_job_JobMessage,
    responseSerialize: serialize_job_SaveJobResponse,
    responseDeserialize: deserialize_job_SaveJobResponse,
  },
  findJobsSimplify: {
    path: '/job.Job/findJobsSimplify',
    requestStream: false,
    responseStream: false,
    requestType: job_job_pb.FindAllJobRequest,
    responseType: job_job_pb.FindSimplifyJobResponse,
    requestSerialize: serialize_job_FindAllJobRequest,
    requestDeserialize: deserialize_job_FindAllJobRequest,
    responseSerialize: serialize_job_FindSimplifyJobResponse,
    responseDeserialize: deserialize_job_FindSimplifyJobResponse,
  },
  // 职位简洁信息
updateJobs: {
    path: '/job.Job/updateJobs',
    requestStream: false,
    responseStream: false,
    requestType: job_job_pb.JobMessage,
    responseType: job_job_pb.SaveJobResponse,
    requestSerialize: serialize_job_JobMessage,
    requestDeserialize: deserialize_job_JobMessage,
    responseSerialize: serialize_job_SaveJobResponse,
    responseDeserialize: deserialize_job_SaveJobResponse,
  },
};

exports.JobClient = grpc.makeGenericClientConstructor(JobService);
