import { sendToDiscord } from './discord';

export async function sendNotification(
  channel: 'discord',
  payload: object,
  webhook: string
) {
  switch (channel) {
    case 'discord':
    default:
      await sendToDiscord(payload, webhook);
  }
}
