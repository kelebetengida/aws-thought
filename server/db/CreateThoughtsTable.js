const AWS = require('aws-sdk');

AWS.config.update({
     region: 'us-east-2',
   
    });
    

const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });
//keys indicate properties, and the values indicate the schema configurations.
const params = {TableName: 'Thoughts',
//which is where we define the partition key and the sort key.
 KeySchema: [
   { AttributeName: 'username', KeyType: 'HASH' }, // Partition key
   { AttributeName: 'createdAt', KeyType: 'RANGE' }, // Sort key
 ],
 // This defines the attributes we've used for the hash and range keys. We must assign a data type to the attributes we've declared. We assigned a string to the username and a number to createdAt, indicated by "S" and "N" respectively.

 AttributeDefinitions: [
   { AttributeName: 'username', AttributeType: 'S' },
   { AttributeName: 'createdAt', AttributeType: 'N' },
 ],
 //This setting reserves a maximum write and read capacity of the database, which is how AWS factors in pricing.

 ProvisionedThroughput: {
   ReadCapacityUnits: 10,
   WriteCapacityUnits: 10,
 },
};
dynamodb.createTable(params, (err, data) => {
     if (err) {
       console.error(
         'Unable to create table. Error JSON:',
         JSON.stringify(err, null, 2),
       );
     } else {
       console.log(
         'Created table. Table description JSON:',
         JSON.stringify(data, null, 2),
       );
     }
    });    