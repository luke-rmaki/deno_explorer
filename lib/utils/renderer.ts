import { colors } from "https://deno.land/x/cliffy/ansi/colors.ts";

export function renderHeading(type: "main" | "sub", text: string) {
  if (type === "main") {
    console.log(colors.bold.magenta("------------------------"));
    console.log(colors.bold.underline.magenta.bgWhite(text));
    console.log(colors.bold.magenta("------------------------"));
  } else {
    console.log(colors.underline.blue(text));
    console.log(colors.blue("------------------------"));
  }
}

export function renderMessage(text: string) {
  console.log(colors.blue(text));
}

export function renderError(text: string) {
  console.log(colors.white.bgRed("ERROR:"));
  console.log(colors.red(text));
}
