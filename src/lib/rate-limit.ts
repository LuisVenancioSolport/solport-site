// Rate limit simples em memória, por IP, para o endpoint de leads.
// Limitação conhecida: em ambiente serverless (Vercel) a memória do
// processo é reiniciada a cada cold start, então isso não substitui uma
// solução de produção (ex.: Upstash/Redis) — funciona como uma primeira
// barreira combinada com o honeypot do formulário.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS) {
    hits.set(key, timestamps);
    return false;
  }

  timestamps.push(now);
  hits.set(key, timestamps);
  return true;
}
