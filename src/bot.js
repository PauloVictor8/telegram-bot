require('dotenv').config()
import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.BOT);

bot.start((ctx) => {
    ctx.reply('Hello')
})

bot.launch();

