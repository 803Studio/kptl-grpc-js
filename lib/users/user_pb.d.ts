// package: users
// file: users/user.proto

import * as jspb from "google-protobuf";
import * as comm_headers_pb from "../comm/headers_pb";

export class LoginRequest extends jspb.Message {
  getMethod(): LoginMethodMap[keyof LoginMethodMap];
  setMethod(value: LoginMethodMap[keyof LoginMethodMap]): void;

  getPayload(): string;
  setPayload(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    method: LoginMethodMap[keyof LoginMethodMap],
    payload: string,
  }
}

export class LoginResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): comm_headers_pb.ResponseHeader | undefined;
  setHeader(value?: comm_headers_pb.ResponseHeader): void;

  getUid(): number;
  setUid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    header?: comm_headers_pb.ResponseHeader.AsObject,
    uid: number,
  }
}

export interface LoginMethodMap {
  WX: 0;
  ID: 1;
}

export const LoginMethod: LoginMethodMap;

