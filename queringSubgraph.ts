import { GraphQLClient } from 'graphql-request';

const query = `
query {
    transfers(first: 10) {
      blockNumber
      blockTimestamp
      from
      id
      to
      tokenId
      transactionHash
    }
  }
`;

const endpoint = 'https://api.studio.thegraph.com/query/47758/sneltoken/version/latest';
const client = new GraphQLClient(endpoint);

client.request(query)
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.error(error);
})