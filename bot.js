const TelegramBot = require('node-telegram-bot-api');
const { wallet, api, rpc } = require('@cityofzion/neon-js');

// Replace with your Telegram token and Neo wallet credentials
const telegramToken = '6735594191:AAF3k4XCfpnUvpOTa5FRl-ymZh6nLMKNLK4';
const bot = new TelegramBot(telegramToken, { polling: true });

// NeoX configuration
const neoPrivateKey = '0x7d63eb01c88c68a5e02911ecd866867ebf5a0ea04ea91845797ddf391b6c3ef6';
const neoWalletAddress = '0x94A7Af5edB47c3B91d1B4Ffc2CA535d7aDA8CEDe';
const rpcURL = 'https://testnet.neoscan.io'; // For testnet, change for mainnet if needed

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Welcome to the NeoX Faucet Bot! Use /claim to get some T4 tokens.');
});

bot.onText(/\/claim/, async (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Please send your wallet address:');

  bot.once('message', async (msg) => {
    const userWallet = msg.text;
    bot.sendMessage(chatId, `Success! You have received T4 tokens at your wallet: ${userWallet}`);
  })
})