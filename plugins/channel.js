let handler = async (m, { conn }) => {

m.reply(`*قناتي على الواتساب:*\n
*https://whatsapp.com/channel/0029VaYM8Q3DDmFW5VCkL32k*
*تابعني هناك♥*`)
}
handler.help = ['channel']
handler.tags = ['infobot']
handler.command = /^(channel)$/i

export default handler;
