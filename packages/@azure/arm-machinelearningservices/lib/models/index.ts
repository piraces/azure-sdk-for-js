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
 * Display name of operation
 *
 */
export interface OperationDisplay {
  /**
   * @member {string} [provider] The resource provider name:
   * Microsoft.MachineLearningExperimentation
   */
  provider?: string;
  /**
   * @member {string} [resource] The resource on which the operation is
   * performed.
   */
  resource?: string;
  /**
   * @member {string} [operation] The operation that users can perform.
   */
  operation?: string;
  /**
   * @member {string} [description] The description for the operation.
   */
  description?: string;
}

/**
 * @interface
 * An interface representing Operation.
 * Azure Machine Learning workspace REST API operation
 *
 */
export interface Operation {
  /**
   * @member {string} [name] Operation name: {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * @member {OperationDisplay} [display] Display name of operation
   */
  display?: OperationDisplay;
}

/**
 * @interface
 * An interface representing Resource.
 * Azure Resource Manager resource envelope.
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] Specifies the resource ID.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Specifies the name of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {Identity} [identity] The identity of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly identity?: Identity;
  /**
   * @member {string} [location] Specifies the location of the resource.
   */
  location?: string;
  /**
   * @member {string} [type] Specifies the type of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] Contains resource tags
   * defined as key/value pairs.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing Workspace.
 * An object that represents a machine learning workspace.
 *
 * @extends Resource
 */
export interface Workspace extends Resource {
  /**
   * @member {string} [workspaceId] The immutable id associated with this
   * workspace.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly workspaceId?: string;
  /**
   * @member {string} [description] The description of this workspace.
   */
  description?: string;
  /**
   * @member {string} [friendlyName] The friendly name for this workspace. This
   * name in mutable
   */
  friendlyName?: string;
  /**
   * @member {Date} [creationTime] The creation time of the machine learning
   * workspace in ISO8601 format.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly creationTime?: Date;
  /**
   * @member {string} [batchaiWorkspace] ARM id of the Batch AI workspace
   * associated with this workspace. This cannot be changed once the workspace
   * has been created
   */
  batchaiWorkspace?: string;
  /**
   * @member {string} [keyVault] ARM id of the key vault associated with this
   * workspace. This cannot be changed once the workspace has been created
   */
  keyVault?: string;
  /**
   * @member {string} [applicationInsights] ARM id of the application insights
   * associated with this workspace. This cannot be changed once the workspace
   * has been created
   */
  applicationInsights?: string;
  /**
   * @member {string} [containerRegistry] ARM id of the container registry
   * associated with this workspace. This cannot be changed once the workspace
   * has been created
   */
  containerRegistry?: string;
  /**
   * @member {string} [storageAccount] ARM id of the storage account associated
   * with this workspace. This cannot be changed once the workspace has been
   * created
   */
  storageAccount?: string;
  /**
   * @member {string} [discoveryUrl] Url for the discovery service to identify
   * regional endpoints for machine learning experimentation services
   */
  discoveryUrl?: string;
  /**
   * @member {ProvisioningState} [provisioningState] The current deployment
   * state of workspace resource. The provisioningState is to indicate states
   * for resource provisioning. Possible values include: 'Unknown', 'Updating',
   * 'Creating', 'Deleting', 'Succeeded', 'Failed', 'Canceled'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: ProvisioningState;
}

/**
 * @interface
 * An interface representing WorkspaceUpdateParameters.
 * The parameters for updating a machine learning workspace.
 *
 */
export interface WorkspaceUpdateParameters {
  /**
   * @member {{ [propertyName: string]: string }} [tags] The resource tags for
   * the machine learning workspace.
   */
  tags?: { [propertyName: string]: string };
  /**
   * @member {string} [description] The description of this workspace.
   */
  description?: string;
  /**
   * @member {string} [friendlyName] The friendly name for this workspace.
   */
  friendlyName?: string;
}

/**
 * @interface
 * An interface representing Identity.
 * Identity for the resource.
 *
 */
export interface Identity {
  /**
   * @member {string} [principalId] The principal ID of resource identity.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly principalId?: string;
  /**
   * @member {string} [tenantId] The tenant ID of resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly tenantId?: string;
  /**
   * @member {ResourceIdentityType} [type] The identity type. Possible values
   * include: 'SystemAssigned'
   */
  type?: ResourceIdentityType;
}

/**
 * @interface
 * An interface representing Password.
 */
export interface Password {
  /**
   * @member {string} [name] **NOTE: This property will not be serialized. It
   * can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [value] **NOTE: This property will not be serialized. It
   * can only be populated by the server.**
   */
  readonly value?: string;
}

/**
 * @interface
 * An interface representing RegistryListCredentialsResult.
 */
export interface RegistryListCredentialsResult {
  /**
   * @member {string} [location] **NOTE: This property will not be serialized.
   * It can only be populated by the server.**
   */
  readonly location?: string;
  /**
   * @member {string} [username] **NOTE: This property will not be serialized.
   * It can only be populated by the server.**
   */
  readonly username?: string;
  /**
   * @member {Password[]} [passwords]
   */
  passwords?: Password[];
}

/**
 * @interface
 * An interface representing ListWorkspaceKeysResult.
 */
export interface ListWorkspaceKeysResult {
  /**
   * @member {string} [userStorageKey] **NOTE: This property will not be
   * serialized. It can only be populated by the server.**
   */
  readonly userStorageKey?: string;
  /**
   * @member {string} [userStorageResourceId] **NOTE: This property will not be
   * serialized. It can only be populated by the server.**
   */
  readonly userStorageResourceId?: string;
  /**
   * @member {string} [appInsightsInstrumentationKey] **NOTE: This property
   * will not be serialized. It can only be populated by the server.**
   */
  readonly appInsightsInstrumentationKey?: string;
  /**
   * @member {RegistryListCredentialsResult} [containerRegistryCredentials]
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly containerRegistryCredentials?: RegistryListCredentialsResult;
}

/**
 * @interface
 * An interface representing ErrorDetail.
 * Error detail information.
 *
 */
export interface ErrorDetail {
  /**
   * @member {string} code Error code.
   */
  code: string;
  /**
   * @member {string} message Error message.
   */
  message: string;
}

/**
 * @interface
 * An interface representing ErrorResponse.
 * Error response information.
 *
 */
export interface ErrorResponse {
  /**
   * @member {string} code Error code.
   */
  code: string;
  /**
   * @member {string} message Error message.
   */
  message: string;
  /**
   * @member {ErrorDetail[]} [details] An array of error detail objects.
   */
  details?: ErrorDetail[];
}

/**
 * @interface
 * An interface representing MachineLearningServiceError.
 * Wrapper for error response to follow ARM guidelines.
 *
 */
export interface MachineLearningServiceError {
  /**
   * @member {ErrorResponse} [error] The error response.
   */
  error?: ErrorResponse;
}

/**
 * Contains the possible cases for Compute.
 */
export type ComputeUnion = Compute | AKS | BatchAI | VirtualMachine | HDInsight | DataFactory;

/**
 * @interface
 * An interface representing Compute.
 * Machine Learning compute object.
 *
 */
export interface Compute {
  /**
   * @member {string} computeType Polymorphic Discriminator
   */
  computeType: "Compute";
  /**
   * @member {string} [computeLocation] Location for the underlying compute
   */
  computeLocation?: string;
  /**
   * @member {ProvisioningState} [provisioningState] The provision state of the
   * cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and
   * Failed. Possible values include: 'Unknown', 'Updating', 'Creating',
   * 'Deleting', 'Succeeded', 'Failed', 'Canceled'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * @member {string} [description] The description of the Machine Learning
   * compute.
   */
  description?: string;
  /**
   * @member {Date} [createdOn] The date and time when the compute was created.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly createdOn?: Date;
  /**
   * @member {Date} [modifiedOn] The date and time when the compute was last
   * modified.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly modifiedOn?: Date;
  /**
   * @member {string} [resourceId] ARM resource id of the compute
   */
  resourceId?: string;
  /**
   * @member {MachineLearningServiceError[]} [provisioningErrors] Errors during
   * provisioning
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningErrors?: MachineLearningServiceError[];
}

/**
 * @interface
 * An interface representing ComputeResource.
 * Machine Learning compute object wrapped into ARM resource envelope.
 *
 * @extends Resource
 */
export interface ComputeResource extends Resource {
  /**
   * @member {ComputeUnion} [properties] Compute properties
   */
  properties?: ComputeUnion;
}

/**
 * @interface
 * An interface representing SystemService.
 * A system service running on a compute.
 *
 */
export interface SystemService {
  /**
   * @member {string} [systemServiceType] The type of this system service.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly systemServiceType?: string;
  /**
   * @member {string} [publicIpAddress] Public IP address
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly publicIpAddress?: string;
  /**
   * @member {string} [version] The version for this type.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly version?: string;
}

/**
 * @interface
 * An interface representing SslConfiguration.
 * The ssl configugation for scoring
 *
 */
export interface SslConfiguration {
  /**
   * @member {Status} [status] Enable or disable ssl for scoring. Possible
   * values include: 'Disabled', 'Enabled'
   */
  status?: Status;
  /**
   * @member {string} [cert] Cert data
   */
  cert?: string;
  /**
   * @member {string} [key] Key data
   */
  key?: string;
  /**
   * @member {string} [cname] CNAME of the cert
   */
  cname?: string;
}

/**
 * @interface
 * An interface representing AKSProperties.
 * AKS properties
 *
 */
export interface AKSProperties {
  /**
   * @member {string} [clusterFqdn] Cluster full qualified domain name
   */
  clusterFqdn?: string;
  /**
   * @member {SystemService[]} [systemServices] System services
   */
  systemServices?: SystemService[];
  /**
   * @member {number} [agentCount] Number of agents
   */
  agentCount?: number;
  /**
   * @member {string} [agentVMSize] Agent virtual machine size
   */
  agentVMSize?: string;
  /**
   * @member {SslConfiguration} [sslConfiguration] SSL configuration
   */
  sslConfiguration?: SslConfiguration;
}

/**
 * @interface
 * An interface representing AKS.
 * A Machine Learning compute based on AKS.
 *
 */
export interface AKS {
  /**
   * @member {string} computeType Polymorphic Discriminator
   */
  computeType: "AKS";
  /**
   * @member {string} [computeLocation] Location for the underlying compute
   */
  computeLocation?: string;
  /**
   * @member {ProvisioningState} [provisioningState] The provision state of the
   * cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and
   * Failed. Possible values include: 'Unknown', 'Updating', 'Creating',
   * 'Deleting', 'Succeeded', 'Failed', 'Canceled'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * @member {string} [description] The description of the Machine Learning
   * compute.
   */
  description?: string;
  /**
   * @member {Date} [createdOn] The date and time when the compute was created.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly createdOn?: Date;
  /**
   * @member {Date} [modifiedOn] The date and time when the compute was last
   * modified.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly modifiedOn?: Date;
  /**
   * @member {string} [resourceId] ARM resource id of the compute
   */
  resourceId?: string;
  /**
   * @member {MachineLearningServiceError[]} [provisioningErrors] Errors during
   * provisioning
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningErrors?: MachineLearningServiceError[];
  /**
   * @member {AKSProperties} [properties] AKS properties
   */
  properties?: AKSProperties;
}

/**
 * @interface
 * An interface representing ScaleSettings.
 * scale settings for BatchAI Compute
 *
 */
export interface ScaleSettings {
  /**
   * @member {number} [maxNodeCount] Max number of nodes to use
   */
  maxNodeCount?: number;
  /**
   * @member {number} [minNodeCount] Min number of nodes to use
   */
  minNodeCount?: number;
  /**
   * @member {boolean} [autoScaleEnabled] Enable or disable auto scale
   */
  autoScaleEnabled?: boolean;
}

/**
 * @interface
 * An interface representing BatchAIProperties.
 * BatchAI properties
 *
 */
export interface BatchAIProperties {
  /**
   * @member {string} [vmSize] Virtual Machine Size
   */
  vmSize?: string;
  /**
   * @member {string} [vmPriority] Virtual Machine priority
   */
  vmPriority?: string;
  /**
   * @member {ScaleSettings} [scaleSettings] Scale settings for BatchAI
   */
  scaleSettings?: ScaleSettings;
}

/**
 * @interface
 * An interface representing BatchAI.
 * A Machine Learning compute based on Azure BatchAI.
 *
 */
export interface BatchAI {
  /**
   * @member {string} computeType Polymorphic Discriminator
   */
  computeType: "BatchAI";
  /**
   * @member {string} [computeLocation] Location for the underlying compute
   */
  computeLocation?: string;
  /**
   * @member {ProvisioningState} [provisioningState] The provision state of the
   * cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and
   * Failed. Possible values include: 'Unknown', 'Updating', 'Creating',
   * 'Deleting', 'Succeeded', 'Failed', 'Canceled'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * @member {string} [description] The description of the Machine Learning
   * compute.
   */
  description?: string;
  /**
   * @member {Date} [createdOn] The date and time when the compute was created.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly createdOn?: Date;
  /**
   * @member {Date} [modifiedOn] The date and time when the compute was last
   * modified.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly modifiedOn?: Date;
  /**
   * @member {string} [resourceId] ARM resource id of the compute
   */
  resourceId?: string;
  /**
   * @member {MachineLearningServiceError[]} [provisioningErrors] Errors during
   * provisioning
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningErrors?: MachineLearningServiceError[];
  /**
   * @member {BatchAIProperties} [properties] BatchAI properties
   */
  properties?: BatchAIProperties;
}

/**
 * @interface
 * An interface representing VirtualMachineSshCredentials.
 * Admin credentials for virtual machine
 *
 */
export interface VirtualMachineSshCredentials {
  /**
   * @member {string} [username] Username of admin account
   */
  username?: string;
  /**
   * @member {string} [password] Password of admin account
   */
  password?: string;
  /**
   * @member {string} [publicKeyData] Public key data
   */
  publicKeyData?: string;
  /**
   * @member {string} [privateKeyData] Private key data
   */
  privateKeyData?: string;
}

/**
 * @interface
 * An interface representing VirtualMachineProperties.
 */
export interface VirtualMachineProperties {
  /**
   * @member {string} [virtualMachineSize] Virtual Machine size
   */
  virtualMachineSize?: string;
  /**
   * @member {number} [sshPort] Port open for ssh connections.
   */
  sshPort?: number;
  /**
   * @member {string} [address] Public IP address of the virtual machine.
   */
  address?: string;
  /**
   * @member {VirtualMachineSshCredentials} [administratorAccount] Admin
   * credentials for virtual machine
   */
  administratorAccount?: VirtualMachineSshCredentials;
}

/**
 * @interface
 * An interface representing VirtualMachine.
 * A Machine Learning compute based on Azure Virtual Machines.
 *
 */
export interface VirtualMachine {
  /**
   * @member {string} computeType Polymorphic Discriminator
   */
  computeType: "VirtualMachine";
  /**
   * @member {string} [computeLocation] Location for the underlying compute
   */
  computeLocation?: string;
  /**
   * @member {ProvisioningState} [provisioningState] The provision state of the
   * cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and
   * Failed. Possible values include: 'Unknown', 'Updating', 'Creating',
   * 'Deleting', 'Succeeded', 'Failed', 'Canceled'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * @member {string} [description] The description of the Machine Learning
   * compute.
   */
  description?: string;
  /**
   * @member {Date} [createdOn] The date and time when the compute was created.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly createdOn?: Date;
  /**
   * @member {Date} [modifiedOn] The date and time when the compute was last
   * modified.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly modifiedOn?: Date;
  /**
   * @member {string} [resourceId] ARM resource id of the compute
   */
  resourceId?: string;
  /**
   * @member {MachineLearningServiceError[]} [provisioningErrors] Errors during
   * provisioning
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningErrors?: MachineLearningServiceError[];
  /**
   * @member {VirtualMachineProperties} [properties]
   */
  properties?: VirtualMachineProperties;
}

/**
 * @interface
 * An interface representing HDInsightProperties.
 */
export interface HDInsightProperties {
  /**
   * @member {number} [sshPort] Port open for ssh connections on the master
   * node of the cluster.
   */
  sshPort?: number;
  /**
   * @member {string} [address] Public IP address of the master node of the
   * cluster.
   */
  address?: string;
  /**
   * @member {VirtualMachineSshCredentials} [administratorAccount] Admin
   * credentials for master node of the cluster
   */
  administratorAccount?: VirtualMachineSshCredentials;
}

/**
 * @interface
 * An interface representing HDInsight.
 * A HDInsight compute.
 *
 */
export interface HDInsight {
  /**
   * @member {string} computeType Polymorphic Discriminator
   */
  computeType: "HDInsight";
  /**
   * @member {string} [computeLocation] Location for the underlying compute
   */
  computeLocation?: string;
  /**
   * @member {ProvisioningState} [provisioningState] The provision state of the
   * cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and
   * Failed. Possible values include: 'Unknown', 'Updating', 'Creating',
   * 'Deleting', 'Succeeded', 'Failed', 'Canceled'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * @member {string} [description] The description of the Machine Learning
   * compute.
   */
  description?: string;
  /**
   * @member {Date} [createdOn] The date and time when the compute was created.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly createdOn?: Date;
  /**
   * @member {Date} [modifiedOn] The date and time when the compute was last
   * modified.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly modifiedOn?: Date;
  /**
   * @member {string} [resourceId] ARM resource id of the compute
   */
  resourceId?: string;
  /**
   * @member {MachineLearningServiceError[]} [provisioningErrors] Errors during
   * provisioning
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningErrors?: MachineLearningServiceError[];
  /**
   * @member {HDInsightProperties} [properties]
   */
  properties?: HDInsightProperties;
}

/**
 * @interface
 * An interface representing DataFactory.
 * A DataFactory compute.
 *
 */
export interface DataFactory {
  /**
   * @member {string} computeType Polymorphic Discriminator
   */
  computeType: "DataFactory";
  /**
   * @member {string} [computeLocation] Location for the underlying compute
   */
  computeLocation?: string;
  /**
   * @member {ProvisioningState} [provisioningState] The provision state of the
   * cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and
   * Failed. Possible values include: 'Unknown', 'Updating', 'Creating',
   * 'Deleting', 'Succeeded', 'Failed', 'Canceled'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * @member {string} [description] The description of the Machine Learning
   * compute.
   */
  description?: string;
  /**
   * @member {Date} [createdOn] The date and time when the compute was created.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly createdOn?: Date;
  /**
   * @member {Date} [modifiedOn] The date and time when the compute was last
   * modified.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly modifiedOn?: Date;
  /**
   * @member {string} [resourceId] ARM resource id of the compute
   */
  resourceId?: string;
  /**
   * @member {MachineLearningServiceError[]} [provisioningErrors] Errors during
   * provisioning
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningErrors?: MachineLearningServiceError[];
}

/**
 * @interface
 * An interface representing ServicePrincipalCredentials.
 * Service principal credentials.
 *
 */
export interface ServicePrincipalCredentials {
  /**
   * @member {string} clientId Client Id
   */
  clientId: string;
  /**
   * @member {string} clientSecret Client secret
   */
  clientSecret: string;
}

/**
 * Contains the possible cases for ComputeSecrets.
 */
export type ComputeSecretsUnion = ComputeSecrets | AksComputeSecrets | VirtualMachineSecrets;

/**
 * @interface
 * An interface representing ComputeSecrets.
 * Secrets related to a Machine Learning compute. Might differ for every type
 * of compute.
 *
 */
export interface ComputeSecrets {
  /**
   * @member {string} computeType Polymorphic Discriminator
   */
  computeType: "ComputeSecrets";
}

/**
 * @interface
 * An interface representing AksComputeSecrets.
 * Secrets related to a Machine Learning compute based on AKS.
 *
 */
export interface AksComputeSecrets {
  /**
   * @member {string} computeType Polymorphic Discriminator
   */
  computeType: "AKS";
  /**
   * @member {string} [userKubeConfig] Content of kubeconfig file that can be
   * used to connect to the Kubernetes cluster.
   */
  userKubeConfig?: string;
  /**
   * @member {string} [adminKubeConfig] Content of kubeconfig file that can be
   * used to connect to the Kubernetes cluster.
   */
  adminKubeConfig?: string;
  /**
   * @member {string} [imagePullSecretName] Image registry pull secret.
   */
  imagePullSecretName?: string;
}

/**
 * @interface
 * An interface representing VirtualMachineSecrets.
 * Secrets related to a Machine Learning compute based on AKS.
 *
 */
export interface VirtualMachineSecrets {
  /**
   * @member {string} computeType Polymorphic Discriminator
   */
  computeType: "VirtualMachine";
  /**
   * @member {VirtualMachineSshCredentials} [administratorAccount] Admin
   * creadentials for virtual machine.
   */
  administratorAccount?: VirtualMachineSshCredentials;
}

/**
 * @interface
 * An interface representing WorkspacesListByResourceGroupOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface WorkspacesListByResourceGroupOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [skiptoken] Continuation token for pagination.
   */
  skiptoken?: string;
}

/**
 * @interface
 * An interface representing WorkspacesListBySubscriptionOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface WorkspacesListBySubscriptionOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [skiptoken] Continuation token for pagination.
   */
  skiptoken?: string;
}

/**
 * @interface
 * An interface representing MachineLearningComputeListByWorkspaceOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface MachineLearningComputeListByWorkspaceOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [skiptoken] Continuation token for pagination.
   */
  skiptoken?: string;
}

/**
 * @interface
 * An interface representing AzureMachineLearningWorkspacesOptions.
 * @extends AzureServiceClientOptions
 */
export interface AzureMachineLearningWorkspacesOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}

/**
 * @interface
 * An interface representing MachineLearningComputeCreateOrUpdateHeaders.
 * Defines headers for CreateOrUpdate operation.
 *
 */
export interface MachineLearningComputeCreateOrUpdateHeaders {
  /**
   * @member {string} [azureAsyncOperation] URI to poll for asynchronous
   * operation status.
   */
  azureAsyncOperation: string;
}

/**
 * @interface
 * An interface representing MachineLearningComputeDeleteHeaders.
 * Defines headers for Delete operation.
 *
 */
export interface MachineLearningComputeDeleteHeaders {
  /**
   * @member {string} [azureAsyncOperation] URI to poll for asynchronous
   * operation status.
   */
  azureAsyncOperation: string;
  /**
   * @member {string} [location] URI to poll for asynchronous operation result.
   */
  location: string;
}

/**
 * @interface
 * An interface representing MachineLearningComputeSystemUpdateHeaders.
 * Defines headers for SystemUpdate operation.
 *
 */
export interface MachineLearningComputeSystemUpdateHeaders {
  /**
   * @member {string} [azureAsyncOperation] URI to poll for asynchronous
   * operation status.
   */
  azureAsyncOperation: string;
  /**
   * @member {string} [location] URI to poll for asynchronous operation result.
   */
  location: string;
}


/**
 * @interface
 * An interface representing the OperationListResult.
 * An array of operations supported by the resource provider.
 *
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
}

/**
 * @interface
 * An interface representing the WorkspaceListResult.
 * The result of a request to list machine learning workspaces.
 *
 * @extends Array<Workspace>
 */
export interface WorkspaceListResult extends Array<Workspace> {
  /**
   * @member {string} [nextLink] The URI that can be used to request the next
   * list of machine learning workspaces.
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing the PaginatedComputeResourcesList.
 * Paginated list of Machine Learning compute objects wrapped in ARM resource
 * envelope.
 *
 * @extends Array<ComputeResource>
 */
export interface PaginatedComputeResourcesList extends Array<ComputeResource> {
  /**
   * @member {string} [nextLink] A continuation link (absolute URI) to the next
   * page of results in the list.
   */
  nextLink?: string;
}

/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Unknown', 'Updating', 'Creating', 'Deleting', 'Succeeded', 'Failed',
 * 'Canceled'
 * @readonly
 * @enum {string}
 */
export type ProvisioningState = 'Unknown' | 'Updating' | 'Creating' | 'Deleting' | 'Succeeded' | 'Failed' | 'Canceled';

/**
 * Defines values for ResourceIdentityType.
 * Possible values include: 'SystemAssigned'
 * @readonly
 * @enum {string}
 */
export type ResourceIdentityType = 'SystemAssigned';

/**
 * Defines values for ComputeType.
 * Possible values include: 'AKS', 'BatchAI', 'DataFactory', 'VirtualMachine', 'HDInsight'
 * @readonly
 * @enum {string}
 */
export type ComputeType = 'AKS' | 'BatchAI' | 'DataFactory' | 'VirtualMachine' | 'HDInsight';

/**
 * Defines values for Status.
 * Possible values include: 'Disabled', 'Enabled'
 * @readonly
 * @enum {string}
 */
export type Status = 'Disabled' | 'Enabled';

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
 * Contains response data for the get operation.
 */
export type WorkspacesGetResponse = Workspace & {
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
      parsedBody: Workspace;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type WorkspacesCreateOrUpdateResponse = Workspace & {
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
      parsedBody: Workspace;
    };
};

/**
 * Contains response data for the update operation.
 */
export type WorkspacesUpdateResponse = Workspace & {
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
      parsedBody: Workspace;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type WorkspacesListByResourceGroupResponse = WorkspaceListResult & {
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
      parsedBody: WorkspaceListResult;
    };
};

/**
 * Contains response data for the listKeys operation.
 */
export type WorkspacesListKeysResponse = ListWorkspaceKeysResult & {
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
      parsedBody: ListWorkspaceKeysResult;
    };
};

/**
 * Contains response data for the listBySubscription operation.
 */
export type WorkspacesListBySubscriptionResponse = WorkspaceListResult & {
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
      parsedBody: WorkspaceListResult;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type WorkspacesListByResourceGroupNextResponse = WorkspaceListResult & {
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
      parsedBody: WorkspaceListResult;
    };
};

/**
 * Contains response data for the listBySubscriptionNext operation.
 */
export type WorkspacesListBySubscriptionNextResponse = WorkspaceListResult & {
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
      parsedBody: WorkspaceListResult;
    };
};

/**
 * Contains response data for the listByWorkspace operation.
 */
export type MachineLearningComputeListByWorkspaceResponse = PaginatedComputeResourcesList & {
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
      parsedBody: PaginatedComputeResourcesList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type MachineLearningComputeGetResponse = ComputeResource & {
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
      parsedBody: ComputeResource;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type MachineLearningComputeCreateOrUpdateResponse = ComputeResource & MachineLearningComputeCreateOrUpdateHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: MachineLearningComputeCreateOrUpdateHeaders;
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ComputeResource;
    };
};

/**
 * Contains response data for the deleteMethod operation.
 */
export type MachineLearningComputeDeleteResponse = MachineLearningComputeDeleteHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: MachineLearningComputeDeleteHeaders;
    };
};

/**
 * Contains response data for the systemUpdate operation.
 */
export type MachineLearningComputeSystemUpdateResponse = MachineLearningComputeSystemUpdateHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: MachineLearningComputeSystemUpdateHeaders;
    };
};

/**
 * Contains response data for the listKeys operation.
 */
export type MachineLearningComputeListKeysResponse = ComputeSecretsUnion & {
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
      parsedBody: ComputeSecretsUnion;
    };
};

/**
 * Contains response data for the listByWorkspaceNext operation.
 */
export type MachineLearningComputeListByWorkspaceNextResponse = PaginatedComputeResourcesList & {
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
      parsedBody: PaginatedComputeResourcesList;
    };
};
