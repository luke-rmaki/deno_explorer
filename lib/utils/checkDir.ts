export function checkDir(path: string) {
  if (Deno.lstatSync(path).isDirectory) {
    return true;
  }
  return false;
}
