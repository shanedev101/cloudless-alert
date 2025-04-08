import fetch from 'node-fetch';

/**
 * @description Sends a notification to a Discord webhook.
 * @author Shane
 * @date 2025-04-08
 *
 * @param {Object} payload - Discord embed payload
 * @param {string} webhookUrl - Discord webhook URL
 * @returns {Promise<void>}
 */
export async function sendToDiscord(
  payload: object,
  webhookUrl: string
): Promise<void> {
  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(
      `Failed to send Discord notification: ${res.status} ${errorText}`
    );
  }
}
