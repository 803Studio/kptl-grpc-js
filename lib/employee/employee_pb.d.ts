// package: employee
// file: employee/employee.proto

import * as jspb from "google-protobuf";
import * as global_headers_pb from "../global/headers_pb";

export class OperateRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getJobid(): number;
  setJobid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OperateRequest): OperateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperateRequest;
  static deserializeBinaryFromReader(message: OperateRequest, reader: jspb.BinaryReader): OperateRequest;
}

export namespace OperateRequest {
  export type AsObject = {
    id: number,
    jobid: number,
  }
}

export class FindRecordsReq extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindRecordsReq.AsObject;
  static toObject(includeInstance: boolean, msg: FindRecordsReq): FindRecordsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindRecordsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindRecordsReq;
  static deserializeBinaryFromReader(message: FindRecordsReq, reader: jspb.BinaryReader): FindRecordsReq;
}

export namespace FindRecordsReq {
  export type AsObject = {
    id: number,
  }
}

export class SelfInformation extends jspb.Message {
  hasSimpleinfo(): boolean;
  clearSimpleinfo(): void;
  getSimpleinfo(): SimpleInformation | undefined;
  setSimpleinfo(value?: SimpleInformation): void;

  getIsmarry(): number;
  setIsmarry(value: number): void;

  getEducation(): number;
  setEducation(value: number): void;

  getJobstatus(): number;
  setJobstatus(value: number): void;

  getHome(): string;
  setHome(value: string): void;

  getExpectmoney(): number;
  setExpectmoney(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SelfInformation.AsObject;
  static toObject(includeInstance: boolean, msg: SelfInformation): SelfInformation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SelfInformation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SelfInformation;
  static deserializeBinaryFromReader(message: SelfInformation, reader: jspb.BinaryReader): SelfInformation;
}

export namespace SelfInformation {
  export type AsObject = {
    simpleinfo?: SimpleInformation.AsObject,
    ismarry: number,
    education: number,
    jobstatus: number,
    home: string,
    expectmoney: number,
  }
}

export class SimpleInformation extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getRealname(): string;
  setRealname(value: string): void;

  getSex(): number;
  setSex(value: number): void;

  getWorkyear(): number;
  setWorkyear(value: number): void;

  getExpectedlocation(): string;
  setExpectedlocation(value: string): void;

  getIndustry(): string;
  setIndustry(value: string): void;

  getJobtype(): JobTypeMap[keyof JobTypeMap];
  setJobtype(value: JobTypeMap[keyof JobTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleInformation.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleInformation): SimpleInformation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimpleInformation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleInformation;
  static deserializeBinaryFromReader(message: SimpleInformation, reader: jspb.BinaryReader): SimpleInformation;
}

export namespace SimpleInformation {
  export type AsObject = {
    id: number,
    realname: string,
    sex: number,
    workyear: number,
    expectedlocation: string,
    industry: string,
    jobtype: JobTypeMap[keyof JobTypeMap],
  }
}

export class FindEmployeeInfoReq extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindEmployeeInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: FindEmployeeInfoReq): FindEmployeeInfoReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindEmployeeInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindEmployeeInfoReq;
  static deserializeBinaryFromReader(message: FindEmployeeInfoReq, reader: jspb.BinaryReader): FindEmployeeInfoReq;
}

export namespace FindEmployeeInfoReq {
  export type AsObject = {
    id: number,
  }
}

export class SplitPage extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SplitPage.AsObject;
  static toObject(includeInstance: boolean, msg: SplitPage): SplitPage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SplitPage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SplitPage;
  static deserializeBinaryFromReader(message: SplitPage, reader: jspb.BinaryReader): SplitPage;
}

export namespace SplitPage {
  export type AsObject = {
    index: number,
    size: number,
  }
}

export class FindEmployeeSimpleResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): global_headers_pb.ResponseHeader | undefined;
  setHeader(value?: global_headers_pb.ResponseHeader): void;

  clearEmployeesList(): void;
  getEmployeesList(): Array<SimpleInformation>;
  setEmployeesList(value: Array<SimpleInformation>): void;
  addEmployees(value?: SimpleInformation, index?: number): SimpleInformation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindEmployeeSimpleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindEmployeeSimpleResponse): FindEmployeeSimpleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindEmployeeSimpleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindEmployeeSimpleResponse;
  static deserializeBinaryFromReader(message: FindEmployeeSimpleResponse, reader: jspb.BinaryReader): FindEmployeeSimpleResponse;
}

export namespace FindEmployeeSimpleResponse {
  export type AsObject = {
    header?: global_headers_pb.ResponseHeader.AsObject,
    employeesList: Array<SimpleInformation.AsObject>,
  }
}

export class FindEmployeeResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): global_headers_pb.ResponseHeader | undefined;
  setHeader(value?: global_headers_pb.ResponseHeader): void;

  hasSelfinfo(): boolean;
  clearSelfinfo(): void;
  getSelfinfo(): SelfInformation | undefined;
  setSelfinfo(value?: SelfInformation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindEmployeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindEmployeeResponse): FindEmployeeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindEmployeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindEmployeeResponse;
  static deserializeBinaryFromReader(message: FindEmployeeResponse, reader: jspb.BinaryReader): FindEmployeeResponse;
}

export namespace FindEmployeeResponse {
  export type AsObject = {
    header?: global_headers_pb.ResponseHeader.AsObject,
    selfinfo?: SelfInformation.AsObject,
  }
}

export class OperateResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): global_headers_pb.ResponseHeader | undefined;
  setHeader(value?: global_headers_pb.ResponseHeader): void;

  clearJobidsList(): void;
  getJobidsList(): Array<number>;
  setJobidsList(value: Array<number>): void;
  addJobids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OperateResponse): OperateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperateResponse;
  static deserializeBinaryFromReader(message: OperateResponse, reader: jspb.BinaryReader): OperateResponse;
}

export namespace OperateResponse {
  export type AsObject = {
    header?: global_headers_pb.ResponseHeader.AsObject,
    jobidsList: Array<number>,
  }
}

export interface JobTypeMap {
  LONG: 0;
  SHORT: 1;
  PARTTIMEJOB: 2;
}

export const JobType: JobTypeMap;

