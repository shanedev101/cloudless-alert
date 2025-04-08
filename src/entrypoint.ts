import * as core from '@actions/core';
import { sendNotification } from './channels';

async function run() {
  try {
    const status = core.getInput('status');
    const message = core.getInput('message');
    const color = parseInt(core.getInput('color'), 10);
    const webhook = core.getInput('webhook');
    const envName = core.getInput('env_name');

    const payload = {
      username: 'Cloudless Alert',
      embeds: [
        {
          title: status,
          description: message,
          color: color,
          footer: {
            text: `Environment: ${envName}`,
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    await sendNotification('discord', payload, webhook);
    core.info('✅ Notification sent successfully.');
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
