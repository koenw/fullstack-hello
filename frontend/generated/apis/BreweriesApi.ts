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

export interface BreweriesDeleteRequest {
    prefer?: BreweriesDeletePreferEnum;
}

export interface BreweriesGetRequest {
    select?: string;
    order?: string;
    range?: string;
    rangeUnit?: string;
    offset?: string;
    limit?: string;
    prefer?: BreweriesGetPreferEnum;
}

export interface BreweriesPatchRequest {
    prefer?: BreweriesPatchPreferEnum;
    breweries?: object;
}

export interface BreweriesPostRequest {
    select?: string;
    prefer?: BreweriesPostPreferEnum;
    breweries?: object;
}

/**
 * 
 */
export class BreweriesApi extends runtime.BaseAPI {

    /**
     */
    async breweriesDeleteRaw(requestParameters: BreweriesDeleteRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.prefer !== undefined && requestParameters.prefer !== null) {
            headerParameters['Prefer'] = String(requestParameters.prefer);
        }

        const response = await this.request({
            path: `/breweries`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async breweriesDelete(requestParameters: BreweriesDeleteRequest): Promise<void> {
        await this.breweriesDeleteRaw(requestParameters);
    }

    /**
     */
    async breweriesGetRaw(requestParameters: BreweriesGetRequest): Promise<runtime.ApiResponse<Array<object>>> {
        const queryParameters: any = {};

        if (requestParameters.select !== undefined) {
            queryParameters['select'] = requestParameters.select;
        }

        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.range !== undefined && requestParameters.range !== null) {
            headerParameters['Range'] = String(requestParameters.range);
        }

        if (requestParameters.rangeUnit !== undefined && requestParameters.rangeUnit !== null) {
            headerParameters['Range-Unit'] = String(requestParameters.rangeUnit);
        }

        if (requestParameters.prefer !== undefined && requestParameters.prefer !== null) {
            headerParameters['Prefer'] = String(requestParameters.prefer);
        }

        const response = await this.request({
            path: `/breweries`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async breweriesGet(requestParameters: BreweriesGetRequest): Promise<Array<object>> {
        const response = await this.breweriesGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async breweriesPatchRaw(requestParameters: BreweriesPatchRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.prefer !== undefined && requestParameters.prefer !== null) {
            headerParameters['Prefer'] = String(requestParameters.prefer);
        }

        const response = await this.request({
            path: `/breweries`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.breweries as any,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async breweriesPatch(requestParameters: BreweriesPatchRequest): Promise<void> {
        await this.breweriesPatchRaw(requestParameters);
    }

    /**
     */
    async breweriesPostRaw(requestParameters: BreweriesPostRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.select !== undefined) {
            queryParameters['select'] = requestParameters.select;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.prefer !== undefined && requestParameters.prefer !== null) {
            headerParameters['Prefer'] = String(requestParameters.prefer);
        }

        const response = await this.request({
            path: `/breweries`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.breweries as any,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async breweriesPost(requestParameters: BreweriesPostRequest): Promise<void> {
        await this.breweriesPostRaw(requestParameters);
    }

}

/**
    * @export
    * @enum {string}
    */
export enum BreweriesDeletePreferEnum {
    Representation = 'return=representation',
    Minimal = 'return=minimal',
    None = 'return=none'
}
/**
    * @export
    * @enum {string}
    */
export enum BreweriesGetPreferEnum {
    Countnone = 'count=none'
}
/**
    * @export
    * @enum {string}
    */
export enum BreweriesPatchPreferEnum {
    Representation = 'return=representation',
    Minimal = 'return=minimal',
    None = 'return=none'
}
/**
    * @export
    * @enum {string}
    */
export enum BreweriesPostPreferEnum {
    Representation = 'return=representation',
    Minimal = 'return=minimal',
    None = 'return=none'
}
