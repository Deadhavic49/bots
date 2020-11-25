# after setting up raspberry-pi, changing password, enabling ssh and configuring wifi:

# update system and install dependencies
sudo apt-get update
sudo apt-get upgrade
sudo apt install git
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
source ~/.bashrc
nvm install 12

# get code from github
git clone https://github.com/Deadhavic49/bots.git
cd bots
git checkout makeBotsWork

# install node_modules
cd custom
npm install
cd ../bot2
npm install
cd ..

# install and configure pm2 to run apps on startup
sudo npm install -g pm2
pm2 start bot2/bot.js
pm2 start custom/bot.js
pm2 startup systemd
# will generate a command to run, ie:
sudo env PATH=$PATH:/usr/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi
pm2 save

sudo poweroff