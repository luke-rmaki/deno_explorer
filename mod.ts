import { renderHeading } from "./lib/utils/renderer.ts";
import { getHomeDir } from "./lib/utils/getHomeDir.ts";
import { outputFiles } from "./lib/outputFiles.ts";
import { checkDir } from "./lib/utils/checkDir.ts";

export default async function open() {
  renderHeading("main", "Deno Explorer");
  const homeDir = getHomeDir() as string;
  let run = true;
  let currentDir = homeDir;
  let fileChoice;
  while (run) {
    renderHeading("sub", currentDir);
    const choice = await outputFiles(currentDir);
    if (choice === "back") {
      currentDir = currentDir.split("/").slice(0, -1).join("/");
    } else if (checkDir(`${currentDir}/${choice}`)) {
      currentDir = `${currentDir}/${choice}`;
    } else {
      fileChoice = `${currentDir}/${choice}`;
      run = false;
    }
  }
  return fileChoice;
}

