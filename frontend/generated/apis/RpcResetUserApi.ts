/* tslint:disable */
/* eslint-disable */
/**
 * PostgREST API
 * standard public schema
 *
 * The version of the OpenAPI document: 8.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    InlineObject,
    InlineObjectFromJSON,
    InlineObjectToJSON,
} from '../models';

export interface RpcResetUserPostRequest {
    args: InlineObject;
    prefer?: RpcResetUserPostPreferEnum;
}

/**
 * 
 */
export class RpcResetUserApi extends runtime.BaseAPI {

    /**
     */
    async rpcResetUserPostRaw(requestParameters: RpcResetUserPostRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.args === null || requestParameters.args === undefined) {
            throw new runtime.RequiredError('args','Required parameter requestParameters.args was null or undefined when calling rpcResetUserPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.prefer !== undefined && requestParameters.prefer !== null) {
            headerParameters['Prefer'] = String(requestParameters.prefer);
        }

        const response = await this.request({
            path: `/rpc/reset_user`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObjectToJSON(requestParameters.args),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async rpcResetUserPost(requestParameters: RpcResetUserPostRequest): Promise<void> {
        await this.rpcResetUserPostRaw(requestParameters);
    }

}

/**
    * @export
    * @enum {string}
    */
export enum RpcResetUserPostPreferEnum {
    ParamssingleObject = 'params=single-object'
}