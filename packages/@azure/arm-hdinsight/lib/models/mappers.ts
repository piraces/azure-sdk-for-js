/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const ClusterDefinition: msRest.CompositeMapper = {
  serializedName: "ClusterDefinition",
  type: {
    name: "Composite",
    className: "ClusterDefinition",
    modelProperties: {
      blueprint: {
        serializedName: "blueprint",
        type: {
          name: "String"
        }
      },
      kind: {
        serializedName: "kind",
        type: {
          name: "String"
        }
      },
      componentVersion: {
        serializedName: "componentVersion",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      configurations: {
        serializedName: "configurations",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const SecurityProfile: msRest.CompositeMapper = {
  serializedName: "SecurityProfile",
  type: {
    name: "Composite",
    className: "SecurityProfile",
    modelProperties: {
      directoryType: {
        serializedName: "directoryType",
        type: {
          name: "Enum",
          allowedValues: [
            "ActiveDirectory"
          ]
        }
      },
      domain: {
        serializedName: "domain",
        type: {
          name: "String"
        }
      },
      organizationalUnitDN: {
        serializedName: "organizationalUnitDN",
        type: {
          name: "String"
        }
      },
      ldapsUrls: {
        serializedName: "ldapsUrls",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      domainUsername: {
        serializedName: "domainUsername",
        type: {
          name: "String"
        }
      },
      domainUserPassword: {
        serializedName: "domainUserPassword",
        type: {
          name: "String"
        }
      },
      clusterUsersGroupDNs: {
        serializedName: "clusterUsersGroupDNs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      aaddsResourceId: {
        serializedName: "aaddsResourceId",
        type: {
          name: "String"
        }
      },
      msiResourceId: {
        serializedName: "msiResourceId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HardwareProfile: msRest.CompositeMapper = {
  serializedName: "HardwareProfile",
  type: {
    name: "Composite",
    className: "HardwareProfile",
    modelProperties: {
      vmSize: {
        serializedName: "vmSize",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualNetworkProfile: msRest.CompositeMapper = {
  serializedName: "VirtualNetworkProfile",
  type: {
    name: "Composite",
    className: "VirtualNetworkProfile",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      subnet: {
        serializedName: "subnet",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataDisksGroups: msRest.CompositeMapper = {
  serializedName: "DataDisksGroups",
  type: {
    name: "Composite",
    className: "DataDisksGroups",
    modelProperties: {
      disksPerNode: {
        serializedName: "disksPerNode",
        type: {
          name: "Number"
        }
      },
      storageAccountType: {
        readOnly: true,
        serializedName: "storageAccountType",
        type: {
          name: "String"
        }
      },
      diskSizeGB: {
        readOnly: true,
        serializedName: "diskSizeGB",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SshPublicKey: msRest.CompositeMapper = {
  serializedName: "SshPublicKey",
  type: {
    name: "Composite",
    className: "SshPublicKey",
    modelProperties: {
      certificateData: {
        serializedName: "certificateData",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SshProfile: msRest.CompositeMapper = {
  serializedName: "SshProfile",
  type: {
    name: "Composite",
    className: "SshProfile",
    modelProperties: {
      publicKeys: {
        serializedName: "publicKeys",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SshPublicKey"
            }
          }
        }
      }
    }
  }
};

export const LinuxOperatingSystemProfile: msRest.CompositeMapper = {
  serializedName: "LinuxOperatingSystemProfile",
  type: {
    name: "Composite",
    className: "LinuxOperatingSystemProfile",
    modelProperties: {
      username: {
        serializedName: "username",
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "String"
        }
      },
      sshProfile: {
        serializedName: "sshProfile",
        type: {
          name: "Composite",
          className: "SshProfile"
        }
      }
    }
  }
};

export const OsProfile: msRest.CompositeMapper = {
  serializedName: "OsProfile",
  type: {
    name: "Composite",
    className: "OsProfile",
    modelProperties: {
      linuxOperatingSystemProfile: {
        serializedName: "linuxOperatingSystemProfile",
        type: {
          name: "Composite",
          className: "LinuxOperatingSystemProfile"
        }
      }
    }
  }
};

export const ScriptAction: msRest.CompositeMapper = {
  serializedName: "ScriptAction",
  type: {
    name: "Composite",
    className: "ScriptAction",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      uri: {
        required: true,
        serializedName: "uri",
        type: {
          name: "String"
        }
      },
      parameters: {
        required: true,
        serializedName: "parameters",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Role: msRest.CompositeMapper = {
  serializedName: "Role",
  type: {
    name: "Composite",
    className: "Role",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      minInstanceCount: {
        serializedName: "minInstanceCount",
        type: {
          name: "Number"
        }
      },
      targetInstanceCount: {
        serializedName: "targetInstanceCount",
        type: {
          name: "Number"
        }
      },
      hardwareProfile: {
        serializedName: "hardwareProfile",
        type: {
          name: "Composite",
          className: "HardwareProfile"
        }
      },
      osProfile: {
        serializedName: "osProfile",
        type: {
          name: "Composite",
          className: "OsProfile"
        }
      },
      virtualNetworkProfile: {
        serializedName: "virtualNetworkProfile",
        type: {
          name: "Composite",
          className: "VirtualNetworkProfile"
        }
      },
      dataDisksGroups: {
        serializedName: "dataDisksGroups",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataDisksGroups"
            }
          }
        }
      },
      scriptActions: {
        serializedName: "scriptActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ScriptAction"
            }
          }
        }
      }
    }
  }
};

export const ComputeProfile: msRest.CompositeMapper = {
  serializedName: "ComputeProfile",
  type: {
    name: "Composite",
    className: "ComputeProfile",
    modelProperties: {
      roles: {
        serializedName: "roles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Role"
            }
          }
        }
      }
    }
  }
};

export const StorageAccount: msRest.CompositeMapper = {
  serializedName: "StorageAccount",
  type: {
    name: "Composite",
    className: "StorageAccount",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      isDefault: {
        serializedName: "isDefault",
        type: {
          name: "Boolean"
        }
      },
      container: {
        serializedName: "container",
        type: {
          name: "String"
        }
      },
      fileSystem: {
        serializedName: "fileSystem",
        type: {
          name: "String"
        }
      },
      key: {
        serializedName: "key",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const StorageProfile: msRest.CompositeMapper = {
  serializedName: "StorageProfile",
  type: {
    name: "Composite",
    className: "StorageProfile",
    modelProperties: {
      storageaccounts: {
        serializedName: "storageaccounts",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "StorageAccount"
            }
          }
        }
      }
    }
  }
};

export const ClusterCreateProperties: msRest.CompositeMapper = {
  serializedName: "ClusterCreateProperties",
  type: {
    name: "Composite",
    className: "ClusterCreateProperties",
    modelProperties: {
      clusterVersion: {
        serializedName: "clusterVersion",
        type: {
          name: "String"
        }
      },
      osType: {
        serializedName: "osType",
        type: {
          name: "Enum",
          allowedValues: [
            "Windows",
            "Linux"
          ]
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "Enum",
          allowedValues: [
            "Standard",
            "Premium"
          ]
        }
      },
      clusterDefinition: {
        serializedName: "clusterDefinition",
        type: {
          name: "Composite",
          className: "ClusterDefinition"
        }
      },
      securityProfile: {
        serializedName: "securityProfile",
        type: {
          name: "Composite",
          className: "SecurityProfile"
        }
      },
      computeProfile: {
        serializedName: "computeProfile",
        type: {
          name: "Composite",
          className: "ComputeProfile"
        }
      },
      storageProfile: {
        serializedName: "storageProfile",
        type: {
          name: "Composite",
          className: "StorageProfile"
        }
      }
    }
  }
};

export const ClusterIdentityUserAssignedIdentitiesValue: msRest.CompositeMapper = {
  serializedName: "ClusterIdentity_userAssignedIdentitiesValue",
  type: {
    name: "Composite",
    className: "ClusterIdentityUserAssignedIdentitiesValue",
    modelProperties: {
      principalId: {
        readOnly: true,
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      clientId: {
        readOnly: true,
        serializedName: "clientId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ClusterIdentity: msRest.CompositeMapper = {
  serializedName: "ClusterIdentity",
  type: {
    name: "Composite",
    className: "ClusterIdentity",
    modelProperties: {
      principalId: {
        readOnly: true,
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      tenantId: {
        readOnly: true,
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None"
          ]
        }
      },
      userAssignedIdentities: {
        serializedName: "userAssignedIdentities",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className: "ClusterIdentityUserAssignedIdentitiesValue"
            }
          }
        }
      }
    }
  }
};

export const ClusterCreateParametersExtended: msRest.CompositeMapper = {
  serializedName: "ClusterCreateParametersExtended",
  type: {
    name: "Composite",
    className: "ClusterCreateParametersExtended",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ClusterCreateProperties"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ClusterIdentity"
        }
      }
    }
  }
};

export const ClusterPatchParameters: msRest.CompositeMapper = {
  serializedName: "ClusterPatchParameters",
  type: {
    name: "Composite",
    className: "ClusterPatchParameters",
    modelProperties: {
      tags: {
        nullable: true,
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const QuotaInfo: msRest.CompositeMapper = {
  serializedName: "QuotaInfo",
  type: {
    name: "Composite",
    className: "QuotaInfo",
    modelProperties: {
      coresUsed: {
        serializedName: "coresUsed",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Errors: msRest.CompositeMapper = {
  serializedName: "Errors",
  type: {
    name: "Composite",
    className: "Errors",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConnectivityEndpoint: msRest.CompositeMapper = {
  serializedName: "ConnectivityEndpoint",
  type: {
    name: "Composite",
    className: "ConnectivityEndpoint",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      protocol: {
        serializedName: "protocol",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      port: {
        serializedName: "port",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ClusterGetProperties: msRest.CompositeMapper = {
  serializedName: "ClusterGetProperties",
  type: {
    name: "Composite",
    className: "ClusterGetProperties",
    modelProperties: {
      clusterVersion: {
        serializedName: "clusterVersion",
        type: {
          name: "String"
        }
      },
      osType: {
        serializedName: "osType",
        type: {
          name: "Enum",
          allowedValues: [
            "Windows",
            "Linux"
          ]
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "Enum",
          allowedValues: [
            "Standard",
            "Premium"
          ]
        }
      },
      clusterDefinition: {
        required: true,
        serializedName: "clusterDefinition",
        type: {
          name: "Composite",
          className: "ClusterDefinition"
        }
      },
      securityProfile: {
        serializedName: "securityProfile",
        type: {
          name: "Composite",
          className: "SecurityProfile"
        }
      },
      computeProfile: {
        serializedName: "computeProfile",
        type: {
          name: "Composite",
          className: "ComputeProfile"
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        type: {
          name: "Enum",
          allowedValues: [
            "InProgress",
            "Failed",
            "Succeeded",
            "Canceled",
            "Deleting"
          ]
        }
      },
      createdDate: {
        serializedName: "createdDate",
        type: {
          name: "String"
        }
      },
      clusterState: {
        serializedName: "clusterState",
        type: {
          name: "String"
        }
      },
      quotaInfo: {
        serializedName: "quotaInfo",
        type: {
          name: "Composite",
          className: "QuotaInfo"
        }
      },
      errors: {
        serializedName: "errors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Errors"
            }
          }
        }
      },
      connectivityEndpoints: {
        serializedName: "connectivityEndpoints",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ConnectivityEndpoint"
            }
          }
        }
      }
    }
  }
};

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrackedResource: msRest.CompositeMapper = {
  serializedName: "TrackedResource",
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const Cluster: msRest.CompositeMapper = {
  serializedName: "Cluster",
  type: {
    name: "Composite",
    className: "Cluster",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ClusterGetProperties"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ClusterIdentity"
        }
      }
    }
  }
};

export const RuntimeScriptAction: msRest.CompositeMapper = {
  serializedName: "RuntimeScriptAction",
  type: {
    name: "Composite",
    className: "RuntimeScriptAction",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      uri: {
        required: true,
        serializedName: "uri",
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "String"
        }
      },
      roles: {
        required: true,
        serializedName: "roles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      applicationName: {
        readOnly: true,
        serializedName: "applicationName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExecuteScriptActionParameters: msRest.CompositeMapper = {
  serializedName: "ExecuteScriptActionParameters",
  type: {
    name: "Composite",
    className: "ExecuteScriptActionParameters",
    modelProperties: {
      scriptActions: {
        serializedName: "scriptActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RuntimeScriptAction"
            }
          }
        }
      },
      persistOnSuccess: {
        required: true,
        serializedName: "persistOnSuccess",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ClusterListPersistedScriptActionsResult: msRest.CompositeMapper = {
  serializedName: "ClusterListPersistedScriptActionsResult",
  type: {
    name: "Composite",
    className: "ClusterListPersistedScriptActionsResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RuntimeScriptAction"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ScriptActionExecutionSummary: msRest.CompositeMapper = {
  serializedName: "ScriptActionExecutionSummary",
  type: {
    name: "Composite",
    className: "ScriptActionExecutionSummary",
    modelProperties: {
      status: {
        readOnly: true,
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      instanceCount: {
        readOnly: true,
        serializedName: "instanceCount",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const RuntimeScriptActionDetail: msRest.CompositeMapper = {
  serializedName: "RuntimeScriptActionDetail",
  type: {
    name: "Composite",
    className: "RuntimeScriptActionDetail",
    modelProperties: {
      ...RuntimeScriptAction.type.modelProperties,
      scriptExecutionId: {
        readOnly: true,
        serializedName: "scriptExecutionId",
        type: {
          name: "Number"
        }
      },
      startTime: {
        readOnly: true,
        serializedName: "startTime",
        type: {
          name: "String"
        }
      },
      endTime: {
        readOnly: true,
        serializedName: "endTime",
        type: {
          name: "String"
        }
      },
      status: {
        readOnly: true,
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      operation: {
        readOnly: true,
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      executionSummary: {
        readOnly: true,
        serializedName: "executionSummary",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ScriptActionExecutionSummary"
            }
          }
        }
      },
      debugInformation: {
        readOnly: true,
        serializedName: "debugInformation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ClusterListRuntimeScriptActionDetailResult: msRest.CompositeMapper = {
  serializedName: "ClusterListRuntimeScriptActionDetailResult",
  type: {
    name: "Composite",
    className: "ClusterListRuntimeScriptActionDetailResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RuntimeScriptActionDetail"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ClusterResizeParameters: msRest.CompositeMapper = {
  serializedName: "ClusterResizeParameters",
  type: {
    name: "Composite",
    className: "ClusterResizeParameters",
    modelProperties: {
      targetInstanceCount: {
        serializedName: "targetInstanceCount",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const OperationResource: msRest.CompositeMapper = {
  serializedName: "OperationResource",
  type: {
    name: "Composite",
    className: "OperationResource",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "Enum",
          allowedValues: [
            "InProgress",
            "Succeeded",
            "Failed"
          ]
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "Errors"
        }
      }
    }
  }
};

export const ProxyResource: msRest.CompositeMapper = {
  serializedName: "ProxyResource",
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties
    }
  }
};

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApplicationGetHttpsEndpoint: msRest.CompositeMapper = {
  serializedName: "ApplicationGetHttpsEndpoint",
  type: {
    name: "Composite",
    className: "ApplicationGetHttpsEndpoint",
    modelProperties: {
      accessModes: {
        serializedName: "accessModes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      destinationPort: {
        serializedName: "destinationPort",
        type: {
          name: "Number"
        }
      },
      publicPort: {
        serializedName: "publicPort",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ApplicationGetEndpoint: msRest.CompositeMapper = {
  serializedName: "ApplicationGetEndpoint",
  type: {
    name: "Composite",
    className: "ApplicationGetEndpoint",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      destinationPort: {
        serializedName: "destinationPort",
        type: {
          name: "Number"
        }
      },
      publicPort: {
        serializedName: "publicPort",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ApplicationProperties: msRest.CompositeMapper = {
  serializedName: "ApplicationProperties",
  type: {
    name: "Composite",
    className: "ApplicationProperties",
    modelProperties: {
      computeProfile: {
        serializedName: "computeProfile",
        type: {
          name: "Composite",
          className: "ComputeProfile"
        }
      },
      installScriptActions: {
        serializedName: "installScriptActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RuntimeScriptAction"
            }
          }
        }
      },
      uninstallScriptActions: {
        serializedName: "uninstallScriptActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RuntimeScriptAction"
            }
          }
        }
      },
      httpsEndpoints: {
        serializedName: "httpsEndpoints",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApplicationGetHttpsEndpoint"
            }
          }
        }
      },
      sshEndpoints: {
        serializedName: "sshEndpoints",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApplicationGetEndpoint"
            }
          }
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      applicationType: {
        serializedName: "applicationType",
        type: {
          name: "String"
        }
      },
      applicationState: {
        readOnly: true,
        serializedName: "applicationState",
        type: {
          name: "String"
        }
      },
      errors: {
        serializedName: "errors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Errors"
            }
          }
        }
      },
      createdDate: {
        readOnly: true,
        serializedName: "createdDate",
        type: {
          name: "String"
        }
      },
      marketplaceIdentifier: {
        readOnly: true,
        serializedName: "marketplaceIdentifier",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Application: msRest.CompositeMapper = {
  serializedName: "Application",
  type: {
    name: "Composite",
    className: "Application",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ApplicationProperties"
        }
      }
    }
  }
};

export const LocalizedName: msRest.CompositeMapper = {
  serializedName: "LocalizedName",
  type: {
    name: "Composite",
    className: "LocalizedName",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      localizedValue: {
        serializedName: "localizedValue",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Usage: msRest.CompositeMapper = {
  serializedName: "Usage",
  type: {
    name: "Composite",
    className: "Usage",
    modelProperties: {
      unit: {
        serializedName: "unit",
        type: {
          name: "String"
        }
      },
      currentValue: {
        serializedName: "currentValue",
        type: {
          name: "Number"
        }
      },
      limit: {
        serializedName: "limit",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "Composite",
          className: "LocalizedName"
        }
      }
    }
  }
};

export const UsagesListResult: msRest.CompositeMapper = {
  serializedName: "UsagesListResult",
  type: {
    name: "Composite",
    className: "UsagesListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Usage"
            }
          }
        }
      }
    }
  }
};

export const Extension: msRest.CompositeMapper = {
  serializedName: "Extension",
  type: {
    name: "Composite",
    className: "Extension",
    modelProperties: {
      workspaceId: {
        serializedName: "workspaceId",
        type: {
          name: "String"
        }
      },
      primaryKey: {
        serializedName: "primaryKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ClusterMonitoringResponse: msRest.CompositeMapper = {
  serializedName: "ClusterMonitoringResponse",
  type: {
    name: "Composite",
    className: "ClusterMonitoringResponse",
    modelProperties: {
      clusterMonitoringEnabled: {
        serializedName: "clusterMonitoringEnabled",
        type: {
          name: "Boolean"
        }
      },
      workspaceId: {
        serializedName: "workspaceId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ClusterMonitoringRequest: msRest.CompositeMapper = {
  serializedName: "ClusterMonitoringRequest",
  type: {
    name: "Composite",
    className: "ClusterMonitoringRequest",
    modelProperties: {
      workspaceId: {
        serializedName: "workspaceId",
        type: {
          name: "String"
        }
      },
      primaryKey: {
        serializedName: "primaryKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ScriptActionPersistedGetResponseSpec: msRest.CompositeMapper = {
  serializedName: "ScriptActionPersistedGetResponseSpec",
  type: {
    name: "Composite",
    className: "ScriptActionPersistedGetResponseSpec",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      uri: {
        serializedName: "uri",
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "String"
        }
      },
      roles: {
        serializedName: "roles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      applicationName: {
        serializedName: "applicationName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "Operation_display",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      }
    }
  }
};

export const ClusterListResult: msRest.CompositeMapper = {
  serializedName: "ClusterListResult",
  type: {
    name: "Composite",
    className: "ClusterListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Cluster"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApplicationListResult: msRest.CompositeMapper = {
  serializedName: "ApplicationListResult",
  type: {
    name: "Composite",
    className: "ApplicationListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Application"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ScriptActionsList: msRest.CompositeMapper = {
  serializedName: "ScriptActionsList",
  type: {
    name: "Composite",
    className: "ScriptActionsList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RuntimeScriptActionDetail"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ScriptActionExecutionHistoryList: msRest.CompositeMapper = {
  serializedName: "ScriptActionExecutionHistoryList",
  type: {
    name: "Composite",
    className: "ScriptActionExecutionHistoryList",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RuntimeScriptActionDetail"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationListResult: msRest.CompositeMapper = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};
