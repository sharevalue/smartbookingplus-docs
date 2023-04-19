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
          "content": "{\n  \"routeType\": \"RT\",\n  \"legs\": [\n      {\n          \"from\": \"ICN\",\n          \"to\": \"SFO\",\n          \"departureDate\": \"2023-04-21\"\n      },\n      {\n          \"from\": \"SFO\",\n          \"to\": \"ICN\",\n          \"departureDate\": \"2023-04-27\"\n      }\n  ],\n  \"cabins\": [\n      \"economy\"\n  ],\n  \"passengers\": {\n      \"ADT\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "body": [
      {
        "group": "Body",
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
        "group": "Body",
        "type": "Object[]",
        "optional": false,
        "field": "legs",
        "description": "<p>Max-length = 3</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "legs.from",
        "description": "<p>From(IATA-CODE) ex. ICN</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "legs.to",
        "description": "<p>To(IATA-CODE) ex. BCN</p>"
      },
      {
        "group": "Body",
        "type": "Date",
        "optional": false,
        "field": "legs.departureDate",
        "description": "<p>DepartureDate ex.YYYY-MM-DD</p>"
      },
      {
        "group": "Body",
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
        "group": "Body",
        "type": "Object[]",
        "optional": false,
        "field": "passengers",
        "description": ""
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "passengers[ADT]",
        "description": "<p>Number of Adults</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": true,
        "field": "passengers[CHD]",
        "description": "<p>Number of Children</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": true,
        "field": "passengers[INF]",
        "description": "<p>Number of Infants</p>"
      },
      {
        "group": "Body",
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
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;success&quot; or &quot;fail&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statusCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "env",
            "description": "<p>environment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Shopping Result Array</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.uniqKey",
            "description": "<p>SBP 운임 구분용 키</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.maxStops",
            "description": "<p>최대 경유 횟수</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.requestId",
            "description": "<p>검색 요청 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.from",
            "description": "<p>출발지</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.to",
            "description": "<p>목적지</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.solutionResult",
            "description": "<p>명확한 운임 결과 표시 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.platingCarrier",
            "description": "<p>판매 항공사 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.platingCarrierName",
            "description": "<p>항공사명</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.totalPrice",
            "description": "<p>총금액</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.basePrice",
            "description": "<p>운임</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.taxes",
            "description": "<p>세금</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.directions",
            "description": "<p>여정정보</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.from",
            "description": "<p>출발지</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.to",
            "description": "<p>도착지</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.platingCarrier",
            "description": "<p>항공사 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.directions.segments",
            "description": "<p>세그먼트</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.from",
            "description": "<p>출발지</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.to",
            "description": "<p>도착지</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.departure",
            "description": "<p>출발일시</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.arrival",
            "description": "<p>도착일시</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.airline",
            "description": "<p>항공사 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.airlineName",
            "description": "<p>항공사 명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.flightNumber",
            "description": "<p>편명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.uapi_segment_ref",
            "description": "<p>uAPI 세그먼트 Ref ID (구)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.uapiSegmentReference",
            "description": "<p>uAPI 세그먼트 Ref ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.isCodeshare",
            "description": "<p>코드쉐어 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.directions.segments.details",
            "description": "<p>운항상세</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.details.origin",
            "description": "<p>출발 공항</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.details.originTerminal",
            "description": "<p>출발 터미널</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.details.destination",
            "description": "<p>도착 공항</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.details.destinationTerminal",
            "description": "<p>도착 터미널</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.details.departure",
            "description": "<p>출발일시</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.details.flightTime",
            "description": "<p>비행시간</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.details.travelTime",
            "description": "<p>여정시간</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.details.equipment",
            "description": "<p>기재</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.serviceClass",
            "description": "<p>서비스 등급 Economy, Business. ..</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "data.directions.segments.plane",
            "description": "<p>기재 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "data.directions.segments.planeName",
            "description": "<p>기재 명</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "data.directions.segments.duration",
            "description": "<p>비행시간</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "data.directions.segments.techStops",
            "description": "<p>중간기착</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.bookingClass",
            "description": "<p>예약 등급 (YBM...)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.directions.segments.baggage",
            "description": "<p>수하물</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.baggage.units",
            "description": "<p>단위</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.directions.segments.baggage.amount",
            "description": "<p>수량</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.fareBasisCode",
            "description": "<p>운임 FareBasis 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.fareRuleKey",
            "description": "<p>uAPI 용 운임규정 조회 키</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.bookingComponents",
            "description": "<p>bookingComponents</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.bookingComponents.totalPrice",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.bookingComponents.basePrice",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.bookingComponents.taxes",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.bookingComponents.uapi_fare_reference",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.passengerFares",
            "description": "<p>passengerFares</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.passengerFares.ADT.totalPrice",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.passengerFares.ADT.basePrice",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.passengerFares.ADT.taxes",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.passengerFares.ADT.tasf",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.passengerCounts",
            "description": "<p>passengerCounts</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.passengerCounts.ADT",
            "description": "<p>성인 수량</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.fareInfo",
            "description": "<p>fareInfo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.fareInfo.latestTicketingTime",
            "description": "<p>발권 TL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.fareInfo.eTicketability",
            "description": "<p>전자항공권발권가능여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.fareInfo.refundable",
            "description": "<p>환불가능여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.fareInfo.changePenalty",
            "description": "<p>변경 패널티</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.fareInfo.changePenalty.amount",
            "description": "<p>패널티 금액</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.fareInfo.changePenalty.penaltyApplies",
            "description": "<p>패널티 규정</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.fareInfo.cancelPenalty",
            "description": "<p>취소 패널티</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.fareInfo.cancelPenalty.amount",
            "description": "<p>패널티 금액</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.fareInfo.cancelPenalty.penaltyApplies",
            "description": "<p>패널티 규정</p>"
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
