"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_request_1 = require("graphql-request");
var query = "\nquery {\n    transfers(first: 10) {\n      blockNumber\n      blockTimestamp\n      from\n      id\n      to\n      tokenId\n      transactionHash\n    }\n  }\n";
var endpoint = 'https://api.studio.thegraph.com/query/47758/sneltoken/version/latest';
var client = new graphql_request_1.GraphQLClient(endpoint);
client.request(query)
    .then(function (data) {
    console.log(data);
})
    .catch(function (error) {
    console.error(error);
});
