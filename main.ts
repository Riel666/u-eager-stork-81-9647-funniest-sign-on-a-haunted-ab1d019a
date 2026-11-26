import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "HAUNTED SERVER ROOM: the ghosts only reboot the machines that were working fine. Knock twice. Back up your soul.";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_DIR + "/entry.txt", LINE, "utf8");
