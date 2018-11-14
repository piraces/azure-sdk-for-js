/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing OperationDisplay.
 * The object that represents the operation.
 *
 */
export interface OperationDisplay {
  /**
   * @member {string} [provider] Service provider: Microsoft.Consumption.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provider?: string;
  /**
   * @member {string} [resource] Resource on which the operation is performed:
   * UsageDetail, etc.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly resource?: string;
  /**
   * @member {string} [operation] Operation type: Read, write, delete, etc.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly operation?: string;
}

/**
 * @interface
 * An interface representing Operation.
 * A Consumption REST API operation.
 *
 */
export interface Operation {
  /**
   * @member {string} [name] Operation name: {provider}/{resource}/{operation}.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {OperationDisplay} [display] The object that represents the
   * operation.
   */
  display?: OperationDisplay;
}

/**
 * @interface
 * An interface representing ResourceSku.
 * Represents the SKU name and Azure pricing tier for Analysis Services
 * resource.
 *
 */
export interface ResourceSku {
  /**
   * @member {string} name Name of the SKU level.
   */
  name: string;
  /**
   * @member {SkuTier} [tier] The name of the Azure pricing tier to which the
   * SKU applies. Possible values include: 'Development', 'Basic', 'Standard'
   */
  tier?: SkuTier;
  /**
   * @member {number} [capacity] The number of instances in the read only query
   * pool. Default value: 1 .
   */
  capacity?: number;
}

/**
 * @interface
 * An interface representing Resource.
 * Represents an instance of an Analysis Services resource.
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] An identifier that represents the Analysis Services
   * resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] The name of the Analysis Services resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] The type of the Analysis Services resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} location Location of the Analysis Services resource.
   */
  location: string;
  /**
   * @member {ResourceSku} sku The SKU of the Analysis Services resource.
   */
  sku: ResourceSku;
  /**
   * @member {{ [propertyName: string]: string }} [tags] Key-value pairs of
   * additional resource provisioning properties.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing AnalysisServicesServer.
 * Represents an instance of an Analysis Services resource.
 *
 * @extends Resource
 */
export interface AnalysisServicesServer extends Resource {
  /**
   * @member {ServerAdministrators} [asAdministrators] A collection of AS
   * server administrators
   */
  asAdministrators?: ServerAdministrators;
  /**
   * @member {string} [backupBlobContainerUri] The SAS container URI to the
   * backup container.
   */
  backupBlobContainerUri?: string;
  /**
   * @member {GatewayDetails} [gatewayDetails] The gateway details configured
   * for the AS server.
   */
  gatewayDetails?: GatewayDetails;
  /**
   * @member {IPv4FirewallSettings} [ipV4FirewallSettings] The firewall
   * settings for the AS server.
   */
  ipV4FirewallSettings?: IPv4FirewallSettings;
  /**
   * @member {ConnectionMode} [querypoolConnectionMode] How the read-write
   * server's participation in the query pool is controlled.<br/>It can have
   * the following values: <ul><li>readOnly - indicates that the read-write
   * server is intended not to participate in query operations</li><li>all -
   * indicates that the read-write server can participate in query
   * operations</li></ul>Specifying readOnly when capacity is 1 results in
   * error. Possible values include: 'All', 'ReadOnly'. Default value: 'All' .
   */
  querypoolConnectionMode?: ConnectionMode;
  /**
   * @member {State} [state] The current state of Analysis Services resource.
   * The state is to indicate more states outside of resource provisioning.
   * Possible values include: 'Deleting', 'Succeeded', 'Failed', 'Paused',
   * 'Suspended', 'Provisioning', 'Updating', 'Suspending', 'Pausing',
   * 'Resuming', 'Preparing', 'Scaling'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly state?: State;
  /**
   * @member {ProvisioningState} [provisioningState] The current deployment
   * state of Analysis Services resource. The provisioningState is to indicate
   * states for resource provisioning. Possible values include: 'Deleting',
   * 'Succeeded', 'Failed', 'Paused', 'Suspended', 'Provisioning', 'Updating',
   * 'Suspending', 'Pausing', 'Resuming', 'Preparing', 'Scaling'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * @member {string} [serverFullName] The full name of the Analysis Services
   * resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly serverFullName?: string;
}

/**
 * @interface
 * An interface representing ServerAdministrators.
 * An array of administrator user identities.
 *
 */
export interface ServerAdministrators {
  /**
   * @member {string[]} [members] An array of administrator user identities.
   */
  members?: string[];
}

/**
 * @interface
 * An interface representing GatewayDetails.
 * The gateway details.
 *
 */
export interface GatewayDetails {
  /**
   * @member {string} [gatewayResourceId] Gateway resource to be associated
   * with the server.
   */
  gatewayResourceId?: string;
  /**
   * @member {string} [gatewayObjectId] Gateway object id from in the DMTS
   * cluster for the gateway resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly gatewayObjectId?: string;
  /**
   * @member {string} [dmtsClusterUri] Uri of the DMTS cluster.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly dmtsClusterUri?: string;
}

/**
 * @interface
 * An interface representing IPv4FirewallRule.
 * The detail of firewall rule.
 *
 */
export interface IPv4FirewallRule {
  /**
   * @member {string} [firewallRuleName] The rule name.
   */
  firewallRuleName?: string;
  /**
   * @member {string} [rangeStart] The start range of IPv4.
   */
  rangeStart?: string;
  /**
   * @member {string} [rangeEnd] The end range of IPv4.
   */
  rangeEnd?: string;
}

/**
 * @interface
 * An interface representing IPv4FirewallSettings.
 * An array of firewall rules.
 *
 */
export interface IPv4FirewallSettings {
  /**
   * @member {IPv4FirewallRule[]} [firewallRules] An array of firewall rules.
   */
  firewallRules?: IPv4FirewallRule[];
  /**
   * @member {string} [enablePowerBIService] The indicator of enableing PBI
   * service.
   */
  enablePowerBIService?: string;
}

/**
 * @interface
 * An interface representing AnalysisServicesServerUpdateParameters.
 * Provision request specification
 *
 */
export interface AnalysisServicesServerUpdateParameters {
  /**
   * @member {ResourceSku} [sku] The SKU of the Analysis Services resource.
   */
  sku?: ResourceSku;
  /**
   * @member {{ [propertyName: string]: string }} [tags] Key-value pairs of
   * additional provisioning properties.
   */
  tags?: { [propertyName: string]: string };
  /**
   * @member {ServerAdministrators} [asAdministrators] A collection of AS
   * server administrators
   */
  asAdministrators?: ServerAdministrators;
  /**
   * @member {string} [backupBlobContainerUri] The SAS container URI to the
   * backup container.
   */
  backupBlobContainerUri?: string;
  /**
   * @member {GatewayDetails} [gatewayDetails] The gateway details configured
   * for the AS server.
   */
  gatewayDetails?: GatewayDetails;
  /**
   * @member {IPv4FirewallSettings} [ipV4FirewallSettings] The firewall
   * settings for the AS server.
   */
  ipV4FirewallSettings?: IPv4FirewallSettings;
  /**
   * @member {ConnectionMode} [querypoolConnectionMode] How the read-write
   * server's participation in the query pool is controlled.<br/>It can have
   * the following values: <ul><li>readOnly - indicates that the read-write
   * server is intended not to participate in query operations</li><li>all -
   * indicates that the read-write server can participate in query
   * operations</li></ul>Specifying readOnly when capacity is 1 results in
   * error. Possible values include: 'All', 'ReadOnly'. Default value: 'All' .
   */
  querypoolConnectionMode?: ConnectionMode;
}

/**
 * @interface
 * An interface representing GatewayListStatusLive.
 * Status of gateway is live.
 *
 */
export interface GatewayListStatusLive {
  /**
   * @member {Status} [status] Live message of list gateway. Possible values
   * include: 'Live'
   */
  status?: Status;
}

/**
 * @interface
 * An interface representing GatewayError.
 * Detail of gateway errors.
 *
 */
export interface GatewayError {
  /**
   * @member {string} [code] Error code of list gateway.
   */
  code?: string;
  /**
   * @member {string} [message] Error message of list gateway.
   */
  message?: string;
}

/**
 * @interface
 * An interface representing GatewayListStatusError.
 * Status of gateway is error.
 *
 */
export interface GatewayListStatusError {
  /**
   * @member {GatewayError} [error] Error of the list gateway status.
   */
  error?: GatewayError;
}

/**
 * @interface
 * An interface representing CheckServerNameAvailabilityParameters.
 * Details of server name request body.
 *
 */
export interface CheckServerNameAvailabilityParameters {
  /**
   * @member {string} [name] Name for checking availability.
   */
  name?: string;
  /**
   * @member {string} [type] The resource type of azure analysis services.
   * Default value: 'Microsoft.AnalysisServices/servers' .
   */
  type?: string;
}

/**
 * @interface
 * An interface representing CheckServerNameAvailabilityResult.
 * The checking result of server name availibility.
 *
 */
export interface CheckServerNameAvailabilityResult {
  /**
   * @member {boolean} [nameAvailable] Indicator of available of the server
   * name.
   */
  nameAvailable?: boolean;
  /**
   * @member {string} [reason] The reason of unavailability.
   */
  reason?: string;
  /**
   * @member {string} [message] The detailed message of the request
   * unavailability.
   */
  message?: string;
}

/**
 * @interface
 * An interface representing ErrorResponse.
 * Describes the format of Error response.
 *
 */
export interface ErrorResponse {
  /**
   * @member {string} [code] Error code
   */
  code?: string;
  /**
   * @member {string} [message] Error message indicating why the operation
   * failed.
   */
  message?: string;
}

/**
 * @interface
 * An interface representing OperationStatus.
 * The status of operation.
 *
 */
export interface OperationStatus {
  /**
   * @member {string} [id] The operation Id.
   */
  id?: string;
  /**
   * @member {string} [name] The operation name.
   */
  name?: string;
  /**
   * @member {string} [startTime] The start time of the operation.
   */
  startTime?: string;
  /**
   * @member {string} [endTime] The end time of the operation.
   */
  endTime?: string;
  /**
   * @member {string} [status] The status of the operation.
   */
  status?: string;
  /**
   * @member {ErrorResponse} [error] The error detail of the operation if any.
   */
  error?: ErrorResponse;
}

/**
 * @interface
 * An interface representing SkuEnumerationForNewResourceResult.
 * An object that represents enumerating SKUs for new resources.
 *
 */
export interface SkuEnumerationForNewResourceResult {
  /**
   * @member {ResourceSku[]} [value] The collection of available SKUs for new
   * resources.
   */
  value?: ResourceSku[];
}

/**
 * @interface
 * An interface representing SkuDetailsForExistingResource.
 * An object that represents SKU details for existing resources.
 *
 */
export interface SkuDetailsForExistingResource {
  /**
   * @member {ResourceSku} [sku] The SKU in SKU details for existing resources.
   */
  sku?: ResourceSku;
}

/**
 * @interface
 * An interface representing SkuEnumerationForExistingResourceResult.
 * An object that represents enumerating SKUs for existing resources.
 *
 */
export interface SkuEnumerationForExistingResourceResult {
  /**
   * @member {SkuDetailsForExistingResource[]} [value] The collection of
   * available SKUs for existing resources.
   */
  value?: SkuDetailsForExistingResource[];
}

/**
 * @interface
 * An interface representing AnalysisServicesManagementClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface AnalysisServicesManagementClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the AnalysisServicesServers.
 * An array of Analysis Services resources.
 *
 * @extends Array<AnalysisServicesServer>
 */
export interface AnalysisServicesServers extends Array<AnalysisServicesServer> {
}

/**
 * @interface
 * An interface representing the OperationListResult.
 * Result of listing consumption operations. It contains a list of operations
 * and a URL link to get the next set of results.
 *
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * @member {string} [nextLink] URL to get the next set of operation list
   * results if there are any.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nextLink?: string;
}

/**
 * Defines values for SkuTier.
 * Possible values include: 'Development', 'Basic', 'Standard'
 * @readonly
 * @enum {string}
 */
export type SkuTier = 'Development' | 'Basic' | 'Standard';

/**
 * Defines values for State.
 * Possible values include: 'Deleting', 'Succeeded', 'Failed', 'Paused', 'Suspended',
 * 'Provisioning', 'Updating', 'Suspending', 'Pausing', 'Resuming', 'Preparing', 'Scaling'
 * @readonly
 * @enum {string}
 */
export type State = 'Deleting' | 'Succeeded' | 'Failed' | 'Paused' | 'Suspended' | 'Provisioning' | 'Updating' | 'Suspending' | 'Pausing' | 'Resuming' | 'Preparing' | 'Scaling';

/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Deleting', 'Succeeded', 'Failed', 'Paused', 'Suspended',
 * 'Provisioning', 'Updating', 'Suspending', 'Pausing', 'Resuming', 'Preparing', 'Scaling'
 * @readonly
 * @enum {string}
 */
export type ProvisioningState = 'Deleting' | 'Succeeded' | 'Failed' | 'Paused' | 'Suspended' | 'Provisioning' | 'Updating' | 'Suspending' | 'Pausing' | 'Resuming' | 'Preparing' | 'Scaling';

/**
 * Defines values for ConnectionMode.
 * Possible values include: 'All', 'ReadOnly'
 * @readonly
 * @enum {string}
 */
export type ConnectionMode = 'All' | 'ReadOnly';

/**
 * Defines values for Status.
 * Possible values include: 'Live'
 * @readonly
 * @enum {string}
 */
export type Status = 'Live';

/**
 * Contains response data for the getDetails operation.
 */
export type ServersGetDetailsResponse = AnalysisServicesServer & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AnalysisServicesServer;
    };
};

/**
 * Contains response data for the create operation.
 */
export type ServersCreateResponse = AnalysisServicesServer & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AnalysisServicesServer;
    };
};

/**
 * Contains response data for the update operation.
 */
export type ServersUpdateResponse = AnalysisServicesServer & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AnalysisServicesServer;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type ServersListByResourceGroupResponse = AnalysisServicesServers & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AnalysisServicesServers;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ServersListResponse = AnalysisServicesServers & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AnalysisServicesServers;
    };
};

/**
 * Contains response data for the listSkusForNew operation.
 */
export type ServersListSkusForNewResponse = SkuEnumerationForNewResourceResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SkuEnumerationForNewResourceResult;
    };
};

/**
 * Contains response data for the listSkusForExisting operation.
 */
export type ServersListSkusForExistingResponse = SkuEnumerationForExistingResourceResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SkuEnumerationForExistingResourceResult;
    };
};

/**
 * Contains response data for the listGatewayStatus operation.
 */
export type ServersListGatewayStatusResponse = GatewayListStatusLive & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: GatewayListStatusLive;
    };
};

/**
 * Contains response data for the checkNameAvailability operation.
 */
export type ServersCheckNameAvailabilityResponse = CheckServerNameAvailabilityResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CheckServerNameAvailabilityResult;
    };
};

/**
 * Contains response data for the listOperationStatuses operation.
 */
export type ServersListOperationStatusesResponse = OperationStatus & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationStatus;
    };
};

/**
 * Contains response data for the beginCreate operation.
 */
export type ServersBeginCreateResponse = AnalysisServicesServer & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AnalysisServicesServer;
    };
};

/**
 * Contains response data for the beginUpdate operation.
 */
export type ServersBeginUpdateResponse = AnalysisServicesServer & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AnalysisServicesServer;
    };
};

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};
