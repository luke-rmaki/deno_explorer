import { renderHeading } from "./lib/utils/renderer.ts";
import { getHomeDir } from "./lib/utils/getHomeDir.ts";
import { outputFiles } from "./lib/outputFiles.ts";
import { checkDir } from "./lib/utils/checkDir.ts";

export default async function open(showDotFiles = false) {
  renderHeading("main", "Deno Explorer");
  const homeDir = getHomeDir() as string;
  let run = true;
  let currentDir = homeDir;
  let fileChoice;
  // run until file is choosen
  while (run) {
    // output current directory
    renderHeading("sub", currentDir);
    // display directory contents and prompt user choice
    const choice = await outputFiles(currentDir, showDotFiles);

    if (choice === "back") {
      // user selected back: go back one directory
      currentDir = currentDir.split("/").slice(0, -1).join("/");
    } else if (checkDir(`${currentDir}/${choice}`)) {
      // user selected a directory: go into it
      currentDir = `${currentDir}/${choice}`;
    } else {
      // user selected a file: stop the loop and return the file path
      fileChoice = `${currentDir}/${choice}`;
      run = false;
    }
  }
  return fileChoice;
}

