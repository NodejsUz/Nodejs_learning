// kompyuterda yadrolar ko'p ya'ni protsessor
// nodejs o'zi single threed lekin uni cluster yordamida dasturni boshqa yadrolarga bo'lish mumkin
// cluster barcha yadrolardan foydalanishga yordam beradi va dastur ishlasi yaxshilanadi
// masalan dasturdan kimdir foydalanayabdi va yana ko'plab userlar foydalanayabdi
// bu vaqtda prosses faqat bitta yadroda ishlaydi so'rovlar ko'p bo'lsa, lekin bizda boshqa yadrolar ham mavjud
// va boshqa userlar uchun qolgan yadrolar ishlayveradi

// Process identifikatori (PID) - bu boshqaruv tizimida faoliyatga o'tgan barcha proseslarning
// unikal raqamli identifikatoridir. PID, boshqaruv tizimi tarafidan tavsif qilingan, faoliyatga o'tgan va
// joriy vaqtda boshqariladigan prosesga xos identifikatordir. PID, ushbu procesni boshqarish,
// kontrol qilish, uzatish, to'xtatish yoki unga boshqa xarakteristikalarni aniqlash uchun ishlatiladi.

const express = require("express");
// requestlarni cheklash uchun library;
const limmetr = require("express-rate-limit");

const app = express();
const port = 3000;

// bitta urldan requst kelganda uni cheklab qo'yish
// const requestLimit = limmetr({
//     minut 5min
//     windowMs: 5 * 60 * 1000,
//     soni requestlarni
//     max: 5
// })

console.log("Working process PID: " + process.pid);

// middleweare

app.get("/api/:n", (req, res) => {
    console.time("no-working");
    let n = parseInt(req.params.n);

    let count = 0;

    for (let i = 0; i < n; i++){
        count += i
    }

    console.timeEnd("no-working");
    console.log("Final count is", count);
    res.send(`Final count is ${count}`)

})

app.listen(port, () => {
    console.log("lister server is 3000 port");
})