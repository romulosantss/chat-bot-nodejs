const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(async ctx => {
    await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name}!`)
    await ctx.replyWithHTML(`Destacando mensagem <b>HTML</b>
        <i>de várias</i> <code>formas</code> <pre>possíveis</pre>
        <a href="http://www.google.com">Google</a>`)
    await ctx.replyWithPhoto({source: `${__dirname}/bemvindo.jpg`})
    await ctx.replyWithLocation(29.9773008, 31.1303068)
    await ctx.replyWithVideo('https://files.cod3r.com.br/curso-bot/cod3r-end.m4v')
})

bot.startPolling()