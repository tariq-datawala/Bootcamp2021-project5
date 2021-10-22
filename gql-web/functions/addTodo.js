"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
async function addTodo(todo) {
    const params = {
        TableName: process.env.TODOS_TABLE,
        Item: todo
    };
    try {
        await docClient.put(params).promise();
        return todo;
    }
    catch (err) {
        console.log("Dynamodb error :", err);
        return null;
    }
}
exports.default = addTodo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkVG9kby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZFRvZG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDL0IsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBR3BELEtBQUssVUFBVSxPQUFPLENBQUMsSUFBUztJQUM1QixNQUFNLE1BQU0sR0FBRztRQUNYLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVc7UUFDbEMsSUFBSSxFQUFFLElBQUk7S0FDYixDQUFBO0lBQ0QsSUFBSTtRQUNBLE1BQU0sU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0QyxPQUFPLElBQUksQ0FBQztLQUNmO0lBQUMsT0FBTSxHQUFHLEVBQUU7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7QUFDTCxDQUFDO0FBQ0Qsa0JBQWUsT0FBTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVdTID0gcmVxdWlyZShcImF3cy1zZGtcIik7XG5jb25zdCBkb2NDbGllbnQgPSBuZXcgQVdTLkR5bmFtb0RCLkRvY3VtZW50Q2xpZW50KCk7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9Ub2RvXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGFkZFRvZG8odG9kbzpUb2RvKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBUYWJsZU5hbWU6IHByb2Nlc3MuZW52LlRPRE9TX1RBQkxFLFxuICAgICAgICBJdGVtOiB0b2RvIFxuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkb2NDbGllbnQucHV0KHBhcmFtcykucHJvbWlzZSgpO1xuICAgICAgICByZXR1cm4gdG9kbztcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkR5bmFtb2RiIGVycm9yIDpcIiwgZXJyKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgYWRkVG9kbzsiXX0=