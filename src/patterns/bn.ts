//  title: Hyphenation patterns for Bengali
//  copyright: Copyright (C) 2016 Santhosh Thottingal
//  notice: This file is part of the hyph-utf8 package.
//      See http://www.hyphenation.org/tex for more information.
//  source: https://github.com/santhoshtr/hyphenation/
//  language:
//      name: Bengali
//      tag: bn
//  authors:
//    -
//      name: Santhosh Thottingal
//      contact: santhosh.thottingal (at) gmail.com
//  licence:
//      - This file is available under any of the following licences:
//      -
//          name: MIT
//          url: https://opensource.org/licenses/MIT
//          text: >
//              Permission is hereby granted, free of charge, to any person
//              obtaining a copy of this software and associated documentation
//              files (the "Software"), to deal in the Software without
//              restriction, including without limitation the rights to use,
//              copy, modify, merge, publish, distribute, sublicense, and/or sell
//              copies of the Software, and to permit persons to whom the
//              Software is furnished to do so, subject to the following
//              conditions:
//
//              The above copyright notice and this permission notice shall be
//              included in all copies or substantial portions of the Software.
//
//              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
//              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
//              OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
//              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
//              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
//              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//              FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
//              OTHER DEALINGS IN THE SOFTWARE.
//      -
//          name: LGPL
//          version: 3
//          or_later: true
//          url: http://www.gnu.org/licenses/lgpl.html
//      -
//          name: GPL
//          version: 3
//          or_later: true
//          url: http://www.gnu.org/licenses/gpl.html
//
export const patterns = [
  //  GENERAL RULE
  //  Do not break either side of ZERO-WIDTH JOINER  (U+200D)
  "2‍2",
  //  Break on both sides of ZERO-WIDTH NON JOINER  (U+200C)
  "1‌1",
  //  Break before or after any independent vowel.
  "অ1",
  "আ1",
  "ই1",
  "ঈ1",
  "উ1",
  "ঊ1",
  "ঋ1",
  "ৠ1",
  "ঌ1",
  "ৡ1",
  "এ1",
  "ঐ1",
  "ও1",
  "ঔ1",
  //  Break after any dependent vowel, but not before.
  "া1",
  "ি1",
  "ী1",
  "ু1",
  "ূ1",
  "ৃ1",
  "ৄ1",
  "ৢ1",
  "ৣ1",
  "ে1",
  "ৈ1",
  "ো1",
  "ৌ1",
  "2়2",
  "ৗ1",
  //  Break before or after any consonant.
  "1ক",
  "1খ",
  "1গ",
  "1ঘ",
  "1ঙ",
  "1চ",
  "1ছ",
  "1জ",
  "1ঝ",
  "1ঞ",
  "1ট",
  "1ঠ",
  "1ড",
  "1ড়",
  "1ঢ",
  "1ঢ়",
  "1ণ",
  "1ত",
  "1থ",
  "1দ",
  "1ধ",
  "1ন",
  "1প",
  "1ফ",
  "1ব",
  "1ভ",
  "1ম",
  "1য",
  "1য়",
  "1র",
  "1ল",
  "1শ",
  "1ষ",
  "1স",
  "1হ",
  //  Do not break after khanda ta.
  "ৎ1",
  //  Do not break before chandrabindu, anusvara, visarga, avagraha,
  //  nukta and au length mark.
  "2ঃ1",
  "2ং1",
  "2ঁ1",
  "2ঽ1",
  //  Do not break either side of virama (may be within conjunct).
  "2্2",
];
export const exceptions = [];
export default {
  patterns,
  exceptions,
};
