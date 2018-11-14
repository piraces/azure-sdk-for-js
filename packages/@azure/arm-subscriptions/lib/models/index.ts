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
 * An interface representing SubscriptionCreationResult.
 * The created subscription object.
 *
 */
export interface SubscriptionCreationResult {
  /**
   * @member {string} [subscriptionLink] The link to the new subscription.
   */
  subscriptionLink?: string;
}

/**
 * @interface
 * An interface representing AdPrincipal.
 * Active Directory Principal for subscription creation delegated permission
 *
 */
export interface AdPrincipal {
  /**
   * @member {string} objectId Object id of the Principal
   */
  objectId: string;
}

/**
 * @interface
 * An interface representing SubscriptionCreationParameters.
 * Subscription Creation Parameters required to create a new Azure
 * subscription.
 *
 */
export interface SubscriptionCreationParameters {
  /**
   * @member {string} [displayName] The display name of the subscription.
   */
  displayName?: string;
  /**
   * @member {AdPrincipal[]} [owners] The list of principals that should be
   * granted Owner access on the subscription. Principals should be of type
   * User, Service Principal or Security Group.
   */
  owners?: AdPrincipal[];
  /**
   * @member {OfferType} [offerType] The offer type of the subscription. For
   * example, MS-AZR-0017P (EnterpriseAgreement) and MS-AZR-0148P
   * (EnterpriseAgreement devTest) are available. Only valid when creating a
   * subscription in a enrollment account scope. Possible values include:
   * 'MS-AZR-0017P', 'MS-AZR-0148P'
   */
  offerType?: OfferType;
  /**
   * @member {{ [propertyName: string]: any }} [additionalParameters]
   * Additional, untyped parameters to support custom subscription creation
   * scenarios.
   */
  additionalParameters?: { [propertyName: string]: any };
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
 * An interface representing SubscriptionOperation.
 * status of the subscription POST operation.
 *
 */
export interface SubscriptionOperation {
  /**
   * @member {string} [id] The operation Id.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [status] Status of the pending subscription
   */
  status?: string;
  /**
   * @member {string} [statusDetail] Status Detail of the pending subscription
   */
  statusDetail?: string;
}

/**
 * @interface
 * An interface representing SubscriptionOperationListResult.
 * A list of pending subscription operations.
 *
 */
export interface SubscriptionOperationListResult {
  /**
   * @member {SubscriptionOperation[]} [value] A list of pending
   * SubscriptionOperations
   */
  value?: SubscriptionOperation[];
}

/**
 * @interface
 * An interface representing OperationDisplay.
 * The object that represents the operation.
 *
 */
export interface OperationDisplay {
  /**
   * @member {string} [provider] Service provider: Microsoft.Subscription
   */
  provider?: string;
  /**
   * @member {string} [resource] Resource on which the operation is performed:
   * Profile, endpoint, etc.
   */
  resource?: string;
  /**
   * @member {string} [operation] Operation type: Read, write, delete, etc.
   */
  operation?: string;
}

/**
 * @interface
 * An interface representing Operation.
 * REST API operation
 *
 */
export interface Operation {
  /**
   * @member {string} [name] Operation name: {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * @member {OperationDisplay} [display] The object that represents the
   * operation.
   */
  display?: OperationDisplay;
}

/**
 * @interface
 * An interface representing OperationListResult.
 * Result of the request to list operations. It contains a list of operations
 * and a URL link to get the next set of results.
 *
 */
export interface OperationListResult {
  /**
   * @member {Operation[]} [value] List of operations.
   */
  value?: Operation[];
  /**
   * @member {string} [nextLink] URL to get the next set of operation list
   * results if there are any.
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing Location.
 * Location information.
 *
 */
export interface Location {
  /**
   * @member {string} [id] The fully qualified ID of the location. For example,
   * /subscriptions/00000000-0000-0000-0000-000000000000/locations/westus.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [subscriptionId] The subscription ID.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly subscriptionId?: string;
  /**
   * @member {string} [name] The location name.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [displayName] The display name of the location.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly displayName?: string;
  /**
   * @member {string} [latitude] The latitude of the location.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly latitude?: string;
  /**
   * @member {string} [longitude] The longitude of the location.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly longitude?: string;
}

/**
 * @interface
 * An interface representing SubscriptionPolicies.
 * Subscription policies.
 *
 */
export interface SubscriptionPolicies {
  /**
   * @member {string} [locationPlacementId] The subscription location placement
   * ID. The ID indicates which regions are visible for a subscription. For
   * example, a subscription with a location placement Id of Public_2014-09-01
   * has access to Azure public regions.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly locationPlacementId?: string;
  /**
   * @member {string} [quotaId] The subscription quota ID.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly quotaId?: string;
  /**
   * @member {SpendingLimit} [spendingLimit] The subscription spending limit.
   * Possible values include: 'On', 'Off', 'CurrentPeriodOff'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly spendingLimit?: SpendingLimit;
}

/**
 * @interface
 * An interface representing Subscription.
 * Subscription information.
 *
 */
export interface Subscription {
  /**
   * @member {string} [id] The fully qualified ID for the subscription. For
   * example, /subscriptions/00000000-0000-0000-0000-000000000000.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [subscriptionId] The subscription ID.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly subscriptionId?: string;
  /**
   * @member {string} [displayName] The subscription display name.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly displayName?: string;
  /**
   * @member {SubscriptionState} [state] The subscription state. Possible
   * values are Enabled, Warned, PastDue, Disabled, and Deleted. Possible
   * values include: 'Enabled', 'Warned', 'PastDue', 'Disabled', 'Deleted'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly state?: SubscriptionState;
  /**
   * @member {SubscriptionPolicies} [subscriptionPolicies] The subscription
   * policies.
   */
  subscriptionPolicies?: SubscriptionPolicies;
  /**
   * @member {string} [authorizationSource] The authorization source of the
   * request. Valid values are one or more combinations of Legacy, RoleBased,
   * Bypassed, Direct and Management. For example, 'Legacy, RoleBased'.
   */
  authorizationSource?: string;
}

/**
 * @interface
 * An interface representing TenantIdDescription.
 * Tenant Id information.
 *
 */
export interface TenantIdDescription {
  /**
   * @member {string} [id] The fully qualified ID of the tenant. For example,
   * /tenants/00000000-0000-0000-0000-000000000000.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [tenantId] The tenant ID. For example,
   * 00000000-0000-0000-0000-000000000000.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly tenantId?: string;
}

/**
 * @interface
 * An interface representing SubscriptionClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface SubscriptionClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}

/**
 * @interface
 * An interface representing SubscriptionFactoryCreateSubscriptionInEnrollmentAccountHeaders.
 * Defines headers for CreateSubscriptionInEnrollmentAccount operation.
 *
 */
export interface SubscriptionFactoryCreateSubscriptionInEnrollmentAccountHeaders {
  /**
   * @member {string} [location] GET this URL to retrieve the status of the
   * asynchronous operation.
   */
  location: string;
  /**
   * @member {string} [retryAfter] The amount of delay to use while the status
   * of the operation is checked. The value is expressed in seconds.
   */
  retryAfter: string;
}


/**
 * @interface
 * An interface representing the LocationListResult.
 * Location list operation response.
 *
 * @extends Array<Location>
 */
export interface LocationListResult extends Array<Location> {
}

/**
 * @interface
 * An interface representing the SubscriptionListResult.
 * Subscription list operation response.
 *
 * @extends Array<Subscription>
 */
export interface SubscriptionListResult extends Array<Subscription> {
  /**
   * @member {string} nextLink The URL to get the next set of results.
   */
  nextLink: string;
}

/**
 * @interface
 * An interface representing the TenantListResult.
 * Tenant Ids information.
 *
 * @extends Array<TenantIdDescription>
 */
export interface TenantListResult extends Array<TenantIdDescription> {
  /**
   * @member {string} nextLink The URL to use for getting the next set of
   * results.
   */
  nextLink: string;
}

/**
 * Defines values for OfferType.
 * Possible values include: 'MS-AZR-0017P', 'MS-AZR-0148P'
 * @readonly
 * @enum {string}
 */
export type OfferType = 'MS-AZR-0017P' | 'MS-AZR-0148P';

/**
 * Defines values for SubscriptionState.
 * Possible values include: 'Enabled', 'Warned', 'PastDue', 'Disabled', 'Deleted'
 * @readonly
 * @enum {string}
 */
export type SubscriptionState = 'Enabled' | 'Warned' | 'PastDue' | 'Disabled' | 'Deleted';

/**
 * Defines values for SpendingLimit.
 * Possible values include: 'On', 'Off', 'CurrentPeriodOff'
 * @readonly
 * @enum {string}
 */
export type SpendingLimit = 'On' | 'Off' | 'CurrentPeriodOff';

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
 * Contains response data for the list operation.
 */
export type SubscriptionOperationsListResponse = SubscriptionOperationListResult & {
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
      parsedBody: SubscriptionOperationListResult;
    };
};

/**
 * Contains response data for the createSubscriptionInEnrollmentAccount operation.
 */
export type SubscriptionFactoryCreateSubscriptionInEnrollmentAccountResponse = SubscriptionCreationResult & SubscriptionFactoryCreateSubscriptionInEnrollmentAccountHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: SubscriptionFactoryCreateSubscriptionInEnrollmentAccountHeaders;
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SubscriptionCreationResult;
    };
};

/**
 * Contains response data for the listLocations operation.
 */
export type SubscriptionsListLocationsResponse = LocationListResult & {
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
      parsedBody: LocationListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type SubscriptionsGetResponse = Subscription & {
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
      parsedBody: Subscription;
    };
};

/**
 * Contains response data for the list operation.
 */
export type SubscriptionsListResponse = SubscriptionListResult & {
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
      parsedBody: SubscriptionListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type SubscriptionsListNextResponse = SubscriptionListResult & {
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
      parsedBody: SubscriptionListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type TenantsListResponse = TenantListResult & {
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
      parsedBody: TenantListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type TenantsListNextResponse = TenantListResult & {
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
      parsedBody: TenantListResult;
    };
};
