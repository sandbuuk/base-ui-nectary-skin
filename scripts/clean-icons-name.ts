import fs from 'node:fs/promises'
import path from 'node:path'

const svgIconDir = path.join('svg-icons')

for (const file of await fs.readdir(svgIconDir)) {
  if (file.endsWith('.svg')) {
    // Some files have a warning sign, see: https://sinch.slack.wcom/archives/C06343D66A0/p1723729348809699?thread_ts=1721908202.309869&cid=C06343D66A0.
    if (file.includes('⚠️') || file.includes('❌')) {
      const fixedName = file.replace('⚠️', '').replace('❌', '').trim()

      await fs.rename(path.join(svgIconDir, file), path.join(svgIconDir, fixedName))
    }
  }
}
