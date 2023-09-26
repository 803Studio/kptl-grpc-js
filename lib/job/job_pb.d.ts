// package: job
// file: job/job.proto

import * as jspb from "google-protobuf";
import * as global_headers_pb from "../global/headers_pb";

export class FindJobRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getRole(): number;
  setRole(value: number): void;

  getByid(): number;
  setByid(value: number): void;

  getIndex(): number;
  setIndex(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindJobRequest): FindJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindJobRequest;
  static deserializeBinaryFromReader(message: FindJobRequest, reader: jspb.BinaryReader): FindJobRequest;
}

export namespace FindJobRequest {
  export type AsObject = {
    id: number,
    role: number,
    byid: number,
    index: number,
    size: number,
  }
}

export class FindJobByNameRequest extends jspb.Message {
  getJobname(): string;
  setJobname(value: string): void;

  getIndex(): number;
  setIndex(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindJobByNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindJobByNameRequest): FindJobByNameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindJobByNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindJobByNameRequest;
  static deserializeBinaryFromReader(message: FindJobByNameRequest, reader: jspb.BinaryReader): FindJobByNameRequest;
}

export namespace FindJobByNameRequest {
  export type AsObject = {
    jobname: string,
    index: number,
    size: number,
  }
}

export class FindJobByIdRequest extends jspb.Message {
  getJobid(): number;
  setJobid(value: number): void;

  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindJobByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindJobByIdRequest): FindJobByIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindJobByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindJobByIdRequest;
  static deserializeBinaryFromReader(message: FindJobByIdRequest, reader: jspb.BinaryReader): FindJobByIdRequest;
}

export namespace FindJobByIdRequest {
  export type AsObject = {
    jobid: number,
    id: number,
  }
}

export class FindJobsByIndustryReq extends jspb.Message {
  getIndustry(): string;
  setIndustry(value: string): void;

  getIndex(): number;
  setIndex(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindJobsByIndustryReq.AsObject;
  static toObject(includeInstance: boolean, msg: FindJobsByIndustryReq): FindJobsByIndustryReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindJobsByIndustryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindJobsByIndustryReq;
  static deserializeBinaryFromReader(message: FindJobsByIndustryReq, reader: jspb.BinaryReader): FindJobsByIndustryReq;
}

export namespace FindJobsByIndustryReq {
  export type AsObject = {
    industry: string,
    index: number,
    size: number,
  }
}

export class FindAllJobRequest extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindAllJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindAllJobRequest): FindAllJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindAllJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindAllJobRequest;
  static deserializeBinaryFromReader(message: FindAllJobRequest, reader: jspb.BinaryReader): FindAllJobRequest;
}

export namespace FindAllJobRequest {
  export type AsObject = {
    index: number,
    size: number,
  }
}

export class FindJobsByTypeReq extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  getJobtype(): number;
  setJobtype(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindJobsByTypeReq.AsObject;
  static toObject(includeInstance: boolean, msg: FindJobsByTypeReq): FindJobsByTypeReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindJobsByTypeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindJobsByTypeReq;
  static deserializeBinaryFromReader(message: FindJobsByTypeReq, reader: jspb.BinaryReader): FindJobsByTypeReq;
}

export namespace FindJobsByTypeReq {
  export type AsObject = {
    index: number,
    size: number,
    jobtype: number,
  }
}

export class FindJobResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): global_headers_pb.ResponseHeader | undefined;
  setHeader(value?: global_headers_pb.ResponseHeader): void;

  clearJobmsgList(): void;
  getJobmsgList(): Array<JobMessage>;
  setJobmsgList(value: Array<JobMessage>): void;
  addJobmsg(value?: JobMessage, index?: number): JobMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindJobResponse): FindJobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindJobResponse;
  static deserializeBinaryFromReader(message: FindJobResponse, reader: jspb.BinaryReader): FindJobResponse;
}

export namespace FindJobResponse {
  export type AsObject = {
    header?: global_headers_pb.ResponseHeader.AsObject,
    jobmsgList: Array<JobMessage.AsObject>,
  }
}

export class FindSimplifyJobResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): global_headers_pb.ResponseHeader | undefined;
  setHeader(value?: global_headers_pb.ResponseHeader): void;

  clearJobmsgList(): void;
  getJobmsgList(): Array<JobSimplifyMessage>;
  setJobmsgList(value: Array<JobSimplifyMessage>): void;
  addJobmsg(value?: JobSimplifyMessage, index?: number): JobSimplifyMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindSimplifyJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindSimplifyJobResponse): FindSimplifyJobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindSimplifyJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindSimplifyJobResponse;
  static deserializeBinaryFromReader(message: FindSimplifyJobResponse, reader: jspb.BinaryReader): FindSimplifyJobResponse;
}

export namespace FindSimplifyJobResponse {
  export type AsObject = {
    header?: global_headers_pb.ResponseHeader.AsObject,
    jobmsgList: Array<JobSimplifyMessage.AsObject>,
  }
}

export class SaveJobResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): global_headers_pb.ResponseHeader | undefined;
  setHeader(value?: global_headers_pb.ResponseHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SaveJobResponse): SaveJobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveJobResponse;
  static deserializeBinaryFromReader(message: SaveJobResponse, reader: jspb.BinaryReader): SaveJobResponse;
}

export namespace SaveJobResponse {
  export type AsObject = {
    header?: global_headers_pb.ResponseHeader.AsObject,
  }
}

export class CommonResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): global_headers_pb.ResponseHeader | undefined;
  setHeader(value?: global_headers_pb.ResponseHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CommonResponse): CommonResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommonResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonResponse;
  static deserializeBinaryFromReader(message: CommonResponse, reader: jspb.BinaryReader): CommonResponse;
}

export namespace CommonResponse {
  export type AsObject = {
    header?: global_headers_pb.ResponseHeader.AsObject,
  }
}

export class JobMoney extends jspb.Message {
  getType(): JobMoneyTypeMap[keyof JobMoneyTypeMap];
  setType(value: JobMoneyTypeMap[keyof JobMoneyTypeMap]): void;

  getLow(): number;
  setLow(value: number): void;

  getHigh(): number;
  setHigh(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobMoney.AsObject;
  static toObject(includeInstance: boolean, msg: JobMoney): JobMoney.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobMoney, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobMoney;
  static deserializeBinaryFromReader(message: JobMoney, reader: jspb.BinaryReader): JobMoney;
}

export namespace JobMoney {
  export type AsObject = {
    type: JobMoneyTypeMap[keyof JobMoneyTypeMap],
    low: number,
    high: number,
  }
}

export class JobMessage extends jspb.Message {
  hasJobbasemsg(): boolean;
  clearJobbasemsg(): void;
  getJobbasemsg(): JobSimplifyMessage | undefined;
  setJobbasemsg(value?: JobSimplifyMessage): void;

  getJobreq(): string;
  setJobreq(value: string): void;

  getJobneed(): number;
  setJobneed(value: number): void;

  getIndustry(): string;
  setIndustry(value: string): void;

  getRecruitername(): string;
  setRecruitername(value: string): void;

  getRecruiterphone(): string;
  setRecruiterphone(value: string): void;

  getRecruiterid(): number;
  setRecruiterid(value: number): void;

  getUpdatetime(): number;
  setUpdatetime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobMessage.AsObject;
  static toObject(includeInstance: boolean, msg: JobMessage): JobMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobMessage;
  static deserializeBinaryFromReader(message: JobMessage, reader: jspb.BinaryReader): JobMessage;
}

export namespace JobMessage {
  export type AsObject = {
    jobbasemsg?: JobSimplifyMessage.AsObject,
    jobreq: string,
    jobneed: number,
    industry: string,
    recruitername: string,
    recruiterphone: string,
    recruiterid: number,
    updatetime: number,
  }
}

export class JobSimplifyMessage extends jspb.Message {
  getJobid(): number;
  setJobid(value: number): void;

  getJobname(): string;
  setJobname(value: string): void;

  getJoblocation(): string;
  setJoblocation(value: string): void;

  getCompanyname(): string;
  setCompanyname(value: string): void;

  getJobtags(): string;
  setJobtags(value: string): void;

  getCompanyid(): number;
  setCompanyid(value: number): void;

  getOpentime(): number;
  setOpentime(value: number): void;

  hasJobmoney(): boolean;
  clearJobmoney(): void;
  getJobmoney(): JobMoney | undefined;
  setJobmoney(value?: JobMoney): void;

  getJobtype(): JobTypeMap[keyof JobTypeMap];
  setJobtype(value: JobTypeMap[keyof JobTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobSimplifyMessage.AsObject;
  static toObject(includeInstance: boolean, msg: JobSimplifyMessage): JobSimplifyMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobSimplifyMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobSimplifyMessage;
  static deserializeBinaryFromReader(message: JobSimplifyMessage, reader: jspb.BinaryReader): JobSimplifyMessage;
}

export namespace JobSimplifyMessage {
  export type AsObject = {
    jobid: number,
    jobname: string,
    joblocation: string,
    companyname: string,
    jobtags: string,
    companyid: number,
    opentime: number,
    jobmoney?: JobMoney.AsObject,
    jobtype: JobTypeMap[keyof JobTypeMap],
  }
}

export interface JobMoneyTypeMap {
  F2F: 0;
  DAY: 1;
  MON: 2;
  TIME: 3;
  HOUR: 4;
}

export const JobMoneyType: JobMoneyTypeMap;

export interface JobTypeMap {
  LONG: 0;
  SHORT: 1;
  PARTTIMEJOB: 2;
}

export const JobType: JobTypeMap;

