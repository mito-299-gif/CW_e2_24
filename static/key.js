document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert('หั่นแน่สิเบี่ง code 555555');
});

// ป้องกันกด F12 และ Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
document.addEventListener('keydown', (e) => {

    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        alert('หั่นแน่สิเบี่ง code 555555');
    }


    if ((e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
        alert('หั่นแน่สิเบี่ง code 555555');
    }
});

// ป้องกันการคัดลอกข้อความ
document.addEventListener('copy', (e) => {
    e.preventDefault();
    alert('ไม่อนุญาตให้คัดลอกเนื้อหา!');
});

// ป้องกันการดึงข้อมูลด้วย iframe
if (window.top !== window.self) {
    window.top.location = window.self.location;
}