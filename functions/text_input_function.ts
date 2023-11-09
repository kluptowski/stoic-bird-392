import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

/**
 * Functions are reusable building blocks of automation that accept
 * inputs, perform calculations, and provide outputs. Functions can
 * be used independently or as steps in workflows.
 * https://api.slack.com/automation/functions/custom
 */
export const TextInputFunction = DefineFunction({
  callback_id: "text_input_function",
  title: "Generate AI Summary",
  description: "Generate content for output",
  source_file: "functions/text_input_function.ts",
  input_parameters: {
    properties: {
      message1: {
        type: Schema.types.string,
        long: true,
        title: "Input 1",
        description: "Custom text to use in subsequent wfb (1)",
      },
      message2: {
        type: Schema.types.string,
        long: true,
        title: "Input 2",
        description: "Custom text to use in subsequent wfb (2)",
      },
      message3: {
        type: Schema.types.string,
        long: true,
        title: "Input 3",
        description: "Custom text to use in subsequent wfb (3)",
      },
      message4: {
        type: Schema.types.string,
        long: true,
        title: "Input 4",
        description: "Custom text to use in subsequent wfb (4)",
      },
      richmessage5: {
        type: Schema.slack.types.rich_text,
        title: "RT Input 5",
        description: "Custom rich text to use in subsequent wfb (5)",
      },
    },
    required: ["message1"],
  },
  output_parameters: {
    properties: {
      output1: {
        type: Schema.types.string,
        description: "Greeting for the recipient",
        title: "Answer to: AI Summary",
      },
      output2: {
        type: Schema.types.string,
        description: "Greeting for the recipient",
        title: "Answer to: Input 2",
      },
      output3: {
        type: Schema.types.string,
        description: "Greeting for the recipient",
        title: "Answer to: Input 3",
      },
      output4: {
        type: Schema.types.string,
        description: "Greeting for the recipient",
        title: "Answer to: Input 4",
      },
      output5: {
        type: Schema.slack.types.rich_text,
        description: "Greeting for the recipient",
        title: "Answer to: Input 5",
      },
    },
    required: ["output1"],
  },
});

export default SlackFunction(
  TextInputFunction,
  ({ inputs }) => {
    const { message1, message2, message3, message4, richmessage5 } = inputs;
    const output1 = `${message1}`;
    const output2 = `${message2}`;
    const output3 = `${message3}`;
    const output4 = `${message4}`;
    const output5 = `${richmessage5}`;
    return { outputs: { output1, output2, output3, output4, output5 } };
  },
);
