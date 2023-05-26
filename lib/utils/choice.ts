import { Select } from "https://deno.land/x/cliffy@v0.25.7/prompt/mod.ts";
import { colors } from "https://deno.land/x/cliffy@v0.25.7/ansi/colors.ts";

export async function choice(
  items: { name: string; type: string }[],
  message: string,
) {
  const options = [
    { name: "Back...", value: "back" },
    ...items.map((item) => {
      if (item.type === "dir") {
        return {
          value: item.name,
          name: colors.bold.brightCyan(`/${item.name}`),
        };
      }
      return { value: item.name, name: colors.white(item.name) };
    }),
  ];
  const result = await Select.prompt({
    message,
    options,
    maxRows: 50,
  });

  return result;
}
