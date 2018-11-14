/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/entitiesOperationsMappers";
import * as Parameters from "../models/parameters";
import { EntitySearchAPIClientContext } from "../entitySearchAPIClientContext";

/** Class representing a EntitiesOperations. */
export class EntitiesOperations {
  private readonly client: EntitySearchAPIClientContext;

  /**
   * Create a EntitiesOperations.
   * @param {EntitySearchAPIClientContext} client Reference to the service client.
   */
  constructor(client: EntitySearchAPIClientContext) {
    this.client = client;
  }

  /**
   * @summary The Entity Search API lets you send a search query to Bing and get back search results
   * that include entities and places. Place results include restaurants, hotel, or other local
   * businesses. For places, the query can specify the name of the local business or it can ask for a
   * list (for example, restaurants near me). Entity results include persons, places, or things.
   * Place in this context is tourist attractions, states, countries, etc.
   * @param query The user's search term.
   * @param [options] The optional parameters
   * @returns Promise<Models.EntitiesSearchResponse>
   */
  search(query: string, options?: Models.EntitiesSearchOptionalParams): Promise<Models.EntitiesSearchResponse>;
  /**
   * @param query The user's search term.
   * @param callback The callback
   */
  search(query: string, callback: msRest.ServiceCallback<Models.SearchResponse>): void;
  /**
   * @param query The user's search term.
   * @param options The optional parameters
   * @param callback The callback
   */
  search(query: string, options: Models.EntitiesSearchOptionalParams, callback: msRest.ServiceCallback<Models.SearchResponse>): void;
  search(query: string, options?: Models.EntitiesSearchOptionalParams | msRest.ServiceCallback<Models.SearchResponse>, callback?: msRest.ServiceCallback<Models.SearchResponse>): Promise<Models.EntitiesSearchResponse> {
    return this.client.sendOperationRequest(
      {
        query,
        options
      },
      searchOperationSpec,
      callback) as Promise<Models.EntitiesSearchResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const searchOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "entities",
  urlParameters: [
    Parameters.endpoint
  ],
  queryParameters: [
    Parameters.countryCode,
    Parameters.market,
    Parameters.query,
    Parameters.responseFilter,
    Parameters.responseFormat,
    Parameters.safeSearch,
    Parameters.setLang
  ],
  headerParameters: [
    Parameters.xBingApisSDK,
    Parameters.acceptLanguage,
    Parameters.pragma,
    Parameters.userAgent,
    Parameters.clientId,
    Parameters.clientIp,
    Parameters.location
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SearchResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
