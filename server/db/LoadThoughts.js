const AWS = require("aws-sdk");
const fs = require("fs");
AWS.config.update({
  region: "us-east-2",
});
//This class offers a level of abstraction that enables us to use JavaScript objects as arguments and return native JavaScript types. This constructor helps map objects, which reduces impedance mismatching and speeds up the development process.
const dynamodb = new AWS.DynamoDB.DocumentClient({
  apiVersion: "2012-08-10",
});
console.log("Importing thoughts into DynamoDB. Please wait.");
const allUsers = JSON.parse(
  fs.readFileSync("./server/seed/users.json", "utf8")
);
allUsers.forEach((user) => {
  const params = {
    TableName: "Thoughts",
    Item: {
      username: user.username,
      createdAt: user.createdAt,
      thought: user.thought,
    },
  };

  dynamodb.put(params, (err, data) => {
    if (err) {
      console.error(
        "Unable to add thought",
        user.username,
        ". Error JSON:",
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log("PutItem succeeded:", user.username);
    }
  });
});
