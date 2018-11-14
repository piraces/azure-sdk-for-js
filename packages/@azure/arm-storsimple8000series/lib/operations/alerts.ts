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
import * as Mappers from "../models/alertsMappers";
import * as Parameters from "../models/parameters";
import { StorSimple8000SeriesManagementClientContext } from "../storSimple8000SeriesManagementClientContext";

/** Class representing a Alerts. */
export class Alerts {
  private readonly client: StorSimple8000SeriesManagementClientContext;

  /**
   * Create a Alerts.
   * @param {StorSimple8000SeriesManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorSimple8000SeriesManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves all the alerts in a manager.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsListByManagerResponse>
   */
  listByManager(resourceGroupName: string, managerName: string, options?: Models.AlertsListByManagerOptionalParams): Promise<Models.AlertsListByManagerResponse>;
  /**
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  listByManager(resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.AlertList>): void;
  /**
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  listByManager(resourceGroupName: string, managerName: string, options: Models.AlertsListByManagerOptionalParams, callback: msRest.ServiceCallback<Models.AlertList>): void;
  listByManager(resourceGroupName: string, managerName: string, options?: Models.AlertsListByManagerOptionalParams | msRest.ServiceCallback<Models.AlertList>, callback?: msRest.ServiceCallback<Models.AlertList>): Promise<Models.AlertsListByManagerResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managerName,
        options
      },
      listByManagerOperationSpec,
      callback) as Promise<Models.AlertsListByManagerResponse>;
  }

  /**
   * Clear the alerts.
   * @param parameters The clear alert request.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  clear(parameters: Models.ClearAlertRequest, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param parameters The clear alert request.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  clear(parameters: Models.ClearAlertRequest, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param parameters The clear alert request.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  clear(parameters: Models.ClearAlertRequest, resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  clear(parameters: Models.ClearAlertRequest, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        parameters,
        resourceGroupName,
        managerName,
        options
      },
      clearOperationSpec,
      callback);
  }

  /**
   * Sends a test alert email.
   * @param deviceName The device name
   * @param parameters The send test alert email request.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  sendTestEmail(deviceName: string, parameters: Models.SendTestAlertEmailRequest, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param deviceName The device name
   * @param parameters The send test alert email request.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  sendTestEmail(deviceName: string, parameters: Models.SendTestAlertEmailRequest, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param deviceName The device name
   * @param parameters The send test alert email request.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  sendTestEmail(deviceName: string, parameters: Models.SendTestAlertEmailRequest, resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  sendTestEmail(deviceName: string, parameters: Models.SendTestAlertEmailRequest, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        parameters,
        resourceGroupName,
        managerName,
        options
      },
      sendTestEmailOperationSpec,
      callback);
  }

  /**
   * Retrieves all the alerts in a manager.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsListByManagerNextResponse>
   */
  listByManagerNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsListByManagerNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByManagerNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AlertList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByManagerNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertList>): void;
  listByManagerNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertList>, callback?: msRest.ServiceCallback<Models.AlertList>): Promise<Models.AlertsListByManagerNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByManagerNextOperationSpec,
      callback) as Promise<Models.AlertsListByManagerNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByManagerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/alerts",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const clearOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/clearAlerts",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
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
      ...Mappers.ClearAlertRequest,
      required: true
    }
  },
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const sendTestEmailOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/sendTestAlertEmail",
  urlParameters: [
    Parameters.deviceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
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
      ...Mappers.SendTestAlertEmailRequest,
      required: true
    }
  },
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByManagerNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
