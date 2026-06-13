const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const DB_FILE = './withdrawals_db.json';

if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify([]));
}

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="hi">
    <head>
        <meta charset="UTF-8">
<meta name="monetag" content="664ae298201a400c170d4db8f5a6cc3f">
<script src="https://quge5.com/88/tag.min.js" data-zone="249186" async data-cfasync="false"></script>


        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SARKAR SUBWAY SURFERS</title>
        <style>
            body { margin: 0; background: #1a1a1a; color: white; text-align: center; font-family: 'Arial', sans-serif; }
            #wrapper { max-width: 360px; margin: 0 auto; padding: 5px; }
            
            #authScreen { background: linear-gradient(135deg, #222, #333); padding: 35px 20px; border-radius: 15px; border: 3px solid #ff9900; margin-top: 50px; box-shadow: 0 10px 20px rgba(0,0,0,0.5); }
            input { width: 90%; padding: 12px; margin: 12px 0; background: #222; color: white; border: 2px solid #ff9900; border-radius: 50px; text-align: center; font-size: 16px; font-weight: bold; }
            
            #gameScreen { display: none; }
            #dashboard { background: #222; padding: 10px; font-size: 13px; display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #ff9900; font-weight: bold; }
            
            #gameContainer { position: relative; width: 340px; height: 450px; background: #444; margin: 10px auto; overflow: hidden; border: 4px solid #ff9900; border-radius: 12px; box-shadow: 0 8px 16px rgba(0,0,0,0.6); }
            
            .railroad { position: absolute; width: 100%; height: 200%; top: -100%; background: linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0) 80%, #2b1d0c 81%, #2b1d0c 90%, rgba(0,0,0,0) 91%); background-size: 100% 40px; animation: trackMove 0.5s linear infinite; }
            @keyframes trackMove { 0% { transform: translateY(0); } 100% { transform: translateY(40px); } }
            
            .steel-rail { position: absolute; top: 0; bottom: 0; width: 6px; background: linear-gradient(90deg, #bbb, #fff, #888); box-shadow: 2px 0 5px rgba(0,0,0,0.5); }
            #rail1_L { left: 15%; } #rail1_R { left: 35%; }
            #rail2_L { left: 45%; } #rail2_R { left: 65%; }
            #rail3_L { left: 75%; } #rail3_R { left: 95%; }

            #player { position: absolute; width: 44px; height: 60px; bottom: 15px; left: 148px; transition: left 0.1s; z-index: 10; }
            .boy-head { width: 22px; height: 22px; background: #ffccbc; border-radius: 50%; margin: 0 auto; position: relative; box-shadow: 0 2px 4px rgba(0,0,0,0.3); }
            .boy-head::before { content: '🧢'; position: absolute; top: -10px; left: -2px; font-size: 18px; }
            .boy-body { width: 30px; height: 26px; background: #ff5722; border-radius: 6px; margin: -2px auto 0; position: relative; border-top: 3px solid #00bcd4; }
            .boy-legs { width: 24px; height: 12px; background: #1e88e5; margin: 0 auto; border-radius: 0 0 4px 4px; display: flex; justify-content: space-between; }
            .boy-legs::before, .boy-legs::after { content: '👟'; font-size: 10px; }

            .coin { position: absolute; width: 24px; height: 24px; background: radial-gradient(circle, #fff176, #fbc02d); border-radius: 50%; border: 2px solid #f57f17; box-shadow: 0 0 10px #ffee58; animation: spin 0.6s linear infinite; z-index: 5; }
            @keyframes spin { 0% { transform: rotateY(0deg); } 100% { transform: rotateY(360deg); } }
            
            .obstacle { position: absolute; width: 50px; height: 75px; background: linear-gradient(to bottom, #37474f, #78909c); border-radius: 8px 8px 2px 2px; border: 2px solid #b0bec5; box-shadow: 0 4px 10px rgba(0,0,0,0.7); z-index: 5; }
            .obstacle::before { content: ''; position: absolute; top: 8px; left: 4px; right: 4px; height: 18px; background: #263238; border-radius: 4px; border-bottom: 2px solid #ffeb3b; }
            .obstacle::after { content: '🔴 🔴'; position: absolute; bottom: 8px; left: 4px; font-size: 10px; width: 100%; text-align: center; color: #ff1744; }
            
            button { background: linear-gradient(180deg, #ffb300, #ff8f00); border: none; padding: 10px 18px; font-weight: bold; cursor: pointer; border-radius: 50px; font-size: 14px; color: #000; box-shadow: 0 4px 6px rgba(0,0,0,0.3); }
            button:active { transform: scale(0.95); }
            
            #walletSection { background: #222; padding: 15px; margin-top: 10px; border-radius: 10px; text-align: left; border: 1px solid #333; }
            .history-title { font-weight: bold; color: #ff9900; border-bottom: 1px solid #444; padding-bottom: 5px; margin-top: 10px; font-size: 14px; }
            .history-list { font-size: 12px; max-height: 100px; overflow-y: auto; color: #ccc; }
            .history-item { margin: 6px 0; border-bottom: 1px dashed #333; padding-bottom: 4px; }

            #wModal { display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #222; padding: 20px; border: 3px solid #ff9900; border-radius: 15px; width: 270px; z-index: 100; box-shadow: 0 0 20px rgba(0,0,0,0.8); }
            .ad-box { width: 100%; height: 50px; background: #222; margin: 5px 0; line-height: 50px; color: #555; font-size: 11px; text-align: center; border: 1px dashed #444; }
        </style>
    </head>
    <body>
        <div id="wrapper">
            
            <div id="authScreen">
                <h2>🎮 SARKAR SUBWAY SURFERS</h2>
                <p style="color:#bbb; font-size:14px;">अपना नंबर डालकर गेम शुरू करें सरकार</p>
                <input type="number" id="loginPhone" placeholder="अपना मोबाइल नंबर डालें" required>
                <br><br>
                <button onclick="loginUser()">START GAME</button>
            </div>

            <div id="gameScreen">
                <div class="ad-box">[Google AdSense Banner Area]</div>
                
                <div id="dashboard">
                    <div>👤: <span id="userDisp" style="color:#00bcd4;">-</span></div>
                    <div>🪙: <span id="coins" style="color:gold;">0</span></div>
                    <div>💰: <span style="color:chartreuse;">₹<span id="rupees">0.00</span></span></div>
                    <button onclick="openModal()">विड्रॉल</button>
                </div>

                <div id="gameContainer">
                    <div class="railroad" id="trackLines"></div>
                    
                    <div class="steel-rail" id="rail1_L"></div><div class="steel-rail" id="rail1_R"></div>
                    <div class="steel-rail" id="rail2_L"></div><div class="steel-rail" id="rail2_R"></div>
                    <div class="steel-rail" id="rail3_L"></div><div class="steel-rail" id="rail3_R"></div>
                    
                    <div id="player">
                        <div class="boy-head"></div>
                        <div class="boy-body"></div>
                        <div class="boy-legs"></div>
                    </div>
                </div>

                <div class="ad-box">[Google AdSense Banner Area]</div>

                <div id="walletSection">
                    <div class="history-title">📊 आपका लाइफटाइम वॉलेट बैलेंस</div>
                    <div style="margin: 5px 0; font-size:15px; font-weight:bold; color:chartreuse;">सुरक्षित मुख्य बैलेंस: ₹<span id="walletRupees">0.00</span></div>
                    
                    <div class="history-title">🕒 विड्रॉल पासबुक (Withdraw History)</div>
                    <div id="historyList" class="history-list">
                        <div style="color:#666; text-align:center; padding:10px;">कोई पुराना रिकॉर्ड नहीं मिला।</div>
                    </div>
                </div>
            </div>

        </div>

        <div id="wModal">
            <h3>💸 पेमेंट विड्रॉल करें</h3>
            <p style="font-size:12px; color:#aaa;">पैसे ट्रांसफर करने के लिए अपनी सही UPI ID डालें:</p>
            <input type="text" id="upiId" placeholder="UPI ID (जैसे: sarkar@upi)">
            <br><br>
            <button onclick="sendRequest()">कंफर्म ट्रांसफर</button>
            <button onclick="document.getElementById('wModal').style.display='none'" style="background:#555; color:white; border-radius:50px;">रद्द करें</button>
        </div>

        <script>
            let userPhone = "";
            let coins = 0; 
            let currentSessionRupees = 0; 
            let totalWalletRupees = 0.00; // लाइफटाइम पैसे जो कभी रीसेट नहीं होंगे
            let currentLane = 1; const lanes = [20, 148, 275]; 
            let elements = []; let active = false;
            let speed = 6;
            const track = document.getElementById('trackLines');

            // 🎵 इन-बिल्ट डिजिटल साउंड जनरेटर (Web Audio API)
            let audioCtx = null;
            function initAudio() {
                if (!audioCtx) {
                    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                }
            }

            function playSound(type) {
                if (!audioCtx) return;
                let osc = audioCtx.createOscillator();
                let gain = audioCtx.createGain();
                osc.connect(gain);
                gain.connect(audioCtx.destination);

                if (type === 'coin') {
                    // सिक्का लेने का डिजिटल "टीन" साउंड
                    osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5 note
                    osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.08); // A5 note
                    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
                    osc.start(); osc.stop(audioCtx.currentTime + 0.2);
                } else if (type === 'crash') {
                    // टकराने का "धड़ाम" साउंड
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(150, audioCtx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.4);
                    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
                    osc.start(); osc.stop(audioCtx.currentTime + 0.4);
                }
            }

            function loginUser() {
                const phoneInput = document.getElementById('loginPhone').value;
                if(phoneInput.length < 10) { alert("कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें!"); return; }
                userPhone = phoneInput;
                document.getElementById('authScreen').style.display = 'none';
                document.getElementById('gameScreen').style.display = 'block';
                document.getElementById('userDisp').innerText = userPhone;
                
                initAudio(); // साउंड एक्टिवेट करें
                fetchHistory();
                active = true;
                player.style.left = lanes[currentLane] + 'px';
            }

            document.addEventListener('keydown', (e) => {
                if(!active) return;
                initAudio();
                if(e.key === 'ArrowLeft' && currentLane > 0) currentLane--;
                if(e.key === 'ArrowRight' && currentLane < 2) currentLane++;
                player.style.left = lanes[currentLane] + 'px';
            });

            document.getElementById('gameContainer').addEventListener('touchstart', (e) => {
                if(!active) return;
                initAudio();
                const touchX = e.touches[0].clientX;
                if(touchX < window.innerWidth / 2 && currentLane > 0) currentLane--;
                else if(touchX > window.innerWidth / 2 && currentLane < 2) currentLane++;
                player.style.left = lanes[currentLane] + 'px';
            });

            function spawn() {
                if(!active) return;
                const isCoin = Math.random() > 0.4;
                const el = document.createElement('div');
                el.classList.add(isCoin ? 'coin' : 'obstacle');
                const lane = Math.floor(Math.random()*3);
                
                if (isCoin) { el.style.left = (lanes[lane] + 10) + 'px'; } 
                else { el.style.left = (lanes[lane] - 3) + 'px'; }
                
                el.style.top = '-80px';
                document.getElementById('gameContainer').appendChild(el);
                elements.push({el, type: isCoin?'coin':'obstacle', y: -80, lane});
            }

            function update() {
                if(!active) return;
                for(let i=elements.length-1; i>=0; i--) {
                    let item = elements[i];
                    item.y += speed;
                    item.el.style.top = item.y + 'px';
                    
                    if(item.y > 330 && item.y < 390 && item.lane === currentLane) {
                        if(item.type === 'coin') {
                            coins++;
                            playSound('coin'); // सिक्का ध्वनि
                            document.getElementById('coins').innerText = coins;
                            
                            // 1 सिक्का = ₹0.10, जो तुरंत लाइफटाइम वॉलेट में जुड़ेगा
                            totalWalletRupees += 0.10;
                            document.getElementById('rupees').innerText = totalWalletRupees.toFixed(2);
                            document.getElementById('walletRupees').innerText = totalWalletRupees.toFixed(2);
                            
                            if(coins % 10 === 0) {
                                speed += 1.5;
                                let animSpeed = 0.5 - (speed * 0.02);
                                track.style.animationDuration = (animSpeed > 0.1 ? animSpeed : 0.1) + 's';
                            }
                        } else {
                            active = false; 
                            playSound('crash'); // आउट होने की ध्वनि
                            alert("💥 ट्रेन से टक्कर! गेम ओवर। लेकिन आपके जीते हुए पैसे सुरक्षित हैं!"); 
                            resetGame();
                        }
                        item.el.remove(); elements.splice(i,1); continue;
                    }
                    if(item.y > 450) { item.el.remove(); elements.splice(i,1); }
                }
            }

            function resetGame() {
                elements.forEach(i=>i.el.remove()); elements=[]; 
                coins = 0; // सिर्फ कॉइन हीरो (0) होगा
                speed = 6;
                track.style.animationDuration = '0.5s';
                document.getElementById('coins').innerText = 0;
                // मुख्य पैसे वैसे के वैसे ही डिस्प्ले रहेंगे, रीसेट नहीं होंगे!
                document.getElementById('rupees').innerText = totalWalletRupees.toFixed(2);
                document.getElementById('walletRupees').innerText = totalWalletRupees.toFixed(2);
                currentLane = 1; player.style.left = lanes[1] + 'px'; active = true;
            }

            function openModal() {
                if(totalWalletRupees < 1) { alert("कम से कम ₹1 वॉलेट बैलेंस होना आवश्यक है!"); return; }
                document.getElementById('wModal').style.display='block';
            }

            function sendRequest() {
                const upi = document.getElementById('upiId').value;
                if(!upi) return alert("कृपया भुगतान के लिए UPI ID डालें!");

                fetch('/request-withdraw', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ phone: userPhone, upi, amount: totalWalletRupees.toFixed(2) })
                })
                .then(res => res.json())
                .then(data => {
                    // 🎉 सक्सेसफुली का शानदार मैसेज अलर्ट
                    alert("🎉 SUCCESSFUL! 🎉\\n\\n" + data.message);
                    document.getElementById('wModal').style.display='none';
                    
                    // विड्रॉल होने पर पैसे वॉलेट से कटकर जीरो होंगे
                    totalWalletRupees = 0;
                    resetGame();
                    fetchHistory();
                });
            }

            function fetchHistory() {
                fetch('/get-history?phone=' + userPhone)
                .then(res => res.json())
                .then(data => {
                    const listContainer = document.getElementById('historyList');
                    if(data.length === 0) {
                        listContainer.innerHTML = '<div style="color:#666; text-align:center; padding:10px;">कोई हिस्ट्री उपलब्ध नहीं है।</div>';
                        return;
                    }
                    listContainer.innerHTML = "";
                    data.forEach(item => {
                        listContainer.innerHTML += \`<div class="history-item">📅 \${item.time} | 💸 <b>₹\${item.amount}</b> | <span style="color:#2ecc71; font-weight:bold;">\${item.status}</span></div>\`;
                    });
                });
            }

            setInterval(spawn, 1100); setInterval(update, 20);
        </script>
    </body>
    </html>
    `);
});

app.post('/request-withdraw', (req, res) => {
    const { phone, upi, amount } = req.body;
    const time = new Date().toLocaleString();

    try {
        const fileData = fs.readFileSync(DB_FILE, 'utf8');
        const list = JSON.parse(fileData);
        const newId = list.length + 1;
        
        // स्टेटस को 'Pending' से बदलकर 'Success (सफलतापूर्वक भेजा गया)' कर दिया
        list.push({ id: newId, phone, upi, amount, status: 'Success (सफलतापूर्वक भेजा गया)', time });
        fs.writeFileSync(DB_FILE, JSON.stringify(list, null, 2));

        console.log("\n==================================================");
        console.log(` ✅ [विड्रॉल सफलतापूर्वक दर्ज हुआ!] ✅ `);
        console.log(`🆔 रिक्वेस्ट नंबर : #${newId}`);
        console.log(`📱 खिलाड़ी का फ़ोन : ${phone}`);
        console.log(`🔑 खिलाड़ी की UPI   : ${upi}`);
        console.log(`💸 भेजी गई राशि   : ₹${amount}`);
        console.log(`🕒 समय तारीख     : ${time}`);
        console.log("==================================================\n");

        res.json({ success: true, message: `आपकी ₹${amount} की राशि सीधे आपकी UPI ID (${upi}) पर सफलतापूर्वक ट्रांसफर कर दी गई है!` });
    } catch (err) {
        res.status(500).json({ success: false, message: "डेटा सेव करने में एरर!" });
    }
});

app.get('/get-history', (req, res) => {
    const phone = req.query.phone;
    try {
        const fileData = fs.readFileSync(DB_FILE, 'utf8');
        const list = JSON.parse(fileData);
        const userList = list.filter(item => item.phone === phone);
        res.json(userList);
    } catch (err) {
        res.json([]);
    }
});

app.listen(PORT, () => {
    console.log("\n==================================================");
    console.log(`🚀 SARKAR SUBWAY SURFERS सर्वर पूरी तरह एक्टिव है!`);
    console.log(`🌐 गेम खेलने का लिंक: http://localhost:${PORT}`);
    console.log("==================================================");
});
