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
import * as Mappers from "../models/sharedGalleryImageVersionsMappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

/** Class representing a SharedGalleryImageVersions. */
export class SharedGalleryImageVersions {
  private readonly client: ComputeManagementClientContext;

  /**
   * Create a SharedGalleryImageVersions.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * List shared gallery image versions by subscription id or tenant id.
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param galleryImageName The name of the Shared Gallery Image Definition from which the Image
   * Versions are to be listed.
   * @param [options] The optional parameters
   * @returns Promise<Models.SharedGalleryImageVersionsListResponse>
   */
  list(
    location: string,
    galleryUniqueName: string,
    galleryImageName: string,
    options?: Models.SharedGalleryImageVersionsListOptionalParams
  ): Promise<Models.SharedGalleryImageVersionsListResponse>;
  /**
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param galleryImageName The name of the Shared Gallery Image Definition from which the Image
   * Versions are to be listed.
   * @param callback The callback
   */
  list(
    location: string,
    galleryUniqueName: string,
    galleryImageName: string,
    callback: msRest.ServiceCallback<Models.SharedGalleryImageVersionList>
  ): void;
  /**
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param galleryImageName The name of the Shared Gallery Image Definition from which the Image
   * Versions are to be listed.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(
    location: string,
    galleryUniqueName: string,
    galleryImageName: string,
    options: Models.SharedGalleryImageVersionsListOptionalParams,
    callback: msRest.ServiceCallback<Models.SharedGalleryImageVersionList>
  ): void;
  list(
    location: string,
    galleryUniqueName: string,
    galleryImageName: string,
    options?:
      | Models.SharedGalleryImageVersionsListOptionalParams
      | msRest.ServiceCallback<Models.SharedGalleryImageVersionList>,
    callback?: msRest.ServiceCallback<Models.SharedGalleryImageVersionList>
  ): Promise<Models.SharedGalleryImageVersionsListResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        galleryUniqueName,
        galleryImageName,
        options
      },
      listOperationSpec,
      callback
    ) as Promise<Models.SharedGalleryImageVersionsListResponse>;
  }

  /**
   * Get a shared gallery image version by subscription id or tenant id.
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param galleryImageName The name of the Shared Gallery Image Definition from which the Image
   * Versions are to be listed.
   * @param galleryImageVersionName The name of the gallery image version to be created. Needs to
   * follow semantic version name pattern: The allowed characters are digit and period. Digits must
   * be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param [options] The optional parameters
   * @returns Promise<Models.SharedGalleryImageVersionsGetResponse>
   */
  get(
    location: string,
    galleryUniqueName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.SharedGalleryImageVersionsGetResponse>;
  /**
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param galleryImageName The name of the Shared Gallery Image Definition from which the Image
   * Versions are to be listed.
   * @param galleryImageVersionName The name of the gallery image version to be created. Needs to
   * follow semantic version name pattern: The allowed characters are digit and period. Digits must
   * be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param callback The callback
   */
  get(
    location: string,
    galleryUniqueName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    callback: msRest.ServiceCallback<Models.SharedGalleryImageVersion>
  ): void;
  /**
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param galleryImageName The name of the Shared Gallery Image Definition from which the Image
   * Versions are to be listed.
   * @param galleryImageVersionName The name of the gallery image version to be created. Needs to
   * follow semantic version name pattern: The allowed characters are digit and period. Digits must
   * be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param options The optional parameters
   * @param callback The callback
   */
  get(
    location: string,
    galleryUniqueName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.SharedGalleryImageVersion>
  ): void;
  get(
    location: string,
    galleryUniqueName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SharedGalleryImageVersion>,
    callback?: msRest.ServiceCallback<Models.SharedGalleryImageVersion>
  ): Promise<Models.SharedGalleryImageVersionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        galleryUniqueName,
        galleryImageName,
        galleryImageVersionName,
        options
      },
      getOperationSpec,
      callback
    ) as Promise<Models.SharedGalleryImageVersionsGetResponse>;
  }

  /**
   * List shared gallery image versions by subscription id or tenant id.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SharedGalleryImageVersionsListNextResponse>
   */
  listNext(
    nextPageLink: string,
    options?: Models.SharedGalleryImageVersionsListNextOptionalParams
  ): Promise<Models.SharedGalleryImageVersionsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(
    nextPageLink: string,
    callback: msRest.ServiceCallback<Models.SharedGalleryImageVersionList>
  ): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(
    nextPageLink: string,
    options: Models.SharedGalleryImageVersionsListNextOptionalParams,
    callback: msRest.ServiceCallback<Models.SharedGalleryImageVersionList>
  ): void;
  listNext(
    nextPageLink: string,
    options?:
      | Models.SharedGalleryImageVersionsListNextOptionalParams
      | msRest.ServiceCallback<Models.SharedGalleryImageVersionList>,
    callback?: msRest.ServiceCallback<Models.SharedGalleryImageVersionList>
  ): Promise<Models.SharedGalleryImageVersionsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback
    ) as Promise<Models.SharedGalleryImageVersionsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path:
    "subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/sharedGalleries/{galleryUniqueName}/images/{galleryImageName}/versions",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.location0,
    Parameters.galleryUniqueName,
    Parameters.galleryImageName
  ],
  queryParameters: [Parameters.apiVersion3, Parameters.sharedTo],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.SharedGalleryImageVersionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path:
    "subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/sharedGalleries/{galleryUniqueName}/images/{galleryImageName}/versions/{galleryImageVersionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.location0,
    Parameters.galleryUniqueName,
    Parameters.galleryImageName,
    Parameters.galleryImageVersionName
  ],
  queryParameters: [Parameters.apiVersion3],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.SharedGalleryImageVersion
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
  urlParameters: [Parameters.nextPageLink],
  queryParameters: [Parameters.apiVersion3, Parameters.sharedTo],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.SharedGalleryImageVersionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
