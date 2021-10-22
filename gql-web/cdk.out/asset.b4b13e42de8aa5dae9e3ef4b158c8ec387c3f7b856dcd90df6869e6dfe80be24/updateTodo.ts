import { prefix } from "aws-cdk/lib/logging";
import { AnyLengthString } from "aws-sdk/clients/comprehend";

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

type Params = {
  TableName: string | undefined;
  Key: string | {};
  ExpressionAttributeValues: any;
  ExpressionAttributeNames: any;
  UpdateExpression: string;
  ReturnValues: string;
};

async function updateTodo(todo: any) {
  let params: Params = {
    TableName: process.env.TODOS_TABLE,
    Key: {
      id: todo.id,
    },
    ExpressionAttributeValues: {},
    ExpressionAttributeNames: {},
    UpdateExpression: "",
    ReturnValues: "UPDATED_NEW",
  };
  let prefix = "set ";
  let attributes = Object.keys(todo);
  for (let i = 0; i < attributes.length; i++) {
    let attribute = attributes[i];
    if (attribute !== "id") {
      params["UpdateExpression"] +=
        prefix + "#" + attribute + " = :" + attribute;
      params["ExpressionAttributeValues"][":" + attribute] = todo[attribute];
      params["ExpressionAttributeNames"]["#" + attribute] = attribute;
      prefix = ", ";
    }
  }
  console.log("params: ", params);
  try {
    await docClient.update(params).promise();
    return todo;
  } catch (err) {
    console.log("DynamoDB error: ", err);
    return null;
  }
}

export default updateTodo;
