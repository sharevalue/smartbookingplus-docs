define({ "api": [
  {
    "type": "get",
    "url": "/v1/shopping",
    "title": "Shopping",
    "version": "1.0.1",
    "name": "shopping",
    "group": "AIR",
    "permission": [
      {
        "name": "token"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer {API_TOKEN}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {API_TOKEN}\"\n}",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"RT\"",
              "\"OW\"",
              "\"MD\""
            ],
            "optional": false,
            "field": "routeType",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "legs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "legs.from",
            "description": "<p>From(IATA-CODE) ex. ICN</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "legs.to",
            "description": "<p>to(IATA-CODE) ex. BCN</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "legs.departureDate",
            "description": "<p>DepartureDate ex.YYYY-MM-DD</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "\"economy\"",
              "\"premiumEconomy\"",
              "\"business\"",
              "\"first\""
            ],
            "optional": false,
            "field": "cabins",
            "description": "<p>CabinClasses ex. [&quot;economy&quot;]</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "passengers",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passengers.ADT",
            "description": "<p>Number of Adults</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passengers.CHD",
            "description": "<p>Number of Child</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passengers.INF",
            "description": "<p>Number of Infant</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "\"1G\"",
              "\"SBP\""
            ],
            "optional": false,
            "field": "provider",
            "description": "<p>ex. [&quot;SBP&quot;]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"ADT\"",
              "\"LBR\""
            ],
            "optional": false,
            "field": "passengerType",
            "description": "<p>PassengerTypeCode of ADT ex. ADT</p>"
          }
        ]
      }
    },
    "filename": "src/routes/v1/air/shopping.ts",
    "groupTitle": "AIR",
    "sampleRequest": [
      {
        "url": "https://api-dev.smartbookingplus.com/v1/shopping"
      }
    ]
  }
] });
