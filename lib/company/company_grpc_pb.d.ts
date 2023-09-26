// GENERATED CODE -- DO NOT EDIT!

// package: company
// file: company/company.proto

import * as company_company_pb from "../company/company_pb";
import * as grpc from "@grpc/grpc-js";

interface ICompanyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  registeredCompany: grpc.MethodDefinition<company_company_pb.Company, company_company_pb.CommonResponse>;
  updateCompany: grpc.MethodDefinition<company_company_pb.RegisteredCompanyReq, company_company_pb.CommonResponse>;
  findCompanyByName: grpc.MethodDefinition<company_company_pb.FindCompanyByNameReq, company_company_pb.CommonCompanyResponse>;
  findCompanyById: grpc.MethodDefinition<company_company_pb.CommonCompanyReq, company_company_pb.FindCompanyByIdResponse>;
  findAllCompanies: grpc.MethodDefinition<company_company_pb.FindAllCompaniesReq, company_company_pb.CommonCompanyResponse>;
  boundCompany: grpc.MethodDefinition<company_company_pb.CommonCompanyReq, company_company_pb.CommonResponse>;
  verifyCompany: grpc.MethodDefinition<company_company_pb.CommonCompanyReq, company_company_pb.CommonResponse>;
  findCompanyByIndustry: grpc.MethodDefinition<company_company_pb.FindCompanyByIndustryReq, company_company_pb.CommonCompanyResponse>;
}

export const CompanyServiceService: ICompanyServiceService;

export interface ICompanyServiceServer extends grpc.UntypedServiceImplementation {
  registeredCompany: grpc.handleUnaryCall<company_company_pb.Company, company_company_pb.CommonResponse>;
  updateCompany: grpc.handleUnaryCall<company_company_pb.RegisteredCompanyReq, company_company_pb.CommonResponse>;
  findCompanyByName: grpc.handleUnaryCall<company_company_pb.FindCompanyByNameReq, company_company_pb.CommonCompanyResponse>;
  findCompanyById: grpc.handleUnaryCall<company_company_pb.CommonCompanyReq, company_company_pb.FindCompanyByIdResponse>;
  findAllCompanies: grpc.handleUnaryCall<company_company_pb.FindAllCompaniesReq, company_company_pb.CommonCompanyResponse>;
  boundCompany: grpc.handleUnaryCall<company_company_pb.CommonCompanyReq, company_company_pb.CommonResponse>;
  verifyCompany: grpc.handleUnaryCall<company_company_pb.CommonCompanyReq, company_company_pb.CommonResponse>;
  findCompanyByIndustry: grpc.handleUnaryCall<company_company_pb.FindCompanyByIndustryReq, company_company_pb.CommonCompanyResponse>;
}

export class CompanyServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  registeredCompany(argument: company_company_pb.Company, callback: grpc.requestCallback<company_company_pb.CommonResponse>): grpc.ClientUnaryCall;
  registeredCompany(argument: company_company_pb.Company, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<company_company_pb.CommonResponse>): grpc.ClientUnaryCall;
  registeredCompany(argument: company_company_pb.Company, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<company_company_pb.CommonResponse>): grpc.ClientUnaryCall;
  updateCompany(argument: company_company_pb.RegisteredCompanyReq, callback: grpc.requestCallback<company_company_pb.CommonResponse>): grpc.ClientUnaryCall;
  updateCompany(argument: company_company_pb.RegisteredCompanyReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<company_company_pb.CommonResponse>): grpc.ClientUnaryCall;
  updateCompany(argument: company_company_pb.RegisteredCompanyReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<company_company_pb.CommonResponse>): grpc.ClientUnaryCall;
  findCompanyByName(argument: company_company_pb.FindCompanyByNameReq, callback: grpc.requestCallback<company_company_pb.CommonCompanyResponse>): grpc.ClientUnaryCall;
  findCompanyByName(argument: company_company_pb.FindCompanyByNameReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<company_company_pb.CommonCompanyResponse>): grpc.ClientUnaryCall;
  findCompanyByName(argument: company_company_pb.FindCompanyByNameReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<company_company_pb.CommonCompanyResponse>): grpc.ClientUnaryCall;
  findCompanyById(argument: company_company_pb.CommonCompanyReq, callback: grpc.requestCallback<company_company_pb.FindCompanyByIdResponse>): grpc.ClientUnaryCall;
  findCompanyById(argument: company_company_pb.CommonCompanyReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<company_company_pb.FindCompanyByIdResponse>): grpc.ClientUnaryCall;
  findCompanyById(argument: company_company_pb.CommonCompanyReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<company_company_pb.FindCompanyByIdResponse>): grpc.ClientUnaryCall;
  findAllCompanies(argument: company_company_pb.FindAllCompaniesReq, callback: grpc.requestCallback<company_company_pb.CommonCompanyResponse>): grpc.ClientUnaryCall;
  findAllCompanies(argument: company_company_pb.FindAllCompaniesReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<company_company_pb.CommonCompanyResponse>): grpc.ClientUnaryCall;
  findAllCompanies(argument: company_company_pb.FindAllCompaniesReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<company_company_pb.CommonCompanyResponse>): grpc.ClientUnaryCall;
  boundCompany(argument: company_company_pb.CommonCompanyReq, callback: grpc.requestCallback<company_company_pb.CommonResponse>): grpc.ClientUnaryCall;
  boundCompany(argument: company_company_pb.CommonCompanyReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<company_company_pb.CommonResponse>): grpc.ClientUnaryCall;
  boundCompany(argument: company_company_pb.CommonCompanyReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<company_company_pb.CommonResponse>): grpc.ClientUnaryCall;
  verifyCompany(argument: company_company_pb.CommonCompanyReq, callback: grpc.requestCallback<company_company_pb.CommonResponse>): grpc.ClientUnaryCall;
  verifyCompany(argument: company_company_pb.CommonCompanyReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<company_company_pb.CommonResponse>): grpc.ClientUnaryCall;
  verifyCompany(argument: company_company_pb.CommonCompanyReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<company_company_pb.CommonResponse>): grpc.ClientUnaryCall;
  findCompanyByIndustry(argument: company_company_pb.FindCompanyByIndustryReq, callback: grpc.requestCallback<company_company_pb.CommonCompanyResponse>): grpc.ClientUnaryCall;
  findCompanyByIndustry(argument: company_company_pb.FindCompanyByIndustryReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<company_company_pb.CommonCompanyResponse>): grpc.ClientUnaryCall;
  findCompanyByIndustry(argument: company_company_pb.FindCompanyByIndustryReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<company_company_pb.CommonCompanyResponse>): grpc.ClientUnaryCall;
}
