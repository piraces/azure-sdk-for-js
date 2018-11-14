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

export const SkuName: msRest.CompositeMapper = {
  serializedName: "SkuName",
  type: {
    name: "Composite",
    className: "SkuName",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SkuProperty: msRest.CompositeMapper = {
  serializedName: "SkuProperty",
  type: {
    name: "Composite",
    className: "SkuProperty",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SkuRestriction: msRest.CompositeMapper = {
  serializedName: "SkuRestriction",
  type: {
    name: "Composite",
    className: "SkuRestriction",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      values: {
        serializedName: "values",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      reasonCode: {
        serializedName: "reasonCode",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Catalog: msRest.CompositeMapper = {
  serializedName: "Catalog",
  type: {
    name: "Composite",
    className: "Catalog",
    modelProperties: {
      resourceType: {
        readOnly: true,
        serializedName: "resourceType",
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
      terms: {
        readOnly: true,
        serializedName: "terms",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      locations: {
        readOnly: true,
        serializedName: "locations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      skuProperties: {
        readOnly: true,
        serializedName: "skuProperties",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SkuProperty"
            }
          }
        }
      },
      restrictions: {
        readOnly: true,
        serializedName: "restrictions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SkuRestriction"
            }
          }
        }
      }
    }
  }
};

export const ExtendedStatusInfo: msRest.CompositeMapper = {
  serializedName: "ExtendedStatusInfo",
  type: {
    name: "Composite",
    className: "ExtendedStatusInfo",
    modelProperties: {
      statusCode: {
        serializedName: "statusCode",
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

export const ReservationSplitProperties: msRest.CompositeMapper = {
  serializedName: "ReservationSplitProperties",
  type: {
    name: "Composite",
    className: "ReservationSplitProperties",
    modelProperties: {
      splitDestinations: {
        serializedName: "splitDestinations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      splitSource: {
        serializedName: "splitSource",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ReservationMergeProperties: msRest.CompositeMapper = {
  serializedName: "ReservationMergeProperties",
  type: {
    name: "Composite",
    className: "ReservationMergeProperties",
    modelProperties: {
      mergeDestination: {
        serializedName: "mergeDestination",
        type: {
          name: "String"
        }
      },
      mergeSources: {
        serializedName: "mergeSources",
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

export const ReservationProperties: msRest.CompositeMapper = {
  serializedName: "ReservationProperties",
  type: {
    name: "Composite",
    className: "ReservationProperties",
    modelProperties: {
      reservedResourceType: {
        serializedName: "reservedResourceType",
        type: {
          name: "String"
        }
      },
      instanceFlexibility: {
        serializedName: "instanceFlexibility",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      appliedScopes: {
        serializedName: "appliedScopes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      appliedScopeType: {
        serializedName: "appliedScopeType",
        type: {
          name: "String"
        }
      },
      quantity: {
        serializedName: "quantity",
        type: {
          name: "Number"
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      effectiveDateTime: {
        serializedName: "effectiveDateTime",
        type: {
          name: "DateTime"
        }
      },
      lastUpdatedDateTime: {
        readOnly: true,
        serializedName: "lastUpdatedDateTime",
        type: {
          name: "DateTime"
        }
      },
      expiryDate: {
        serializedName: "expiryDate",
        type: {
          name: "Date"
        }
      },
      skuDescription: {
        serializedName: "skuDescription",
        type: {
          name: "String"
        }
      },
      extendedStatusInfo: {
        serializedName: "extendedStatusInfo",
        type: {
          name: "Composite",
          className: "ExtendedStatusInfo"
        }
      },
      splitProperties: {
        serializedName: "splitProperties",
        type: {
          name: "Composite",
          className: "ReservationSplitProperties"
        }
      },
      mergeProperties: {
        serializedName: "mergeProperties",
        type: {
          name: "Composite",
          className: "ReservationMergeProperties"
        }
      }
    }
  }
};

export const ReservationResponse: msRest.CompositeMapper = {
  serializedName: "ReservationResponse",
  type: {
    name: "Composite",
    className: "ReservationResponse",
    modelProperties: {
      location: {
        readOnly: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      etag: {
        serializedName: "etag",
        type: {
          name: "Number"
        }
      },
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
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "SkuName"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ReservationProperties"
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

export const ReservationOrderResponse: msRest.CompositeMapper = {
  serializedName: "ReservationOrderResponse",
  type: {
    name: "Composite",
    className: "ReservationOrderResponse",
    modelProperties: {
      etag: {
        serializedName: "etag",
        type: {
          name: "Number"
        }
      },
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
      displayName: {
        serializedName: "properties.displayName",
        type: {
          name: "String"
        }
      },
      requestDateTime: {
        serializedName: "properties.requestDateTime",
        type: {
          name: "DateTime"
        }
      },
      createdDateTime: {
        serializedName: "properties.createdDateTime",
        type: {
          name: "DateTime"
        }
      },
      expiryDate: {
        serializedName: "properties.expiryDate",
        type: {
          name: "Date"
        }
      },
      originalQuantity: {
        serializedName: "properties.originalQuantity",
        type: {
          name: "Number"
        }
      },
      term: {
        serializedName: "properties.term",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      reservations: {
        serializedName: "properties.reservations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ReservationResponse"
            }
          }
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

export const MergeRequest: msRest.CompositeMapper = {
  serializedName: "MergeRequest",
  type: {
    name: "Composite",
    className: "MergeRequest",
    modelProperties: {
      sources: {
        serializedName: "properties.sources",
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

export const Patch: msRest.CompositeMapper = {
  serializedName: "Patch",
  type: {
    name: "Composite",
    className: "Patch",
    modelProperties: {
      appliedScopeType: {
        serializedName: "properties.appliedScopeType",
        type: {
          name: "String"
        }
      },
      appliedScopes: {
        serializedName: "properties.appliedScopes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      instanceFlexibility: {
        serializedName: "properties.instanceFlexibility",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "properties.name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SplitRequest: msRest.CompositeMapper = {
  serializedName: "SplitRequest",
  type: {
    name: "Composite",
    className: "SplitRequest",
    modelProperties: {
      quantities: {
        serializedName: "properties.quantities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      reservationId: {
        serializedName: "properties.reservationId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExtendedErrorInfo: msRest.CompositeMapper = {
  serializedName: "ExtendedErrorInfo",
  type: {
    name: "Composite",
    className: "ExtendedErrorInfo",
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

export const ErrorModel: msRest.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ExtendedErrorInfo"
        }
      }
    }
  }
};

export const AppliedReservationList: msRest.CompositeMapper = {
  serializedName: "AppliedReservationList",
  type: {
    name: "Composite",
    className: "AppliedReservationList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
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

export const AppliedReservations: msRest.CompositeMapper = {
  serializedName: "AppliedReservations",
  type: {
    name: "Composite",
    className: "AppliedReservations",
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
      },
      reservationOrderIds: {
        serializedName: "properties.reservationOrderIds",
        type: {
          name: "Composite",
          className: "AppliedReservationList"
        }
      }
    }
  }
};

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "OperationDisplay",
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
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationResponse: msRest.CompositeMapper = {
  serializedName: "OperationResponse",
  type: {
    name: "Composite",
    className: "OperationResponse",
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

export const ReservationOrderList: msRest.CompositeMapper = {
  serializedName: "ReservationOrderList",
  type: {
    name: "Composite",
    className: "ReservationOrderList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ReservationOrderResponse"
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

export const ReservationList: msRest.CompositeMapper = {
  serializedName: "ReservationList",
  type: {
    name: "Composite",
    className: "ReservationList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ReservationResponse"
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

export const OperationList: msRest.CompositeMapper = {
  serializedName: "OperationList",
  type: {
    name: "Composite",
    className: "OperationList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationResponse"
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
