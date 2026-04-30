// Geo-IP Tracking (The Hook)
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

// Global Feed Spoofing
const locations = ["Alexandria", "Dubai", "New York", "London", "Riyadh", "Berlin"];
setInterval(() => {
    const feed = document.getElementById(`feed-${Math.floor(Math.random()*3)+1}`);
    const loc = locations[Math.floor(Math.random()*locations.length)];
    feed.innerHTML = `<span class="text-cyan-500">[${new Date().toLocaleTimeString()}]</span> RECENT_BREACH: ${loc}_NODE_${Math.floor(Math.random()*900)+100}`;
}, 2000);

const logs = [
    { m: "INITIALIZING SS7 EXPLOIT VECTOR...", d: 1000 },
    { m: "SCANNING FOR VULNERABLE MOBILE SWITCHING CENTER (MSC)...", d: 1500 },
    { m: "FOUND: MSC_GLOBAL_ID_44201. ATTEMPTING HANDSHAKE...", d: 1200 },
    { m: "ERROR: HANDSHAKE REJECTED BY FIREWALL. RE-ROUTING VIA TOR_GATEWAY...", d: 2000, e: true },
    { m: "BYPASSING HLR/VLR AUTHENTICATION...", d: 1800 },
    { m: "INJECTING PACKET_FRAGMENT_0x88...", d: 500 },
    { m: "INTERCEPTING SIGNALING CHANNEL 7...", d: 2500 },
    { m: "DUMPING SESSION_KEYS & IMSI_DATA...", d: 3000 },
    { m: "FINALIZING VIRTUAL_UPLINK...", d: 1500 }
];

async function initiateBreach() {
    if (!document.getElementById('target').value) return;
    document.getElementById('main-ui').classList.add('opacity-0', 'scale-110');
    setTimeout(async () => {
        document.getElementById('main-ui').classList.add('hidden');
        document.getElementById('terminal-ui').classList.remove('hidden');
        await runTerminal();
    }, 1000);
}

async function runTerminal() {
    const content = document.getElementById('terminal-content');
    let progress = 0;

    for (let i = 0; i < logs.length; i++) {
        const p = document.createElement('p');
        if (logs[i].e) p.className = "red-alert";
        p.innerText = `> ${logs[i].m}`;
        content.prepend(p);

        progress += Math.floor(100 / logs.length);
        document.getElementById('loader-percent').innerText = `${Math.min(progress, 100)}%`;
        document.getElementById('progress-line').style.width = `${Math.min(progress, 100)}%`;

        await new Promise(r => setTimeout(r, logs[i].d));
    }

    setTimeout(() => {
        document.getElementById('terminal-ui').classList.add('hidden');
        document.getElementById('trap-ui').classList.remove('hidden');
    }, 1000);
}

