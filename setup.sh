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

sudo cp bot2.service /etc/systemd/system
sudo systemctl enable bot2.service
sudo systemctl start bot2.service
sudo cp custom.service /etc/systemd/system
sudo systemctl enable custom.service
sudo systemctl start custom.service
# logs:
journalctl -u bot2.service
journalctl -u custom.service

sudo poweroff