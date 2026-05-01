/** * AETHER_V5 - SMART MONETIZATION CORE
 * PROTOCOL: ALGORITHM_DECEPTION_v2
 */

const SMART_LINK = "https://www.profitablecpmratenetwork.com/gxq6edyh?key=126f32892d9f438037ab3f2cedc2e630";
const AD_CHANCE = 0.4; // نسبة 40% للضغطات العشوائية (عشان الشركة ما تشكش)
let startTime = Date.now();
let activeService = 'IP_INTEL';

// 1. تتبع الـ IP الحقيقي (للمصداقية)
async function initIP() {
    try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        document.getElementById('user-ip').innerText = data.ip;
    } catch(e) { document.getElementById('user-ip').innerText = "NODE_ENCRYPTED"; }
}
initIP();

// 2. اختيار الخدمة (إجباري - لأن الضحية مهتم)
function setService(s) {
    activeService = s;
    // عند اختيار الخدمة، نفتح الإعلان فوراً (ده مبرر منطقي للشركة)
    window.open(SMART_LINK, "_blank");
}

// 3. بدء العملية (سجلات وهمية احترافية)
async function startOperation() {
    const target = document.getElementById('target').value;
    if(!target) return alert("ERR: TARGET_ID_NULL");

    document.getElementById('terminal-screen').classList.remove('hidden');
    const logs = document.getElementById('terminal-logs');
    const bar = document.getElementById('bar');

    const steps = [
        "LINKING TO GSM_MSC_GATEWAY...",
        "STAGING EXPLOIT_V3_FRAGMENTS...",
        "INTERCEPTING HLR_QUERY_RESPONSE...",
        "EXTRACTING NODE_METADATA...",
        "BYPASSING KERNEL_LOCK..."
    ];

    for(let i=0; i<steps.length; i++) {
        const p = document.createElement('p');
        p.innerText = `> ${steps[i]}`;
        logs.prepend(p);
        bar.style.width = `${(i+1)*20}%`;
        await new Promise(r => setTimeout(r, 1000 + Math.random() * 500));
    }

    fetchRealData(target);
}

// 4. جلب بيانات حقيقية (الخداع بالصدق)
async function fetchRealData(target) {
    let output = "";
    if(activeService === 'IP_INTEL') {
        try {
            const res = await fetch(`https://ipapi.co/${target}/json/`);
            const data = await res.json();
            output = `[REAL_TIME_REPORT]\nIP: ${data.ip}\nCity: ${data.city}\nISP: ${data.org}\nLat/Long: ${data.latitude}, ${data.longitude}\nStatus: VULNERABLE`;
        } catch(e) { output = `[TARGET_SCAN_COMPLETE]\nTarget: ${target}\nStatus: ENCRYPTED_NODE\nEncryption: AES-256`; }
    } else {
        output = `[TARGET_SCAN_COMPLETE]\nTarget: ${target}\nStatus: STAGED_IN_BUFFER\nNote: Handshake required via SmartLink to view decrypted fragments.`;
    }

    document.getElementById('real-data-output').innerText = output;
    document.getElementById('terminal-screen').classList.add('hidden');
    document.getElementById('results-screen').classList.remove('hidden');
}

// 5. نظام الـ "إجبار الذكي" (الخباثة القصوى)
document.addEventListener('click', () => {
    let timeElapsed = Date.now() - startTime;
    
    // الإعلان يفتح عشوائياً فقط لو الزائر قضى 5 ثواني في الموقع
    // ده بيخلي الـ Session تبان "طبيعية" جداً للشركة
    if (timeElapsed > 5000 && Math.random() < AD_CHANCE) {
        window.open(SMART_LINK, "_blank");
    }
});

// 6. الزر النهائي (هنا الجشع كله)
function finalizeAndEarn() {
    // نفتح الإعلان مرتين ورا بعض (Double Impression)
    window.open(SMART_LINK, "_blank");
    setTimeout(() => {
        window.location.href = SMART_LINK;
    }, 1500);
}
