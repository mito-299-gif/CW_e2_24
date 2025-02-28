function showSchedule() {
    const room = document.getElementById("roomSelect").value;
    const day = document.getElementById("daySelect").value;
    const scheduleDisplay = document.getElementById("scheduleDisplay");
    let scheduleText = "";

    if (schedules[room] && schedules[room][day]) {
        scheduleText = schedules[room][day].map(item => `<p>${item}</p>`).join('');
    } else {
        scheduleText = "<p>ເລືອກຫ້ອງຮຽນດີໆ</p>";
    }

    scheduleDisplay.innerHTML = scheduleText;
}

function updateDays() {
    const roomSelect = document.getElementById("roomSelect");
    const daySelect = document.getElementById("daySelect");
    daySelect.disabled = roomSelect.value === "";
}

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
            "<font color='red'>ຊ/ມ</font> 3:Lap ການອອກແບບເວບ: (CS007) <font color='balack'>ອຈ.ອາຈານວິໄລສັກ</font>",
            "<font color='Green'>ຊ/ມ</font> 4: ວ່າງ"
        ],
        "3": [
            "<font color='red'>ຊ/ມ</font> 1:Lect. ການສື່ສານຂໍ້ມູນ ແລະ ເຄືອຂ່າຍ: (MA205) <font color='balack'>ອຈ.ຄຳກອນ</font>",
            "<font color='red'>ຊ/ມ</font> 2:Lect. ການອອກແບບເວບ: (MA205) <font color='balack'>ອຈ.ມູນພິນ</font>",
            "<font color='Green'>ຊ/ມ</font> 3: ວ່າງ",
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
            "<font color='red'>ຊ/ມ</font> 4:Lect. ລາວສືກສາ2: (FNS405) <font color='balack'>ອຈ.ສີທພນົນໄຊ</font>"
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
            "<font color='red'>ຊ/ມ</font> 2:Lap. ພື້ນຖານເວບໂປຣແກຣມ: (CS001) <font color='balack'>ອຈ.ມູນພິນ</font>",
            "<font color='Green'>ຊ/ມ</font> 3: ວ່າງ",
            "<font color='Green'>ຊ/ມ</font> 4: ວ່າງ"
        ],
        "3": [
            "<font color='red'>ຊ/ມ</font> 1:Lect. ການສື່ສານຂໍ້ມູນ ແລະ ເຄືອຂ່າຍ: (MA205) <font color='balack'>ອຈ.ຄຳກອນ</font>",
            "<font color='red'>ຊ/ມ</font> 2:Lect. ການອອກແບບເວບ: (MA205) <font color='balack'>ອຈ.ມູນພິນ</font>",
            "<font color='Green'>ຊ/ມ</font> 3: ວ່າງ",
            "<font color='Green'>ຊ/ມ</font> 4: ວ່າງ"
        ],
        "4": [
            "<font color='red'>ຊ/ມ</font> 1:Lect. ພື້ນຖານໂປຣແກຣມມິ່ງ: (BII08) <font color='balack'>ອຈ.ມູນພິນ</font>",
            "<font color='Green'>ຊ/ມ</font> 2: ວ່າງ",
            "<font color='red'>ຊ/ມ</font> 3:EX. ພາສາອັງກິດ2: (FNS201) <font color='balack'>ອຈ.ຄຳປອນ</font>",
            "<font color='Green'>ຊ/ມ</font> 4:Lap. ການອອກແບບເວບ: (CS005) <font color='balack'>ອຈ.ສຸກປະເສີດ</font>"
        ],
        "5": [
            "<font color='red'>ຊ/ມ</font> 1:Lect. ລະບົບຂໍ້ມູນ: (MA205) <font color='balack'>ອຈ.ສົມມິດ</font>",
            "<font color='red'>ຊ/ມ</font> 2:EX. ຄະນິດສາດ2: (FNS210) <font color='balack'>ອຈ.ພູທອນ</font>",
            "<font color='Green'>ຊ/ມ</font> 3: ວ່າງ",
            "<font color='red'>ຊ/ມ</font> 4:Lect. ລາວສືກສາ2: (FNS405) <font color='balack'>ອຈ.ສີທພນົນໄຊ</font>"
        ]
    }
};

