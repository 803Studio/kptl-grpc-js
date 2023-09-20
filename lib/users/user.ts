/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.24.2
 * source: users/user.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../global/headers";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace users {
    export enum LoginMethod {
        WX = 0,
        ID = 1
    }
    export class LoginRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            method?: LoginMethod;
            payload?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("method" in data && data.method != undefined) {
                    this.method = data.method;
                }
                if ("payload" in data && data.payload != undefined) {
                    this.payload = data.payload;
                }
            }
        }
        get method() {
            return pb_1.Message.getFieldWithDefault(this, 1, LoginMethod.WX) as LoginMethod;
        }
        set method(value: LoginMethod) {
            pb_1.Message.setField(this, 1, value);
        }
        get payload() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set payload(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            method?: LoginMethod;
            payload?: string;
        }): LoginRequest {
            const message = new LoginRequest({});
            if (data.method != null) {
                message.method = data.method;
            }
            if (data.payload != null) {
                message.payload = data.payload;
            }
            return message;
        }
        toObject() {
            const data: {
                method?: LoginMethod;
                payload?: string;
            } = {};
            if (this.method != null) {
                data.method = this.method;
            }
            if (this.payload != null) {
                data.payload = this.payload;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.method != LoginMethod.WX)
                writer.writeEnum(1, this.method);
            if (this.payload.length)
                writer.writeString(2, this.payload);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): LoginRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LoginRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.method = reader.readEnum();
                        break;
                    case 2:
                        message.payload = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): LoginRequest {
            return LoginRequest.deserialize(bytes);
        }
    }
    export class LoginResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            header?: dependency_1.global.ResponseHeader;
            uid?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("header" in data && data.header != undefined) {
                    this.header = data.header;
                }
                if ("uid" in data && data.uid != undefined) {
                    this.uid = data.uid;
                }
            }
        }
        get header() {
            return pb_1.Message.getWrapperField(this, dependency_1.global.ResponseHeader, 1) as dependency_1.global.ResponseHeader;
        }
        set header(value: dependency_1.global.ResponseHeader) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_header() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get uid() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set uid(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            header?: ReturnType<typeof dependency_1.global.ResponseHeader.prototype.toObject>;
            uid?: number;
        }): LoginResponse {
            const message = new LoginResponse({});
            if (data.header != null) {
                message.header = dependency_1.global.ResponseHeader.fromObject(data.header);
            }
            if (data.uid != null) {
                message.uid = data.uid;
            }
            return message;
        }
        toObject() {
            const data: {
                header?: ReturnType<typeof dependency_1.global.ResponseHeader.prototype.toObject>;
                uid?: number;
            } = {};
            if (this.header != null) {
                data.header = this.header.toObject();
            }
            if (this.uid != null) {
                data.uid = this.uid;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_header)
                writer.writeMessage(1, this.header, () => this.header.serialize(writer));
            if (this.uid != 0)
                writer.writeUint32(2, this.uid);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): LoginResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LoginResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.header, () => message.header = dependency_1.global.ResponseHeader.deserialize(reader));
                        break;
                    case 2:
                        message.uid = reader.readUint32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): LoginResponse {
            return LoginResponse.deserialize(bytes);
        }
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    interface GrpcStreamServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
        (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    }
    interface GrpWritableServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    }
    interface GrpcChunkServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
        (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    }
    interface GrpcPromiseServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
        (message: P, options?: grpc_1.CallOptions): Promise<R>;
    }
    export abstract class UnimplementedAuthService {
        static definition = {
            Login: {
                path: "/users.Auth/Login",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: LoginRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => LoginRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: LoginResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => LoginResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Login(call: grpc_1.ServerUnaryCall<LoginRequest, LoginResponse>, callback: grpc_1.sendUnaryData<LoginResponse>): void;
    }
    export class AuthClient extends grpc_1.makeGenericClientConstructor(UnimplementedAuthService.definition, "Auth", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        Login: GrpcUnaryServiceInterface<LoginRequest, LoginResponse> = (message: LoginRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<LoginResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<LoginResponse>, callback?: grpc_1.requestCallback<LoginResponse>): grpc_1.ClientUnaryCall => {
            return super.Login(message, metadata, options, callback);
        };
    }
}
