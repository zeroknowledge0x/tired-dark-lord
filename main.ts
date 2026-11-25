import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/**
 * The Tired Dark Lord - a 100-word villain monologue.
 *
 * The weariness is never announced. It lives in the clipped clauses, the
 * small deflections ("I burned one street, then sat down") and the remark
 * that the ink is dry when it is not. A concrete history (the Black Vein,
 * Ohrun, two hundred years) and a live scheme (burn the capital) keep the
 * speaker a villain rather than a tired clerk; the last line turns the whole
 * speech from menace into a quiet, reluctant mercy.
 */
const MONOLOGUE =
  "Two hundred years I mined the Black Vein beneath Ohrun, and still the tax " +
  "comes in silver I never asked for. A crown at midnight is cold. That is all. " +
  "Bishops bring petitions; I sign with a shaking hand and call it mercy. " +
  "I meant to burn the capital. I burned one street, then sat down. " +
  "The throne remembers my weight and, I think, pities me. " +
  "My general waits with the match. He is young; he still believes in endings. " +
  "'One more line,' he says. I tell him the ink is dry. " +
  "It is not the ink. Someone keeps the lamps lit in the lower ward. " +
  "That someone is me.";

function main(): void {
  const bytes = Buffer.byteLength(MONOLOGUE, "utf8");
  if (bytes < 1 || bytes > 600) {
    throw new Error(`entry must be 1-600 UTF-8 bytes, got ${bytes}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), MONOLOGUE, "utf8");
}

main();
