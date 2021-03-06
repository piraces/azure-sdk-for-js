/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/globalMappers";
import * as Parameters from "../models/parameters";
import { WebSiteManagementClientContext } from "../webSiteManagementClientContext";

/** Class representing a Global. */
export class Global {
  private readonly client: WebSiteManagementClientContext;

  /**
   * Create a Global.
   * @param {WebSiteManagementClientContext} client Reference to the service client.
   */
  constructor(client: WebSiteManagementClientContext) {
    this.client = client;
  }

  /**
   * Description for Get deleted app for a subscription.
   * @summary Get deleted app for a subscription.
   * @param deletedSiteId The numeric ID of the deleted app, e.g. 12345
   * @param [options] The optional parameters
   * @returns Promise<Models.GlobalGetDeletedWebAppResponse>
   */
  getDeletedWebApp(
    deletedSiteId: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.GlobalGetDeletedWebAppResponse>;
  /**
   * @param deletedSiteId The numeric ID of the deleted app, e.g. 12345
   * @param callback The callback
   */
  getDeletedWebApp(
    deletedSiteId: string,
    callback: msRest.ServiceCallback<Models.DeletedSite>
  ): void;
  /**
   * @param deletedSiteId The numeric ID of the deleted app, e.g. 12345
   * @param options The optional parameters
   * @param callback The callback
   */
  getDeletedWebApp(
    deletedSiteId: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.DeletedSite>
  ): void;
  getDeletedWebApp(
    deletedSiteId: string,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DeletedSite>,
    callback?: msRest.ServiceCallback<Models.DeletedSite>
  ): Promise<Models.GlobalGetDeletedWebAppResponse> {
    return this.client.sendOperationRequest(
      {
        deletedSiteId,
        options
      },
      getDeletedWebAppOperationSpec,
      callback
    ) as Promise<Models.GlobalGetDeletedWebAppResponse>;
  }

  /**
   * Description for Get all deleted apps for a subscription.
   * @summary Get all deleted apps for a subscription.
   * @param deletedSiteId The numeric ID of the deleted app, e.g. 12345
   * @param [options] The optional parameters
   * @returns Promise<Models.GlobalGetDeletedWebAppSnapshotsResponse>
   */
  getDeletedWebAppSnapshots(
    deletedSiteId: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.GlobalGetDeletedWebAppSnapshotsResponse>;
  /**
   * @param deletedSiteId The numeric ID of the deleted app, e.g. 12345
   * @param callback The callback
   */
  getDeletedWebAppSnapshots(
    deletedSiteId: string,
    callback: msRest.ServiceCallback<Models.Snapshot[]>
  ): void;
  /**
   * @param deletedSiteId The numeric ID of the deleted app, e.g. 12345
   * @param options The optional parameters
   * @param callback The callback
   */
  getDeletedWebAppSnapshots(
    deletedSiteId: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.Snapshot[]>
  ): void;
  getDeletedWebAppSnapshots(
    deletedSiteId: string,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Snapshot[]>,
    callback?: msRest.ServiceCallback<Models.Snapshot[]>
  ): Promise<Models.GlobalGetDeletedWebAppSnapshotsResponse> {
    return this.client.sendOperationRequest(
      {
        deletedSiteId,
        options
      },
      getDeletedWebAppSnapshotsOperationSpec,
      callback
    ) as Promise<Models.GlobalGetDeletedWebAppSnapshotsResponse>;
  }

  /**
   * Description for Gets an operation in a subscription and given region
   * @summary Gets an operation in a subscription and given region
   * @param location Location name
   * @param operationId Operation Id
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getSubscriptionOperationWithAsyncResponse(
    location: string,
    operationId: string,
    options?: msRest.RequestOptionsBase
  ): Promise<msRest.RestResponse>;
  /**
   * @param location Location name
   * @param operationId Operation Id
   * @param callback The callback
   */
  getSubscriptionOperationWithAsyncResponse(
    location: string,
    operationId: string,
    callback: msRest.ServiceCallback<void>
  ): void;
  /**
   * @param location Location name
   * @param operationId Operation Id
   * @param options The optional parameters
   * @param callback The callback
   */
  getSubscriptionOperationWithAsyncResponse(
    location: string,
    operationId: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<void>
  ): void;
  getSubscriptionOperationWithAsyncResponse(
    location: string,
    operationId: string,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>,
    callback?: msRest.ServiceCallback<void>
  ): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        operationId,
        options
      },
      getSubscriptionOperationWithAsyncResponseOperationSpec,
      callback
    );
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getDeletedWebAppOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Web/deletedSites/{deletedSiteId}",
  urlParameters: [Parameters.deletedSiteId, Parameters.subscriptionId],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.DeletedSite
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const getDeletedWebAppSnapshotsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path:
    "subscriptions/{subscriptionId}/providers/Microsoft.Web/deletedSites/{deletedSiteId}/snapshots",
  urlParameters: [Parameters.deletedSiteId, Parameters.subscriptionId],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Snapshot"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const getSubscriptionOperationWithAsyncResponseOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path:
    "subscriptions/{subscriptionId}/providers/Microsoft.Web/locations/{location}/operations/{operationId}",
  urlParameters: [Parameters.location, Parameters.operationId, Parameters.subscriptionId],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};
