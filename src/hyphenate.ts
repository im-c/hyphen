import { PatternData } from "./types";

export function hyphenate(
  text: string,
  patterns: PatternData[],
  hyphenChar = "\u00AD",
): string {
  const levels = new Array(text.length + 1);
  const loweredText = text.toLocaleLowerCase();
  for (let i = levels.length; i--; ) levels[i] = 0;

  for (const patternData of patterns) {
    let fromChar = 0;
    let endPattern = false;
    while (!endPattern) {
      const patternEntityIndex = loweredText.indexOf(
        patternData.text,
        fromChar,
      );
      const patternFits =
        patternEntityIndex > -1 &&
        (patternData.stickToLeft ? patternEntityIndex === 0 : true) &&
        (patternData.stickToRight
          ? patternEntityIndex + patternData.text.length === text.length
          : true);

      if (patternFits) {
        for (let i = 0; i < patternData.levels.length; i++)
          levels[patternEntityIndex + i] = Math.max(
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            patternData.levels[i]!,
            levels[patternEntityIndex + i],
          );
      }
      if (patternEntityIndex > -1 && patternData.text.length > 0) {
        fromChar = patternEntityIndex + patternData.text.length + 1;
      } else {
        endPattern = true;
      }
    }
  }

  levels[0] = levels[1] = levels[levels.length - 1] = levels[
    levels.length - 2
  ] = 0;

  let hyphenatedText = "";

  for (let i = 0; i < levels.length; i++) {
    hyphenatedText += (levels[i] % 2 === 1 ? hyphenChar : "") + text.charAt(i);
  }

  return hyphenatedText;
}
