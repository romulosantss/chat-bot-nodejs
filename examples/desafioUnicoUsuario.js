//Ao seu dispor, mestre!
//Sinto muito, mas eu só falo com meu mestre!
const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token) //aqui ele cria o bot e se comunica com o token

bot.start(ctx =>{
    const from = ctx.update.message.from
    console.log(from)
    if (`${from.id}` == '1142572754'){
        ctx.reply(`Ao seu dispor, mestre!`)
    }
    else{
        ctx.reply(`Sinto muito, mas eu só falo com meu mestre!`)
    }
})
bot.startPolling()


//exemplo resolução 2
//bot.start(ctx =>{
   // if(ctx.update.message.from.id === 123) { diferença está nessa linha
        //ctx.reply('Ao seu dispor mestre!')
    //}
    //else{
        //ctx.reply('Sinto muito, mas só falo com meu mestre')
    //}
//})