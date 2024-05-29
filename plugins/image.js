import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*تحميل صور من غوغل*\nمثــــال :\n*.image* facebook`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendFile(m.chat, link, 'error.jpg', `📍 instagram.com/noureddine_ouafy` , m) 
}
handler.help = ['image']
handler.tags = ['downloader']
handler.command = /^(image)$/i

export default handler
