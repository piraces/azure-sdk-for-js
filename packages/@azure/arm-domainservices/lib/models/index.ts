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
 * An interface representing Resource.
 * The Resource model definition.
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] Resource Id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] Resource type
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} [location] Resource location
   */
  location?: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] Resource tags
   */
  tags?: { [propertyName: string]: string };
  /**
   * @member {string} [etag] Resource etag
   */
  etag?: string;
}

/**
 * @interface
 * An interface representing LdapsSettings.
 * Secure LDAP Settings
 *
 */
export interface LdapsSettings {
  /**
   * @member {Ldaps} [ldaps] A flag to determine whether or not Secure LDAP is
   * enabled or disabled. Possible values include: 'Enabled', 'Disabled'
   */
  ldaps?: Ldaps;
  /**
   * @member {string} [pfxCertificate] The certificate required to configure
   * Secure LDAP. The parameter passed here should be a base64encoded
   * representation of the certificate pfx file.
   */
  pfxCertificate?: string;
  /**
   * @member {string} [pfxCertificatePassword] The password to decrypt the
   * provided Secure LDAP certificate pfx file.
   */
  pfxCertificatePassword?: string;
  /**
   * @member {string} [publicCertificate] Public certificate used to configure
   * secure ldap.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly publicCertificate?: string;
  /**
   * @member {string} [certificateThumbprint] Thumbprint of configure ldaps
   * certificate.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly certificateThumbprint?: string;
  /**
   * @member {Date} [certificateNotAfter] NotAfter DateTime of configure ldaps
   * certificate.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly certificateNotAfter?: Date;
  /**
   * @member {ExternalAccess} [externalAccess] A flag to determine whether or
   * not Secure LDAP access over the internet is enabled or disabled. Possible
   * values include: 'Enabled', 'Disabled'
   */
  externalAccess?: ExternalAccess;
  /**
   * @member {string} [externalAccessIpAddress] External access ip address.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly externalAccessIpAddress?: string;
}

/**
 * @interface
 * An interface representing HealthMonitor.
 * Health Monitor Description
 *
 */
export interface HealthMonitor {
  /**
   * @member {string} [id] Health Monitor Id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Health Monitor Name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [details] Health Monitor Details
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly details?: string;
}

/**
 * @interface
 * An interface representing HealthAlert.
 * Health Alert Description
 *
 */
export interface HealthAlert {
  /**
   * @member {string} [id] Health Alert Id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Health Alert Name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [issue] Health Alert Issue
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly issue?: string;
  /**
   * @member {string} [severity] Health Alert Severity
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly severity?: string;
  /**
   * @member {Date} [raised] Health Alert Raised DateTime
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly raised?: Date;
  /**
   * @member {Date} [lastDetected] Health Alert Last Detected DateTime
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly lastDetected?: Date;
  /**
   * @member {string} [resolutionUri] Health Alert TSG Link
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly resolutionUri?: string;
}

/**
 * @interface
 * An interface representing NotificationSettings.
 * Settings for notification
 *
 */
export interface NotificationSettings {
  /**
   * @member {NotifyGlobalAdmins} [notifyGlobalAdmins] Should global admins be
   * notified. Possible values include: 'Enabled', 'Disabled'
   */
  notifyGlobalAdmins?: NotifyGlobalAdmins;
  /**
   * @member {NotifyDcAdmins} [notifyDcAdmins] Should domain controller admins
   * be notified. Possible values include: 'Enabled', 'Disabled'
   */
  notifyDcAdmins?: NotifyDcAdmins;
  /**
   * @member {string[]} [additionalRecipients] The list of additional
   * recipients
   */
  additionalRecipients?: string[];
}

/**
 * @interface
 * An interface representing DomainSecuritySettings.
 * Domain Security Settings
 *
 */
export interface DomainSecuritySettings {
  /**
   * @member {NtlmV1} [ntlmV1] A flag to determine whether or not NtlmV1 is
   * enabled or disabled. Possible values include: 'Enabled', 'Disabled'
   */
  ntlmV1?: NtlmV1;
  /**
   * @member {TlsV1} [tlsV1] A flag to determine whether or not TlsV1 is
   * enabled or disabled. Possible values include: 'Enabled', 'Disabled'
   */
  tlsV1?: TlsV1;
  /**
   * @member {SyncNtlmPasswords} [syncNtlmPasswords] A flag to determine
   * whether or not SyncNtlmPasswords is enabled or disabled. Possible values
   * include: 'Enabled', 'Disabled'
   */
  syncNtlmPasswords?: SyncNtlmPasswords;
}

/**
 * @interface
 * An interface representing DomainService.
 * Domain service.
 *
 * @extends Resource
 */
export interface DomainService extends Resource {
  /**
   * @member {string} [tenantId] Azure Active Directory tenant id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly tenantId?: string;
  /**
   * @member {string} [domainName] The name of the Azure domain that the user
   * would like to deploy Domain Services to.
   */
  domainName?: string;
  /**
   * @member {string} [vnetSiteId] Virtual network site id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly vnetSiteId?: string;
  /**
   * @member {string} [subnetId] The name of the virtual network that Domain
   * Services will be deployed on. The id of the subnet that Domain Services
   * will be deployed on. /virtualNetwork/vnetName/subnets/subnetName.
   */
  subnetId?: string;
  /**
   * @member {LdapsSettings} [ldapsSettings] Secure LDAP Settings
   */
  ldapsSettings?: LdapsSettings;
  /**
   * @member {Date} [healthLastEvaluated] Last domain evaluation run DateTime
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly healthLastEvaluated?: Date;
  /**
   * @member {HealthMonitor[]} [healthMonitors] List of Domain Health Monitors
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly healthMonitors?: HealthMonitor[];
  /**
   * @member {HealthAlert[]} [healthAlerts] List of Domain Health Alerts
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly healthAlerts?: HealthAlert[];
  /**
   * @member {NotificationSettings} [notificationSettings] Notification
   * Settings
   */
  notificationSettings?: NotificationSettings;
  /**
   * @member {DomainSecuritySettings} [domainSecuritySettings] DomainSecurity
   * Settings
   */
  domainSecuritySettings?: DomainSecuritySettings;
  /**
   * @member {FilteredSync} [filteredSync] Enabled or Disabled flag to turn on
   * Group-based filtered sync. Possible values include: 'Enabled', 'Disabled'
   */
  filteredSync?: FilteredSync;
  /**
   * @member {string[]} [domainControllerIpAddress] List of Domain Controller
   * IP Address
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly domainControllerIpAddress?: string[];
  /**
   * @member {string} [serviceStatus] Status of Domain Service instance
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly serviceStatus?: string;
  /**
   * @member {string} [provisioningState] the current deployment or
   * provisioning state, which only appears in the response.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: string;
}

/**
 * @interface
 * An interface representing OperationDisplayInfo.
 * The operation supported by Domain Services.
 *
 */
export interface OperationDisplayInfo {
  /**
   * @member {string} [description] The description of the operation.
   */
  description?: string;
  /**
   * @member {string} [operation] The action that users can perform, based on
   * their permission level.
   */
  operation?: string;
  /**
   * @member {string} [provider] Service provider: Domain Services.
   */
  provider?: string;
  /**
   * @member {string} [resource] Resource on which the operation is performed.
   */
  resource?: string;
}

/**
 * @interface
 * An interface representing OperationEntity.
 * The operation supported by Domain Services.
 *
 */
export interface OperationEntity {
  /**
   * @member {string} [name] Operation name: {provider}/{resource}/{operation}.
   */
  name?: string;
  /**
   * @member {OperationDisplayInfo} [display] The operation supported by Domain
   * Services.
   */
  display?: OperationDisplayInfo;
  /**
   * @member {string} [origin] The origin of the operation.
   */
  origin?: string;
}

/**
 * @interface
 * An interface representing DomainservicesManagementClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface DomainservicesManagementClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the OperationEntityListResult.
 * The list of domain service operation response.
 *
 * @extends Array<OperationEntity>
 */
export interface OperationEntityListResult extends Array<OperationEntity> {
  /**
   * @member {string} [nextLink] The continuation token for the next page of
   * results.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * An interface representing the DomainServiceListResult.
 * The response from the List Domain Services operation.
 *
 * @extends Array<DomainService>
 */
export interface DomainServiceListResult extends Array<DomainService> {
  /**
   * @member {string} [nextLink] The continuation token for the next page of
   * results.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nextLink?: string;
}

/**
 * Defines values for Ldaps.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type Ldaps = 'Enabled' | 'Disabled';

/**
 * Defines values for ExternalAccess.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type ExternalAccess = 'Enabled' | 'Disabled';

/**
 * Defines values for NotifyGlobalAdmins.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type NotifyGlobalAdmins = 'Enabled' | 'Disabled';

/**
 * Defines values for NotifyDcAdmins.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type NotifyDcAdmins = 'Enabled' | 'Disabled';

/**
 * Defines values for NtlmV1.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type NtlmV1 = 'Enabled' | 'Disabled';

/**
 * Defines values for TlsV1.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type TlsV1 = 'Enabled' | 'Disabled';

/**
 * Defines values for SyncNtlmPasswords.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type SyncNtlmPasswords = 'Enabled' | 'Disabled';

/**
 * Defines values for FilteredSync.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type FilteredSync = 'Enabled' | 'Disabled';

/**
 * Contains response data for the list operation.
 */
export type DomainServiceOperationsListResponse = OperationEntityListResult & {
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
      parsedBody: OperationEntityListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type DomainServiceOperationsListNextResponse = OperationEntityListResult & {
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
      parsedBody: OperationEntityListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type DomainServicesListResponse = DomainServiceListResult & {
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
      parsedBody: DomainServiceListResult;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type DomainServicesListByResourceGroupResponse = DomainServiceListResult & {
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
      parsedBody: DomainServiceListResult;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type DomainServicesCreateOrUpdateResponse = DomainService & {
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
      parsedBody: DomainService;
    };
};

/**
 * Contains response data for the get operation.
 */
export type DomainServicesGetResponse = DomainService & {
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
      parsedBody: DomainService;
    };
};

/**
 * Contains response data for the deleteMethod operation.
 */
export type DomainServicesDeleteMethodResponse = DomainService & {
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
      parsedBody: DomainService;
    };
};

/**
 * Contains response data for the update operation.
 */
export type DomainServicesUpdateResponse = DomainService & {
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
      parsedBody: DomainService;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type DomainServicesBeginCreateOrUpdateResponse = DomainService & {
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
      parsedBody: DomainService;
    };
};

/**
 * Contains response data for the beginDeleteMethod operation.
 */
export type DomainServicesBeginDeleteMethodResponse = DomainService & {
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
      parsedBody: DomainService;
    };
};

/**
 * Contains response data for the beginUpdate operation.
 */
export type DomainServicesBeginUpdateResponse = DomainService & {
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
      parsedBody: DomainService;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type DomainServicesListNextResponse = DomainServiceListResult & {
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
      parsedBody: DomainServiceListResult;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type DomainServicesListByResourceGroupNextResponse = DomainServiceListResult & {
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
      parsedBody: DomainServiceListResult;
    };
};
