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
import * as Mappers from "../models/solutionsMappers";
import * as Parameters from "../models/parameters";
import { OperationsManagementClientContext } from "../operationsManagementClientContext";

/** Class representing a Solutions. */
export class Solutions {
  private readonly client: OperationsManagementClientContext;

  /**
   * Create a Solutions.
   * @param {OperationsManagementClientContext} client Reference to the service client.
   */
  constructor(client: OperationsManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates or updates the Solution.
   * @summary Create/Update Solution.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param solutionName User Solution Name.
   * @param parameters The parameters required to create OMS Solution.
   * @param [options] The optional parameters
   * @returns Promise<Models.SolutionsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, solutionName: string, parameters: Models.Solution, options?: msRest.RequestOptionsBase): Promise<Models.SolutionsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,solutionName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SolutionsCreateOrUpdateResponse>;
  }

  /**
   * Deletes the solution in the subscription.
   * @summary Deletes the solution
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param solutionName User Solution Name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, solutionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,solutionName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Retrieves the user solution.
   * @summary Retrieve solution.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param solutionName User Solution Name.
   * @param [options] The optional parameters
   * @returns Promise<Models.SolutionsGetResponse>
   */
  get(resourceGroupName: string, solutionName: string, options?: msRest.RequestOptionsBase): Promise<Models.SolutionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param solutionName User Solution Name.
   * @param callback The callback
   */
  get(resourceGroupName: string, solutionName: string, callback: msRest.ServiceCallback<Models.Solution>): void;
  /**
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param solutionName User Solution Name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, solutionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Solution>): void;
  get(resourceGroupName: string, solutionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Solution>, callback?: msRest.ServiceCallback<Models.Solution>): Promise<Models.SolutionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        solutionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SolutionsGetResponse>;
  }

  /**
   * Retrieves the solution list. It will retrieve both first party and third party solutions
   * @summary Retrieves the solution list for the subscription
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.SolutionsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.SolutionsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.SolutionPropertiesList>): void;
  /**
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SolutionPropertiesList>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SolutionPropertiesList>, callback?: msRest.ServiceCallback<Models.SolutionPropertiesList>): Promise<Models.SolutionsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.SolutionsListByResourceGroupResponse>;
  }

  /**
   * Retrieves the solution list. It will retrieve both first party and third party solutions
   * @summary Retrieves the solution list for the subscription
   * @param [options] The optional parameters
   * @returns Promise<Models.SolutionsListBySubscriptionResponse>
   */
  listBySubscription(options?: msRest.RequestOptionsBase): Promise<Models.SolutionsListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.SolutionPropertiesList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SolutionPropertiesList>): void;
  listBySubscription(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SolutionPropertiesList>, callback?: msRest.ServiceCallback<Models.SolutionPropertiesList>): Promise<Models.SolutionsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.SolutionsListBySubscriptionResponse>;
  }

  /**
   * Creates or updates the Solution.
   * @summary Create/Update Solution.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param solutionName User Solution Name.
   * @param parameters The parameters required to create OMS Solution.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, solutionName: string, parameters: Models.Solution, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        solutionName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the solution in the subscription.
   * @summary Deletes the solution
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param solutionName User Solution Name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, solutionName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        solutionName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationsManagement/solutions/{solutionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Solution
    },
    default: {
      bodyMapper: Mappers.CodeMessageError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationsManagement/solutions",
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
      bodyMapper: Mappers.SolutionPropertiesList
    },
    default: {
      bodyMapper: Mappers.CodeMessageError
    }
  },
  serializer
};

const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.OperationsManagement/solutions",
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
      bodyMapper: Mappers.SolutionPropertiesList
    },
    default: {
      bodyMapper: Mappers.CodeMessageError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationsManagement/solutions/{solutionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName
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
      ...Mappers.Solution,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.Solution
    },
    default: {
      bodyMapper: Mappers.CodeMessageError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationsManagement/solutions/{solutionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CodeMessageError
    }
  },
  serializer
};
