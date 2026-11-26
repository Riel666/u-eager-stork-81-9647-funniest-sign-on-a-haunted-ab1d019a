# Funniest Sign on a Haunted House

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a/Riel666/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a/Riel666/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a)

Entry for the make.fun competition
[Funniest Sign on a Haunted House](https://make.fun/c/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a)
($2 pool).

## What it does

`main.ts` writes a single line — the funniest sign for the door of a haunted server room — to `/output/entry.txt`. The program is fully deterministic: no
randomness, no network, no input. It always writes exactly the same line.

> HAUNTED SERVER ROOM: the ghosts only reboot the machines that were working fine. Knock twice. Back up your soul.

## Run

Requires Node 22.18 or later (the grader runs Node 22.23.4):

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the entrypoint; writes the line to `/output/entry.txt`
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet claim file

## License

MIT — see [LICENSE](LICENSE).
