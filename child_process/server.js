// child_process bu OS bilan ishlaydi protsessorlar bilan ishlaydi
// ular ustida turli xil ammalarni bajarish uchun ishlatilishi mukin bo'ladi

// js single threed ishlaydi ya'ni bitta processda non-blocking ishlaydi
// lekin process to'lib qolsa ishlash sekinlashadi
// sever kuchli bo'lgani bilan uni qolgan processlaridan foydalanmasak
// yaxshi bo'lmaydi

// bu protsessorni bo'lish uchun ishlatiladi
// to'rtta methodi bor
// exac(), spawn(), fork(), exexFile()
// exac() => Bu usul qobiqni yaratish uchun ishlatiladi va keyin buyruqni shu qobiq ichida bajaradi. Ushbu usul, shuningdek, jarayonni bajarish tugallangandan so'ng ishga tushiriladigan ixtiyoriy qayta qo'ng'iroq qilish funksiyasiga ham imkon beradi.
// spawn() => event loopni blocklamasdan asynchron child process yaratadi
// fork() => yani process ochish uchun ishlatiladi
//

const { spawn } = require('child_process');
// const child = spawn('ls');

// child.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// child.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// child.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });

const cp = require('child_process');
const child = cp.fork(__dirname + '/sub.js');
  
child.on('message', function(m) {
  console.log('Parent process received:', m);
});
  
child.send({ hello: 'from parent process' });
  
child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});