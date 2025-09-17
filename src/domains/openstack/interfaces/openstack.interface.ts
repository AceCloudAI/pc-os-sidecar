import { IncomingHttpHeaders } from 'http';
import { ApiResponseInterface, JwtPayloadInterface } from 'src/common/interfaces';

export interface openStackRequestInterface {
    user: JwtPayloadInterface;
    url: string;
    method: string;
    data: object | unknown;
    token: string;
    headers: object;
    service: string;
    resource: string;
}

export interface osRequestInterface {
    url: string;
    method: string;
    data: object;
    token: string;
    headers: object;
}

export interface openStackConnectInterface {
    username: string;
    password: string;
    keyStoneProjectId: string;
    region: string;
}

export interface openstackConfigInterface {
    baseUrl: string;
    timeout: number;
    tokenTimeoutInMinutes: number;
    service: object;
    database: object;
}

export interface deleteRequestParametersInterface {
    user: JwtPayloadInterface;
    bodykey: string;
    bodyValues: string[];
    headers: object;
    query: object;
    method: string;
    service: string;
    params: string;
    region: string;
    token: string;
    resource: string;
}

export interface OpenstackTokenRequestInterface {
    error: boolean;
    message: string;
    status: number;
    data: object | string;
}

export interface openstackResponseInterface extends ApiResponseInterface<object> { }

export interface openstackGatewayRequestInterface<B, Q> {
    user: JwtPayloadInterface;
    token: string;
    url: string;
    method: string;
    body: B;
    headers: IncomingHttpHeaders;
    query: Q;
    parameters: string;
    service: string;
    resource: string;
}

export interface defaultQueryInterface {
    region: string;
    project_id: string;
    parent_project_id?: string;
    with?: string;
}
