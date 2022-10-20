require('dotenv').config()
import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.BOT);

bot.command('start', async (ctx) => {
    await ctx.reply('Hello')
})

bot.launch();

