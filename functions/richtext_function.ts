import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

/**
 * Functions are reusable building blocks of automation that accept
 * inputs, perform calculations, and provide outputs. Functions can
 * be used independently or as steps in workflows.
 * https://api.slack.com/automation/functions/custom
 */
export const RichTextFunctionDefinition = DefineFunction({
  callback_id: "richtext_function",
  title: "Summarize channel",
  description: "[CUSTOM] Create blocks of rich text",
  source_file: "functions/richtext_function.ts",
  input_parameters: {
    properties: {
      rich_text: {
        type: Schema.slack.types.rich_text,
        title: "Enter Custom Block Here",
        description: "Random string of text",
      },
    },
    required: ["rich_text"],
  },
  output_parameters: {
    properties: {
      rich_text: {
        type: Schema.slack.types.rich_text,
        description: "Description Unused",
        title: "Summarize the last 7 days of channel",
      },
    },
    required: ["rich_text"],
  },
});

export default SlackFunction(
  RichTextFunctionDefinition,
  ({ inputs }) => {
    const { rich_text } = inputs;
    return { outputs: { rich_text } };
  },
);
