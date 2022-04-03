import { Select } from "https://deno.land/x/cliffy/prompt/mod.ts";

export async function choice(
  folders: string[],
  files: string[],
  message: string,
) {
  const options = [
    { name: "Back...", value: "back" },
    { name: "Folders", disabled: true, value: "folders" },
    ...folders,
    Select.separator("--------"),
    { name: "Files", disabled: true, value: "files" },
    ...files,
  ];
  const result = await Select.prompt({
    message,
    options,
    maxRows: 50,
  });

  return result;
}
