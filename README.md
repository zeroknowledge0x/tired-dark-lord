# The Tired Dark Lord - a 100-word villain monologue

[![make.fun · u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb.svg)](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-tired-dark-lord)
[![rank](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/zeroknowledge0x/tired-dark-lord/rank.svg)](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-tired-dark-lord)
[![reward](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/zeroknowledge0x/tired-dark-lord/reward.svg)](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-tired-dark-lord)
[![License: MIT](https://img.shields.io/badge/License-MIT-2E8B57.svg)](https://opensource.org/licenses/MIT)

A fantasy dark lord who has mined the Black Vein beneath Ohrun for two hundred
years still means to burn the capital. He has burned one street and sat down.
The weariness is never named: it sits in the clipped clauses, the shaking hand,
the throne that has begun to pity him, and the excuse about the ink. The last
line turns the menace into a small, reluctant mercy.

## Files

- `main.ts` - writes the monologue to `/output/entry.txt` using only the Node
  standard library. Deterministic: no clock, no random source, no network.
- `LICENSE` - MIT.

## Rebuild and check locally

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out /opt/data/node22/bin/node --experimental-strip-types main.ts
sha256sum out/entry.txt
```

The grader runs `main.ts` twice into fresh output directories and requires
byte-identical text. MIT licensed. The monologue is original work for this entry.
