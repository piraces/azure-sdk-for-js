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
import * as Mappers from "../models/hanaInstancesMappers";
import * as Parameters from "../models/parameters";
import { HanaManagementClientContext } from "../hanaManagementClientContext";

/** Class representing a HanaInstances. */
export class HanaInstances {
  private readonly client: HanaManagementClientContext;

  /**
   * Create a HanaInstances.
   * @param {HanaManagementClientContext} client Reference to the service client.
   */
  constructor(client: HanaManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of SAP HANA instances in the specified subscription. The operations returns various
   * properties of each SAP HANA on Azure instance.
   * @summary Gets a list of SAP HANA instances in the specified subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.HanaInstancesListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.HanaInstancesListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.HanaInstancesListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HanaInstancesListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.HanaInstancesListResult>, callback?: msRest.ServiceCallback<Models.HanaInstancesListResult>): Promise<Models.HanaInstancesListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.HanaInstancesListResponse>;
  }

  /**
   * Gets a list of SAP HANA instances in the specified subscription and the resource group. The
   * operations returns various properties of each SAP HANA on Azure instance.
   * @summary Gets a list of SAP HANA instances in the specified subscription and the resource group.
   * @param resourceGroupName Name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.HanaInstancesListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.HanaInstancesListByResourceGroupResponse>;
  /**
   * @param resourceGroupName Name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.HanaInstancesListResult>): void;
  /**
   * @param resourceGroupName Name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HanaInstancesListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.HanaInstancesListResult>, callback?: msRest.ServiceCallback<Models.HanaInstancesListResult>): Promise<Models.HanaInstancesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.HanaInstancesListByResourceGroupResponse>;
  }

  /**
   * Gets properties of a SAP HANA instance for the specified subscription, resource group, and
   * instance name.
   * @summary Gets properties of a SAP HANA instance.
   * @param resourceGroupName Name of the resource group.
   * @param hanaInstanceName Name of the SAP HANA on Azure instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.HanaInstancesGetResponse>
   */
  get(resourceGroupName: string, hanaInstanceName: string, options?: msRest.RequestOptionsBase): Promise<Models.HanaInstancesGetResponse>;
  /**
   * @param resourceGroupName Name of the resource group.
   * @param hanaInstanceName Name of the SAP HANA on Azure instance.
   * @param callback The callback
   */
  get(resourceGroupName: string, hanaInstanceName: string, callback: msRest.ServiceCallback<Models.HanaInstance>): void;
  /**
   * @param resourceGroupName Name of the resource group.
   * @param hanaInstanceName Name of the SAP HANA on Azure instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, hanaInstanceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HanaInstance>): void;
  get(resourceGroupName: string, hanaInstanceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.HanaInstance>, callback?: msRest.ServiceCallback<Models.HanaInstance>): Promise<Models.HanaInstancesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hanaInstanceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.HanaInstancesGetResponse>;
  }

  /**
   * The operation to restart a SAP HANA instance.
   * @param resourceGroupName Name of the resource group.
   * @param hanaInstanceName Name of the SAP HANA on Azure instance.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  restart(resourceGroupName: string, hanaInstanceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of the resource group.
   * @param hanaInstanceName Name of the SAP HANA on Azure instance.
   * @param callback The callback
   */
  restart(resourceGroupName: string, hanaInstanceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the resource group.
   * @param hanaInstanceName Name of the SAP HANA on Azure instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  restart(resourceGroupName: string, hanaInstanceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  restart(resourceGroupName: string, hanaInstanceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hanaInstanceName,
        options
      },
      restartOperationSpec,
      callback);
  }

  /**
   * Gets a list of SAP HANA instances in the specified subscription. The operations returns various
   * properties of each SAP HANA on Azure instance.
   * @summary Gets a list of SAP HANA instances in the specified subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.HanaInstancesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.HanaInstancesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.HanaInstancesListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HanaInstancesListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.HanaInstancesListResult>, callback?: msRest.ServiceCallback<Models.HanaInstancesListResult>): Promise<Models.HanaInstancesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.HanaInstancesListNextResponse>;
  }

  /**
   * Gets a list of SAP HANA instances in the specified subscription and the resource group. The
   * operations returns various properties of each SAP HANA on Azure instance.
   * @summary Gets a list of SAP HANA instances in the specified subscription and the resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.HanaInstancesListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.HanaInstancesListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.HanaInstancesListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HanaInstancesListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.HanaInstancesListResult>, callback?: msRest.ServiceCallback<Models.HanaInstancesListResult>): Promise<Models.HanaInstancesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.HanaInstancesListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.HanaOnAzure/hanaInstances",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.HanaInstancesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/hanaInstances",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.HanaInstancesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/hanaInstances/{hanaInstanceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hanaInstanceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.HanaInstance
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const restartOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/hanaInstances/{hanaInstanceName}/restart",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hanaInstanceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.HanaInstancesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.HanaInstancesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
