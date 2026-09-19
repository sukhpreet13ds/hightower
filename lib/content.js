import { all, run } from './db';
import { CONTENT_DEFAULTS } from './content-defaults';

/** Merge stored overrides (site_content table) over the hardcoded defaults for a section. */
export async function getSectionContent(section) {
  const defaults = CONTENT_DEFAULTS[section] || {};
  try {
    const rows = await all('SELECT content_key, content_value FROM site_content WHERE section = ?', [section]);
    const overrides = {};
    for (const r of rows) {
      if (r.content_value != null && r.content_value !== '') overrides[r.content_key] = r.content_value;
    }
    return { ...defaults, ...overrides };
  } catch (e) {
    console.error('[content] failed to load section:', section, e);
    return defaults;
  }
}

/** Upsert only the known fields for a section, then return the merged result. */
export async function saveSectionContent(section, values) {
  const allowedKeys = new Set(Object.keys(CONTENT_DEFAULTS[section] || {}));
  const entries = Object.entries(values || {}).filter(([k]) => allowedKeys.has(k));
  for (const [key, value] of entries) {
    await run(
      `INSERT INTO site_content (section, content_key, content_value) VALUES (?, ?, ?)
       ON DUPLICATE KEY UPDATE content_value = VALUES(content_value)`,
      [section, key, value == null ? '' : String(value)]
    );
  }
  return getSectionContent(section);
}
