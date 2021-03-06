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
    Beers,
    BeersFromJSON,
    BeersToJSON,
} from '../models';

export interface BeersDeleteRequest {
    serial?: number;
    abv?: string;
    ibu?: string;
    id?: number;
    name?: string;
    style?: string;
    breweryId?: number;
    ounces?: string;
    prefer?: BeersDeletePreferEnum;
}

export interface BeersGetRequest {
    serial?: number;
    abv?: string;
    ibu?: string;
    id?: number;
    name?: string;
    style?: string;
    breweryId?: number;
    ounces?: string;
    select?: string;
    order?: string;
    range?: string;
    rangeUnit?: string;
    offset?: string;
    limit?: string;
    prefer?: BeersGetPreferEnum;
}

export interface BeersPatchRequest {
    serial?: number;
    abv?: string;
    ibu?: string;
    id?: number;
    name?: string;
    style?: string;
    breweryId?: number;
    ounces?: string;
    prefer?: BeersPatchPreferEnum;
    beers?: Beers;
}

export interface BeersPostRequest {
    select?: string;
    prefer?: BeersPostPreferEnum;
    beers?: Beers;
}

/**
 * 
 */
export class BeersApi extends runtime.BaseAPI {

    /**
     */
    async beersDeleteRaw(requestParameters: BeersDeleteRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.serial !== undefined) {
            queryParameters['serial'] = requestParameters.serial;
        }

        if (requestParameters.abv !== undefined) {
            queryParameters['abv'] = requestParameters.abv;
        }

        if (requestParameters.ibu !== undefined) {
            queryParameters['ibu'] = requestParameters.ibu;
        }

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.style !== undefined) {
            queryParameters['style'] = requestParameters.style;
        }

        if (requestParameters.breweryId !== undefined) {
            queryParameters['brewery_id'] = requestParameters.breweryId;
        }

        if (requestParameters.ounces !== undefined) {
            queryParameters['ounces'] = requestParameters.ounces;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.prefer !== undefined && requestParameters.prefer !== null) {
            headerParameters['Prefer'] = String(requestParameters.prefer);
        }

        const response = await this.request({
            path: `/beers`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async beersDelete(requestParameters: BeersDeleteRequest): Promise<void> {
        await this.beersDeleteRaw(requestParameters);
    }

    /**
     */
    async beersGetRaw(requestParameters: BeersGetRequest): Promise<runtime.ApiResponse<Array<Beers>>> {
        const queryParameters: any = {};

        if (requestParameters.serial !== undefined) {
            queryParameters['serial'] = requestParameters.serial;
        }

        if (requestParameters.abv !== undefined) {
            queryParameters['abv'] = requestParameters.abv;
        }

        if (requestParameters.ibu !== undefined) {
            queryParameters['ibu'] = requestParameters.ibu;
        }

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.style !== undefined) {
            queryParameters['style'] = requestParameters.style;
        }

        if (requestParameters.breweryId !== undefined) {
            queryParameters['brewery_id'] = requestParameters.breweryId;
        }

        if (requestParameters.ounces !== undefined) {
            queryParameters['ounces'] = requestParameters.ounces;
        }

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
            path: `/beers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BeersFromJSON));
    }

    /**
     */
    async beersGet(requestParameters: BeersGetRequest): Promise<Array<Beers>> {
        const response = await this.beersGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async beersPatchRaw(requestParameters: BeersPatchRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.serial !== undefined) {
            queryParameters['serial'] = requestParameters.serial;
        }

        if (requestParameters.abv !== undefined) {
            queryParameters['abv'] = requestParameters.abv;
        }

        if (requestParameters.ibu !== undefined) {
            queryParameters['ibu'] = requestParameters.ibu;
        }

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.style !== undefined) {
            queryParameters['style'] = requestParameters.style;
        }

        if (requestParameters.breweryId !== undefined) {
            queryParameters['brewery_id'] = requestParameters.breweryId;
        }

        if (requestParameters.ounces !== undefined) {
            queryParameters['ounces'] = requestParameters.ounces;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.prefer !== undefined && requestParameters.prefer !== null) {
            headerParameters['Prefer'] = String(requestParameters.prefer);
        }

        const response = await this.request({
            path: `/beers`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: BeersToJSON(requestParameters.beers),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async beersPatch(requestParameters: BeersPatchRequest): Promise<void> {
        await this.beersPatchRaw(requestParameters);
    }

    /**
     */
    async beersPostRaw(requestParameters: BeersPostRequest): Promise<runtime.ApiResponse<void>> {
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
            path: `/beers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BeersToJSON(requestParameters.beers),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async beersPost(requestParameters: BeersPostRequest): Promise<void> {
        await this.beersPostRaw(requestParameters);
    }

}

/**
    * @export
    * @enum {string}
    */
export enum BeersDeletePreferEnum {
    Representation = 'return=representation',
    Minimal = 'return=minimal',
    None = 'return=none'
}
/**
    * @export
    * @enum {string}
    */
export enum BeersGetPreferEnum {
    Countnone = 'count=none'
}
/**
    * @export
    * @enum {string}
    */
export enum BeersPatchPreferEnum {
    Representation = 'return=representation',
    Minimal = 'return=minimal',
    None = 'return=none'
}
/**
    * @export
    * @enum {string}
    */
export enum BeersPostPreferEnum {
    Representation = 'return=representation',
    Minimal = 'return=minimal',
    None = 'return=none'
}
