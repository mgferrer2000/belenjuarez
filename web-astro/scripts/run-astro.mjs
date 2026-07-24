import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

const result = spawnSync(
  process.execPath,
  [resolve('node_modules/astro/bin/astro.mjs'), ...process.argv.slice(2)],
  {
    env: {
      ...process.env,
      ASTRO_TELEMETRY_DISABLED: '1',
    },
    stdio: 'inherit',
  },
);

const status = result.status ?? 1;

if (status === 0 && process.argv[2] === 'build') {
  const finalize = spawnSync(process.execPath, [resolve('scripts/finalize-dist.mjs')], {
    env: process.env,
    stdio: 'inherit',
  });

  process.exit(finalize.status ?? 1);
}

process.exit(status);
