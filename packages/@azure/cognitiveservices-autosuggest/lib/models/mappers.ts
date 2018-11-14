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


export const ResponseBase: msRest.CompositeMapper = {
  serializedName: "ResponseBase",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "_type",
      clientName: "_type"
    },
    uberParent: "ResponseBase",
    className: "ResponseBase",
    modelProperties: {
      _type: {
        required: true,
        serializedName: "_type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Identifiable: msRest.CompositeMapper = {
  serializedName: "Identifiable",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Identifiable",
    modelProperties: {
      ...ResponseBase.type.modelProperties,
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Response: msRest.CompositeMapper = {
  serializedName: "Response",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Response",
    modelProperties: {
      ...Identifiable.type.modelProperties,
      readLink: {
        readOnly: true,
        serializedName: "readLink",
        type: {
          name: "String"
        }
      },
      webSearchUrl: {
        readOnly: true,
        serializedName: "webSearchUrl",
        type: {
          name: "String"
        }
      },
      potentialAction: {
        readOnly: true,
        serializedName: "potentialAction",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Action"
            }
          }
        }
      },
      immediateAction: {
        readOnly: true,
        serializedName: "immediateAction",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Action"
            }
          }
        }
      },
      preferredClickthroughUrl: {
        readOnly: true,
        serializedName: "preferredClickthroughUrl",
        type: {
          name: "String"
        }
      },
      adaptiveCard: {
        readOnly: true,
        serializedName: "adaptiveCard",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Thing: msRest.CompositeMapper = {
  serializedName: "Thing",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Thing",
    modelProperties: {
      ...Response.type.modelProperties,
      url: {
        readOnly: true,
        serializedName: "url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreativeWork: msRest.CompositeMapper = {
  serializedName: "CreativeWork",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "CreativeWork",
    modelProperties: {
      ...Thing.type.modelProperties,
      thumbnailUrl: {
        readOnly: true,
        serializedName: "thumbnailUrl",
        type: {
          name: "String"
        }
      },
      about: {
        readOnly: true,
        serializedName: "about",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Thing"
            }
          }
        }
      },
      mentions: {
        readOnly: true,
        serializedName: "mentions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Thing"
            }
          }
        }
      },
      provider: {
        readOnly: true,
        serializedName: "provider",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Thing"
            }
          }
        }
      },
      creator: {
        readOnly: true,
        serializedName: "creator",
        type: {
          name: "Composite",
          className: "Thing"
        }
      },
      text: {
        readOnly: true,
        serializedName: "text",
        type: {
          name: "String"
        }
      },
      discussionUrl: {
        readOnly: true,
        serializedName: "discussionUrl",
        type: {
          name: "String"
        }
      },
      commentCount: {
        readOnly: true,
        serializedName: "commentCount",
        type: {
          name: "Number"
        }
      },
      mainEntity: {
        readOnly: true,
        serializedName: "mainEntity",
        type: {
          name: "Composite",
          className: "Thing"
        }
      },
      headLine: {
        readOnly: true,
        serializedName: "headLine",
        type: {
          name: "String"
        }
      },
      copyrightHolder: {
        readOnly: true,
        serializedName: "copyrightHolder",
        type: {
          name: "Composite",
          className: "Thing"
        }
      },
      copyrightYear: {
        readOnly: true,
        serializedName: "copyrightYear",
        type: {
          name: "Number"
        }
      },
      disclaimer: {
        readOnly: true,
        serializedName: "disclaimer",
        type: {
          name: "String"
        }
      },
      isAccessibleForFree: {
        readOnly: true,
        serializedName: "isAccessibleForFree",
        type: {
          name: "Boolean"
        }
      },
      genre: {
        readOnly: true,
        serializedName: "genre",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      isFamilyFriendly: {
        readOnly: true,
        serializedName: "isFamilyFriendly",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const Action: msRest.CompositeMapper = {
  serializedName: "Action",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Action",
    modelProperties: {
      ...CreativeWork.type.modelProperties,
      result: {
        readOnly: true,
        serializedName: "result",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Thing"
            }
          }
        }
      },
      displayName: {
        readOnly: true,
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      isTopAction: {
        readOnly: true,
        serializedName: "isTopAction",
        type: {
          name: "Boolean"
        }
      },
      serviceUrl: {
        readOnly: true,
        serializedName: "serviceUrl",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SearchAction: msRest.CompositeMapper = {
  serializedName: "SearchAction",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "SearchAction",
    modelProperties: {
      ...Action.type.modelProperties,
      displayText: {
        readOnly: true,
        serializedName: "displayText",
        type: {
          name: "String"
        }
      },
      query: {
        readOnly: true,
        serializedName: "query",
        type: {
          name: "String"
        }
      },
      searchKind: {
        readOnly: true,
        serializedName: "searchKind",
        defaultValue: 'WebSearch',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SuggestionsSuggestionGroup: msRest.CompositeMapper = {
  serializedName: "Suggestions/SuggestionGroup",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "_type",
      clientName: "_type"
    },
    uberParent: "SuggestionsSuggestionGroup",
    className: "SuggestionsSuggestionGroup",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        defaultValue: 'Unknown',
        type: {
          name: "String"
        }
      },
      searchSuggestions: {
        required: true,
        serializedName: "searchSuggestions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SearchAction"
            }
          }
        }
      },
      _type: {
        required: true,
        serializedName: "_type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Answer: msRest.CompositeMapper = {
  serializedName: "Answer",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Answer",
    modelProperties: {
      ...Response.type.modelProperties
    }
  }
};

export const SearchResultsAnswer: msRest.CompositeMapper = {
  serializedName: "SearchResultsAnswer",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "SearchResultsAnswer",
    modelProperties: {
      ...Answer.type.modelProperties,
      queryContext: {
        readOnly: true,
        serializedName: "queryContext",
        type: {
          name: "Composite",
          className: "QueryContext"
        }
      }
    }
  }
};

export const Suggestions: msRest.CompositeMapper = {
  serializedName: "Suggestions",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Suggestions",
    modelProperties: {
      ...SearchResultsAnswer.type.modelProperties,
      suggestionGroups: {
        required: true,
        serializedName: "suggestionGroups",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SuggestionsSuggestionGroup"
            }
          }
        }
      }
    }
  }
};

export const QueryContext: msRest.CompositeMapper = {
  serializedName: "QueryContext",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "_type",
      clientName: "_type"
    },
    uberParent: "QueryContext",
    className: "QueryContext",
    modelProperties: {
      originalQuery: {
        required: true,
        serializedName: "originalQuery",
        type: {
          name: "String"
        }
      },
      alteredQuery: {
        readOnly: true,
        serializedName: "alteredQuery",
        type: {
          name: "String"
        }
      },
      alterationOverrideQuery: {
        readOnly: true,
        serializedName: "alterationOverrideQuery",
        type: {
          name: "String"
        }
      },
      adultIntent: {
        readOnly: true,
        serializedName: "adultIntent",
        type: {
          name: "Boolean"
        }
      },
      askUserForLocation: {
        readOnly: true,
        serializedName: "askUserForLocation",
        type: {
          name: "Boolean"
        }
      },
      isTransactional: {
        readOnly: true,
        serializedName: "isTransactional",
        type: {
          name: "Boolean"
        }
      },
      _type: {
        required: true,
        serializedName: "_type",
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
    polymorphicDiscriminator: {
      serializedName: "_type",
      clientName: "_type"
    },
    uberParent: "ErrorModel",
    className: "ErrorModel",
    modelProperties: {
      code: {
        required: true,
        serializedName: "code",
        defaultValue: 'None',
        type: {
          name: "String"
        }
      },
      message: {
        required: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      moreDetails: {
        readOnly: true,
        serializedName: "moreDetails",
        type: {
          name: "String"
        }
      },
      parameter: {
        readOnly: true,
        serializedName: "parameter",
        type: {
          name: "String"
        }
      },
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      _type: {
        required: true,
        serializedName: "_type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "ErrorResponse",
    modelProperties: {
      ...Response.type.modelProperties,
      errors: {
        required: true,
        serializedName: "errors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorModel"
            }
          }
        }
      }
    }
  }
};

export const discriminators = {
  'ResponseBase.SearchAction' : SearchAction,
  'Suggestions/SuggestionGroup' : SuggestionsSuggestionGroup,
  'ResponseBase.Suggestions' : Suggestions,
  'QueryContext' : QueryContext,
  'ResponseBase.SearchResultsAnswer' : SearchResultsAnswer,
  'ResponseBase.Answer' : Answer,
  'ResponseBase.Thing' : Thing,
  'ResponseBase.Action' : Action,
  'ResponseBase.Response' : Response,
  'ResponseBase.Identifiable' : Identifiable,
  'Error' : ErrorModel,
  'ResponseBase.ErrorResponse' : ErrorResponse,
  'ResponseBase.CreativeWork' : CreativeWork,
  'ResponseBase' : ResponseBase
};
