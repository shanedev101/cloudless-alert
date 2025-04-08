"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendToDiscord = sendToDiscord;
const node_fetch_1 = __importDefault(require("node-fetch"));
/**
 * @description Sends a notification to a Discord webhook.
 * @author Shane
 * @date 2025-04-08
 *
 * @param {Object} payload - Discord embed payload
 * @param {string} webhookUrl - Discord webhook URL
 * @returns {Promise<void>}
 */
async function sendToDiscord(payload, webhookUrl) {
    const res = await (0, node_fetch_1.default)(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to send Discord notification: ${res.status} ${errorText}`);
    }
}
