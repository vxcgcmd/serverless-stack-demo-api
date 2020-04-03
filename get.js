//import * as dynamoDbLib from "./libs/dynamodb-lib";
import handler from "./libs/handler-lib";

export const main = handler((event, context) => {
  const params = {
    TableName: process.env.tableName,
    // 'Key' defines the partition key and sort key of the item to be retrieved
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'noteId': path parameter
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: event.pathParameters.id
    }
  };

  return params;
  //  const result = await dynamoDbLib.call("get", params);
  //  if ( ! result.Item) {
  //    throw new Error("Item not found.");
  //  }
  //
  //  // Return the retrieved item
  //  return result.Item;
});
