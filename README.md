# hyphen

This is a text hyphenation library, based on Franklin M. Liang's [hyphenation algorithm](https://tug.org/docs/liang/ "Frank Liang wrote his Stanford Ph.D. thesis on a hyphenation algorithm that is standard in TeX, and has been adapted to numerous languages."). In core of the algorithm lies a set of hyphenation patterns. They are extracted from hand-hyphenated dictionaries. Patterns for this library were taken from [ctan.org](https://ctan.org/ "The Comprehensive TEX Archive Network (CTAN) is the central place for all kinds of material around TEX.") and ported to Javascript.

```javascript
import { hyphenate } from "@imc/hyphen";
import { patterns as enPatterns } from "@imc/hyphen/lib/patterns/en-us";

const enPatternCache = enPatterns.map(preprocessPattern);
const out = hyphenate("beautiful", enPatternCache, '|');
// beau|ti|ful

```

## Install

```
npm install @imc/hyphen
```

or

```
yarn add @imc/hyphen
```

## Usage

```javascript

## Import available languages

- `patterns/af` Afrikaans
- `patterns/as` Assamese
- `patterns/be` Belarusian
- `patterns/bg` Bulgarian
- `patterns/bn` Bengali
- `patterns/ca` Catalan
- `patterns/cop` Coptic
- `patterns/cs` Czech
- `patterns/cu` Church Slavonic
- `patterns/cy` Welsh
- `patterns/da` Danish
- `patterns/de-1901` German, traditional spelling
- `patterns/de-1996` German, reformed spelling
- `patterns/de-CH-1901` German, traditional Swiss spelling
- `patterns/el-monoton` Modern Greek, monotonic spelling
- `patterns/el-polyton` Modern Greek, polytonic spelling
- `patterns/en-gb` English, British spelling
- `patterns/en-us` English, American spelling
- `patterns/es` Spanish
- `patterns/et` Estonian
- `patterns/eu` Basque
- `patterns/fi` Finnish
- `patterns/fr` French
- `patterns/fur` Friulan
- `patterns/ga` Irish
- `patterns/gl` Galician
- `patterns/grc` Ancient Greek
- `patterns/gu` Gujarati
- `patterns/hi` Hindi
- `patterns/hr` Croatian
- `patterns/hsb` Upper Sorbian
- `patterns/hu` Hungarian
- `patterns/hy` Armenian
- `patterns/ia` Interlingua
- `patterns/id` Bahasa Indonesia, Indonesian
- `patterns/is` Icelandic
- `patterns/it` Italian
- `patterns/ka` Georgian
- `patterns/kmr` Kurmanji, Northern Kurdish
- `patterns/kn` Kannada
- `patterns/la-x-classic` Classical Latin
- `patterns/la-x-liturgic` Liturgical Latin
- `patterns/la` Latin
- `patterns/lt` Lithuanian
- `patterns/lv` Latvian
- `patterns/ml` Malayalam
- `patterns/mn-cyrl-x-lmc` Mongolian, Cyrillic script, alternative patterns
- `patterns/mn-cyrl` Mongolian, Cyrillic script
- `patterns/mn` aliases `patterns/mn-cyrl`
- `patterns/mr` Marathi
- `patterns/mul-ethi` Multiple languages using the Ethiopic scripts
- `patterns/nb` Norwegian Bokmål, bokmål, norsk bokmål
- `patterns/nl` Dutch
- `patterns/nn` Norwegian Nynorsk, nynorsk
- `patterns/no` Norwegian, norsk
- `patterns/oc` Occitan
- `patterns/or` Odia, Oriya
- `patterns/pa` Panjabi, Punjabi
- `patterns/pi` Pāli
- `patterns/pl` Polish
- `patterns/pms` Piedmontese
- `patterns/pt` Portuguese
- `patterns/rm` Romansh
- `patterns/ro` Romanian
- `patterns/ru` Russian
- `patterns/sa` Sanskrit
- `patterns/sh-cyrl` Serbocroatian, Cyrillic script
- `patterns/sh-latn` Serbocroatian, Latin script
- `patterns/sk` Slovak
- `patterns/sl` Slovenian
- `patterns/sr-cyrl` Serbian, Cyrillic script
- `patterns/sv` Swedish
- `patterns/ta` Tamil
- `patterns/te` Telugu
- `patterns/th` Thai
- `patterns/tk` Turkmen
- `patterns/tr` Turkish
- `patterns/uk` Ukrainian
- `patterns/zh-latn-pinyin` Mandarin Chinese, pinyin transliteration

## Text hyphenation in CSS

The CSS `hyphens` property is intended to add hyphenation support to modern browsers without Javascript:

```css
p {
  hyphens: auto;
}
```

It is part of the [CSS Text Level 3](https://drafts.csswg.org/css-text-3/#hyphens-property) specification. The browser compatibility list can be found on the [related MDN page](https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens).

## Alternatives

Check other great hyphenation libraries:

- [hyphen](https://github.com/ytiurin/hyphen) extended version of this library with HTML support.
- [Hyphenator.js](http://mnater.github.io/Hyphenator/) does client-side hyphenation of HTML-Documents.
- [Hypher](https://github.com/bramstein/hypher) A fast and small hyphenation engine.
