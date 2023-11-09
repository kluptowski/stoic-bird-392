import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

/**
 * Functions are reusable building blocks of automation that accept
 * inputs, perform calculations, and provide outputs. Functions can
 * be used independently or as steps in workflows.
 * https://api.slack.com/automation/functions/custom
 */
export const GreetingFunctionDefinition = DefineFunction({
  callback_id: "greeting_function",
  title: "Generate a greeting",
  description: "Generate a greeting",
  source_file: "functions/greeting_function.ts",
  input_parameters: {
    properties: {
      recipient: {
        type: Schema.slack.types.user_id,
        description: "Greeting recipient",
      },
      message: {
        type: Schema.types.string,
        description: "Message to the recipient",
      },
      kevrta: {
        type: Schema.slack.types.rich_text,
        title: "Enter Custom Block Here",
        description: "Random string of text",
      },
    },
    required: ["message", "recipient"],
  },
  output_parameters: {
    properties: {
      greeting: {
        type: Schema.types.string,
        description: "Greeting for the recipient",
        title: "Answer to: Block Text",
      },
    },
    required: ["greeting"],
  },
});

export default SlackFunction(
  GreetingFunctionDefinition,
  ({ inputs }) => {
    const { recipient, message, kevrta } = inputs;
    const greeting = `${message}`;
    return { outputs: { greeting } };
  },
);
