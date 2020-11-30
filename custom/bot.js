var Discord = require('discord.io');
var logger = require('winston');
require("dotenv").config({path: '../.env'});

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: process.env.CUSTOM_TOKEN,
   autorun: true
});

let state = []
bot.on('ready', function (evt) {
    logger.info('Connected!');
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
        if (message === `=user info`) {
            bot.sendMessage({
                to: channelID,
                message: `Your username: ${user}\nYour ID: ${userID}`
            });
        }
        if (message === `=server`) {
            bot.sendMessage({
                to: channelID,
                message: `Server ID:${evt.d.guild_id} \nTotal members:${evt.s}`
        
            });
        }
        if (message === `=help`) {
            bot.sendMessage({
                to: channelID,
                message: `
\`\`\` 
   | =ping, | =server, | =user info,  |
   |  =HRU       |=random   | =getfit |
   | =heel| =jj | =getfitvid| =awman  |
   | =sum -> ex.=sum 1 + 1, | =hello, |
   | =difference ex.-> =difference 1 - 1|
   | =product ex. -> =product 10 * 10 |
   | =quotient ex.-> quotient 10 / 10 |
   | =pi | =the fall | =dream war |
\`\`\`
      `  
            });
        }
        if (message === `=hello`) {
            bot.sendMessage({
                to: channelID,
                message: `goodbye`
        
            });
        }
        
        if (cmd === `HRU`) {
 
                state.push(userID)
                bot.sendMessage({
                    to: channelID,
                    message: `good HRU`
                });
        }
        if (message === `=random`) {         
            function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
          
          console.log(getRandomInt(11));
            bot.sendMessage({
                to: channelID,
                message: getRandomInt(11)
        
            });
        }
        if (message === `=getfit`) {
            bot.sendMessage({
                to: channelID,
                message: `The FitnessGram PACER Test is a multistage aerobic capacity test that progressively gets more difficult as it continues.

                The test is used to measure a student's aerobic capacity as part of the FitnessGram assessment. Students run back and forth as many times as they can, each lap signaled by a beep sound. The test get progressively faster as it continues until the student reaches their max lap score.
                
                The PACER Test score is combined in the FitnessGram software with scores for muscular strength, endurance, flexibility and body composition to determine whether a student is in the Healthy Fitness Zone™ or the Needs Improvement Zone™.`
        
            });
        }
        if (message === `=heel`) {
            bot.sendMessage({
                to: channelID,
                message: `In Greek mythology, Achilles (/əˈkɪliːz/ ə-KIL-eez) or Achilleus (Ancient Greek: Ἀχιλλεύς, [a.kʰilˈleu̯s]) was a hero of the Trojan War, the greatest of all the Greek warriors, and is the central character of Homer's Iliad. He was the son of the Nereid Thetis and Peleus, king of Phthia.

                Achilles' most notable feat during the Trojan War was the slaying of the Trojan prince Hector outside the gates of Troy. Although the death of Achilles is not presented in the Iliad, other sources concur that he was killed near the end of the Trojan War by Paris, who shot him in the heel with an arrow. Later legends (beginning with Statius' unfinished epic Achilleid, written in the 1st century AD) state that Achilles was invulnerable in all of his body except for one heel, because when his mother Thetis dipped him in the river Styx as an infant, she held him by one of his heels. Alluding to these legends, the term "Achilles' heel" has come to mean a point of weakness, especially in someone or something with an otherwise strong constitution. The Achilles tendon is also named after him due to these legends.`
        
            });
        }
        if (message === `=jj`) {
            bot.sendMessage({
                to: channelID,
                message: `Jimmy John's Franchise, LLC is an American franchised sandwich fast food restaurant chain owned by Inspire Brands. It was founded by Jimmy John Liautaud in 1983 and is headquartered in Champaign, Illinois. In 35 years, the company has grown to more than 2,700 locations in all states except Alaska, Connecticut, Hawaii, Maine, New Hampshire, Rhode Island and Vermont. As of 2020, 98% of the locations are franchise-owned.
                After Jimmy John Liautaud graduated second to last in his class at Elgin Academy (1982), his father gave him the choice to join the military or start a business. Liautaud chose the latter, and his father lent him $25,000 to start a hot dog business, with the son owning 52% of the business, and his father owning 48%. He soon realized that a hot dog business would cost more than he had, so he decided to open a sandwich shop.
                
                On January 13, 1983, the first Jimmy John's opened in a garage in Charleston, Illinois. Paying $200 a month in rent, Liautaud could only afford used equipment consisting of a refrigerator, a chest freezer, an oven, and a meat slicer.
                
                The store was able to realize a profit its first year of business, despite the poor location of the store, due to Jimmy John's willingness to deliver his sandwiches to the nearby dorms at Eastern Illinois University, as well as his handing out free samples for marketing purposes.
                
                In April 1985, Liautaud bought out his father's interest in the business, becoming the sole owner. In 1986, he opened his second store in Macomb, Illinois, and in 1987, he opened a third in Champaign, Illinois.[citation needed]
                
                In 1988, Liautaud met Jamie Coulter, who would later become the CEO of Lone Star Steakhouse & Saloon. Coulter mentored Liautaud and "taught [him] how to effectively run multiple units."`
        
            });
        }
        if (message === `=getfitvid`) {
            bot.sendMessage({
                to: channelID,
                message: `https://www.youtube.com/watch?v=Y82jDHRrswc`
        
            });
        }
        if (message === `=awman`) {
            bot.sendMessage({
                to: channelID,
                message: `https://www.youtube.com/watch?v=cPJUBQd-PNM`
        
            });
        }
        if (message === `=pi`) {
            bot.sendMessage({
                to: channelID,
               message: '3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034418159813629774771309960518707211349999998372978049951059731732816096318595024459455346908302642522308253344685035261931188171010003137838752886587533208381420617177669147303598253490428755468731159562863882353787593751957781857780532171226806613001927876611195909216420198938095257201065485863278865936153381827968230301952035301852968995773622599413891249721775283479131515574857242454150695950829533116861727855889075098381754637464939319255060400927701'
            });
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
        if (message === `=the fall`) {
            sleep(500)
            bot.sendMessage({
                to: channelID,
                message: `https://www.youtube.com/watch?v=mbYL474rAdg&feature=emb_logo`
        
            });
        }
        if (message === `=dream war`) {
            sleep(500)
            bot.sendMessage({
                to: channelID,
                message: `https://www.youtube.com/watch?v=ISVwUsVm3CA`
        
            });
        }
        if (message === `=blood god`) {
            sleep(500)
            bot.sendMessage({
                to: channelID,
                message: `to sacrefice you young please press 1`
        
            });
        }
    }});