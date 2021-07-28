define({ "api": [
  {
    "type": "get",
    "url": "/shopping",
    "title": "",
    "version": "0.1.0",
    "name": "shopping",
    "group": "AIR",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>항공예약</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sessionToken",
            "description": "<p>sessionToken.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "siteId",
            "description": "<p>siteId.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "provider",
            "description": "<p>인벤토리 제공 업체 (예: &quot;1G&quot;, &quot;BX&quot;, &quot;SBP&quot;).</p>"
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
    "filename": "src/app.ts",
    "groupTitle": "AIR",
    "sampleRequest": [
      {
        "url": "https://apidoc.smartbookingplus.com/shopping"
      }
    ]
  },
  {
    "type": "get",
    "url": "/config_date",
    "title": "",
    "version": "0.1.0",
    "name": "get_config_date",
    "group": "Common",
    "permission": [
      {
        "name": "public"
      }
    ],
    "description": "<p>공휴일 등 설정 자료 표시</p>",
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
    "filename": "src/app.ts",
    "groupTitle": "Common",
    "sampleRequest": [
      {
        "url": "https://apidoc.smartbookingplus.com/config_date"
      }
    ]
  }
] });
