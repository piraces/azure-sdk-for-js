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
import * as Mappers from "../models/operationalizationClustersMappers";
import * as Parameters from "../models/parameters";
import { MachineLearningComputeManagementClientContext } from "../machineLearningComputeManagementClientContext";

/** Class representing a OperationalizationClusters. */
export class OperationalizationClusters {
  private readonly client: MachineLearningComputeManagementClientContext;

  /**
   * Create a OperationalizationClusters.
   * @param {MachineLearningComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: MachineLearningComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Create or update an operationalization cluster.
   * @param resourceGroupName Name of the resource group in which the cluster is located.
   * @param clusterName The name of the cluster.
   * @param parameters Parameters supplied to create or update an Operationalization cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationalizationClustersCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, clusterName: string, parameters: Models.OperationalizationCluster, options?: msRest.RequestOptionsBase): Promise<Models.OperationalizationClustersCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,clusterName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.OperationalizationClustersCreateOrUpdateResponse>;
  }

  /**
   * Gets the operationalization cluster resource view. Note that the credentials are not returned by
   * this call. Call ListKeys to get them.
   * @param resourceGroupName Name of the resource group in which the cluster is located.
   * @param clusterName The name of the cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationalizationClustersGetResponse>
   */
  get(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<Models.OperationalizationClustersGetResponse>;
  /**
   * @param resourceGroupName Name of the resource group in which the cluster is located.
   * @param clusterName The name of the cluster.
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterName: string, callback: msRest.ServiceCallback<Models.OperationalizationCluster>): void;
  /**
   * @param resourceGroupName Name of the resource group in which the cluster is located.
   * @param clusterName The name of the cluster.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationalizationCluster>): void;
  get(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationalizationCluster>, callback?: msRest.ServiceCallback<Models.OperationalizationCluster>): Promise<Models.OperationalizationClustersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.OperationalizationClustersGetResponse>;
  }

  /**
   * The PATCH operation can be used to update only the tags for a cluster. Use PUT operation to
   * update other properties.
   * @param resourceGroupName Name of the resource group in which the cluster is located.
   * @param clusterName The name of the cluster.
   * @param parameters The parameters supplied to patch the cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationalizationClustersUpdateResponse>
   */
  update(resourceGroupName: string, clusterName: string, parameters: Models.OperationalizationClusterUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.OperationalizationClustersUpdateResponse>;
  /**
   * @param resourceGroupName Name of the resource group in which the cluster is located.
   * @param clusterName The name of the cluster.
   * @param parameters The parameters supplied to patch the cluster.
   * @param callback The callback
   */
  update(resourceGroupName: string, clusterName: string, parameters: Models.OperationalizationClusterUpdateParameters, callback: msRest.ServiceCallback<Models.OperationalizationCluster>): void;
  /**
   * @param resourceGroupName Name of the resource group in which the cluster is located.
   * @param clusterName The name of the cluster.
   * @param parameters The parameters supplied to patch the cluster.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, clusterName: string, parameters: Models.OperationalizationClusterUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationalizationCluster>): void;
  update(resourceGroupName: string, clusterName: string, parameters: Models.OperationalizationClusterUpdateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationalizationCluster>, callback?: msRest.ServiceCallback<Models.OperationalizationCluster>): Promise<Models.OperationalizationClustersUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.OperationalizationClustersUpdateResponse>;
  }

  /**
   * Deletes the specified cluster.
   * @param resourceGroupName Name of the resource group in which the cluster is located.
   * @param clusterName The name of the cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationalizationClustersDeleteResponse>
   */
  deleteMethod(resourceGroupName: string, clusterName: string, options?: Models.OperationalizationClustersDeleteMethodOptionalParams): Promise<Models.OperationalizationClustersDeleteResponse> {
    return this.beginDeleteMethod(resourceGroupName,clusterName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.OperationalizationClustersDeleteResponse>;
  }

  /**
   * Gets the credentials for the specified cluster such as Storage, ACR and ACS credentials. This is
   * a long running operation because it fetches keys from dependencies.
   * @param resourceGroupName Name of the resource group in which the cluster is located.
   * @param clusterName The name of the cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationalizationClustersListKeysResponse>
   */
  listKeys(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<Models.OperationalizationClustersListKeysResponse>;
  /**
   * @param resourceGroupName Name of the resource group in which the cluster is located.
   * @param clusterName The name of the cluster.
   * @param callback The callback
   */
  listKeys(resourceGroupName: string, clusterName: string, callback: msRest.ServiceCallback<Models.OperationalizationClusterCredentials>): void;
  /**
   * @param resourceGroupName Name of the resource group in which the cluster is located.
   * @param clusterName The name of the cluster.
   * @param options The optional parameters
   * @param callback The callback
   */
  listKeys(resourceGroupName: string, clusterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationalizationClusterCredentials>): void;
  listKeys(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationalizationClusterCredentials>, callback?: msRest.ServiceCallback<Models.OperationalizationClusterCredentials>): Promise<Models.OperationalizationClustersListKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      listKeysOperationSpec,
      callback) as Promise<Models.OperationalizationClustersListKeysResponse>;
  }

  /**
   * Checks if updates are available for system services in the cluster.
   * @param resourceGroupName Name of the resource group in which the cluster is located.
   * @param clusterName The name of the cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationalizationClustersCheckSystemServicesUpdatesAvailableResponse>
   */
  checkSystemServicesUpdatesAvailable(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<Models.OperationalizationClustersCheckSystemServicesUpdatesAvailableResponse>;
  /**
   * @param resourceGroupName Name of the resource group in which the cluster is located.
   * @param clusterName The name of the cluster.
   * @param callback The callback
   */
  checkSystemServicesUpdatesAvailable(resourceGroupName: string, clusterName: string, callback: msRest.ServiceCallback<Models.CheckSystemServicesUpdatesAvailableResponse>): void;
  /**
   * @param resourceGroupName Name of the resource group in which the cluster is located.
   * @param clusterName The name of the cluster.
   * @param options The optional parameters
   * @param callback The callback
   */
  checkSystemServicesUpdatesAvailable(resourceGroupName: string, clusterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CheckSystemServicesUpdatesAvailableResponse>): void;
  checkSystemServicesUpdatesAvailable(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CheckSystemServicesUpdatesAvailableResponse>, callback?: msRest.ServiceCallback<Models.CheckSystemServicesUpdatesAvailableResponse>): Promise<Models.OperationalizationClustersCheckSystemServicesUpdatesAvailableResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      checkSystemServicesUpdatesAvailableOperationSpec,
      callback) as Promise<Models.OperationalizationClustersCheckSystemServicesUpdatesAvailableResponse>;
  }

  /**
   * Updates system services in a cluster.
   * @param resourceGroupName Name of the resource group in which the cluster is located.
   * @param clusterName The name of the cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationalizationClustersUpdateSystemServicesResponse>
   */
  updateSystemServices(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<Models.OperationalizationClustersUpdateSystemServicesResponse> {
    return this.beginUpdateSystemServices(resourceGroupName,clusterName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.OperationalizationClustersUpdateSystemServicesResponse>;
  }

  /**
   * Gets the clusters in the specified resource group.
   * @param resourceGroupName Name of the resource group in which the cluster is located.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationalizationClustersListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: Models.OperationalizationClustersListByResourceGroupOptionalParams): Promise<Models.OperationalizationClustersListByResourceGroupResponse>;
  /**
   * @param resourceGroupName Name of the resource group in which the cluster is located.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.PaginatedOperationalizationClustersList>): void;
  /**
   * @param resourceGroupName Name of the resource group in which the cluster is located.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: Models.OperationalizationClustersListByResourceGroupOptionalParams, callback: msRest.ServiceCallback<Models.PaginatedOperationalizationClustersList>): void;
  listByResourceGroup(resourceGroupName: string, options?: Models.OperationalizationClustersListByResourceGroupOptionalParams | msRest.ServiceCallback<Models.PaginatedOperationalizationClustersList>, callback?: msRest.ServiceCallback<Models.PaginatedOperationalizationClustersList>): Promise<Models.OperationalizationClustersListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.OperationalizationClustersListByResourceGroupResponse>;
  }

  /**
   * Gets the operationalization clusters in the specified subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationalizationClustersListBySubscriptionIdResponse>
   */
  listBySubscriptionId(options?: Models.OperationalizationClustersListBySubscriptionIdOptionalParams): Promise<Models.OperationalizationClustersListBySubscriptionIdResponse>;
  /**
   * @param callback The callback
   */
  listBySubscriptionId(callback: msRest.ServiceCallback<Models.PaginatedOperationalizationClustersList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionId(options: Models.OperationalizationClustersListBySubscriptionIdOptionalParams, callback: msRest.ServiceCallback<Models.PaginatedOperationalizationClustersList>): void;
  listBySubscriptionId(options?: Models.OperationalizationClustersListBySubscriptionIdOptionalParams | msRest.ServiceCallback<Models.PaginatedOperationalizationClustersList>, callback?: msRest.ServiceCallback<Models.PaginatedOperationalizationClustersList>): Promise<Models.OperationalizationClustersListBySubscriptionIdResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionIdOperationSpec,
      callback) as Promise<Models.OperationalizationClustersListBySubscriptionIdResponse>;
  }

  /**
   * Create or update an operationalization cluster.
   * @param resourceGroupName Name of the resource group in which the cluster is located.
   * @param clusterName The name of the cluster.
   * @param parameters Parameters supplied to create or update an Operationalization cluster.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, clusterName: string, parameters: Models.OperationalizationCluster, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the specified cluster.
   * @param resourceGroupName Name of the resource group in which the cluster is located.
   * @param clusterName The name of the cluster.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, clusterName: string, options?: Models.OperationalizationClustersBeginDeleteMethodOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Updates system services in a cluster.
   * @param resourceGroupName Name of the resource group in which the cluster is located.
   * @param clusterName The name of the cluster.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdateSystemServices(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      beginUpdateSystemServicesOperationSpec,
      options);
  }

  /**
   * Gets the clusters in the specified resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationalizationClustersListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.OperationalizationClustersListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PaginatedOperationalizationClustersList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PaginatedOperationalizationClustersList>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PaginatedOperationalizationClustersList>, callback?: msRest.ServiceCallback<Models.PaginatedOperationalizationClustersList>): Promise<Models.OperationalizationClustersListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.OperationalizationClustersListByResourceGroupNextResponse>;
  }

  /**
   * Gets the operationalization clusters in the specified subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationalizationClustersListBySubscriptionIdNextResponse>
   */
  listBySubscriptionIdNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.OperationalizationClustersListBySubscriptionIdNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySubscriptionIdNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PaginatedOperationalizationClustersList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionIdNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PaginatedOperationalizationClustersList>): void;
  listBySubscriptionIdNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PaginatedOperationalizationClustersList>, callback?: msRest.ServiceCallback<Models.PaginatedOperationalizationClustersList>): Promise<Models.OperationalizationClustersListBySubscriptionIdNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionIdNextOperationSpec,
      callback) as Promise<Models.OperationalizationClustersListBySubscriptionIdNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningCompute/operationalizationClusters/{clusterName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationalizationCluster
    },
    default: {
      bodyMapper: Mappers.ErrorResponseWrapper
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningCompute/operationalizationClusters/{clusterName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
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
      ...Mappers.OperationalizationClusterUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.OperationalizationCluster
    },
    default: {
      bodyMapper: Mappers.ErrorResponseWrapper
    }
  },
  serializer
};

const listKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningCompute/operationalizationClusters/{clusterName}/listKeys",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationalizationClusterCredentials
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const checkSystemServicesUpdatesAvailableOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningCompute/operationalizationClusters/{clusterName}/checkSystemServicesUpdatesAvailable",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CheckSystemServicesUpdatesAvailableResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningCompute/operationalizationClusters",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skiptoken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PaginatedOperationalizationClustersList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.MachineLearningCompute/operationalizationClusters",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skiptoken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PaginatedOperationalizationClustersList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningCompute/operationalizationClusters/{clusterName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
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
      ...Mappers.OperationalizationCluster,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.OperationalizationCluster
    },
    201: {
      bodyMapper: Mappers.OperationalizationCluster
    },
    default: {
      bodyMapper: Mappers.ErrorResponseWrapper
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningCompute/operationalizationClusters/{clusterName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.deleteAll
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {
      headersMapper: Mappers.OperationalizationClustersDeleteHeaders
    },
    204: {
      headersMapper: Mappers.OperationalizationClustersDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponseWrapper
    }
  },
  serializer
};

const beginUpdateSystemServicesOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningCompute/operationalizationClusters/{clusterName}/updateSystemServices",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.UpdateSystemServicesResponse,
      headersMapper: Mappers.OperationalizationClustersUpdateSystemServicesHeaders
    },
    202: {
      headersMapper: Mappers.OperationalizationClustersUpdateSystemServicesHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
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
      bodyMapper: Mappers.PaginatedOperationalizationClustersList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionIdNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.PaginatedOperationalizationClustersList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
