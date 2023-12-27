import { Manifest } from "deno-slack-sdk/mod.ts";
import { SendBlockKitDefinition } from "./functions/send_block_kit.ts";
import { RichTextFunctionDefinition } from "./functions/richtext_function.ts";
import { TextInputFunction } from "./functions/text_input_function.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/automation/manifest
 */
export default Manifest({
  name: "SE Tooling",
  description: "Send Block Kit JSON messages",
  icon: "assets/slack black and white outline.png",
  workflows: [],
  functions: [
    SendBlockKitDefinition,
    RichTextFunctionDefinition,
    TextInputFunction,
  ],
  outgoingDomains: [],
  datastores: [],
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
    "datastore:read",
    "datastore:write",
    "chat:write.customize",
  ],
});
