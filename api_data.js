define({ "api": [
  {
    "type": "post",
    "url": "/pricing",
    "title": "/pricing",
    "version": "0.1.0",
    "name": "pricing",
    "group": "AIR",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>항공요금조회</p>",
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
            "optional": true,
            "field": "provider",
            "description": "<p>provider</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "requestId",
            "description": "<p>requestId</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "segments",
            "description": "<p>항공편 정보 (segments내에서 출발지, 경유지, 도착지 등 나열하며, 최소 1개 필수)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "segments.from",
            "description": "<p>출발공항코드(ex.ICN)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "segments.to",
            "description": "<p>도착공항코드(ex.HKG)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "segments.group",
            "description": "<p>그룹정보</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "segments.departure",
            "description": "<p>출발일시(ex.2022-05-10T19:45:00.000+09:00)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "segments.arrival",
            "description": "<p>도착일시(ex.2022-05-10T22:30:00.000+08:00)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "segments.airline",
            "description": "<p>항공사(ex.KE)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "segments.flightNumber",
            "description": "<p>항공편(ex.607)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.uapi_segment_ref",
            "description": "<p>uapi_segment_ref</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.uapiSegmentReference",
            "description": "<p>uapiSegmentReference</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "segments.plane",
            "description": "<p>plane (equipment와 동일할 수 있음, ex.789)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.serviceClass",
            "description": "<p>서비스 클래스 (ex.First, Business and Economy, etc.)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.duration",
            "description": "<p>duration (segments.details.flightTime/segments.details.travelTime 와 동일할 수 있음, ex.225)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.techStops",
            "description": "<p>techStops</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "segments.bookingClass",
            "description": "<p>bookingClass (ex. H)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.fareBasisCode",
            "description": "<p>fareBasisCode(ex.HLE0ZRKC)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.fareRuleKey",
            "description": "<p>fareRuleKey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.segmentUniqKey",
            "description": "<p>segmentUniqKey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.planeName",
            "description": "<p>planeName(ex.Boeing 787-9)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.airlineName",
            "description": "<p>airlineName(ex.대한항공)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "segments.connectionTime",
            "description": "<p>connectionTime(ex.0)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.fromAirportNameKo",
            "description": "<p>출발공항한국어명(ex.인천)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.toAirportNameKo",
            "description": "<p>도착공항한국어명(ex.홍콩)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "segments.baggage",
            "description": "<p>수하물정보</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.baggage.units",
            "description": "<p>수하물단위(ex.piece)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.baggage.amount",
            "description": "<p>수하물개수(ex.amount)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "segments.details",
            "description": "<p>details</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.details.origin",
            "description": "<p>최초 출발공항코드(ex.ICN)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.details.originTerminal",
            "description": "<p>최초 출발공항터미널(ex.2)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.details.destination",
            "description": "<p>목적지 공항코드(ex.HKG)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.details.destinationTerminal",
            "description": "<p>목적지 공항터미널(ex.1)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.details.departure",
            "description": "<p>출발일시(ex.2022-05-10T19:45:00.000+09:00)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.details.flightTime",
            "description": "<p>비행시간(ex.225)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.details.travelTime",
            "description": "<p>여행시간(ex.225)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.details.equipment",
            "description": "<p>equipment</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "passengers",
            "description": "<p>탑승객정보 (ADT, CHD, INF 최소 1개 필수)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "passengers.ADT",
            "description": "<p>성인탑승객수(ex.4)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "passengers.CHD",
            "description": "<p>소아탑승객수(ex.2)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "passengers.INF",
            "description": "<p>유아탑승객수(ex.1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "carriers",
            "description": "<p>carriers</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "cabins",
            "description": "<p>cabins</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "long",
            "description": "<p>long</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "pricing",
            "description": "<p>가격정보</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pricing.currency",
            "description": "<p>화폐단위</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"provider\": [],\n  \"requestId\": \"1628580047083.1G.2acef862-aa46-4656-abaa-111f30fee077\",\n  \"segments\": [\n    {\n      \"from\": \"ICN\",\n      \"to\": \"HKG\",\n      \"group\": 0,\n      \"departure\": \"2022-05-10T19:45:00.000+09:00\",\n      \"arrival\": \"2022-05-10T22:30:00.000+08:00\",\n      \"airline\": \"KE\",\n      \"flightNumber\": \"607\",\n      \"uapi_segment_ref\": \"1UG1XsvxnDKAc7nAXIAAAA==\",\n      \"uapiSegmentReference\": \"1UG1XsvxnDKAc7nAXIAAAA==\",\n      \"isCodeshare\": false,\n      \"details\": [\n        {\n          \"origin\": \"ICN\",\n          \"originTerminal\": \"2\",\n          \"destination\": \"HKG\",\n          \"destinationTerminal\": \"1\",\n          \"departure\": \"2022-05-10T19:45:00.000+09:00\",\n          \"flightTime\": \"225\",\n          \"travelTime\": \"225\",\n          \"equipment\": \"789\"\n        }\n      ],\n      \"serviceClass\": \"Economy\",\n      \"plane\": [\n        \"789\"\n      ],\n      \"duration\": [\n        \"225\"\n      ],\n      \"techStops\": [],\n      \"bookingClass\": \"H\",\n      \"baggage\": [\n        {\n          \"units\": \"piece\",\n          \"amount\": 1\n        }\n      ],\n      \"fareBasisCode\": \"HLE0ZRKC\",\n      \"fareRuleKey\": \"gws-eJxNjsEOAiEMRD9mM/dpySre2LCsGAwHo4f14P9/hgXWxCalA6+dEkJQqtALw39M+Ewlob4iUKGWuVyhcvEzxG47SHrke+L7USLMRDkLDdWOR5XeuGp0VrBxcwO1wN7PW6zGhrN5CtpqNGkT+ImUTdZlfZZIZ5tP9jgvB+QZ9tcv4Cor1g==\",\n      \"segmentUniqKey\": \"ICN/2022-05-10T19:45:00.000+09:00/HKG/KE607\",\n      \"planeName\": [\n        \"Boeing 787-9\"\n      ],\n      \"airlineName\": \"대한항공\",\n      \"connectionTime\": 0,\n      \"fromAirportNameKo\": \"인천\",\n      \"toAirportNameKo\": \"홍콩\"\n    },\n    {\n      \"from\": \"HKG\",\n      \"to\": \"ICN\",\n      \"group\": 1,\n      \"departure\": \"2022-05-12T00:45:00.000+08:00\",\n      \"arrival\": \"2022-05-12T05:25:00.000+09:00\",\n      \"airline\": \"KE\",\n      \"flightNumber\": \"608\",\n      \"uapi_segment_ref\": \"1UG1XsvxnDKAm7nAXIAAAA==\",\n      \"uapiSegmentReference\": \"1UG1XsvxnDKAm7nAXIAAAA==\",\n      \"isCodeshare\": false,\n      \"details\": [\n        {\n          \"origin\": \"HKG\",\n          \"originTerminal\": \"1\",\n          \"destination\": \"ICN\",\n          \"destinationTerminal\": \"2\",\n          \"departure\": \"2022-05-12T00:45:00.000+08:00\",\n          \"flightTime\": \"220\",\n          \"travelTime\": \"220\",\n          \"equipment\": \"789\"\n        }\n      ],\n      \"serviceClass\": \"Economy\",\n      \"plane\": [\n        \"789\"\n      ],\n      \"duration\": [\n        \"220\"\n      ],\n      \"techStops\": [],\n      \"bookingClass\": \"H\",\n      \"baggage\": [\n        {\n          \"units\": \"piece\",\n          \"amount\": 1\n        }\n      ],\n      \"fareBasisCode\": \"HLE0ZRKC\",\n      \"fareRuleKey\": \"gws-eJxNjsEOwiAQRD+mmfvuEhRvNJSKwXAweqgH//8zHGhN3ARm4C2zxBhNTCWoxP+a8JlqRnsloMG4bomql+DHaYOIBJR7lvejJjDExGtHbeBddTQulhwFq6xuoK2xjr3UK9mezExFH41u+QI/kwttm5dnTeI4+cRLPx9QzuBfv+VgK+Q=\",\n      \"segmentUniqKey\": \"HKG/2022-05-12T00:45:00.000+08:00/ICN/KE608\",\n      \"planeName\": [\n        \"Boeing 787-9\"\n      ],\n      \"airlineName\": \"대한항공\",\n      \"connectionTime\": 0,\n      \"fromAirportNameKo\": \"홍콩\",\n      \"toAirportNameKo\": \"인천\"\n    }\n  ],\n  \"passengers\": {\n    \"ADT\": 4\n  },\n  \"carriers\": [],\n  \"cabins\": [],\n  \"long\": true,\n  \"pricing\": {\n    \"currency\": \"KRW\"\n  },\n  \"siteId\": \"101\"\n}",
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
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>검색결과 Array</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.uapi_pricing_info_ref",
            "description": "<p>uapi_pricing_info_ref</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.farePricingMethod",
            "description": "<p>결재방법(Auto , Manual , ManualFare , Guaranteed , Invalid , Restored , Ticketed , Unticketable , Reprice , Expired , AutoUsingPrivateFare , GuaranteedUsingAirlinePrivateFare , Airline , AgentAssisted , VerifyPrice , AltSegmentRemovedReprice , AuxiliarySegmentRemovedReprice , DuplicateSegmentRemovedReprice , Unknown , GuaranteedUsingAgencyPrivateFare , AutoRapidReprice)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.platingCarrier",
            "description": "<p>항공권을 대리 발행한 항공사코드(ex.KE)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.totalPrice",
            "description": "<p>총금액(ex.4364800)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.basePrice",
            "description": "<p>기본금액(ex.KRW2000000), 화폐단위(통화)를 포함하며, 세금이나 추가요금이 포함되지 않음</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.equivalentBasePrice",
            "description": "<p>화폐단위(통화)의 기본금액으로 세금이나 추가요금이 포함되지 않음</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.taxes",
            "description": "<p>모든 세금의 합계</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.directions",
            "description": "<p>여정내의 각 항공편 별 요금 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.from",
            "description": "<p>출발공항코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.to",
            "description": "<p>도착공항코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.platingCarrier",
            "description": "<p>각 항공편별 항공권을 대리 발행한 항공사코드</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.directions.segments",
            "description": "<p>여정내의 각 항공편별 세부 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.from",
            "description": "<p>segments - 출발공항코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.to",
            "description": "<p>segments - 도착공항코드</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.directions.segments.group",
            "description": "<p>segments - 그룹정보</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.departure",
            "description": "<p>segments - 출발일시</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.arrival",
            "description": "<p>segments - 도착일시</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.airline",
            "description": "<p>segments - 항공사</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.flightNumber",
            "description": "<p>segments - 항공편</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.uapi_segment_ref",
            "description": "<p>segments - uapi_segment_ref</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.uapiSegmentReference",
            "description": "<p>segments - uapiSegmentReference</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.directions.segments.isCodeshare",
            "description": "<p>segments - isCodeshare</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.operatingCarrier",
            "description": "<p>segments - operatingCarrier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.operatingCarrierName",
            "description": "<p>segments - operatingCarrier 명칭</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.directions.segments.details",
            "description": "<p>details</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.details.origin",
            "description": "<p>details - 최초 출발공항코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.details.originTerminal",
            "description": "<p>details - 최초 출발공항터미널</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.details.destination",
            "description": "<p>details - 목적지 공항코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.details.destinationTerminal",
            "description": "<p>details - 목적지 공항터미널</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.details.departure",
            "description": "<p>details - 출발일시</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.details.flightTime",
            "description": "<p>details - 비행시간</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.details.travelTime",
            "description": "<p>details - 여행시간</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.details.equipment",
            "description": "<p>details - equipment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.serviceClass",
            "description": "<p>segments - 서비스 클래스</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.plane",
            "description": "<p>segments - plane</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.duration",
            "description": "<p>segments - duration</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.techStops",
            "description": "<p>segments - techStops</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.bookingClass",
            "description": "<p>segments - bookingClass</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.fareBasisCode",
            "description": "<p>segments - fareBasisCode</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.directions.segments.baggage",
            "description": "<p>segments - 여정의 수하물 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.baggage.units",
            "description": "<p>segments - 수하물단위</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.baggage.amount",
            "description": "<p>segments - 수하물개수</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.directions.segments.baggage.detail",
            "description": "<p>segments - 경로의 수하물 단계 정보(ex.출발지, 도착지)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.baggage.detail.applicableBags",
            "description": "<p>segments - 경로의 수하물 단계 순서</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.baggage.detail.basePrice",
            "description": "<p>segments - 수하물 기본요금</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.baggage.detail.totalPrice",
            "description": "<p>segments - 수하물 전체요금</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.baggage.detail.approximateBasePrice",
            "description": "<p>segments - 기본 통화의 변환된 수하물 기본요금</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.baggage.detail.approximateTotalPrice",
            "description": "<p>segments - 기본 통화의 변환된 수하물 전체요금</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.directions.segments.baggage.detail.restrictionText",
            "description": "<p>segments - 수하물 제한 내용</p>"
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
    "filename": "./src/app.ts",
    "groupTitle": "AIR",
    "sampleRequest": [
      {
        "url": "https://api.sharevalue.co/pricing"
      }
    ]
  },
  {
    "type": "post",
    "url": "/fare/rule",
    "title": "/fare/rule",
    "version": "0.1.0",
    "name": "rule",
    "group": "AIR",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>항공규정조회</p>",
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
            "optional": false,
            "field": "uapi_fare_rule_key",
            "description": "<p>항공검색 결과(/shopping)에서 받음.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"siteId\": \"43\",\n \"sessionToken\": \"cf48e0f2ffb763bcacdd18bde3cd7f9cfe67b950c4f02d7b3242c96e0cdcf18b19e64b86c7b2c58d9824701ff09441312de95ea168ad7a09f49daada6c591bf6\",\n \"uapi_fare_rule_key\": \"gws-eJxNjsEOAiEMRD9mM/dpySre2LCsGAwHo4f14P9/hgXWxCalA6+dEkJQqtALw39M+Ewlob4iUKGWuVyhcvEzxG47SHrke+L7USLMRDkLDdWOR5XeuGp0VrBxcwO1wN7PW6zGhrN5CtpqNGkT+ImUTdZlfZZIZ5tP9jgvB+QZ9tcv4Cor1g==\"\n }",
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
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>검색결과 Array</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.RuleNumber",
            "description": "<p>Rule 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.Source",
            "description": "<p>Source</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.ProviderCode",
            "description": "<p>ProviderCode</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.Rules",
            "description": "<p>Rules(APPLICATION AND OTHER CONDITIONS, SEASONALITY, ADVANCE RES/TICKETING, MAXIMUM STAY, STOPOVERS, TRANSFERS, PERMITTED COMBINATIONS, SURCHARGES, TRAVEL RESTRICTIONS, SALES RESTRICTIONS, PENALTIES, ...)</p>"
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
    "filename": "./src/app.ts",
    "groupTitle": "AIR",
    "sampleRequest": [
      {
        "url": "https://api.sharevalue.co/fare/rule"
      }
    ]
  },
  {
    "type": "post",
    "url": "/shopping",
    "title": "/shopping",
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
    "filename": "./src/app.ts",
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
    "filename": "./src/app.ts",
    "groupTitle": "Common",
    "sampleRequest": [
      {
        "url": "https://api.sharevalue.co/config_date"
      }
    ]
  },
  {
    "type": "post",
    "url": "/reservation/air/:flightId/cancel",
    "title": "/:flightId/cancel",
    "version": "0.1.0",
    "name": "reservation_-_cancel",
    "group": "Reservation",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>항공 예약 취소</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sessionToken",
            "description": "<p>sessionToken. (현재 의미없음, 회원정보를 세션에서 취하기 때문에 예약취소가 진행되지 않음).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "account",
            "description": "<p>비회원 인증을 위한 휴대폰 또는 이메일</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "passengers",
            "description": "<p>예약취소 승객번호</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "nonMemberToken",
            "description": "<p>비회원 예약시 인증을 위한 토큰</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"passengers\": \"[12399]\"\n}",
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
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>실행결과 Array</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.gdsCode",
            "description": "<p>gdsCode(ex.1G)</p>"
          }
        ]
      }
    },
    "filename": "./src/app.ts",
    "groupTitle": "Reservation",
    "sampleRequest": [
      {
        "url": "https://api.sharevalue.co/reservation/air/:flightId/cancel"
      }
    ]
  },
  {
    "type": "post",
    "url": "/reservation/create/",
    "title": "/create",
    "version": "0.1.0",
    "name": "reservation_-_create",
    "group": "Reservation",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>항공 예약 생성</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sessionToken",
            "description": "<p>sessionToken (현재 의미없음, 회원으로 예약되지 않음).</p>"
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
            "optional": true,
            "field": "requestId",
            "description": "<p>requestId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "provider",
            "description": "<p>provider</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "segments",
            "description": "<p>여정내의 각 항공편별 세부 정보</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "segments.from",
            "description": "<p>segments - 출발지</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "segments.to",
            "description": "<p>segments - 도착지</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "segments.group",
            "description": "<p>segments - 그룹정보</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "segments.departure",
            "description": "<p>segments - 출발일시</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "segments.arrival",
            "description": "<p>segments - 도착일시</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "segments.airline",
            "description": "<p>segments - 항공사 코드</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "segments.flightNumber",
            "description": "<p>segments - 편명</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.uapi_segment_ref",
            "description": "<p>segments - uAPI 세그먼트 Ref ID (구)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.uapiSegmentReference",
            "description": "<p>segments - uAPI 세그먼트 Ref ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "segments.isCodeshare",
            "description": "<p>segments - 코드쉐어 여부</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "segments.details",
            "description": "<p>segments - 운항상세</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.details.origin",
            "description": "<p>segments - 운항상세 - 출발 공항</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.details.originTerminal",
            "description": "<p>segments - 운항상세 - 출발 터미널</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.details.destination",
            "description": "<p>segments - 운항상세 - 도착 공항</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.details.destinationTerminal",
            "description": "<p>segments - 운항상세 - 도착 터미널</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.details.departure",
            "description": "<p>segments - 운항상세 - 출발일시</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.details.flightTime",
            "description": "<p>segments - 운항상세 - 비행시간</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.details.travelTime",
            "description": "<p>segments - 운항상세 - 여정시간</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.details.equipment",
            "description": "<p>segments - 운항상세 - 기재</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.serviceClass",
            "description": "<p>segments - 서비스 등급 Economy, Business. ..</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "segments.plane",
            "description": "<p>segments - 기재 목록</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "segments.duration",
            "description": "<p>segments - 비행시간</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "segments.techStops",
            "description": "<p>segments - 중간기착</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.bookingClass",
            "description": "<p>segments - 예약 등급 (YBM...)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "segments.baggage",
            "description": "<p>segments - 수하물</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.baggage.units",
            "description": "<p>segments - 수하물 - 단위</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "segments.baggage.amount",
            "description": "<p>segments - 수하물 - 수량</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.fareBasisCode",
            "description": "<p>segments - 운임 FareBasis 코드</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "segments.fareRuleKey",
            "description": "<p>segments - uAPI 용 운임규정 조회 키</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.segmentUniqKey",
            "description": "<p>segments - segmentUniqKey</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "segments.planeName",
            "description": "<p>segments - 기재 명</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.airlineName",
            "description": "<p>segments - 항공사 명</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "segments.connectionTime",
            "description": "<p>segments - connectionTime(ex.0)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.fromAirportNameKo",
            "description": "<p>segments - 출발공항한국어명(ex.인천)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segments.toAirportNameKo",
            "description": "<p>segments - 도착공항한국어명(ex.홍콩)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "groupType",
            "description": "<p>예약구분(PERSONAL/NONMEMBER-사이트정보에서 비회원 판매일때만/GROUP)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>예약자 연락처(111-111-1111)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "mobile",
            "description": "<p>예약자 핸드폰</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile.countryCode",
            "description": "<p>예약자 국적번호 (ex.82)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile.location",
            "description": "<p>예약자 장소코드(ex.SEL)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile.number",
            "description": "<p>예약자 모바일 전화번호</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>예약자 메일주소</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>예약자 이름</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "routingType",
            "description": "<p>예약 여정유형(OW, RT)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "passengers",
            "description": "<p>탑승객정보</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "passengers.title",
            "description": "<p>탑승객정보 직함</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "passengers.Prefix",
            "description": "<p>탑승객정보 경칭</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passengers.lastName",
            "description": "<p>탑승객정보 성</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passengers.firstName",
            "description": "<p>탑승객정보 이름</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "passengers.passCountry",
            "description": "<p>탑승객정보 여권국가</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passengers.birthDate",
            "description": "<p>탑승객정보 생년월일</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passengers.gender",
            "description": "<p>탑승객정보 성별</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passengers.ageCategory",
            "description": "<p>탑승객정보 나이분류(ADT|LBR|STU)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "passengers.nameKo",
            "description": "<p>탑승객정보 한국이름</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "fareRuleKeys",
            "description": "<p>fareRuleKeys</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "issueTasf",
            "description": "<p>TASF 요금</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "issueTasf.ADT",
            "description": "<p>성인 TASF 요금</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "issueTasf.INF",
            "description": "<p>유아 TASF 요금</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "issueTasf.CHD",
            "description": "<p>소아 TASF 요금</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "discountAmount",
            "description": "<p>할인요금</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "discountAmount.ADT",
            "description": "<p>성인 할인요금</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "discountAmount.INF",
            "description": "<p>유아 할인요금</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "discountAmount.CHD",
            "description": "<p>소아 할인요금</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "surchargeAmount",
            "description": "<p>추가요금</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "surchargeAmount.ADT",
            "description": "<p>성인 추가요금</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "surchargeAmount.INF",
            "description": "<p>유아 추가요금</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "surchargeAmount.CHD",
            "description": "<p>소아 추가요금</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isMobile",
            "description": "<p>Mobile접속여부</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "passengerType",
            "description": "<p>승객유형 (ADT|LBR|STU)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "fareInfo",
            "description": "<p>규정관련 정보</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fareInfo.latestTicketingTime",
            "description": "<p>발권 TL</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "fareInfo.eTicketability",
            "description": "<p>전자항공권발권가능여부</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fareInfo.refundable",
            "description": "<p>환불가능여부(boolean)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "fareInfo.changePenalty",
            "description": "<p>변경패널티</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fareInfo.changePenalty.amount",
            "description": "<p>변경패널티 금액</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fareInfo.changePenalty.penaltyApplies",
            "description": "<p>변경패널티 규정(Anytime , Before Departure , After Departure)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "fareInfo.cancelPenalty",
            "description": "<p>취소패널티</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fareInfo.cancelPenalty.amount",
            "description": "<p>취소패널티 금액</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fareInfo.cancelPenalty.penaltyApplies",
            "description": "<p>취소패널티 규정(Anytime , Before Departure , After Departure)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"requestId\": \"1628818856483.1G.178f4315-dd31-499b-bb28-65df5d84f6e9\",\n    \"segments\": [\n        {\n            \"from\": \"ICN\",\n            \"to\": \"HKG\",\n            \"group\": 0,\n            \"departure\": \"2022-05-10T08:10:00.000+09:00\",\n            \"arrival\": \"2022-05-10T11:00:00.000+08:00\",\n            \"airline\": \"KE\",\n            \"flightNumber\": \"603\",\n            \"uapi_segment_ref\": \"wfDzXsjxnDKA7RBj5NAAAA==\",\n            \"uapiSegmentReference\": \"wfDzXsjxnDKA7RBj5NAAAA==\",\n            \"isCodeshare\": false,\n            \"details\": [\n                {\n                    \"origin\": \"ICN\",\n                    \"originTerminal\": \"2\",\n                    \"destination\": \"HKG\",\n                    \"destinationTerminal\": \"1\",\n                    \"departure\": \"2022-05-10T08:10:00.000+09:00\",\n                    \"flightTime\": \"230\",\n                    \"travelTime\": \"230\",\n                    \"equipment\": \"333\"\n                }\n            ],\n            \"serviceClass\": \"Economy\",\n            \"plane\": [\n                \"333\"\n            ],\n            \"duration\": [\n                \"230\"\n            ],\n            \"techStops\": [],\n            \"bookingClass\": \"H\",\n            \"baggage\": [\n                {\n                    \"units\": \"piece\",\n                    \"amount\": 1\n                }\n            ],\n            \"fareBasisCode\": \"HLE0ZRKC\",\n            \"fareRuleKey\": \"gws-eJxNjsEOAiEMRD9mM/e2ZBVvbFhWDIaD0cN68P8/wwHWxCalA6+dEkIwMRWvLvzHhM9UEuorAhXGzOUK04ufobztEBGPfE/yfpQImpjMKkS141G1N64WHQs22dxALbD38xYr2XCmp6KtRpOcwE+kTFmX9VmiOG4+8XFeDihn8K9f4m0r2Q==\",\n            \"segmentUniqKey\": \"ICN/2022-05-10T08:10:00.000+09:00/HKG/KE603\",\n            \"planeName\": [\n                \"Airbus A330-300\"\n            ],\n            \"airlineName\": \"대한항공\",\n            \"connectionTime\": 0,\n            \"fromAirportNameKo\": \"인천\",\n            \"toAirportNameKo\": \"홍콩\"\n        },\n        {\n            \"from\": \"HKG\",\n            \"to\": \"ICN\",\n            \"group\": 1,\n            \"departure\": \"2022-05-12T01:20:00.000+08:00\",\n            \"arrival\": \"2022-05-12T06:00:00.000+09:00\",\n            \"airline\": \"KE\",\n            \"flightNumber\": \"612\",\n            \"uapi_segment_ref\": \"wfDzXsjxnDKAFSBj5NAAAA==\",\n            \"uapiSegmentReference\": \"wfDzXsjxnDKAFSBj5NAAAA==\",\n            \"isCodeshare\": false,\n            \"details\": [\n                {\n                    \"origin\": \"HKG\",\n                    \"originTerminal\": \"1\",\n                    \"destination\": \"ICN\",\n                    \"destinationTerminal\": \"2\",\n                    \"departure\": \"2022-05-12T01:20:00.000+08:00\",\n                    \"flightTime\": \"220\",\n                    \"travelTime\": \"220\",\n                    \"equipment\": \"73J\"\n                }\n            ],\n            \"serviceClass\": \"Economy\",\n            \"plane\": [\n                \"73J\"\n            ],\n            \"duration\": [\n                \"220\"\n            ],\n            \"techStops\": [],\n            \"bookingClass\": \"H\",\n            \"baggage\": [\n                {\n                    \"units\": \"piece\",\n                    \"amount\": 1\n                }\n            ],\n            \"fareBasisCode\": \"HLE0ZRKC\",\n            \"fareRuleKey\": \"gws-eJxNjsEOwiAQRD+mmfvuEhRvNJSKwXAweqgH//8zHGhN3ARm4C2zxBhNTCWoi/814TPVjPZKQINx3RJVL8GP0wYRCSj3LO9HTWCIideO2sC76mhcLDkKVlndQFtjHXupV7I9mZmKPhrd8gV+JhfaNi/PmsRx8omXfj6gnMG/fgHnoyvn\",\n            \"segmentUniqKey\": \"HKG/2022-05-12T01:20:00.000+08:00/ICN/KE612\",\n            \"planeName\": [\n                \"73J\"\n            ],\n            \"airlineName\": \"대한항공\",\n            \"connectionTime\": 0,\n            \"fromAirportNameKo\": \"홍콩\",\n            \"toAirportNameKo\": \"인천\"\n        }\n    ],\n    \"groupType\": \"PERSONAL\",\n    \"phone\": \"\",\n    \"mobile\": {\n        \"countryCode\": \"82\",\n        \"location\": \"SEL\",\n        \"number\": \"010-9999-1111\"\n    },\n    \"email\": \"test@sharevalue.com\",\n    \"name\": \"예약자\",\n    \"routingType\": \"RT\",\n    \"passengers\": [\n        {\n            \"title\": \"MS\",\n            \"Prefix\": \"MS\",\n            \"lastName\": \"YEI\",\n            \"firstName\": \"YAK JA1\",\n            \"passCountry\": \"KR\",\n            \"birthDate\": \"2000-01-01\",\n            \"gender\": \"F\",\n            \"ageCategory\": \"ADT\",\n            \"nameKo\": \"예약자1\"\n        },\n        {\n            \"title\": \"MR\",\n            \"Prefix\": \"MR\",\n            \"lastName\": \"YEI\",\n            \"firstName\": \"YAK JA2\",\n            \"passCountry\": \"KR\",\n            \"birthDate\": \"2000-02-02\",\n            \"gender\": \"M\",\n            \"ageCategory\": \"ADT\",\n            \"nameKo\": \"예약자2\"\n        },\n        {\n            \"title\": \"MS\",\n            \"Prefix\": \"MS\",\n            \"lastName\": \"YU\",\n            \"firstName\": \"HYE YEON3\",\n            \"passCountry\": \"KR\",\n            \"birthDate\": \"2000-03-03\",\n            \"gender\": \"F\",\n            \"ageCategory\": \"ADT\",\n            \"nameKo\": \"유혜연3\"\n        },\n        {\n            \"title\": \"MSTR\",\n            \"Prefix\": \"MSTR\",\n            \"lastName\": \"SO\",\n            \"firstName\": \"SARAM1\",\n            \"passCountry\": \"KR\",\n            \"birthDate\": \"2017-01-01\",\n            \"gender\": \"M\",\n            \"ageCategory\": \"CNN\",\n            \"nameKo\": \"소아사람1\"\n        },\n        {\n            \"title\": \"MISS\",\n            \"Prefix\": \"MISS\",\n            \"lastName\": \"SO\",\n            \"firstName\": \"SARAM2\",\n            \"passCountry\": \"KR\",\n            \"birthDate\": \"2017-05-05\",\n            \"gender\": \"F\",\n            \"ageCategory\": \"CNN\",\n            \"nameKo\": \"소아사람2\"\n        },\n        {\n            \"title\": \"MISS\",\n            \"Prefix\": \"MISS\",\n            \"lastName\": \"YU\",\n            \"firstName\": \"SARAM1\",\n            \"passCountry\": \"KR\",\n            \"birthDate\": \"2021-06-10\",\n            \"gender\": \"F\",\n            \"ageCategory\": \"INF\",\n            \"nameKo\": \"유아사람1\"\n        }\n    ],\n    \"siteId\": \"101\",\n    \"fareRuleKeys\": [\n        \"gws-eJxNjsEOAiEMRD9mM/e2ZBVvbFhWDIaD0cN68P8/wwHWxCalA6+dEkIwMRWvLvzHhM9UEuorAhXGzOUK04ufobztEBGPfE/yfpQImpjMKkS141G1N64WHQs22dxALbD38xYr2XCmp6KtRpOcwE+kTFmX9VmiOG4+8XFeDihn8K9f4m0r2Q==\",\n        \"gws-eJxNjsEOwiAQRD+mmfvuEhRvNJSKwXAweqgH//8zHGhN3ARm4C2zxBhNTCWoi/814TPVjPZKQINx3RJVL8GP0wYRCSj3LO9HTWCIideO2sC76mhcLDkKVlndQFtjHXupV7I9mZmKPhrd8gV+JhfaNi/PmsRx8omXfj6gnMG/fgHnoyvn\"\n    ],\n    \"issueTasf\": {\n        \"ADT\": 500000,\n        \"INF\": 0,\n        \"CHD\": 500000\n    },\n    \"discountAmount\": {\n        \"ADT\": 0,\n        \"INF\": 0,\n        \"CHD\": 0\n    },\n    \"surchargeAmount\": {\n        \"ADT\": 0,\n        \"INF\": 0,\n        \"CHD\": 0\n    },\n    \"isMobile\": false,\n    \"provider\": \"1G\",\n    \"passengerType\": \"ADT\",\n    \"fareInfo\": {\n        \"latestTicketingTime\": \"2022-05-10T23:59:00.000+09:00\",\n        \"eTicketability\": false,\n        \"refundable\": \"true\",\n        \"changePenalty\": {\n            \"amount\": \"KRW60000\",\n            \"penaltyApplies\": \"Anytime\"\n        },\n        \"cancelPenalty\": {\n            \"amount\": \"KRW110000\",\n            \"penaltyApplies\": \"Before Departure\"\n        }\n    }\n}",
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
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>실행결과 Array</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.reservationCode",
            "description": "<p>실행결과 예약번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.flightId",
            "description": "<p>실행결과 Flight Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.nonMemberToken",
            "description": "<p>비회원토큰(비회원 예약시)</p>"
          }
        ]
      }
    },
    "filename": "./src/app.ts",
    "groupTitle": "Reservation",
    "sampleRequest": [
      {
        "url": "https://api.sharevalue.co/reservation/create/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/reservation/air/:flightId/request-changes",
    "title": "/request-changes",
    "version": "0.1.0",
    "name": "reservation_-_request-changes",
    "group": "Reservation",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>항공 예약 변경 요청</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>sessionToken</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"authorization\": \"Bearer 3231cd25a5f662e28e61d11a697afcbf30c86de36d45586228a14c02005f3f336c07d967b7d312c2e25e8a92f50fdcf70d223033119f20c884a44c195b8ef18c\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sessionToken",
            "description": "<p>sessionToken. (현재 의미없음, 회원정보를 세션에서 취하기 때문에 예약취소가 진행되지 않음).</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "passengers",
            "description": "<p>탑승객정보</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "passengers.flightId",
            "description": "<p>탑승객정보(선호좌석) - Flight Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "passengers.passengerId",
            "description": "<p>탑승객정보(선호좌석) - 승객 Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passengers.preferredSeat",
            "description": "<p>탑승객정보(선호좌석) - 선호좌석정보(ex.&quot;Window&quot;|&quot;Aisle&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "passengers.frequentFlier",
            "description": "<p>탑승객정보(마일리지) - 마일리지정보</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passengers.frequentFlier.platingCarrier",
            "description": "<p>탑승객정보(마일리지) - 항공사</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passengers.frequentFlier.membershipAirline",
            "description": "<p>탑승객정보(마일리지) - 항공사</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passengers.frequentFlier.airlineMembershipNo",
            "description": "<p>탑승객정보(마일리지) - 마일리지정보</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"passengers\": [\n        {\n            \"flightId\": 7854,\n            \"passengerId\": 13340,\n            \"preferredSeat\": \"Window\"\n        },\n        {\n            \"flightId\": 7854,\n            \"passengerId\": 13340,\n            \"frequentFlier\": {\n                \"platingCarrier\": \"KE\",\n                \"membershipAirline\": \"KE\",\n                \"airlineMembershipNo\": \"11111111\"\n            }\n        }\n    ]\n}",
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
          }
        ]
      }
    },
    "filename": "./src/app.ts",
    "groupTitle": "Reservation",
    "sampleRequest": [
      {
        "url": "https://api.sharevalue.co/reservation/air/:flightId/request-changes"
      }
    ]
  },
  {
    "type": "get",
    "url": "/reservation/air/:flightId/seat",
    "title": "/:flightId/seat",
    "version": "0.1.0",
    "name": "reservation_-_seat",
    "group": "Reservation",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>항공 예약 좌석 지정</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sessionToken",
            "description": "<p>sessionToken. (현재 의미없음, 세션정보를 실 세션에서 취하기 때문에 좌석조회가 되지 않음).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "passengers",
            "description": "<p>passengers</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"siteId\": \"[101]\"\n}",
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
          }
        ]
      }
    },
    "filename": "./src/app.ts",
    "groupTitle": "Reservation",
    "sampleRequest": [
      {
        "url": "https://api.sharevalue.co/reservation/air/:flightId/seat"
      }
    ]
  },
  {
    "type": "get",
    "url": "/reservation/air/:flightId/seatMap",
    "title": "/:flightId/seatMap",
    "version": "0.1.0",
    "name": "reservation_-_seatMap",
    "group": "Reservation",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>항공 예약 좌석 조회</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sessionToken",
            "description": "<p>sessionToken. (현재 의미없음, 세션정보를 실 세션에서 취하기 때문에 좌석조회가 되지 않음).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "passengers",
            "description": "<p>passengers</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "https://api.sharevalue.co/reservation/air/:flightId/seatMap?siteId=101\n{\n   \"siteId\": \"[101]\"\n}",
          "type": "url"
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
          }
        ]
      }
    },
    "filename": "./src/app.ts",
    "groupTitle": "Reservation",
    "sampleRequest": [
      {
        "url": "https://api.sharevalue.co/reservation/air/:flightId/seatMap"
      }
    ]
  }
] });
