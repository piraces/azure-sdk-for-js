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
import * as Mappers from "../models/settingsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a Settings. */
export class Settings {
  private readonly client: SecurityCenterContext;

  /**
   * Create a Settings.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Settings about different configurations in security center
   * @param [options] The optional parameters
   * @returns Promise<Models.SettingsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.SettingsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.SettingsList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SettingsList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SettingsList>, callback?: msRest.ServiceCallback<Models.SettingsList>): Promise<Models.SettingsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SettingsListResponse>;
  }

  /**
   * Settings of different configurations in security center
   * @param settingName Name of setting. Possible values include: 'MCAS', 'WDATP'
   * @param [options] The optional parameters
   * @returns Promise<Models.SettingsGetResponse>
   */
  get(settingName: Models.SettingName, options?: msRest.RequestOptionsBase): Promise<Models.SettingsGetResponse>;
  /**
   * @param settingName Name of setting. Possible values include: 'MCAS', 'WDATP'
   * @param callback The callback
   */
  get(settingName: Models.SettingName, callback: msRest.ServiceCallback<Models.SettingUnion>): void;
  /**
   * @param settingName Name of setting. Possible values include: 'MCAS', 'WDATP'
   * @param options The optional parameters
   * @param callback The callback
   */
  get(settingName: Models.SettingName, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SettingUnion>): void;
  get(settingName: Models.SettingName, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SettingUnion>, callback?: msRest.ServiceCallback<Models.SettingUnion>): Promise<Models.SettingsGetResponse> {
    return this.client.sendOperationRequest(
      {
        settingName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SettingsGetResponse>;
  }

  /**
   * updating settings about different configurations in security center
   * @param settingName Name of setting. Possible values include: 'MCAS', 'WDATP'
   * @param setting Setting object
   * @param [options] The optional parameters
   * @returns Promise<Models.SettingsUpdateResponse>
   */
  update(settingName: Models.SettingName1, setting: Models.SettingUnion, options?: msRest.RequestOptionsBase): Promise<Models.SettingsUpdateResponse>;
  /**
   * @param settingName Name of setting. Possible values include: 'MCAS', 'WDATP'
   * @param setting Setting object
   * @param callback The callback
   */
  update(settingName: Models.SettingName1, setting: Models.SettingUnion, callback: msRest.ServiceCallback<Models.SettingUnion>): void;
  /**
   * @param settingName Name of setting. Possible values include: 'MCAS', 'WDATP'
   * @param setting Setting object
   * @param options The optional parameters
   * @param callback The callback
   */
  update(settingName: Models.SettingName1, setting: Models.SettingUnion, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SettingUnion>): void;
  update(settingName: Models.SettingName1, setting: Models.SettingUnion, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SettingUnion>, callback?: msRest.ServiceCallback<Models.SettingUnion>): Promise<Models.SettingsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        settingName,
        setting,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.SettingsUpdateResponse>;
  }

  /**
   * Settings about different configurations in security center
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SettingsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SettingsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SettingsList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SettingsList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SettingsList>, callback?: msRest.ServiceCallback<Models.SettingsList>): Promise<Models.SettingsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.SettingsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/settings",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SettingsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/settings/{settingName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.settingName0
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Setting
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/settings/{settingName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.settingName0
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "setting",
    mapper: {
      ...Mappers.Setting,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Setting
    },
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
      bodyMapper: Mappers.SettingsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
