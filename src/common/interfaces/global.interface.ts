import { AxiosRequestConfig, AxiosResponseHeaders } from 'axios';
import { FastifyRequest } from 'fastify';

export interface ApiResponseInterface<T> {
    error: boolean;
    message: string;
    status: number;
    data: T;
    headers?: AxiosResponseHeaders;
}

export interface JwtPayloadInterface {
    id: number;
    email: string;
    whmcsCookie?: string[];
    jti: string;
    type?: string;
    clientId: number;
    currency: { code: string; id: number };
    country: string;
    rate: number;
}

export interface ErrorMetaDataInterface {
    [key: string]: unknown;
}

export interface ErrorLogInterface {
    request: FastifyRequest;
    functionName?: string;
    error: any;
    config?: AxiosRequestConfig;
}

export interface FlavorSesssionInterface {
    name: string;
    id: string;
    price: string;
    cpuCount: number;
    ram: number;
}

export interface FlavorInterface {
    CPU: FlavorSesssionInterface;
    GPU: FlavorSesssionInterface;
}