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
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    logger.info(evt)
    if (message.substring(0, 1) == '%') {
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
            }
            if (message === `%getfit`) {
                bot.sendMessage({
                    to: channelID,
                    message: `The FitnessGram PACER Test is a multistage aerobic capacity test that progressively gets more difficult as it continues.

                    The test is used to measure a student's aerobic capacity as part of the FitnessGram assessment. Students run back and forth as many times as they can, each lap signaled by a beep sound. The test get progressively faster as it continues until the student reaches their max lap score.
                    
                    The PACER Test score is combined in the FitnessGram software with scores for muscular strength, endurance, flexibility and body composition to determine whether a student is in the Healthy Fitness Zone™ or the Needs Improvement Zone™.`
            
                });
            }
            if (message === `%heel`) {
                bot.sendMessage({
                    to: channelID,
                    message: `In Greek mythology, Achilles (/əˈkɪliːz/ ə-KIL-eez) or Achilleus (Ancient Greek: Ἀχιλλεύς, [a.kʰilˈleu̯s]) was a hero of the Trojan War, the greatest of all the Greek warriors, and is the central character of Homer's Iliad. He was the son of the Nereid Thetis and Peleus, king of Phthia.

                    Achilles' most notable feat during the Trojan War was the slaying of the Trojan prince Hector outside the gates of Troy. Although the death of Achilles is not presented in the Iliad, other sources concur that he was killed near the end of the Trojan War by Paris, who shot him in the heel with an arrow. Later legends (beginning with Statius' unfinished epic Achilleid, written in the 1st century AD) state that Achilles was invulnerable in all of his body except for one heel, because when his mother Thetis dipped him in the river Styx as an infant, she held him by one of his heels. Alluding to these legends, the term "Achilles' heel" has come to mean a point of weakness, especially in someone or something with an otherwise strong constitution. The Achilles tendon is also named after him due to these legends.`
            
                });
            }
            if (message === `%jj`) {
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
            if (message === `%help`) {
                bot.sendMessage({
                    to: channelID,
                    message: `|%ping|%getfit|%heel|%jj|%getfitvid|%awman|`
            
                });
            }
            if (message === `%getfitvid`) {
                bot.sendMessage({
                    to: channelID,
                    message: `https://www.youtube.com/watch?v=Y82jDHRrswc`
            
                });
            }
            if (message === `%awman`) {
                bot.sendMessage({
                    to: channelID,
                    message: `https://www.youtube.com/watch?v=cPJUBQd-PNM`
            
                });
            }
        }});