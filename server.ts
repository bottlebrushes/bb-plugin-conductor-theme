import type { BbPluginApi } from "@get-bb/plugin-sdk";

/**
 * Conductor theme plugin for bb.
 * The theme palette is declared in package.json manifest;
 * BB requires this load-safe backend entry to register the plugin.
 */
export default function plugin(bb: BbPluginApi) {
  bb.log.info("Conductor theme registered");
}