// swaggerFile.js

module.exports = {
  swagger: "2.0",
  info: {
    title: "exemplar.proto",
    version: "version not set"
  },
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/examples/services/hello": {
      get: {
        summary:
          "HelloProxy says 'hello' in a form that is handled by the gateway proxy.",
        operationId: "HelloProxy",
        responses: {
          "200": {
            description: "",
            schema: {
              $ref: "#/definitions/protobufHelloResponse"
            }
          }
        },
        parameters: [
          {
            name: "hello_text",
            in: "query",
            required: false,
            type: "string"
          }
        ],
        tags: ["Exemplar"]
      }
    }
  },
  definitions: {
    protobufHelloResponse: {
      type: "object",
      properties: {
        text: {
          type: "string"
        }
      },
      description: "Defines the response type for the `HelloProxy` method."
    }
  }
};
