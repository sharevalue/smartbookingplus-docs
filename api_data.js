define({ "api": [
  {
    "type": "post",
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
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"routeType\": \"RT\",\n  \"legs\": [\n      {\n          \"from\": \"ICN\",\n          \"to\": \"SFO\",\n          \"departureDate\": \"2023-04-21\",\n      },\n      {\n          \"from\": \"SFO\",\n          \"to\": \"ICN\",\n          \"departureDate\": \"2023-04-27\",\n      }\n  ],\n  \"cabins\": [\n      \"economy\"\n  ],\n  \"passengers\": {\n      \"ADT\": 1\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"OW\"",
              "\"RT\"",
              "\"MD\""
            ],
            "optional": false,
            "field": "routeType",
            "description": "<p>OW = One-way, RT=Round-trip, MD=Multi-way</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "legs",
            "description": "<p>max-length = 3</p>"
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
            "type": "Object[]",
            "optional": false,
            "field": "passengers",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "passengers.ADT",
            "description": "<p>Number of Adults</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "passengers.CHD",
            "description": "<p>Number of Child</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "passengers.INF",
            "description": "<p>Number of Infant</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"ADT\"",
              "\"LBR\""
            ],
            "optional": true,
            "field": "passengerType",
            "defaultValue": "ADT",
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
