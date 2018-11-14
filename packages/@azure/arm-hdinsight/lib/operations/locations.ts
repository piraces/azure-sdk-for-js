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
import * as Mappers from "../models/locationsMappers";
import * as Parameters from "../models/parameters";
import { HDInsightManagementClientContext } from "../hDInsightManagementClientContext";

/** Class representing a Locations. */
export class Locations {
  private readonly client: HDInsightManagementClientContext;

  /**
   * Create a Locations.
   * @param {HDInsightManagementClientContext} client Reference to the service client.
   */
  constructor(client: HDInsightManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the usages for the specified location.
   * @param location The location to get capabilities for.
   * @param [options] The optional parameters
   * @returns Promise<Models.LocationsListUsagesResponse>
   */
  listUsages(location: string, options?: msRest.RequestOptionsBase): Promise<Models.LocationsListUsagesResponse>;
  /**
   * @param location The location to get capabilities for.
   * @param callback The callback
   */
  listUsages(location: string, callback: msRest.ServiceCallback<Models.UsagesListResult>): void;
  /**
   * @param location The location to get capabilities for.
   * @param options The optional parameters
   * @param callback The callback
   */
  listUsages(location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UsagesListResult>): void;
  listUsages(location: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.UsagesListResult>, callback?: msRest.ServiceCallback<Models.UsagesListResult>): Promise<Models.LocationsListUsagesResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        options
      },
      listUsagesOperationSpec,
      callback) as Promise<Models.LocationsListUsagesResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listUsagesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/usages",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.location
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.UsagesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
