define({ "api": [
  {
    "type": "get",
    "url": "v1/shopping",
    "title": "v1/shopping",
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
    "description": "<p>Air Shop</p>",
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
            "description": "<p>from(iata-code) ex. ICN</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "legs.to",
            "description": "<p>to(iata-code) ex. BCN</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "legs.departureDate",
            "description": "<p>departureDate ex.YYYY-MM-DD</p>"
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
            "description": "<p>cabinClass ex) [&quot;economy&quot;]</p>"
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
            "type": "String[]",
            "allowedValues": [
              "\"1G\"",
              "\"SBP\""
            ],
            "optional": false,
            "field": "provider",
            "description": ""
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
            "description": "<p>PassengerTypeCode of ADT</p>"
          }
        ]
      }
    },
    "filename": "src/routes/v1/air/shopping.ts",
    "groupTitle": "AIR",
    "sampleRequest": [
      {
        "url": "https://api-dev.smartbookingplus.comv1/shopping"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/air/reservations",
    "title": "",
    "version": "1.0.1",
    "name": "get_reservations",
    "group": "Air",
    "permission": [
      {
        "name": "public"
      }
    ],
    "description": "<p>조회</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>조회 타입 (예: &quot;holiday&quot;).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>&quot;success&quot; or &quot;fail&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>JSON Array of Dates</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthenticationRequired",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/routes/v1/air/getReservations.ts",
    "groupTitle": "Air",
    "sampleRequest": [
      {
        "url": "https://api-dev.smartbookingplus.com/v1/air/reservations"
      }
    ]
  }
] });
