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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "61480003064";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_35_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDYwLFxuICAgICAgICAxODcsXG4gICAgICAgIDgxLFxuICAgICAgICAzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzksXG4gICAgICAgIDczLFxuICAgICAgICAxNTksXG4gICAgICAgIDkwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI5LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUxLFxuICAgICAgICA3MixcbiAgICAgICAgMTcxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjExLFxuICAgICAgICAzMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMixcbiAgICAgICAgMTEzLFxuICAgICAgICA1MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTksXG4gICAgICAgIDUyLFxuICAgICAgICA4NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEsXG4gICAgICAgIDcsXG4gICAgICAgIDc4LFxuICAgICAgICAzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjksXG4gICAgICAgIDU0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU5LFxuICAgICAgICAxODgsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDcyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAxODMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDUyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEyLFxuICAgICAgICA0MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDUzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDcwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgODMsXG4gICAgICAgIDkwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgODIsXG4gICAgICAgIDEzLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImorbEt1bXVJNng0UlpMOWwvQjl0RlNFSnViandBODZwSUZ6N0t5ZnhVWWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRzX2ZyVnlWUk0tYXJWczFRdTJZQlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODU3ZWYxOGMtMmJmZS00YzVjLTljNzItNGNiZjhjODc5MmFhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMCxcbiAgICAgIDEzOSxcbiAgICAgIDE3OSxcbiAgICAgIDE0NyxcbiAgICAgIDIwNCxcbiAgICAgIDU5LFxuICAgICAgMTcsXG4gICAgICAxMjcsXG4gICAgICAyMzIsXG4gICAgICAxMTQsXG4gICAgICAxODgsXG4gICAgICAxODEsXG4gICAgICAxMjYsXG4gICAgICAzNSxcbiAgICAgIDE4MixcbiAgICAgIDU4LFxuICAgICAgMTQ5LFxuICAgICAgMjIyLFxuICAgICAgNjUsXG4gICAgICAyMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDksXG4gICAgICA0MixcbiAgICAgIDE3MSxcbiAgICAgIDEzNCxcbiAgICAgIDI0OSxcbiAgICAgIDExMyxcbiAgICAgIDI1NCxcbiAgICAgIDYyLFxuICAgICAgMTk1LFxuICAgICAgMzIsXG4gICAgICAyNDEsXG4gICAgICA3MCxcbiAgICAgIDQwLFxuICAgICAgMTY1LFxuICAgICAgMjYsXG4gICAgICAxMTEsXG4gICAgICAyMDIsXG4gICAgICA3NyxcbiAgICAgIDM4LFxuICAgICAgOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ0xZWjk3UlNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQ0MzMwMTkwMTM4MjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8JOGqfCdkJTGnsyExpnGnsyE8J2amM+Jxp7MhPCThqpcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4gICAgICA+8J2fkfCdkJdcIixcbiAgICBcImxpZFwiOiBcIjk5MTMyNzExMDc4MjY6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJcmMzUWNRK3NIY3NnWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRWSmMvK2FpbXRuZzhaODE4U2EyQzdLR1M1RFM5M1ZreGVtNllnVmk1WDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicnlFQ2d3eHd6UnFMSEVLZzhVSzBsbGFseEcxRXBjR05pS0RvQlplc0Q2QjAySm02cXlvYXlyK0JjWDJ4R1MxSEdjZTFiWkRtaVFLZE1yL3M2d1dNQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMDk3K2krSVVOSTJnTm5aemszcDdRdFJvSjh3OEJ4VitEZ2FESEV1cVhpR1U5OWRKTXFBNWdoSXQrRnYrUUVHcHROeEplY1A5SzlxVmpPakZ1ZnptaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDQzMzAxOTAxMzgyOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2OTg2MTA4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSVVOXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJVU4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6Rkh5Y0VxcFM1WkFZc0dIbXdUd28zWitSb3hSOW1BNThaVHdpa1FCYzRrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MjE1NTYxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
