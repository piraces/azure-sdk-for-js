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
import * as Mappers from "../models/domainsMappers";
import * as Parameters from "../models/parameters";
import { EventGridManagementClientContext } from "../eventGridManagementClientContext";

/** Class representing a Domains. */
export class Domains {
  private readonly client: EventGridManagementClientContext;

  /**
   * Create a Domains.
   * @param {EventGridManagementClientContext} client Reference to the service client.
   */
  constructor(client: EventGridManagementClientContext) {
    this.client = client;
  }

  /**
   * Get properties of a domain
   * @summary Get a domain
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain
   * @param [options] The optional parameters
   * @returns Promise<Models.DomainsGetResponse>
   */
  get(resourceGroupName: string, domainName: string, options?: msRest.RequestOptionsBase): Promise<Models.DomainsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain
   * @param callback The callback
   */
  get(resourceGroupName: string, domainName: string, callback: msRest.ServiceCallback<Models.Domain>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, domainName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Domain>): void;
  get(resourceGroupName: string, domainName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Domain>, callback?: msRest.ServiceCallback<Models.Domain>): Promise<Models.DomainsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        domainName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DomainsGetResponse>;
  }

  /**
   * Asynchronously creates a new domain with the specified parameters.
   * @summary Create a domain
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain
   * @param domainInfo Domain information
   * @param [options] The optional parameters
   * @returns Promise<Models.DomainsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, domainName: string, domainInfo: Models.Domain, options?: msRest.RequestOptionsBase): Promise<Models.DomainsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,domainName,domainInfo,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DomainsCreateOrUpdateResponse>;
  }

  /**
   * Delete existing domain
   * @summary Delete a domain
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, domainName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,domainName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Asynchronously updates a domain with the specified parameters.
   * @summary Update a domain
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain
   * @param domainUpdateParameters Domain update information
   * @param [options] The optional parameters
   * @returns Promise<Models.DomainsUpdateResponse>
   */
  update(resourceGroupName: string, domainName: string, domainUpdateParameters: Models.DomainUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.DomainsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,domainName,domainUpdateParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DomainsUpdateResponse>;
  }

  /**
   * List all the domains under an Azure subscription
   * @summary List domains under an Azure subscription
   * @param [options] The optional parameters
   * @returns Promise<Models.DomainsListBySubscriptionResponse>
   */
  listBySubscription(options?: msRest.RequestOptionsBase): Promise<Models.DomainsListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.DomainsListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DomainsListResult>): void;
  listBySubscription(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DomainsListResult>, callback?: msRest.ServiceCallback<Models.DomainsListResult>): Promise<Models.DomainsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.DomainsListBySubscriptionResponse>;
  }

  /**
   * List all the domains under a resource group
   * @summary List domains under a resource group
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.DomainsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.DomainsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.DomainsListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DomainsListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DomainsListResult>, callback?: msRest.ServiceCallback<Models.DomainsListResult>): Promise<Models.DomainsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.DomainsListByResourceGroupResponse>;
  }

  /**
   * List the two keys used to publish to a domain
   * @summary List keys for a domain
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain
   * @param [options] The optional parameters
   * @returns Promise<Models.DomainsListSharedAccessKeysResponse>
   */
  listSharedAccessKeys(resourceGroupName: string, domainName: string, options?: msRest.RequestOptionsBase): Promise<Models.DomainsListSharedAccessKeysResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain
   * @param callback The callback
   */
  listSharedAccessKeys(resourceGroupName: string, domainName: string, callback: msRest.ServiceCallback<Models.DomainSharedAccessKeys>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain
   * @param options The optional parameters
   * @param callback The callback
   */
  listSharedAccessKeys(resourceGroupName: string, domainName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DomainSharedAccessKeys>): void;
  listSharedAccessKeys(resourceGroupName: string, domainName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DomainSharedAccessKeys>, callback?: msRest.ServiceCallback<Models.DomainSharedAccessKeys>): Promise<Models.DomainsListSharedAccessKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        domainName,
        options
      },
      listSharedAccessKeysOperationSpec,
      callback) as Promise<Models.DomainsListSharedAccessKeysResponse>;
  }

  /**
   * Regenerate a shared access key for a domain
   * @summary Regenerate key for a domain
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain
   * @param regenerateKeyRequest Request body to regenerate key
   * @param [options] The optional parameters
   * @returns Promise<Models.DomainsRegenerateKeyResponse>
   */
  regenerateKey(resourceGroupName: string, domainName: string, regenerateKeyRequest: Models.DomainRegenerateKeyRequest, options?: msRest.RequestOptionsBase): Promise<Models.DomainsRegenerateKeyResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain
   * @param regenerateKeyRequest Request body to regenerate key
   * @param callback The callback
   */
  regenerateKey(resourceGroupName: string, domainName: string, regenerateKeyRequest: Models.DomainRegenerateKeyRequest, callback: msRest.ServiceCallback<Models.DomainSharedAccessKeys>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain
   * @param regenerateKeyRequest Request body to regenerate key
   * @param options The optional parameters
   * @param callback The callback
   */
  regenerateKey(resourceGroupName: string, domainName: string, regenerateKeyRequest: Models.DomainRegenerateKeyRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DomainSharedAccessKeys>): void;
  regenerateKey(resourceGroupName: string, domainName: string, regenerateKeyRequest: Models.DomainRegenerateKeyRequest, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DomainSharedAccessKeys>, callback?: msRest.ServiceCallback<Models.DomainSharedAccessKeys>): Promise<Models.DomainsRegenerateKeyResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        domainName,
        regenerateKeyRequest,
        options
      },
      regenerateKeyOperationSpec,
      callback) as Promise<Models.DomainsRegenerateKeyResponse>;
  }

  /**
   * Asynchronously creates a new domain with the specified parameters.
   * @summary Create a domain
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain
   * @param domainInfo Domain information
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, domainName: string, domainInfo: Models.Domain, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        domainName,
        domainInfo,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Delete existing domain
   * @summary Delete a domain
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, domainName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        domainName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Asynchronously updates a domain with the specified parameters.
   * @summary Update a domain
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain
   * @param domainUpdateParameters Domain update information
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, domainName: string, domainUpdateParameters: Models.DomainUpdateParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        domainName,
        domainUpdateParameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Domain
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/domains",
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
      bodyMapper: Mappers.DomainsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains",
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
      bodyMapper: Mappers.DomainsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listSharedAccessKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/listKeys",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DomainSharedAccessKeys
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const regenerateKeyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/regenerateKey",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "regenerateKeyRequest",
    mapper: {
      ...Mappers.DomainRegenerateKeyRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DomainSharedAccessKeys
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "domainInfo",
    mapper: {
      ...Mappers.Domain,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.Domain
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "domainUpdateParameters",
    mapper: {
      ...Mappers.DomainUpdateParameters,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.Domain
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
