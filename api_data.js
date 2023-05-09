define({ "api": [
  {
    "type": "get",
    "url": "/v1/air/reservations",
    "title": "Booking List",
    "version": "1.0.1",
    "name": "Air_Booking_List",
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
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>offset start page 0</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "pageSize",
            "description": "<p>limit</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "data.list",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.flightId",
            "description": "<p>Reservation flightId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.pnr",
            "description": "<p>Pnr code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.bookingStatus",
            "description": "<p>Status</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.paymentStatus",
            "description": "<p>Payment status</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.departureAirportCode",
            "description": "<p>Departure airport</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.departureAirportName",
            "description": "<p>Departure airport korean</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.departureDate",
            "description": "<p>Departure date</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.arrivalAirportCode",
            "description": "<p>Arrival airport</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.arrivalAirportName",
            "description": "<p>Arrival airport korean</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.returnDate",
            "description": "<p>Return date</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.airlineId",
            "description": "<p>Airline code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.airlineIdName",
            "description": "<p>Airline korean</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.bookingCode",
            "description": "<p>Reservation code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.adt",
            "description": "<p>Count of adult passengers</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.chd",
            "description": "<p>Count of child passengers</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.inf",
            "description": "<p>Count of infant passengers</p>"
          }
        ]
      }
    },
    "filename": "src/routes/v1/air/getReservations.ts",
    "groupTitle": "AIR",
    "sampleRequest": [
      {
        "url": "https://api-dev.smartbookingplus.com/v1/air/reservations"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/air/:flightId",
    "title": "Retrieve",
    "version": "1.0.1",
    "name": "Air_Retrieve",
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
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>result</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data.flight",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flight.flightId",
            "description": "<p>Flight Id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flight.bookingId",
            "description": "<p>Reservation Id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flight.pnrCode",
            "description": "<p>Pnr code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flight.airlineId",
            "description": "<p>Airline code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flight.airlineKo",
            "description": "<p>Airline korean name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flight.cabinClass",
            "description": "<p>Service class</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flight.channelCode",
            "description": "<p>Reservation channel</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flight.bookingDate",
            "description": "<p>Booking date</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flight.issuedDate",
            "description": "<p>Document issue date</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flight.departureDate",
            "description": "<p>Departure date</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flight.arrivalAirportCode",
            "description": "<p>Arrival airport</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flight.arrivalAirportName",
            "description": "<p>Arrival airport Korean Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flight.returnDate",
            "description": "<p>Return date</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flight.bookingTlDate",
            "description": "<p>Booking Tl date</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flight.bookingTlTime",
            "description": "<p>Booking Tl time</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flight.informTlDate",
            "description": "<p>Inform Tl date</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flight.informTlTime",
            "description": "<p>Inform Tl time</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flight.bookingStatus",
            "description": "<p>Status</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flight.routingType",
            "description": "<p>Routing type</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "data.flight.fareRules",
            "description": "<p>Fare rules</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "data.flight.changePenalties",
            "description": "<p>Change penalty infos</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "data.flight.cancelPenalties",
            "description": "<p>Cancel penalty infos</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data.booking",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.booking.bookingId",
            "description": "<p>Booking Id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.booking.bookingCode",
            "description": "<p>Reservation code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.booking.customerName",
            "description": "<p>Reservation name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.booking.customerPhone",
            "description": "<p>Reservation phone</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.booking.customerMobile",
            "description": "<p>Reservation mobile</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.booking.customerEmail",
            "description": "<p>Reservation email</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "data.passengers",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.passengers.passengerId",
            "description": "<p>Passenger Id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.passengers.passengerName",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.passengers.passengerNameKo",
            "description": "<p>Korean name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.passengers.passengerType",
            "description": "<p>Passenger type</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.passengers.ageCategory",
            "description": "<p>Age category(ADT, CHD, INF)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.passengers.passengerOrder",
            "description": "<p>Order</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.passengers.passengerBirthday",
            "description": "<p>Birthday</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.passengers.passengerSex",
            "description": "<p>gender</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "data.tickets",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.tickets.ticketId",
            "description": "<p>Reservation Ticket Id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.tickets.passengerId",
            "description": "<p>Passenger Id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.tickets.ticketNo",
            "description": "<p>Ticket number</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.tickets.ticketStatus",
            "description": "<p>Ticket status</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.tickets.ticketType",
            "description": "<p>Ticket type</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.tickets.ticketIssuedDate",
            "description": "<p>Ticket issued date</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.tickets.saleAirlineId",
            "description": "<p>Ticket airline code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.tickets.saleFareNet",
            "description": "<p>Net</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.tickets.saleFareTax",
            "description": "<p>Tax</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.tickets.ticketFareNet",
            "description": "<p>Ticket net</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.tickets.ticketFareTax",
            "description": "<p>Ticket tax</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "data.itineraries",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.itineraries.itineraryId",
            "description": "<p>Segment Id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.itineraries.itineraryOrder",
            "description": "<p>Segment order</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.itineraries.airlineId",
            "description": "<p>Airline Code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.itineraries.airlineName",
            "description": "<p>Airline Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.itineraries.airlineNameKo",
            "description": "<p>Airline Korean name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.itineraries.flightNumber",
            "description": "<p>Flight Number</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.itineraries.departureAirport",
            "description": "<p>Departure airport code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.itineraries.departureAirportName",
            "description": "<p>Departure airport</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.itineraries.departureAirportNameKo",
            "description": "<p>Departure airport korean name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.itineraries.departureDate",
            "description": "<p>Departure date</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.itineraries.departureTime",
            "description": "<p>Departure time</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.itineraries.arrivalAirport",
            "description": "<p>Arrival airport</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.itineraries.arrivalAirportName",
            "description": "<p>Arrival airport name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.itineraries.arrivalAirportNameKo",
            "description": "<p>Arrival airport korean name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.itineraries.arrivalDate",
            "description": "<p>Arrival Date</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.itineraries.arrivalTime",
            "description": "<p>Arrival Time</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.itineraries.bookingStatus",
            "description": "<p>Status</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.itineraries.fareClass",
            "description": "<p>Fare Class</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.itineraries.cabinClass",
            "description": "<p>Service Class</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.itineraries.fareBasisCode",
            "description": "<p>Farebasis code</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data.itineraries.baggage",
            "description": "<p>Baggage Info</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "data.itineraries.techStops",
            "description": "<p>Tech stops</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data.itineraries.details",
            "description": "<p>Segment Detail</p>"
          }
        ]
      }
    },
    "filename": "src/routes/v1/air/getReservation.ts",
    "groupTitle": "AIR",
    "sampleRequest": [
      {
        "url": "https://api-dev.smartbookingplus.com/v1/air/:flightId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/booking",
    "title": "Booking",
    "version": "1.0.1",
    "name": "Booking",
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
          "content": "{\n    \"segments\": [\n        {\n            \"charterSegmentId\": \"d863e5ff-eadd-4f05-b343-3111b67284f0\",\n            \"charterScheduleId\": \"e2d1f95f-ba01-4bb5-b048-7d5fe9f2c073\",\n            \"group\": \"1\",\n            \"order\": \"1\",\n            \"flightNumber\": \"0071\",\n            \"bookingClass\": \"B\",\n            \"serviceClass\": \"economy\",\n            \"fareBasisCode\": \"BRTAP30\",\n            \"airFareRuleId\": \"372ff79d-e1a9-4866-b089-6d213f089d26\",\n            \"charterFareId\": \"98487791-048f-4931-96eb-1637e41eaf43\",\n            \"provider\": \"SBP\",\n            \"airline\": \"KE\",\n            \"departure\": \"2023-08-04 12:00\",\n            \"arrival\": \"2023-08-04 10:00\",\n            \"from\": \"ICN\",\n            \"to\": \"SFO\"\n        },\n        {\n            \"charterSegmentId\": \"abac86e0-c399-4825-a55b-36096a546731\",\n            \"charterScheduleId\": \"e2d1f95f-ba01-4bb5-b048-7d5fe9f2c073\",\n            \"group\": \"2\",\n            \"order\": \"2\",\n            \"flightNumber\": \"0072\",\n            \"bookingClass\": \"B\",\n            \"serviceClass\": \"economy\",\n            \"fareBasisCode\": \"BRTAP30\",\n            \"airFareRuleId\": \"4fdbd194-dad8-45e1-bb3a-64928514d3bc\",\n            \"charterFareId\": \"98487791-048f-4931-96eb-1637e41eaf43\",\n            \"departure\": \"2023-08-10 17:00\",\n            \"arrival\": \"2023-08-11 09:05\",\n            \"from\": \"SFO\",\n            \"to\": \"ICN\"\n        }\n    ],\n    \"phone\": \"01086150490\",\n    \"mobile\": {\n        \"countryCode\": \"82\",\n        \"location\": \"SEL\",\n        \"number\": \"010-1234-4321\"\n    },\n    \"email\": \"hong@gmail.com\",\n    \"name\": \"홍길동\",\n    \"passengers\": [\n        {\n            \"title\": \"MR\",\n            \"lastName\": \"HONG\",\n            \"firstName\": \"GILDONG\",\n            \"passCountry\": \"KR\",\n            \"birthDate\": \"2000-12-21\",\n            \"gender\": \"M\",\n            \"passengerType\": \"ADT\",\n            \"nameKo\": \"홍길동\"\n        }\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": false,
            "field": "segments",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "segments.charterSegmentId",
            "description": "<p>CharterSegmentId from pricing</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "segments.charterScheduleId",
            "description": "<p>CharterScheduleId from pricing</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "segments.group",
            "description": "<p>Group</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "segments.order",
            "description": "<p>Order</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "segments.bookingClass",
            "description": "<p>Booking class</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "segments.serviceClass",
            "description": "<p>Cabin class</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "segments.fareBasisCode",
            "description": "<p>Farebasiscode from pricing</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "segments.airFareRuleId",
            "description": "<p>airFareRuleId from pricing</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "segments.charterFareId",
            "description": "<p>charterFareId from pricing</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "segments.departure",
            "description": "<p>Departure Date Time from pricing (YYYY-MM-DD HH:mm)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "segments.arrival",
            "description": "<p>Arrival Date Time from pricing (YYYY-MM-DD HH:mm)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "segments.from",
            "description": "<p>Origin Code</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "segments.to",
            "description": "<p>Destination Code</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"RT\"",
              "\"OW\"",
              "\"MD\""
            ],
            "optional": false,
            "field": "routingType",
            "description": "<p>Routing type OW = one-way, RT = round-trip, MD = multi-way</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Reservation name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>H.P without dash(-) ex. 01012344321</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "mobile",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "mobile.countryCode",
            "description": "<p>Mobile CountryCode</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile.number",
            "description": "<p>Mobile Mobile Number</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": false,
            "field": "passengers",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"MR\"",
              "\"MS\"",
              "\"MSTR\"",
              "\"MISS\""
            ],
            "optional": false,
            "field": "passengers.title",
            "description": "<p>Passenger Title</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "passengers.firstName",
            "description": "<p>Only english</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "passengers.lastName",
            "description": "<p>Only english</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "passengers.birthDate",
            "description": "<p>Birthday (YYYY-MM-DD)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"M\"",
              "\"F\""
            ],
            "optional": false,
            "field": "passengers.gender",
            "description": "<p>Gender (M = Male, F = Female)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "passengers.passengerType",
            "description": "<p>Passenger type</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "passengers.nameKo",
            "description": "<p>Passenger name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>result</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.reservationCode",
            "description": "<p>Provider</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "data.flights",
            "description": "<p>Booking Results</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "data.flights.fareQuotes",
            "description": "<p>Reservation Fare info</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "data.flights.fareQuotes.pricingInfos",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.fareQuotes.pricingInfos.basePrice",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.fareQuotes.pricingInfos.taxes",
            "description": "<p>Total tax</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.fareQuotes.pricingInfos.taxesInfo",
            "description": "<p>Tax details</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.fareQuotes.pricingInfos.totalPrice",
            "description": "<p>Total amount</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.fareQuotes.pricingInfos.accruedAgentCommAmount",
            "description": "<p>Agent commission amount</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.fareQuotes.pricingInfos.accruedAgentCommVAT",
            "description": "<p>Agent commission vat</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.fareQuotes.pricingInfos.passengersCount",
            "description": "<p>Passenger counts</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "data.flights.fareQuotes.pricingInfos.fareBasisCodes",
            "description": "<p>Farebasiscodes</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "data.flights.fareQuotes.pricingInfos.baggage",
            "description": "<p>Baggage info</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "data.flights.fareQuotes.platingCarrier",
            "description": "<p>Fare plating carrier</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "data.flights.fareQuotes.index",
            "description": "<p>Fare index</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "data.flights.segments",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.airlineNumericCode",
            "description": "<p>Airline code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.arrivalAirportCode",
            "description": "<p>Destination code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.arrivalDate",
            "description": "<p>Arrival date</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.arrivalTerminal",
            "description": "<p>Arrival terminal</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.arrivalTime",
            "description": "<p>Arrival time (HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.bookingClass",
            "description": "<p>Booking class</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.charterFareId",
            "description": "<p>CharterFareId from Pricing</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.charterScheduleId",
            "description": "<p>charterScheduleId from Pricing</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.connectionTime",
            "description": "<p>Connection time</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.departureAirportCode",
            "description": "<p>Departure airport code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.departureDate",
            "description": "<p>Departure date</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.departureTerminal",
            "description": "<p>Departure terminal</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.departureTime",
            "description": "<p>Departure time</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "data.flights.segments.duration",
            "description": "<p>Flight time</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.flightNumber",
            "description": "<p>Flight number</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.group",
            "description": "<p>Segment group</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.order",
            "description": "<p>Segment order</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "data.flights.segments.plane",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.serviceClass",
            "description": "<p>Cabin class</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.stopOver",
            "description": "<p>Stopover code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.fareIndex",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.provider",
            "description": "<p>Provider</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.airlineId",
            "description": "<p>Airline code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.airline",
            "description": "<p>Airline code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.airlineName",
            "description": "<p>Airline name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.departure",
            "description": "<p>Departure date time (YYYY-MM-DD HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.arrival",
            "description": "<p>Arrival date time (YYYY-MM-DD HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "data.flights.segments.planeName",
            "description": "<p>Plane infos</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "data.flights.segments.techStops",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.from",
            "description": "<p>Origin airport code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.to",
            "description": "<p>Destination airport code</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "data.flights.segments.details",
            "description": "<p>segment details</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "data.flights.segments.isCodeShare",
            "description": "<p>Using codeshare</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "data.flights.segments.status",
            "description": "<p>Segment status</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.flights.segments.index",
            "description": "<p>Segment index</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.fareBasisCode",
            "description": "<p>Segment farebasiscode</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data.flights.segments.baggage",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.baggage.units",
            "description": "<p>KG(kilograms), PC(piece)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.segments.baggage.amount",
            "description": "<p>Unit amount</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "data.flights.passengers",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.passengers.title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.passengers.lastName",
            "description": "<p>Last name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.passengers.firstName",
            "description": "<p>First name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.passengers.birthDate",
            "description": "<p>Birthday</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.passengers.gender",
            "description": "<p>Gender</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.passengers.passengerType",
            "description": "<p>passenger type of adult passenger</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.passengers.nameKo",
            "description": "<p>korean name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.pnr",
            "description": "<p>Pnr code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.type",
            "description": "<p>Provider</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.flights.flightId",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "filename": "src/routes/v1/air/booking.ts",
    "groupTitle": "AIR",
    "sampleRequest": [
      {
        "url": "https://api-dev.smartbookingplus.com/v1/booking"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/air/:flightId/cancel",
    "title": "Cancel",
    "version": "1.0.1",
    "name": "Cancel_Flight",
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
          "content": "{\n  \"passengers\": []\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "passengers",
            "description": "<p>Passenger ids</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data.flightId",
            "description": "<p>flightId</p>"
          }
        ]
      }
    },
    "filename": "src/routes/v1/air/cancel.ts",
    "groupTitle": "AIR",
    "sampleRequest": [
      {
        "url": "https://api-dev.smartbookingplus.com/v1/air/:flightId/cancel"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/fare-rule",
    "title": "FareRule",
    "version": "1.0.1",
    "name": "FareRule",
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
            "type": "string",
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
          "content": "curl -H \"Authorization: Bearer {API_TOKEN}\" -i https://api-dev.smartbookingplus.com/v1/fare-rule?airFareRuleId={id}",
          "type": "curl"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "airFareRuleId",
            "description": "<p>AirFareRuleId From Segment</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.ProviderCode",
            "description": "<p>Provider</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.Source",
            "description": "<p>Provider Source</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.RuleNumber",
            "description": "<p>Rule number</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "data.Rules",
            "description": "<p>Rule text array</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "data.TariffNumber",
            "description": "<p>Rule text Array</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "data.translatedRules",
            "description": "<p>Translated rule text Array (None if translation content is not entered)</p>"
          }
        ]
      }
    },
    "filename": "src/routes/v1/air/getFareRule.ts",
    "groupTitle": "AIR",
    "sampleRequest": [
      {
        "url": "https://api-dev.smartbookingplus.com/v1/fare-rule"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/pricing",
    "title": "Pricing",
    "version": "1.0.1",
    "name": "Pricing",
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
          "content": "{\n    \"segments\": [\n        {\n            \"charterSegmentId\": \"d863e5ff-eadd-4f05-b343-3111b67284f0\",\n            \"charterScheduleId\": \"e2d1f95f-ba01-4bb5-b048-7d5fe9f2c073\",\n            \"charterFareId\": \"98487791-048f-4931-96eb-1637e41eaf43\",\n            \"group\": \"1\",\n            \"order\": \"1\",\n            \"bookingClass\": \"B\",\n            \"serviceClass\": \"economy\"\n        },\n        {\n            \"charterSegmentId\": \"abac86e0-c399-4825-a55b-36096a546731\",\n            \"charterScheduleId\": \"e2d1f95f-ba01-4bb5-b048-7d5fe9f2c073\",\n            \"charterFareId\": \"98487791-048f-4931-96eb-1637e41eaf43\",\n            \"group\": \"2\",\n            \"order\": \"2\",\n            \"bookingClass\": \"B\",\n            \"serviceClass\": \"economy\"\n        }\n    ],\n    \"passengers\": {\n        \"ADT\": \"2\",\n        \"CHD\": \"1\"\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "passengers",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "passengers.ADT",
            "description": "<p>Property name may be changed to other passenger type of Adult (allowed: ADT, LBR, STU, VFR)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "passengers.CHD",
            "description": "<p>Property name may be changed to other passenger type of Child (allowed: CHD, LNN, VFN)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "passengers.INF",
            "description": "<p>Property name may be changed to other passenger type of INF (allowed: INF, LIF, VFF)</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": false,
            "field": "segments",
            "description": "<p>Use selected segment element from shopping results</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"SBP\""
            ],
            "optional": true,
            "field": "segments.provider",
            "defaultValue": "SBP",
            "description": "<p>provider</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "segments.charterSegmentId",
            "description": "<p>CharterSegmentId</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "segments.charterScheduleId",
            "description": "<p>CharterScheduleId</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "segments.charterFareId",
            "description": "<p>CharterFareId</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "segments.group",
            "description": "<p>Group</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "segments.order",
            "description": "<p>Order</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"economy\"",
              "\"premiumEconomy\"",
              "\"business\"",
              "\"first\""
            ],
            "optional": false,
            "field": "segments.serviceClass",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "segments.bookingClass",
            "description": "<p>Booking class Ex.B</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>result</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.platingCarrier",
            "description": "<p>PlatingCarrier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.provider",
            "description": "<p>Provider</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "data.passengerFares",
            "description": "<p>Fares Info</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": true,
            "field": "data.passengerFares.ADT",
            "description": "<p>Fares Info About PassengerType ex. ADT, INF ... ETC</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.passengerFares.ADT.basePrice",
            "description": "<p>BasePrice Of PassengerType</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.passengerFares.ADT.taxes",
            "description": "<p>Taxes Of PassengerType</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.passengerFares.ADT.TotalPrice",
            "description": "<p>TotalPrice Of PassengerType</p>"
          },
          {
            "group": "Success 200",
            "type": "object[][]",
            "optional": false,
            "field": "data.directions",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.from",
            "description": "<p>Origin</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.to",
            "description": "<p>Destination</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "data.directions.segments",
            "description": "<p>Segments Of Direction</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.airlineNumericCode",
            "description": "<p>Airline Code Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.airlineNumericNameKo",
            "description": "<p>Airline Korean Name Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.arrivalAirportCode",
            "description": "<p>Destination Code Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.arrivalAirportNameKo",
            "description": "<p>Destination Korean Name Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.arrivalDate",
            "description": "<p>ArrivalDate Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.arrivalTerminal",
            "description": "<p>Arrival Terminal Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.arrivalTime",
            "description": "<p>ArrivalTime Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data.directions.segments.baggage",
            "description": "<p>BaggageInfo Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.bookingClass",
            "description": "<p>BookingClass Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.charterFareId",
            "description": "<p>CharterFareId Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.charterScheduleId",
            "description": "<p>CharterScheduleId Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.charterSegmentId",
            "description": "<p>CharterSegmentId Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.directions.segments.connectionTime",
            "description": "<p>ConnectionTime Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.departureAirportCode",
            "description": "<p>Departure Code Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.departureAirportNameKo",
            "description": "<p>Departure Korean Name Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.departureDate",
            "description": "<p>DepartureDate Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.departureTerminal",
            "description": "<p>DepartureTerminal Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.departureTime",
            "description": "<p>DepartureTime Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "data.directions.segments.duration",
            "description": "<p>Flight Duration(minutes) Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.fareBasisCode",
            "description": "<p>FareBasisCode Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.flightNumber",
            "description": "<p>FlightNumber Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.group",
            "description": "<p>Group Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.order",
            "description": "<p>Order Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.plane",
            "description": "<p>Plane Info Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.serviceClass",
            "description": "<p>ServiceClass Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.stopOver",
            "description": "<p>StopOver</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.directions.segments.fareIndex",
            "description": "<p>FareIndex of PassengerFares</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.directions.segments.provider",
            "description": "<p>Provider</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.directions.segments.airlineId",
            "description": "<p>AirlineId</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.directions.segments.departure",
            "description": "<p>Depart DateTime</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.directions.segments.arrival",
            "description": "<p>Arrival DateTime</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.directions.segments.from",
            "description": "<p>Origin Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.directions.segments.to",
            "description": "<p>Destination Of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "data.directions.segments.isCodeShare",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "data.directions.segments.segmentUniqKey",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.directions.fareIndex",
            "description": "<p>FareIndex of Directions</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.directions.provider",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data.passengerCounts",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.passengerCounts.ADT",
            "description": "<p>Property name may be changed to other passenger type of Adult (allowed: ADT, LBR, STU, VFR)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.passengerCounts.CHD",
            "description": "<p>Property name may be changed to other passenger type of Child (allowed: CHD, LNN, VFN)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.passengerCounts.INF",
            "description": "<p>Property name may be changed to other passenger type of INF (allowed: INF, LIF, VFF)</p>"
          }
        ]
      }
    },
    "filename": "src/routes/v1/air/pricing.ts",
    "groupTitle": "AIR",
    "sampleRequest": [
      {
        "url": "https://api-dev.smartbookingplus.com/v1/pricing"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/shopping",
    "title": "Shopping",
    "version": "1.0.1",
    "name": "Shopping",
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
            "type": "string",
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
          "content": "{\n  \"routeType\": \"RT\",\n  \"legs\": [\n      {\n          \"from\": \"ICN\",\n          \"to\": \"SFO\",\n          \"departureDate\": \"2023-08-04\"\n      },\n      {\n          \"from\": \"SFO\",\n          \"to\": \"ICN\",\n          \"departureDate\": \"2023-08-10\"\n      }\n  ],\n  \"cabins\": [\n      \"economy\"\n  ],\n  \"passengers\": {\n      \"ADT\": 1\n  }\n}",
          "type": "body/json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string[]",
            "allowedValues": [
              "\"economy\"",
              "\"premiumEconomy\"",
              "\"business\"",
              "\"first\""
            ],
            "optional": false,
            "field": "cabins",
            "description": "<p>Cabin class ex. [&quot;economy&quot;, &quot;business&quot;]</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"RT\"",
              "\"OW\"",
              "\"MD\""
            ],
            "optional": false,
            "field": "routeType",
            "description": "<p>route type</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "passengers",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "passengers.ADT",
            "description": "<p>Number of adult passengers</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "passengers.CHD",
            "description": "<p>Number of Child passengers</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "passengers.INF",
            "description": "<p>Number of infant passengers</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": false,
            "field": "legs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "legs.from",
            "description": "<p>Origin 3-Letters</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "legs.to",
            "description": "<p>Destination  3-Letters</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "legs.departureDate",
            "description": "<p>'YYYY-MM-DD'</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Array of Results</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.passengerType",
            "description": "<p>PassengerType of Adult</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.provider",
            "description": "<p>Provider</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.platingCarrier",
            "description": "<p>PlatingCarrier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.platingCarrierName",
            "description": "<p>PlatingCarrier Korean</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.maxStops",
            "description": "<p>the largest of max stops In Directions</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "allowedValues": [
              "\"1\"",
              "\"0\""
            ],
            "optional": false,
            "field": "data.isRecommend",
            "description": "<p>Recommended Fare</p>"
          },
          {
            "group": "Success 200",
            "type": "object[][]",
            "optional": false,
            "field": "data.directions",
            "description": "<p>Array of Array</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.from",
            "description": "<p>Origin of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.to",
            "description": "<p>Destination of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.platingCarrier",
            "description": "<p>PlatingCarrier of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.platingCarrierName",
            "description": "<p>PlatingCarrier Korean of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.duration",
            "description": "<p>ISO 8601 Duration of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.directions.fareIndex",
            "description": "<p>FareIndex of FareInfo</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "data.directions.segments",
            "description": "<p>Array of Segments</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.charterSegmentId",
            "description": "<p>SegmentId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.charterScheduleId",
            "description": "<p>Parent ID of segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.group",
            "description": "<p>Grouping of this segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.order",
            "description": "<p>Order of segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.AirlineNumericCode",
            "description": "<p>AirlineNumericCode of segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.airlineNumericNameKo",
            "description": "<p>AirlineNumeric Korean of segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.departureAirportCode",
            "description": "<p>DepartureAirportCode of segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.departureAirportNameKo",
            "description": "<p>DepartureAirportCode Korean of segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.departureDate",
            "description": "<p>DepartureDate of segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.departureTime",
            "description": "<p>DepartureTime of segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.departureTerminal",
            "description": "<p>DepartureTerminal of segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.arrivalAirportCode",
            "description": "<p>ArrivalAirportCode of segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.arrivalAirportNameKo",
            "description": "<p>ArrivalAirportNameKo Korean of segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.arrivalDate",
            "description": "<p>ArrivalDate of segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.arrivalTime",
            "description": "<p>ArrivalTime of segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.arrivalTerminal",
            "description": "<p>ArrivalTerminal of segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "data.directions.segments.plane",
            "description": "<p>Plane Number of segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.flightNumber",
            "description": "<p>FlightNumber of segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.duration",
            "description": "<p>Actual duration (in minutes) between flights</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.connectionTime",
            "description": "<p>Segment ConnectionTime</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.stopOver",
            "description": "<p>StopOver</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.status",
            "description": "<p>Status ex. HK</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.bookingClass",
            "description": "<p>BookingClass of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "data.directions.segments.baggage",
            "description": "<p>Array of baggage</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"kilograms\"",
              "\"piece\""
            ],
            "optional": false,
            "field": "data.directions.segments.baggage.units",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.directions.segments.baggage.amount",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"economy\"",
              "\"premiumEconomy\"",
              "\"business\"",
              "\"first\""
            ],
            "optional": false,
            "field": "data.directions.segments.serviceClass",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.fareBasisCode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.airFareRuleId",
            "description": "<p>FareRuleId of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.charterFareId",
            "description": "<p>FareId of Segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.fareIndex",
            "description": "<p>FareIndex of FareInfo</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.provider",
            "description": "<p>Provider Of Fare</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.airlineId",
            "description": "<p>AirlineCode</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.airlineName",
            "description": "<p>AirlineCode Korean</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.departure",
            "description": "<p>DepartureDateTime YYYY-MM-DD HH:mm</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.arrival",
            "description": "<p>ArrivalDateTime YYYY-MM-DD HH:mm</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.techStops",
            "description": "<p>TechStops</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.from",
            "description": "<p>Origin Of segment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.to",
            "description": "<p>Destination Of segment</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "data.directions.segments.isCodeShare",
            "description": "<p>Same With codeShare</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.directions.segments.segmentUniqKey",
            "description": "<p>Segment Uniq Key</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "data.fareInfo",
            "description": "<p>Array of FareInfos</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data.fareInfo.cancelPenalty",
            "description": "<p>CancelPenalty Info</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.fareInfo.cancelPenalty.amount",
            "description": "<p>Cancel Penalty Amount</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "data.fareInfo.cancelPenalty.usingPenalty",
            "description": "<p>UsingPenalty</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data.fareInfo.changePenalty",
            "description": "<p>ChangePenalty Info</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.fareInfo.changePenalty.amount",
            "description": "<p>Cancel Penalty Amount</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "data.fareInfo.changePenalty.usingPenalty",
            "description": "<p>UsingPenalty</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.uniqKey",
            "description": "<p>UUIDv4</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data.passengerCounts",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "allowedValues": [
              "\"ADT\"",
              "\"CHD\"",
              "\"INF\""
            ],
            "optional": false,
            "field": "data.passengerCounts.ADT",
            "description": "<p>Number of PassengerType</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "data.passengerFares",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "object",
            "allowedValues": [
              "\"ADT\"",
              "\"CHD\"",
              "\"INF\""
            ],
            "optional": false,
            "field": "data.passengerFares.ADT",
            "description": "<p>Fare Info By PassengerType</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.passengerFares.ADT.basePrice",
            "description": "<p>BasePrice of PassengerType</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.passengerFares.ADT.totalPrice",
            "description": "<p>TotalPrice of PassengerType</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.passengerFares.ADT.taxes",
            "description": "<p>Taxes of PassengerType</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.passengerFares.ADT.accruedAgentCommAmount",
            "description": "<p>AccruedAgentCommAmount of PassengerType</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.passengerFares.ADT.accruedAgentCommVAT",
            "description": "<p>AccruedAgentCommVAT of PassengerType</p>"
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
