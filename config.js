const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "null";
global.website=process.env.GURL || "null" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© ZiDiTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "12045211808";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  ||"
SUHAIL_10_48_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc1LFxuICAgICAgICA3NixcbiAgICAgICAgNDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDc2LFxuICAgICAgICA5NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMyxcbiAgICAgICAgNCxcbiAgICAgICAgODEsXG4gICAgICAgIDMwLFxuICAgICAgICAxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgOCxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMwLFxuICAgICAgICA2NixcbiAgICAgICAgMjUxLFxuICAgICAgICA2NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDgwLFxuICAgICAgICA2MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDg0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODcsXG4gICAgICAgIDc2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY4LFxuICAgICAgICA1LFxuICAgICAgICA1NixcbiAgICAgICAgNDEsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDMxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzksXG4gICAgICAgIDU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDk1LFxuICAgICAgICA2OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwLFxuICAgICAgICA3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkhWeWlXVWx3RjVDV2FzaklZYnFtU01MKzh4VlByeFBtSWNLaUJnOHlBd3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTIwNDUyMTE4MDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlDMDMzQzNEMzk5MThGRjdEM0YxQTMwMTkzMjc3MTNEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTY2NzY5NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjEyMDQ1MjExODA4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMUZGNDM2Q0ExMUU1MTIwNDQzMzgxNTNCOEI3QTFEQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE2Njc2OTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxMjA0NTIxMTgwOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjIzOEZDQ0U2MTM3NjQwMTREMDRCNTYyRDI4RjBCNTFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxNjY3Njk4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTIwNDUyMTE4MDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZGMDY5QzkxQTlENTk1MjY4RkZFNjVCNzMzNjkwRDk0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTY2NzY5OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSVmZYTUNQalNhdTAxUGtOQ2t0UTVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNmNjk1OTdlLTk5YTEtNDBmZS04NmJhLTJlZGNmMjZkZWRmNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OSxcbiAgICAgIDE0LFxuICAgICAgOTEsXG4gICAgICAxMzQsXG4gICAgICA2MCxcbiAgICAgIDIzMixcbiAgICAgIDE1NSxcbiAgICAgIDE2NSxcbiAgICAgIDE2LFxuICAgICAgODEsXG4gICAgICAyOCxcbiAgICAgIDg0LFxuICAgICAgMjYsXG4gICAgICA2MSxcbiAgICAgIDUzLFxuICAgICAgNjUsXG4gICAgICAzLFxuICAgICAgNTAsXG4gICAgICA4MyxcbiAgICAgIDgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDAsXG4gICAgICAxMTIsXG4gICAgICAxNzQsXG4gICAgICAyMzEsXG4gICAgICA1NixcbiAgICAgIDE2MSxcbiAgICAgIDIxMyxcbiAgICAgIDEzMyxcbiAgICAgIDIwNCxcbiAgICAgIDczLFxuICAgICAgNDAsXG4gICAgICAyMDAsXG4gICAgICAxODIsXG4gICAgICAyMzMsXG4gICAgICAxODEsXG4gICAgICAxMDYsXG4gICAgICA5NixcbiAgICAgIDIyNCxcbiAgICAgIDIxMixcbiAgICAgIDg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFAvek9nRUVPYk4zTGtHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJybER3OUtiMUlBdEFQd2pjN0JwdkttRjZSaVl6VVpaM3VFNHFpakE4V0JrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlpaMlg1N0ppQVNQaUNyL1JXVmFDTjY2djN0WnVEU2RyaWNpeUdxOVhMNVQ1TENCenZxMWcvOHNYZjZmSnd1U1BQSEdHblhoL1c3WlF4T2RhdnEzeUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImJybUZsR0dpQzJoVFFvcWZHUzhzV2FzZllLOU5ZcFJ5UXdtUEViRmlzbkU0czJRdkt1bFNZRDRpMk1EU3VoM1g0SjI0QWR5Y2NnS0NJSXk4WkRXdmh3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTIwNDUyMTE4MDg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzI5OTc4MzQ2MjUwNDE6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJaSURJIE1BTElLXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxMjA0NTIxMTgwODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTY2NzY5MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBtZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUG1nLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWUxYMmVJNnd4dFVBaFRnbXJPTnJlemh4bU4vOVpubnN3cFV3L1p1ay9Ddz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjkzMTA3MTg3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE0NDU4NzMzNzRcIn0iCn0=
  "

  "
  "  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ZiDiTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "Zidi",
  botname : process.env.BOT_NAME  || "ZIDI-XMD",
  ownername:process.env.OWNER_NAME|| "Malik-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_APIKEY,


  WORKTYPE: process.env.WORKTYPE || proess.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "ZIDI HOU"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
