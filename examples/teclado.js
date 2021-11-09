const env = require('../.env')
const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)

const tecladoCarne = Markup.keyboard([
    ['🐷 Porco', '🐮 Vaca', '🐑 Carneiro'],
    ['🐔 Galinha', '🍳 Ovo frito é muito bom'],
    ['🐟 Peixe', '🦞 Frutos do mar'],
    ['🌿 Eu sou vegetariano']
]).resize().extra()// '.resize = ele redimensiona de acordo com a largura da tela' e o '.extra = renderiza de fato o teclado'

bot.start(async ctx=> {
    await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name}!`)
    await ctx.reply(`Qual a bebida que você prefere?`, 
        Markup.keyboard(['Coca', 'Pepsi']).resize().oneTime().extra())
})  

bot.hears(['Coca', 'Pepsi'], async ctx => {
    await ctx.reply(`Nossa!  Eu também gosto de ${ctx.match}`)
await ctx.reply('Qual a sua carne predileta?', tecladoCarne)
}) 

bot.hears('🐮 Vaca', ctx => ctx.reply('A minha predileta também!'))
bot.hears('🌿 Eu sou vegetariano', ctx => ctx.reply('Parabéns, mas ainda prefiro carne 🙃'))

bot.on('text', ctx => ctx.reply('Legal!'))

bot.startPolling()