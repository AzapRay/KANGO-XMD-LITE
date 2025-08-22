//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61V246jOBD9F78mmnALkEgtLRACITfohNxW+0CDARMwtDEQMsq/r0i6t1ua2ZleaXkytjl16tSp4jvAOSrhHLZg/B0UBNUehd2StgUEY6BWYQgJ6IPAox4Yg6USxO0i14vEeG0Oh/PGCp3G1JKzzVz4qeseB8uIO72uY0N4Arc+KKqXFPm/AIzwHtUDPjK0BJ5OEOr0WUdpjYJK3RftYJ+t1r2BtvDdZvkEbh2ihwjCkV7EMIPES+ewtT1EvkZ/bSTX56Ps9/x4JA/Y1URvr9arJgc4XDG29IqajVO5VlAY56/R3w1FdxfOI+1ZrfPaNA3BYpqtfbCQazrnWWsy4n4Aa7Jn3Af9EkUYBrMAYopo+2XdkRKIzbFItS1ZIYlPsGOwvRgSdF2L/NFILj1xQkN3i9zya8QNLdkmqTWpl+7CvIh8cC2G29WynlAmDme9K8klt3lZCCNW/kzcJu9eOf8X3Q0lHOwmhzxSFsxW5QODbRz3uRrIU3lo8u7KG3FivNqdHOx/jb5aT5h1qOsMnW+GqIfUcwtFjLCNJeWSNrVu67YqnMRGyz/oe7Qiv2K58c2FMbWOSsXlzIFZq4ddzF+S8pxsB5MLJ+WKgMmzY0ce1Dbl4pQsQzKKl4gVmNatj6+GFkkOtqTRi2r5DLocLvtXzXm6Z3SG7SwAY/bWBwRGqKTEoyjH9z1J6AMvqDfQJ5De5QX+jCycyD5aSJq5okRdh8k4Zrky2kaYtruX/PnFZiPbbN38CfRBQXIfliUMTFTSnLRLWJZeBEsw/vNeqS5pArOcQgsFYAw4XhKHrCzJQ370R/mtiT1aekXxDUMK+iAkebaEYExJBfvg/gGvsLKoDzlRVRV1oo4kgZ12aWWPQFuUwZJ6WdFlM+QkkZVk5tb/v2Jrojxk5Ck7lRVW0AVR4n4TW7z91QcYXujDr53KItsHISIldXFVpLkXvJv5/dDz/bzCdNNiX+sWkIDxp21IKcJR2WVTYY/4Maqh1nEH49BLS/hPYSGBwTv/t2Gl5UHnN4Y5sCfLPoGOewf0gx5jgflRkvRxbSjyQ14SeZ6TmRHT3ewO+gB7HRg4eQV/l+WNcIcfQOqhtARjoFnXIrGdtT7rLYbLpWEox0jRIgV8JPjeIA8DClzArSMNlnq0ErJJPmBGW9Z3p3nLk/le2zP2NgyvF8fD7tNPQMAYLI7y9uUiIsFiJURnKR/JeqWIK8dePDftXuiJ+Sk3oW151YyVy/ogJYW8DjzD0WPKqbt1dkJ8gzW7ORZoI5iLlapNlKcuWgBr5MPPwU6XIEvXBz4y82E2nQcvenq8tnN6ViNWgThZYVE8GHHs7CNhIKXopIz4yYlw8Qwp7krQB852N29HpsFkI9kJhdHgEinNo3XvoyN9G9noranQ/TVE8D4B32rw21I+iHeOY279TxhvM/Xfhh1c4SDJFUzU2QRakWiPbHd0mKrekoptGqV0wvC8LLtGwYJbZ/0i9WiYk6z7cxRxjiHoA5JXnYNnOMx/EUtTZjM9eiSeeiVVPrriJ4025Poga5Wi2FCPvjcTUO6PswYPCJvkhemVcSeQIShZBW5/A/jQOMt3CAAA' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '237651878539' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['2349079694477'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Zap32' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
