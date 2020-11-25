require("dotenv").config({path: '../.env'});
const Discord = require('discord.io');
const logger = require('winston');
const { sleep } = require('./functions/utils.js')

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
const bot = new Discord.Client({
   token: process.env.BOT2_TOKEN,
   autorun: true
});

// initalize state
let state = []

// start bot and listen
bot.on('ready', function (evt) {
    logger.info('Connected!');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', (user, userID, channelID, message, evt) => {

    if (state.includes(userID)) { 
        state = state.filter(item => item !== userID)

        if (message == ["im good"]) {
            bot.sendMessage({
                to: channelID,
                message: `nice` 
            });
        } else {
            bot.sendMessage({
                to: channelID,
                message: "ok" 
            });
        }
    }

    if (message === `=startloop`) {
        sleep(500) 
        bot.sendMessage({
            to: channelID,
            message: `=startloop`
        });
    }

    if (message.substring(0, 1) == '=') {
        let args = message.substring(1).split(' ');
        const cmd = args[0];
        args = args.splice(1);

        switch(cmd) {
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            case 'sum':
                let numArgs = args.filter(x => x != '+').map(x => parseFloat(x));
                let sum = numArgs.reduce((counter, x) => {
                    return counter += x

                });
                bot.sendMessage({
                    to: channelID,
                    message: `The sum of all the arguments you provided is ${sum}!`
                });
            break;
            case 'difference':
                 let numArgstwo = args.filter(x => x != '-').map(x => parseFloat(x));
                 let difference = numArgstwo.reduce((counter, x) => {
                    return counter -= x

                });
                bot.sendMessage({
                    to: channelID,
                    message: `The difference of all the arguments you provided is ${difference}!`
                });
            break;
            case 'product':
                 let numArgsthree = args.filter(x => x != '*').map(x => parseFloat(x));
                 let product = numArgsthree.reduce((counter, x) => {
                    return counter *= x

                });
                bot.sendMessage({
                    to: channelID,
                    message: `The product of all the arguments you provided is ${product}!`
                });
            break;
            case 'quotient':
                 let numArgsfour = args.filter(x => x != '/').map(x => parseFloat(x));
                 let quotient = numArgsfour.reduce((counter, x) => {
                    return counter /= x

                });
                bot.sendMessage({
                    to: channelID,
                    message: `The quotient of all the arguments you provided is ${quotient}!`
                });
            break;
        }
    }

});