const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTY1OTIzODkyODAxNzE2MjY0.Yl6Qug.DDmHrj2yJS_codLUFbL0pmDX6Oc"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on('messageCreate', (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

client.login(process.env.TOKEN)