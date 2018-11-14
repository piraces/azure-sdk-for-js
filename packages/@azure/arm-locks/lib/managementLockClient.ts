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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { ManagementLockClientContext } from "./managementLockClientContext";


class ManagementLockClient extends ManagementLockClientContext {
  // Operation groups
  authorizationOperations: operations.AuthorizationOperations;
  managementLocks: operations.ManagementLocks;

  /**
   * Initializes a new instance of the ManagementLockClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The ID of the target subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.ManagementLockClientOptions) {
    super(credentials, subscriptionId, options);
    this.authorizationOperations = new operations.AuthorizationOperations(this);
    this.managementLocks = new operations.ManagementLocks(this);
  }
}

// Operation Specifications

export {
  ManagementLockClient,
  ManagementLockClientContext,
  Models as ManagementLockModels,
  Mappers as ManagementLockMappers
};
export * from "./operations";
