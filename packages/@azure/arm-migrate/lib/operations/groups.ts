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
import * as Mappers from "../models/groupsMappers";
import * as Parameters from "../models/parameters";
import { AzureMigrateContext } from "../azureMigrateContext";

/** Class representing a Groups. */
export class Groups {
  private readonly client: AzureMigrateContext;

  /**
   * Create a Groups.
   * @param {AzureMigrateContext} client Reference to the service client.
   */
  constructor(client: AzureMigrateContext) {
    this.client = client;
  }

  /**
   * Get all groups created in the project. Returns a json array of objects of type 'group' as
   * specified in the Models section.
   * @summary Get all groups
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param [options] The optional parameters
   * @returns Promise<Models.GroupsListByProjectResponse>
   */
  listByProject(resourceGroupName: string, projectName: string, options?: msRest.RequestOptionsBase): Promise<Models.GroupsListByProjectResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param callback The callback
   */
  listByProject(resourceGroupName: string, projectName: string, callback: msRest.ServiceCallback<Models.GroupResultList>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByProject(resourceGroupName: string, projectName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GroupResultList>): void;
  listByProject(resourceGroupName: string, projectName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GroupResultList>, callback?: msRest.ServiceCallback<Models.GroupResultList>): Promise<Models.GroupsListByProjectResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        options
      },
      listByProjectOperationSpec,
      callback) as Promise<Models.GroupsListByProjectResponse>;
  }

  /**
   * Get information related to a specific group in the project. Returns a json object of type
   * 'group' as specified in the models section.
   * @summary Get a specific group.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param [options] The optional parameters
   * @returns Promise<Models.GroupsGetResponse>
   */
  get(resourceGroupName: string, projectName: string, groupName: string, options?: msRest.RequestOptionsBase): Promise<Models.GroupsGetResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param callback The callback
   */
  get(resourceGroupName: string, projectName: string, groupName: string, callback: msRest.ServiceCallback<Models.Group>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, projectName: string, groupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Group>): void;
  get(resourceGroupName: string, projectName: string, groupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Group>, callback?: msRest.ServiceCallback<Models.Group>): Promise<Models.GroupsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        groupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.GroupsGetResponse>;
  }

  /**
   * Create a new group by sending a json object of type 'group' as given in Models section as part
   * of the Request Body. The group name in a project is unique. Labels can be applied on a group as
   * part of creation.
   *
   * If a group with the groupName specified in the URL already exists, then this call acts as an
   * update.
   *
   * This operation is Idempotent.
   * @summary Create a new group with specified settings. If group with the name provided already
   * exists, then the existing group is updated.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param [options] The optional parameters
   * @returns Promise<Models.GroupsCreateResponse>
   */
  create(resourceGroupName: string, projectName: string, groupName: string, options?: Models.GroupsCreateOptionalParams): Promise<Models.GroupsCreateResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param callback The callback
   */
  create(resourceGroupName: string, projectName: string, groupName: string, callback: msRest.ServiceCallback<Models.Group>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, projectName: string, groupName: string, options: Models.GroupsCreateOptionalParams, callback: msRest.ServiceCallback<Models.Group>): void;
  create(resourceGroupName: string, projectName: string, groupName: string, options?: Models.GroupsCreateOptionalParams | msRest.ServiceCallback<Models.Group>, callback?: msRest.ServiceCallback<Models.Group>): Promise<Models.GroupsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        groupName,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.GroupsCreateResponse>;
  }

  /**
   * Delete the group from the project. The machines remain in the project. Deleting a non-existent
   * group results in a no-operation.
   *
   * A group is an aggregation mechanism for machines in a project. Therefore, deleting group does
   * not delete machines in it.
   * @summary Delete the group
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param [options] The optional parameters
   * @returns Promise<Models.GroupsDeleteResponse>
   */
  deleteMethod(resourceGroupName: string, projectName: string, groupName: string, options?: msRest.RequestOptionsBase): Promise<Models.GroupsDeleteResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, projectName: string, groupName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, projectName: string, groupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, projectName: string, groupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.GroupsDeleteResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        groupName,
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.GroupsDeleteResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByProjectOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GroupResultList,
      headersMapper: Mappers.GroupsListByProjectHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.groupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Group,
      headersMapper: Mappers.GroupsGetHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.groupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "group"
    ],
    mapper: Mappers.Group
  },
  responses: {
    200: {
      bodyMapper: Mappers.Group,
      headersMapper: Mappers.GroupsCreateHeaders
    },
    201: {
      bodyMapper: Mappers.Group,
      headersMapper: Mappers.GroupsCreateHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.groupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.GroupsDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
