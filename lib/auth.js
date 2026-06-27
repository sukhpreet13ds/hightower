import crypto from 'node:crypto';
import { cookies } from 'next/headers';

// In-memory session store (single self-hosted Node process).
const g = globalThis;
const sessions = g.__hhSessions || (g.__hhSessions = new Map());

export const COOKIE = 'hh_session';

export function createSession(username) {
  const token = crypto.randomBytes(24).toString('hex');
  sessions.set(token, { username, created: Date.now() });
  return token;
}

export function destroySession(token) {
  if (token) sessions.delete(token);
}

export async function getSession() {
  const store = await cookies();
  const token = store.get(COOKIE)?.value;
  if (token && sessions.has(token)) return { token, ...sessions.get(token) };
  return null;
}

export async function requireAuth() {
  const s = await getSession();
  if (!s) return null;
  return s;
}
