import { choice } from "./utils/choice.ts";

export async function outputFiles(dir: string) {
  const contents = Deno.readDir(dir);
  const files = [];
  const folders = [];
  console.clear();
  for await (const item of contents) {
    if (item.isDirectory) {
      folders.push(item.name);
    } else {
      files.push(item.name);
    }
  }
  const userChoice = await choice(
    folders,
    files,
    "Select a folder or file",
  );
  return userChoice;
}
