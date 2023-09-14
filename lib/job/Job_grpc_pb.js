// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var job_Job_pb = require('../job/Job_pb.js');

function serialize_job_CommonCompanyReq(arg) {
  if (!(arg instanceof job_Job_pb.CommonCompanyReq)) {
    throw new Error('Expected argument of type job.CommonCompanyReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_job_CommonCompanyReq(buffer_arg) {
  return job_Job_pb.CommonCompanyReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_CommonCompanyResponse(arg) {
  if (!(arg instanceof job_Job_pb.CommonCompanyResponse)) {
    throw new Error('Expected argument of type job.CommonCompanyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_job_CommonCompanyResponse(buffer_arg) {
  return job_Job_pb.CommonCompanyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_CommonResponse(arg) {
  if (!(arg instanceof job_Job_pb.CommonResponse)) {
    throw new Error('Expected argument of type job.CommonResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_job_CommonResponse(buffer_arg) {
  return job_Job_pb.CommonResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_FindAllCompaniesReq(arg) {
  if (!(arg instanceof job_Job_pb.FindAllCompaniesReq)) {
    throw new Error('Expected argument of type job.FindAllCompaniesReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_job_FindAllCompaniesReq(buffer_arg) {
  return job_Job_pb.FindAllCompaniesReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_FindAllJobRequest(arg) {
  if (!(arg instanceof job_Job_pb.FindAllJobRequest)) {
    throw new Error('Expected argument of type job.FindAllJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_job_FindAllJobRequest(buffer_arg) {
  return job_Job_pb.FindAllJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_FindCompanyByIdResponse(arg) {
  if (!(arg instanceof job_Job_pb.FindCompanyByIdResponse)) {
    throw new Error('Expected argument of type job.FindCompanyByIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_job_FindCompanyByIdResponse(buffer_arg) {
  return job_Job_pb.FindCompanyByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_FindCompanyByNameReq(arg) {
  if (!(arg instanceof job_Job_pb.FindCompanyByNameReq)) {
    throw new Error('Expected argument of type job.FindCompanyByNameReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_job_FindCompanyByNameReq(buffer_arg) {
  return job_Job_pb.FindCompanyByNameReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_FindJobByIdRequest(arg) {
  if (!(arg instanceof job_Job_pb.FindJobByIdRequest)) {
    throw new Error('Expected argument of type job.FindJobByIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_job_FindJobByIdRequest(buffer_arg) {
  return job_Job_pb.FindJobByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_FindJobByNameRequest(arg) {
  if (!(arg instanceof job_Job_pb.FindJobByNameRequest)) {
    throw new Error('Expected argument of type job.FindJobByNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_job_FindJobByNameRequest(buffer_arg) {
  return job_Job_pb.FindJobByNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_FindJobRequest(arg) {
  if (!(arg instanceof job_Job_pb.FindJobRequest)) {
    throw new Error('Expected argument of type job.FindJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_job_FindJobRequest(buffer_arg) {
  return job_Job_pb.FindJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_FindJobResponse(arg) {
  if (!(arg instanceof job_Job_pb.FindJobResponse)) {
    throw new Error('Expected argument of type job.FindJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_job_FindJobResponse(buffer_arg) {
  return job_Job_pb.FindJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_JobMessage(arg) {
  if (!(arg instanceof job_Job_pb.JobMessage)) {
    throw new Error('Expected argument of type job.JobMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_job_JobMessage(buffer_arg) {
  return job_Job_pb.JobMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_RegisteredCompanyReq(arg) {
  if (!(arg instanceof job_Job_pb.RegisteredCompanyReq)) {
    throw new Error('Expected argument of type job.RegisteredCompanyReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_job_RegisteredCompanyReq(buffer_arg) {
  return job_Job_pb.RegisteredCompanyReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_SaveJobResponse(arg) {
  if (!(arg instanceof job_Job_pb.SaveJobResponse)) {
    throw new Error('Expected argument of type job.SaveJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_job_SaveJobResponse(buffer_arg) {
  return job_Job_pb.SaveJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// 定义员工服务
var JobService = exports.JobService = {
  findAllJobs: {
    path: '/job.Job/FindAllJobs',
    requestStream: false,
    responseStream: false,
    requestType: job_Job_pb.FindAllJobRequest,
    responseType: job_Job_pb.FindJobResponse,
    requestSerialize: serialize_job_FindAllJobRequest,
    requestDeserialize: deserialize_job_FindAllJobRequest,
    responseSerialize: serialize_job_FindJobResponse,
    responseDeserialize: deserialize_job_FindJobResponse,
  },
  findJobByName: {
    path: '/job.Job/FindJobByName',
    requestStream: false,
    responseStream: false,
    requestType: job_Job_pb.FindJobByNameRequest,
    responseType: job_Job_pb.FindJobResponse,
    requestSerialize: serialize_job_FindJobByNameRequest,
    requestDeserialize: deserialize_job_FindJobByNameRequest,
    responseSerialize: serialize_job_FindJobResponse,
    responseDeserialize: deserialize_job_FindJobResponse,
  },
  findJobById: {
    path: '/job.Job/FindJobById',
    requestStream: false,
    responseStream: false,
    requestType: job_Job_pb.FindJobByIdRequest,
    responseType: job_Job_pb.FindJobResponse,
    requestSerialize: serialize_job_FindJobByIdRequest,
    requestDeserialize: deserialize_job_FindJobByIdRequest,
    responseSerialize: serialize_job_FindJobResponse,
    responseDeserialize: deserialize_job_FindJobResponse,
  },
  findJobs: {
    path: '/job.Job/FindJobs',
    requestStream: false,
    responseStream: false,
    requestType: job_Job_pb.FindJobRequest,
    responseType: job_Job_pb.FindJobResponse,
    requestSerialize: serialize_job_FindJobRequest,
    requestDeserialize: deserialize_job_FindJobRequest,
    responseSerialize: serialize_job_FindJobResponse,
    responseDeserialize: deserialize_job_FindJobResponse,
  },
  saveJobs: {
    path: '/job.Job/SaveJobs',
    requestStream: false,
    responseStream: false,
    requestType: job_Job_pb.JobMessage,
    responseType: job_Job_pb.SaveJobResponse,
    requestSerialize: serialize_job_JobMessage,
    requestDeserialize: deserialize_job_JobMessage,
    responseSerialize: serialize_job_SaveJobResponse,
    responseDeserialize: deserialize_job_SaveJobResponse,
  },
  updateJobs: {
    path: '/job.Job/UpdateJobs',
    requestStream: false,
    responseStream: false,
    requestType: job_Job_pb.JobMessage,
    responseType: job_Job_pb.SaveJobResponse,
    requestSerialize: serialize_job_JobMessage,
    requestDeserialize: deserialize_job_JobMessage,
    responseSerialize: serialize_job_SaveJobResponse,
    responseDeserialize: deserialize_job_SaveJobResponse,
  },
  registeredCompany: {
    path: '/job.Job/RegisteredCompany',
    requestStream: false,
    responseStream: false,
    requestType: job_Job_pb.RegisteredCompanyReq,
    responseType: job_Job_pb.CommonResponse,
    requestSerialize: serialize_job_RegisteredCompanyReq,
    requestDeserialize: deserialize_job_RegisteredCompanyReq,
    responseSerialize: serialize_job_CommonResponse,
    responseDeserialize: deserialize_job_CommonResponse,
  },
  updateCompany: {
    path: '/job.Job/UpdateCompany',
    requestStream: false,
    responseStream: false,
    requestType: job_Job_pb.RegisteredCompanyReq,
    responseType: job_Job_pb.CommonResponse,
    requestSerialize: serialize_job_RegisteredCompanyReq,
    requestDeserialize: deserialize_job_RegisteredCompanyReq,
    responseSerialize: serialize_job_CommonResponse,
    responseDeserialize: deserialize_job_CommonResponse,
  },
  findCompanyByName: {
    path: '/job.Job/FindCompanyByName',
    requestStream: false,
    responseStream: false,
    requestType: job_Job_pb.FindCompanyByNameReq,
    responseType: job_Job_pb.CommonCompanyResponse,
    requestSerialize: serialize_job_FindCompanyByNameReq,
    requestDeserialize: deserialize_job_FindCompanyByNameReq,
    responseSerialize: serialize_job_CommonCompanyResponse,
    responseDeserialize: deserialize_job_CommonCompanyResponse,
  },
  findCompanyById: {
    path: '/job.Job/FindCompanyById',
    requestStream: false,
    responseStream: false,
    requestType: job_Job_pb.CommonCompanyReq,
    responseType: job_Job_pb.FindCompanyByIdResponse,
    requestSerialize: serialize_job_CommonCompanyReq,
    requestDeserialize: deserialize_job_CommonCompanyReq,
    responseSerialize: serialize_job_FindCompanyByIdResponse,
    responseDeserialize: deserialize_job_FindCompanyByIdResponse,
  },
  findAllCompanies: {
    path: '/job.Job/FindAllCompanies',
    requestStream: false,
    responseStream: false,
    requestType: job_Job_pb.FindAllCompaniesReq,
    responseType: job_Job_pb.CommonCompanyResponse,
    requestSerialize: serialize_job_FindAllCompaniesReq,
    requestDeserialize: deserialize_job_FindAllCompaniesReq,
    responseSerialize: serialize_job_CommonCompanyResponse,
    responseDeserialize: deserialize_job_CommonCompanyResponse,
  },
  boundCompany: {
    path: '/job.Job/BoundCompany',
    requestStream: false,
    responseStream: false,
    requestType: job_Job_pb.CommonCompanyReq,
    responseType: job_Job_pb.CommonResponse,
    requestSerialize: serialize_job_CommonCompanyReq,
    requestDeserialize: deserialize_job_CommonCompanyReq,
    responseSerialize: serialize_job_CommonResponse,
    responseDeserialize: deserialize_job_CommonResponse,
  },
  verifyCompany: {
    path: '/job.Job/VerifyCompany',
    requestStream: false,
    responseStream: false,
    requestType: job_Job_pb.CommonCompanyReq,
    responseType: job_Job_pb.CommonResponse,
    requestSerialize: serialize_job_CommonCompanyReq,
    requestDeserialize: deserialize_job_CommonCompanyReq,
    responseSerialize: serialize_job_CommonResponse,
    responseDeserialize: deserialize_job_CommonResponse,
  },
};

exports.JobClient = grpc.makeGenericClientConstructor(JobService);
