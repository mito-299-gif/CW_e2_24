const scheduleDisplay = document.getElementById("scheduleDisplay");

function updateDays() {
    const roomSelect = document.getElementById("roomSelect");
    const daySelect = document.getElementById("daySelect");
    const room = roomSelect.value;

    daySelect.innerHTML = '<option value="">ເລືອກມື້ຮຽນ</option>';

    if (room) {
        const days = Object.keys(schedules[room]);
        let today = new Date().getDay(); // 0 = ອາທິດ, 1 = ຈັນ, ..., 6 = ສະວາທີ

        if (today === 0 || today === 6) {
            today = 1; // ຖ້າເປັນອາທິດ ຫລື ເສົາ, ປັບໃຫ້ເປັນຈັນ
        }

        days.forEach(day => {
            const dayNames = ["ຈັນ", "ຄານ", "ພຸດ", "ພະຫັດ", "ສຸກ"];
            const dayName = dayNames[day - 1];
            const option = document.createElement("option");
            option.value = day;
            option.textContent = dayName;
            daySelect.appendChild(option);
        });

        // ປັບໃຫ້ເລືອກມື້ປັດຈຸບັນອັດຕະໂນມັດ
        if (days.includes(today.toString())) {
            daySelect.value = today.toString();
        } else {
            daySelect.value = days[0];
        }

        // ສະແດງຕາຕະລາງທັນທີ
        showSchedule();
        daySelect.disabled = false;
    } else {
        daySelect.disabled = true;
        scheduleDisplay.innerHTML = "<p>ກະລຸນາເລືອກຫ້ອງຮຽນ</p>";
    }
}

function showSchedule() {
    const room = document.getElementById("roomSelect").value;
    const day = document.getElementById("daySelect").value;
    let scheduleText = "";

    if (schedules[room] && schedules[room][day]) {
        scheduleText = schedules[room][day].map(item => `<p>${item}</p>`).join('');
    } else {
        scheduleText = "<p>ເລືອກຫ້ອງຮຽນດີໆ!!!!</p>";
    }

    scheduleDisplay.innerHTML = scheduleText;
}

document.getElementById("roomSelect").addEventListener("change", updateDays);
document.getElementById("daySelect").addEventListener("change", showSchedule);
const schedules = {
    "3": {
        "1": [
            "<font color='red'>ຊ/ມ</font> 1:Lect. ຄະນິດສາດ2: (FNS405) <font color='balack'>ອຈ.ພູທອນ</font>",
            "<font color='red'>ຊ/ມ</font> 2:Lap. ພື້ນຖານເວບໂປຣແກຣມ: (CS007) <font color='balack'>ອຈ.ມູນພິນ</font>",
            "<font color='Green'>ຊ/ມ</font> 3: ວ່າງ",
            "<font color='Green'>ຊ/ມ</font> 4: ວ່າງ"
        ],
        "2": [
            "<font color='red'>ຊ/ມ</font> 1:EX. ພາສາອັງກິດ2: (FNS209) <font color='balack'>ອຈ.ຄຳປອນ</font>",
            "<font color='red'>ຊ/ມ</font> 2:EX. ພາສາອັງກິດ2: (FNS209) <font color='balack'>ອຈ.ຄຳປອນ</font>",
            "<font color='red'>ຊ/ມ</font> 3:Lap ການອອກແບບເວບ: (CS007) <font color='balack'>ອຈ.ວິໄລສັກ</font>",
            "<font color='Green'>ຊ/ມ</font> 4: ວ່າງ"
        ],
        "3": [
            "<font color='Green'>ຊ/ມ</font> 1: ວ່າງ",
            "<font color='red'>ຊ/ມ</font> 2:Lect. ການອອກແບບເວບ: (MA205) <font color='balack'>ອຈ.ມູນພິນ</font>",
            "<font color='red'>ຊ/ມ</font> 3:Lect. ການສື່ສານຂໍ້ມູນ ແລະ ເຄືອຂ່າຍ: (MA205) <font color='balack'>ອຈ.ຄຳກອນ</font>",
            "<font color='Green'>ຊ/ມ</font> 4: ວ່າງ"
        ],
        "4": [
            "<font color='red'>ຊ/ມ</font> 1:Lect. ພື້ນຖານໂປຣແກຣມມິ່ງ: (BII08) <font color='balack'>ອຈ.ມູນພິນ</font>",
            "<font color='red'>ຊ/ມ</font> 2:Lap. ການສື່ສານຂໍ້ມູນ ແລະ ເຄືອຂ່າຍ: (CS007) <font color='balack'>ອຈ.ຄຳກອນ</font>",
            "<font color='Green'>ຊ/ມ</font> 3: ວ່າງ",
            "<font color='Green'>ຊ/ມ</font> 4: ວ່າງ"
        ],
        "5": [
            "<font color='red'>ຊ/ມ</font> 1:Lect. ລະບົບຂໍ້ມູນ: (MA205) <font color='balack'>ອຈ.ສົມມິດ</font>",
            "<font color='red'>ຊ/ມ</font> 2:Lap. ລະບົບຂໍ້ມູນ: (CS007) <font color='balack'>ອຈ.ມູນພິນ</font>",
            "<font color='red'>ຊ/ມ</font> 3:EX. ຄະນິດສາດ2: (FNS207) <font color='balack'>ອຈ.ພູທອນ</font>",
            "<font color='red'>ຊ/ມ</font> 4:Lect. ລາວສືກສາ2: (FNS405) <font color='balack'>ອຈ.ສີທະນົນໄຊ</font>"
        ]
    },
    "2": { //ຫ້ອງ 2
        "1": [
            "<font color='red'>ຊ/ມ</font> 1:Lect. ຄະນິດສາດ2: (FNS405) <font color='balack'>ອຈ.ພູທອນ</font>",
            "<font color='red'>ຊ/ມ</font> 2:EX. ພາສາອັງກິດ2: (FNS313) <font color='balack'>ອຈ.ຄຳປອນ</font>",
            "<font color='red'>ຊ/ມ</font> 3:Lap. ລະບົບຖານຂໍ້ມູນ (CS001) <font color='balack'>ອຈ.ພອນສຸດາ</font>",
            "<font color='Green'>ຊ/ມ</font> 4: ວ່າງ"
        ],
        "2": [
            "<font color='red'>ຊ/ມ</font> 1:Lap. ພື້ນຖານເວບໂປຣແກຣມ: (CS001) <font color='balack'>ອຈ.ມູນພິນ</font>",
            "<font color='red'>ຊ/ມ</font> 2:Lap. ການສື່ສານຂໍ້ມູນ ແລະ ເຄືອຂ່າຍ: (CS001) <font color='balack'>ອຈ.ຄຳຫຼ້າ</font>",
            "<font color='Green'>ຊ/ມ</font> 3: ວ່າງ",
            "<font color='Green'>ຊ/ມ</font> 4: ວ່າງ"
        ],
        "3": [
            "<font color='Green'>ຊ/ມ</font> 1: ວ່າງ",
            "<font color='red'>ຊ/ມ</font> 2:Lect. ການອອກແບບເວບ: (MA205) <font color='balack'>ອຈ.ມູນພິນ</font>",
            "<font color='red'>ຊ/ມ</font> 3:Lect. ການສື່ສານຂໍ້ມູນ ແລະ ເຄືອຂ່າຍ: (MA205) <font color='balack'>ອຈ.ຄຳກອນ</font>",
            "<font color='Green'>ຊ/ມ</font> 4: ວ່າງ"
        ],
        "4": [
            "<font color='red'>ຊ/ມ</font> 1:Lect. ພື້ນຖານໂປຣແກຣມມິ່ງ: (BII08) <font color='balack'>ອຈ.ມູນພິນ</font>",
            "<font color='Green'>ຊ/ມ</font> 2: ວ່າງ",
            "<font color='red'>ຊ/ມ</font> 3:EX. ພາສາອັງກິດ2: (FNS201) <font color='balack'>ອຈ.ຄຳປອນ</font>",
            "<font color='red'>ຊ/ມ</font> 4:Lap. ການອອກແບບເວບ: (CS005) <font color='balack'>ອຈ.ສຸກປະເສີດ</font>"
        ],
        "5": [
            "<font color='red'>ຊ/ມ</font> 1:Lect. ລະບົບຂໍ້ມູນ: (MA205) <font color='balack'>ອຈ.ສົມມິດ</font>",
            "<font color='red'>ຊ/ມ</font> 2:EX. ຄະນິດສາດ2: (FNS210) <font color='balack'>ອຈ.ພູທອນ</font>",
            "<font color='Green'>ຊ/ມ</font> 3: ວ່າງ",
            "<font color='red'>ຊ/ມ</font> 4:Lect. ລາວສືກສາ2: (FNS405) <font color='balack'>ອຈ.ສີທະນົນໄຊ</font>"
        ]
    }
};

