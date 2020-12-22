/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { hyphenate, preprocessPattern } from "../";
import { patterns } from "../patterns/de-1996";
import { readFileSync, existsSync } from "fs";
import { basename } from "path";

const dePatterns = patterns.map(preprocessPattern);

/**
 * check if hyphen is on wrong position, ignore missing
 */
const matchLoose = (out: string, exp: string) => {
  if (out.length > exp.length) {
    return false;
  }
  let outI = 0;
  for (let expI = 0; expI < exp.length; expI++) {
    if (out[outI] === exp[expI]) {
      outI += 1;
    } else if (exp[expI] === "|") {
      // pass
    } else {
      return false;
    }
  }
  return true;
};

const testCSV = (file: string): { error: number; words: string[] } => {
  const validationData = readFileSync(file, "utf-8")
    .split("\n")
    .filter((line) => line.indexOf("[") < 0 && line.length > 0)
    .map((line) => line.split("\t")) as string[][];
  const pass = [];
  const failed = [];
  const words = [];
  for (const [input, expectedOut] of validationData) {
    const out = hyphenate(input!, dePatterns, "|");
    words.push(out);
    expect(out).toBeDefined();
    if (matchLoose(out, expectedOut!)) {
      pass.push(out);
    } else {
      failed.push(`${out} != ${expectedOut}`);
    }
  }
  return { error: failed.length / validationData.length, words };
};

const testData = [
  "./src/tests/data/test-de-1000.csv",
  "./src/tests/data/test-de-all.csv",
];

describe("hyphenateWord", () => {
  test("Should use correct matchLoose test helper", () => {
    expect(matchLoose("abcd", "ab|cd")).toBe(true);
    expect(matchLoose("ab|cd", "ab|cd")).toBe(true);
    expect(matchLoose("ab|cd", "abcd")).toBe(false);
    expect(matchLoose("ab|cd", "ab|c|d")).toBe(true);
    expect(matchLoose("a|b|cd", "ab|cd")).toBe(false);
  });

  test(`Should match snapshot of ${basename(testData[0]!)}`, () => {
    expect(testCSV(testData[0]!)).toMatchSnapshot();
  });

  for (const file of testData) {
    if (existsSync(file)) {
      test(`Should hyphenate words of ${basename(
        file,
      )} with less than 5% error`, () => {
        expect(testCSV(file).error).toBeLessThan(0.05);
      });
    }
  }
});
