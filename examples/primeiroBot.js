const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx =>{
    const from = ctx.update.message.from
    console.log(from)
    ctx.reply(`Seja bem vindo, ${from.first_name}!`) // .reply é a resposta
})

bot.on('text', async (ctx, next) => { //o .on monitora o envio de texto
    await ctx.reply('Você está bem?')
    next()
})

bot.on('text', async ctx => { 
    await ctx.reply('Posso lhe ajudar em algo?')
})

bot.startPolling() //tecnica de fica perguntando ao servidor se tem algo para ser feito