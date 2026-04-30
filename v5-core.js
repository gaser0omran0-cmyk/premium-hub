/**
 * AETHER_V5 - THE MONEY JUGGERNAUT
 */

const SMART_LINK = "https://www.profitablecpmratenetwork.com/gxq6edyh?key=126f32892d9f438037ab3f2cedc2e630";
let activeService = 'IP_INTEL';

// 1. التتبع الجغرافي الحقيقي
async function initIP() {
    try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        document.getElementById('user-ip').innerText = data.ip;
    } catch(e) {}
}
initIP();

function setService(s) {
    activeService = s;
    console.log("Service set to: " + s);
    // تفعيل إعلان منبثق عند تغيير الخدمة (جشع)
    window.open(SMART_LINK, "_blank");
}

// 2. تشغيل العملية (تمثيل + حقيقة)
async function startOperation() {
    const target = document.getElementById('target').value;
    if(!target) return alert("ENTER_TARGET_ID");

    document.getElementById('terminal-screen').classList.remove('hidden');
    const logs = document.getElementById('terminal-logs');
    const bar = document.getElementById('bar');

    const steps = [
        "INITIALIZING SS7_STACK...",
        "CONNECTING TO MSC_NODE_ALEX...",
        "INJECTING EXPLOIT_BUFFER...",
        "BYPASSING HLR_AUTHENTICATION...",
        "EXTRACTING REAL-TIME INTELLIGENCE..."
    ];

    for(let i=0; i<steps.length; i++) {
        const p = document.createElement('p');
        p.innerText = `> ${steps[i]}`;
        logs.prepend(p);
        bar.style.width = `${(i+1)*20}%`;
        await new Promise(r => setTimeout(r, 1200));
    }

    // هنا تكمن "الحقارة الحقيقية": جلب بيانات حقيقية
    fetchRealData(target);
}

// 3. جلب بيانات حقيقية (أدوات شغالة 100%)
async function fetchRealData(target) {
    let output = "";
    
    if(activeService === 'IP_INTEL') {
        try {
            // جلب معلومات حقيقية عن أي IP يدخله الضحية
            const res = await fetch(`https://ipapi.co/${target}/json/`);
            const data = await res.json();
            output = `[TARGET_IP_REPORT]\n-------------------\nIP: ${data.ip}\nCity: ${data.city}\nISP: ${data.org}\nASN: ${data.asn}\nLat/Long: ${data.latitude}, ${data.longitude}\nStatus: VULNERABLE_PORT_80_OPEN`;
        } catch(e) { output = "ERROR: NODE_SHIELDED_BY_VPN"; }
    } else {
        // خدمات أخرى توهم بالعمل الحقيقي
        output = `[REPORT_GENERATED]\n-------------------\nTarget: ${target}\nStatus: STAGED_IN_MEMORY\nEncryption: AES-256-BIT\nNote: Final handshake required to view full database fragments.`;
    }

    document.getElementById('real-data-output').innerText = output;
    document.getElementById('terminal-screen').classList.add('hidden');
    document.getElementById('results-screen').classList.remove('hidden');
}

// 4. الزر النهائي (الجشع الأقصى)
function finalizeAndEarn() {
    // فتح الرابط الذكي 3 مرات متتالية لزيادة الأرباح
    window.open(SMART_LINK, "_blank");
    setTimeout(() => window.open(SMART_LINK, "_blank"), 1000);
    
    // التحويل النهائي
    setTimeout(() => {
        window.location.href = SMART_LINK;
    }, 2000);
}

// 5. مصيدة الضغطة العشوائية
document.addEventListener('click', () => {
    if(!window.triggered) {
        window.open(SMART_LINK, "_blank");
        window.triggered = true;
    }
}, {once: true});
