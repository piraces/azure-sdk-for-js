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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/virtualNetworkRulesMappers";
import * as Parameters from "../models/parameters";
import { PostgreSQLManagementClientContext } from "../postgreSQLManagementClientContext";

/** Class representing a VirtualNetworkRules. */
export class VirtualNetworkRules {
  private readonly client: PostgreSQLManagementClientContext;

  /**
   * Create a VirtualNetworkRules.
   * @param {PostgreSQLManagementClientContext} client Reference to the service client.
   */
  constructor(client: PostgreSQLManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a virtual network rule.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param virtualNetworkRuleName The name of the virtual network rule.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworkRulesGetResponse>
   */
  get(resourceGroupName: string, serverName: string, virtualNetworkRuleName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkRulesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param virtualNetworkRuleName The name of the virtual network rule.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, virtualNetworkRuleName: string, callback: msRest.ServiceCallback<Models.VirtualNetworkRule>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param virtualNetworkRuleName The name of the virtual network rule.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, virtualNetworkRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkRule>): void;
  get(resourceGroupName: string, serverName: string, virtualNetworkRuleName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualNetworkRule>, callback?: msRest.ServiceCallback<Models.VirtualNetworkRule>): Promise<Models.VirtualNetworkRulesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        virtualNetworkRuleName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.VirtualNetworkRulesGetResponse>;
  }

  /**
   * Creates or updates an existing virtual network rule.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param virtualNetworkRuleName The name of the virtual network rule.
   * @param parameters The requested virtual Network Rule Resource state.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworkRulesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serverName: string, virtualNetworkRuleName: string, parameters: Models.VirtualNetworkRule, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkRulesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,serverName,virtualNetworkRuleName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualNetworkRulesCreateOrUpdateResponse>;
  }

  /**
   * Deletes the virtual network rule with the given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param virtualNetworkRuleName The name of the virtual network rule.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serverName: string, virtualNetworkRuleName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,serverName,virtualNetworkRuleName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets a list of virtual network rules in a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworkRulesListByServerResponse>
   */
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkRulesListByServerResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.VirtualNetworkRuleListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkRuleListResult>): void;
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualNetworkRuleListResult>, callback?: msRest.ServiceCallback<Models.VirtualNetworkRuleListResult>): Promise<Models.VirtualNetworkRulesListByServerResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      listByServerOperationSpec,
      callback) as Promise<Models.VirtualNetworkRulesListByServerResponse>;
  }

  /**
   * Creates or updates an existing virtual network rule.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param virtualNetworkRuleName The name of the virtual network rule.
   * @param parameters The requested virtual Network Rule Resource state.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, serverName: string, virtualNetworkRuleName: string, parameters: Models.VirtualNetworkRule, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        virtualNetworkRuleName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the virtual network rule with the given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param virtualNetworkRuleName The name of the virtual network rule.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, serverName: string, virtualNetworkRuleName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        virtualNetworkRuleName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Gets a list of virtual network rules in a server.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworkRulesListByServerNextResponse>
   */
  listByServerNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkRulesListByServerNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServerNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualNetworkRuleListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServerNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkRuleListResult>): void;
  listByServerNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualNetworkRuleListResult>, callback?: msRest.ServiceCallback<Models.VirtualNetworkRuleListResult>): Promise<Models.VirtualNetworkRulesListByServerNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServerNextOperationSpec,
      callback) as Promise<Models.VirtualNetworkRulesListByServerNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/virtualNetworkRules/{virtualNetworkRuleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.subscriptionId,
    Parameters.virtualNetworkRuleName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByServerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/virtualNetworkRules",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
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
      bodyMapper: Mappers.VirtualNetworkRuleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/virtualNetworkRules/{virtualNetworkRuleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.subscriptionId,
    Parameters.virtualNetworkRuleName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.VirtualNetworkRule,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkRule
    },
    201: {
      bodyMapper: Mappers.VirtualNetworkRule
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/virtualNetworkRules/{virtualNetworkRuleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.virtualNetworkRuleName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByServerNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.VirtualNetworkRuleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
