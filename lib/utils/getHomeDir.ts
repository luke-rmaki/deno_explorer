import dir from "https://deno.land/x/dir/mod.ts";

export function getHomeDir() {
  const homeDir = dir("home");
  return homeDir;
}
