require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');

const TOKEN = process.env.BOT; // Token do BOT

const bot = new TelegramBot(TOKEN, {polling: true});

bot.on('message', async (msg) => {

    const chatId = msg.chat.id;

    bot.onText(/\/start/, (msg) => {
        bot.sendMessage(chatId, 'Olá, seja bem vindo! Esse é o bot de aviso de entrega mais eficiente do Brasil! Em quê podemos lhe ajudar? /\/Sair/?')
    })
});