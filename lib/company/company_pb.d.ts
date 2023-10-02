// package: company
// file: company/company.proto

import * as jspb from "google-protobuf";
import * as comm_headers_pb from "../comm/headers_pb";

export class RegisteredCompanyReq extends jspb.Message {
  hasCompany(): boolean;
  clearCompany(): void;
  getCompany(): Company | undefined;
  setCompany(value?: Company): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisteredCompanyReq.AsObject;
  static toObject(includeInstance: boolean, msg: RegisteredCompanyReq): RegisteredCompanyReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisteredCompanyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisteredCompanyReq;
  static deserializeBinaryFromReader(message: RegisteredCompanyReq, reader: jspb.BinaryReader): RegisteredCompanyReq;
}

export namespace RegisteredCompanyReq {
  export type AsObject = {
    company?: Company.AsObject,
  }
}

export class Company extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getCompanyname(): string;
  setCompanyname(value: string): void;

  getCompanylocation(): string;
  setCompanylocation(value: string): void;

  getIsvip(): number;
  setIsvip(value: number): void;

  getIscertified(): number;
  setIscertified(value: number): void;

  getRegistertime(): number;
  setRegistertime(value: number): void;

  getUpdatetime(): number;
  setUpdatetime(value: number): void;

  getIndustry(): string;
  setIndustry(value: string): void;

  getCompanyid(): number;
  setCompanyid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Company.AsObject;
  static toObject(includeInstance: boolean, msg: Company): Company.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Company, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Company;
  static deserializeBinaryFromReader(message: Company, reader: jspb.BinaryReader): Company;
}

export namespace Company {
  export type AsObject = {
    id: number,
    companyname: string,
    companylocation: string,
    isvip: number,
    iscertified: number,
    registertime: number,
    updatetime: number,
    industry: string,
    companyid: number,
  }
}

export class CommonCompanyReq extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonCompanyReq.AsObject;
  static toObject(includeInstance: boolean, msg: CommonCompanyReq): CommonCompanyReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommonCompanyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonCompanyReq;
  static deserializeBinaryFromReader(message: CommonCompanyReq, reader: jspb.BinaryReader): CommonCompanyReq;
}

export namespace CommonCompanyReq {
  export type AsObject = {
    id: number,
  }
}

export class CommonResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): comm_headers_pb.ResponseHeader | undefined;
  setHeader(value?: comm_headers_pb.ResponseHeader): void;

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
    header?: comm_headers_pb.ResponseHeader.AsObject,
  }
}

export class FindCompanyByNameReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getIndex(): number;
  setIndex(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindCompanyByNameReq.AsObject;
  static toObject(includeInstance: boolean, msg: FindCompanyByNameReq): FindCompanyByNameReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindCompanyByNameReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindCompanyByNameReq;
  static deserializeBinaryFromReader(message: FindCompanyByNameReq, reader: jspb.BinaryReader): FindCompanyByNameReq;
}

export namespace FindCompanyByNameReq {
  export type AsObject = {
    name: string,
    index: number,
    size: number,
  }
}

export class FindAllCompaniesReq extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindAllCompaniesReq.AsObject;
  static toObject(includeInstance: boolean, msg: FindAllCompaniesReq): FindAllCompaniesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindAllCompaniesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindAllCompaniesReq;
  static deserializeBinaryFromReader(message: FindAllCompaniesReq, reader: jspb.BinaryReader): FindAllCompaniesReq;
}

export namespace FindAllCompaniesReq {
  export type AsObject = {
    index: number,
    size: number,
  }
}

export class CommonCompanyResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): comm_headers_pb.ResponseHeader | undefined;
  setHeader(value?: comm_headers_pb.ResponseHeader): void;

  clearCompaniesList(): void;
  getCompaniesList(): Array<Company>;
  setCompaniesList(value: Array<Company>): void;
  addCompanies(value?: Company, index?: number): Company;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonCompanyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CommonCompanyResponse): CommonCompanyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommonCompanyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonCompanyResponse;
  static deserializeBinaryFromReader(message: CommonCompanyResponse, reader: jspb.BinaryReader): CommonCompanyResponse;
}

export namespace CommonCompanyResponse {
  export type AsObject = {
    header?: comm_headers_pb.ResponseHeader.AsObject,
    companiesList: Array<Company.AsObject>,
  }
}

export class FindCompanyByIdResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): comm_headers_pb.ResponseHeader | undefined;
  setHeader(value?: comm_headers_pb.ResponseHeader): void;

  hasCompany(): boolean;
  clearCompany(): void;
  getCompany(): Company | undefined;
  setCompany(value?: Company): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindCompanyByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindCompanyByIdResponse): FindCompanyByIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindCompanyByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindCompanyByIdResponse;
  static deserializeBinaryFromReader(message: FindCompanyByIdResponse, reader: jspb.BinaryReader): FindCompanyByIdResponse;
}

export namespace FindCompanyByIdResponse {
  export type AsObject = {
    header?: comm_headers_pb.ResponseHeader.AsObject,
    company?: Company.AsObject,
  }
}

export class FindCompanyByIndustryReq extends jspb.Message {
  getIndustry(): string;
  setIndustry(value: string): void;

  getIndex(): number;
  setIndex(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindCompanyByIndustryReq.AsObject;
  static toObject(includeInstance: boolean, msg: FindCompanyByIndustryReq): FindCompanyByIndustryReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindCompanyByIndustryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindCompanyByIndustryReq;
  static deserializeBinaryFromReader(message: FindCompanyByIndustryReq, reader: jspb.BinaryReader): FindCompanyByIndustryReq;
}

export namespace FindCompanyByIndustryReq {
  export type AsObject = {
    industry: string,
    index: number,
    size: number,
  }
}

export interface ResponseStatusMap {
  OK: 0;
  INTERNALERR: 1;
}

export const ResponseStatus: ResponseStatusMap;

