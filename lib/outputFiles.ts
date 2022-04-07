import { choice } from "./utils/choice.ts";

export async function outputFiles(dir: string, showDotFiles: boolean) {
  const contents = Deno.readDir(dir);
  const items = [];
  console.clear();
  for await (const item of contents) {
    if (item.isDirectory) {
      items.push({ name: item.name, type: "dir" });
    } else {
      items.push({ name: item.name, type: "file" });
    }
  }

  if (!showDotFiles) {
    const filteredItems = items.filter((item) => item.name[0] !== ".");
    const userChoice = await choice(
      filteredItems,
      "Select a folder or file",
    );
    return userChoice;
  }
  const userChoice = await choice(
    items,
    "Select a folder or file",
  );

  return userChoice;
}
