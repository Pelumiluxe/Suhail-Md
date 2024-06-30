const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347036275697";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_06_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3LFxuICAgICAgICAzLFxuICAgICAgICA4MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MixcbiAgICAgICAgMTY2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAwLFxuICAgICAgICA4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDc0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDgxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDUwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDk1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI4LFxuICAgICAgICA2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQxLFxuICAgICAgICA4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjksXG4gICAgICAgIDY1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDExMixcbiAgICAgICAgNjksXG4gICAgICAgIDE4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MixcbiAgICAgICAgMzEsXG4gICAgICAgIDg3LFxuICAgICAgICA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDc2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDk1LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDMxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJERXdMODZIQ2Qrdm1hTjV4WGlqSmpYYTJkNWEzOU0wMHlsSHRGUFN6SkRrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwMzYyNzU2OTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjEyNTg2NTcxRTZGQThEQzZEMjlBOTkyNkNEQzc0QzI2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTczMTIwNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4MTZXbUdxd1RNaUJYLUJBNjdrcFZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjA3ZmNkNzE3LWE5ZjQtNDIxNi04NDRmLWVjZWM0NDI5ODg4ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODEsXG4gICAgICAxOCxcbiAgICAgIDE3OSxcbiAgICAgIDU4LFxuICAgICAgODAsXG4gICAgICAxMTQsXG4gICAgICA5MixcbiAgICAgIDIzNSxcbiAgICAgIDU3LFxuICAgICAgMTgzLFxuICAgICAgMjUsXG4gICAgICA1MSxcbiAgICAgIDExNCxcbiAgICAgIDEyMSxcbiAgICAgIDIwLFxuICAgICAgOTAsXG4gICAgICA3LFxuICAgICAgNzQsXG4gICAgICAxMjMsXG4gICAgICA0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTczLFxuICAgICAgMjExLFxuICAgICAgMjYsXG4gICAgICAxMDgsXG4gICAgICAxNzUsXG4gICAgICAyNDYsXG4gICAgICAxOTMsXG4gICAgICAxOSxcbiAgICAgIDIyNyxcbiAgICAgIDExMyxcbiAgICAgIDE0MCxcbiAgICAgIDIyMSxcbiAgICAgIDIwMCxcbiAgICAgIDQ5LFxuICAgICAgODgsXG4gICAgICAxNjAsXG4gICAgICAyMixcbiAgICAgIDE4OCxcbiAgICAgIDAsXG4gICAgICAxNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLS245ZHdDRVAySGhMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVpYXZyZkE1ZmFRVTFqaGVETjZuVnRNZE9zMXM4dExyY3oxM2paNlk1VHM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTEFldExxcEJ2Wk1yUnlhMDNuSmxiNURpRkltWFNyRFBMRWZCNlU0RHhkeVhJNGF4dUliU3B6WnNxU201cDh4ZmVxVkY5d3lRUW1XNC9sWE0rZ2tOREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ1BoK1I1TEJ2T2dvL1pZNTB1d0lhMEQ1S0xjTHRqRFF6OXZxeHdXQTJZNDdHTjQvZmNrWVNHRGNrUGdidGtQcTg3cHlZSEw2RzE4K0NNaDV2eWFxZ1E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDM2Mjc1Njk3OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzEyNjIzMDc0OTE4Nzg6MzBAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDM2Mjc1Njk3OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NzMxMjAwXG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
