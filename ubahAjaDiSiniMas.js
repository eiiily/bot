
const fs = require('fs')
const chalk = require('chalk')
global.autoTyping = false
global.autoRecord = false
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
//Ini Jangan di hapus ya mas Nanti eror//
//============[ Pembatas ]==========
global.owner = ["6283155617283"]
global.ownername = "eiily" //nama bot
global.ytname = "-ayaka" //yt lu kalao ada
global.socialm = "Ngapa Bro? Donate La bro etdah"
global.location = "Indonesia, Jatim, Lmh"
global.dana = "083155617283"
global.pulsa = "083155617283"
global.gopay = "083155617283"
global.donasiowner = "nomorowner tpi gausa kosong kan aja ini gini aja Soalnya ga kepake"

//bot bomdy 
global.ownernomer = ["6283155617283","62 82214240011"]
global.premium = ['6283155617283', '6283155617283'] 
global.botname = 'Ayaka' 
global.linkz = "https://chat.whatsapp.com/Caw3icILmAi8XDQfYj66QK" 
global.websitex = ">.<" 
global.themeemoji = "♥️" 
global.packname = "Sticker By"
global.author = "Ayaka\n\n\nMenerima Jasa pembuatan Sticker Gratis\n\n\n\n\n\n\n\nKamu Nanya? Cara Buat sticker Gratis?\n\n\n\n\n\n\n\nNih Nomor Bot:6287" 
global.wm = "Ayaka" 
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Nih Kak Hehehe ><',
    admin: '< ! > Mohon Maaf Fitur Hanya Bisa Di gunakan Oleh Admin',
    botAdmin: '< ! > Mohon Maaf Fitur Ini Bisa Di gunakan Apabila Bot telah Di Angkat Menjadi Admin',
    premime: '< ! > Mohon Maaf Fitur Ini Hanya Bisa Di Gunakan Oleh User Premium',
    owner: '< ! > [Anda Bukan Owner Saya -_-] jangan Menggunakan Fitur ini !!!!!!',
    group: '< ! > Mohon Maaf Fitur Hanya Bisa Di Gunakan Di dalam Group!!',
    private: '< ! > Mohon Maaf Fitur Ini Hanya Bisa di Gunakan di Dalam Private Chat',
    bot: '< ! > Fitur Khusus Bot',
    wait: '⋘ 𝑙𝑜𝑎𝑑𝑖𝑛𝑔 𝑑𝑎𝑡𝑎... ⋙',
    linkm: '< ! > Mana Link Nya?',
    endLimit: '< ! > Limit Kamu Telah Habis!! Tunggu jam 12 malam Atau bisa membeli paket Limit',
    nsfw: '< ! > Fitur Paket Premium Mohon Beli Paket Premium Terlebih dahulu!!',
}


global.thum = fs.readFileSync("./---/gambarnya.jpg")
global.log0 = fs.readFileSync("./---/gambarnya.jpg")
global.err4r = fs.readFileSync("./---/gambarnya.jpg")
global.thumb = fs.readFileSync("./---/gambarnya.jpg")
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
