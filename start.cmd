if not exist "node_modules" call setup.cmd
node proximity_voice_chat.js

ssh -i yourkey -R <raindrop>:80:localhost:<config.jsのweb_por(デフォルトは8080)> <kradfalcon0>@tcpexposer.com
ssh -i yourkey -R <raindrops>:80:localhost:1234 <kradfalcon0>@tcpexposer.com