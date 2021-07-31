define({ "api": [
  {
    "type": "post",
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
            "optional": true,
            "field": "sessionToken",
            "description": "<p>sessionToken.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "siteId",
            "description": "<p>Site ID.</p>"
          },
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
            "description": "<p>검색여정 타입</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "legs",
            "description": "<p>여정</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "legs.from",
            "description": "<p>여정 출발지</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "legs.to",
            "description": "<p>여정 도착지</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "legs.departureDate",
            "description": "<p>여정 출발일</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "cabins",
            "description": "<p>캐빈 클래스, &quot;economy&quot;, &quot;premiumEconomy&quot;, &quot;business&quot;, &quot;first&quot;</p>"
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
            "type": "String",
            "optional": false,
            "field": "passengers.ADT",
            "description": "<p>Number of Adults</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "solutionResult",
            "description": "<p>solutionResult</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "faresOnly",
            "description": "<p>faresOnly</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "pricing",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"KRW\""
            ],
            "optional": false,
            "field": "pricing.currency",
            "description": "<p>KRW</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"1G\"",
              "\"SBP\""
            ],
            "optional": false,
            "field": "provider",
            "description": "<p>Inventory Provider</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"ADT\"",
              "\"STU\"",
              "\"LBR\""
            ],
            "optional": false,
            "field": "passengerType",
            "description": "<p>PassengerTypeCode of ADT</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"routeType\": \"RT\",\n  \"legs\": [\n      {\n          \"from\": \"ICN\",\n          \"to\": \"HAN\",\n          \"departureDate\": \"2022-01-12\",\n          \"fromName\": \"인천\",\n          \"toName\": \"하노이\",\n          \"departureCountryName\": \"South Korea\",\n          \"arriveCountryName\": \"Vietnam\"\n      },\n      {\n          \"from\": \"HAN\",\n          \"to\": \"ICN\",\n          \"departureDate\": \"2022-01-19\",\n          \"fromName\": \"하노이\",\n          \"toName\": \"인천\",\n          \"departureCountryName\": \"Vietnam\",\n          \"arriveCountryName\": \"South Korea\"\n      }\n  ],\n  \"cabins\": [\n      \"economy\"\n  ],\n  \"passengers\": {\n      \"ADT\": 1\n  },\n  \"solutionResult\": false,\n  \"faresOnly\": false,\n  \"pricing\": {\n      \"currency\": \"KRW\"\n  },\n  \"provider\": \"1G\",\n  \"passengerType\": \"ADT\",\n  \"siteId\": \"1\",\n  \"statusStr\": \"성인1 / 일반석 \",\n  \"sessionToken\": \"cf48e0f2ffb763bcacdd18bde3cd7f9cfe67b950c4f02d7b3242c96e0cdcf18b19e64b86c7b2c58d9824701ff09441312de95ea168ad7a09f49daada6c591bf6\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>응답 상태 &quot;success&quot; or &quot;fail&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statusCode",
            "description": "<p>응답 상태 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "env",
            "description": "<p>실행 환경</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>시스템 메세지</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "requestId",
            "description": "<p>요청 고유 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "startingPrice",
            "description": "<p>시작가격</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dataCount",
            "description": "<p>결과 갯수</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>검색결과 Array</p>"
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
            "type": "Number",
            "optional": false,
            "field": "data.requestId",
            "description": "<p>검색 요청 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.from",
            "description": "<p>출발지</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.to",
            "description": "<p>목적지</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthenticationRequired",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoSuchResult",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/app.ts",
    "groupTitle": "AIR",
    "sampleRequest": [
      {
        "url": "https://api.sharevalue.co/shopping"
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
        "url": "https://api.sharevalue.co/config_date"
      }
    ]
  }
] });
