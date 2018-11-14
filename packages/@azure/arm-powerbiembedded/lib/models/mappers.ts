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

export const ErrorDetail: msRest.CompositeMapper = {
  serializedName: "ErrorDetail",
  type: {
    name: "Composite",
    className: "ErrorDetail",
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
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorModel: msRest.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
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
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      }
    }
  }
};

export const AzureSku: msRest.CompositeMapper = {
  serializedName: "AzureSku",
  type: {
    name: "Composite",
    className: "AzureSku",
    modelProperties: {
      name: {
        required: true,
        isConstant: true,
        serializedName: "name",
        defaultValue: 'S1',
        type: {
          name: "String"
        }
      },
      tier: {
        required: true,
        isConstant: true,
        serializedName: "tier",
        defaultValue: 'Standard',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WorkspaceCollection: msRest.CompositeMapper = {
  serializedName: "WorkspaceCollection",
  type: {
    name: "Composite",
    className: "WorkspaceCollection",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
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
      sku: {
        isConstant: true,
        serializedName: "sku",
        defaultValue: {},
        type: {
          name: "Composite",
          className: "AzureSku"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const Workspace: msRest.CompositeMapper = {
  serializedName: "Workspace",
  type: {
    name: "Composite",
    className: "Workspace",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const Display: msRest.CompositeMapper = {
  serializedName: "Display",
  type: {
    name: "Composite",
    className: "Display",
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
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      origin: {
        serializedName: "origin",
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
          className: "Display"
        }
      }
    }
  }
};

export const OperationList: msRest.CompositeMapper = {
  serializedName: "OperationList",
  type: {
    name: "Composite",
    className: "OperationList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      }
    }
  }
};

export const WorkspaceCollectionAccessKeys: msRest.CompositeMapper = {
  serializedName: "WorkspaceCollectionAccessKeys",
  type: {
    name: "Composite",
    className: "WorkspaceCollectionAccessKeys",
    modelProperties: {
      key1: {
        serializedName: "key1",
        type: {
          name: "String"
        }
      },
      key2: {
        serializedName: "key2",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WorkspaceCollectionAccessKey: msRest.CompositeMapper = {
  serializedName: "WorkspaceCollectionAccessKey",
  type: {
    name: "Composite",
    className: "WorkspaceCollectionAccessKey",
    modelProperties: {
      keyName: {
        serializedName: "keyName",
        type: {
          name: "Enum",
          allowedValues: [
            "key1",
            "key2"
          ]
        }
      }
    }
  }
};

export const CreateWorkspaceCollectionRequest: msRest.CompositeMapper = {
  serializedName: "CreateWorkspaceCollectionRequest",
  type: {
    name: "Composite",
    className: "CreateWorkspaceCollectionRequest",
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
      sku: {
        isConstant: true,
        serializedName: "sku",
        defaultValue: {},
        type: {
          name: "Composite",
          className: "AzureSku"
        }
      }
    }
  }
};

export const UpdateWorkspaceCollectionRequest: msRest.CompositeMapper = {
  serializedName: "UpdateWorkspaceCollectionRequest",
  type: {
    name: "Composite",
    className: "UpdateWorkspaceCollectionRequest",
    modelProperties: {
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
      sku: {
        isConstant: true,
        serializedName: "sku",
        defaultValue: {},
        type: {
          name: "Composite",
          className: "AzureSku"
        }
      }
    }
  }
};

export const CheckNameRequest: msRest.CompositeMapper = {
  serializedName: "CheckNameRequest",
  type: {
    name: "Composite",
    className: "CheckNameRequest",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        defaultValue: 'Microsoft.PowerBI/workspaceCollections',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameResponse: msRest.CompositeMapper = {
  serializedName: "CheckNameResponse",
  type: {
    name: "Composite",
    className: "CheckNameResponse",
    modelProperties: {
      nameAvailable: {
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
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

export const MigrateWorkspaceCollectionRequest: msRest.CompositeMapper = {
  serializedName: "MigrateWorkspaceCollectionRequest",
  type: {
    name: "Composite",
    className: "MigrateWorkspaceCollectionRequest",
    modelProperties: {
      targetResourceGroup: {
        serializedName: "targetResourceGroup",
        type: {
          name: "String"
        }
      },
      resources: {
        serializedName: "resources",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const WorkspaceCollectionList: msRest.CompositeMapper = {
  serializedName: "WorkspaceCollectionList",
  type: {
    name: "Composite",
    className: "WorkspaceCollectionList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "WorkspaceCollection"
            }
          }
        }
      }
    }
  }
};

export const WorkspaceList: msRest.CompositeMapper = {
  serializedName: "WorkspaceList",
  type: {
    name: "Composite",
    className: "WorkspaceList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Workspace"
            }
          }
        }
      }
    }
  }
};
