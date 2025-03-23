
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert('ไม่อนุญาตให้คลิกขวา!');
});


document.addEventListener('keydown', (e) => {
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        alert('ไม่อนุญาตให้เปิด Developer Tools!');
    }

    if ((e.ctrlKey && e.shiftKey && e.key === 'I') || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.key === 'J') || // Ctrl+Shift+J
        (e.ctrlKey && e.key === 'U')) {              // Ctrl+U
        e.preventDefault();
        alert('ไม่อนุญาตให้เปิด Developer Tools!');
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

// ป้องกันการดึงข้อมูลจาก DOM
const observer = new MutationObserver(() => {
    document.body.innerHTML = '';
    alert('ไม่อนุญาตให้ดึงข้อมูลจาก DOM!');
});
observer.observe(document, { childList: true, subtree: true });

// ป้องกันการโหลดหน้าเว็บจาก User-Agent ที่ไม่พึงประสงค์
const blockedAgents = ['python', 'curl', 'wget', 'httpclient'];
const userAgent = navigator.userAgent.toLowerCase();
blockedAgents.forEach(agent => {
    if (userAgent.includes(agent)) {
        document.body.innerHTML = '';
        alert('ไม่อนุญาตให้เข้าถึงเว็บไซต์นี้!');
    }
});