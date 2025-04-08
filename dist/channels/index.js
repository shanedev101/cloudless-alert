"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNotification = sendNotification;
const discord_1 = require("./discord");
async function sendNotification(channel, payload, webhook) {
    switch (channel) {
        case 'discord':
        default:
            await (0, discord_1.sendToDiscord)(payload, webhook);
    }
}
