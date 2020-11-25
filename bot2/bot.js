var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
let state = []
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
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
        }}
    if (message.substring(0, 1) == '=') {
        logger.info("message: ")
        logger.info(message)
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);
        switch(cmd) {
            // !ping
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
        function sleep(delay) {
            var start = new Date().getTime();
            while (new Date().getTime() < start + delay);
          }
        if (message === `=startloop`) {
            sleep(500) 
            bot.sendMessage({
                to: channelID,
                message: `=startloop`
        
            });
        }

    }});