function responBotGanda(botResponse, delayUtama = 500, delayLanjutan = 2000) {
    const chatbox = document.getElementById('chatbox');

    // setTimeout(() => {
    //     chatbox.innerHTML += `
    //         <li class="chat incoming">
    //             <span class="material-symbols-outlined">smart_toy</span>
    //             <p>${botResponse}</p>
    //         </li>`;
    //     chatbox.scrollTop = chatbox.scrollHeight;
    // }, delayUtama);

    setTimeout(() => {
        chatbox.innerHTML += `
            <li class="chat incoming">
                <span class="material-symbols-outlined">smart_toy</span>
                <p>🤖 Apakah masih ada yang ingin kamu tanyakan?</p>
            </li>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    }, delayLanjutan);
}

document.addEventListener('DOMContentLoaded', () => {
    const chatbox = document.getElementById('chatbox');
    const messageInput = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');
    const options = document.getElementById('options');
    const chatbottogler = document.getElementById('chatbottogler');
    const chatbot = document.getElementById('chatbot');
    const closeBtn = document.getElementById('close-chatbot');




    chatbottogler.addEventListener('click', () => {
        console.log('toggleChatbot');
        document.body.classList.toggle('show-chatbot');
    });
    closeBtn.addEventListener('click', () => {
        document.body.classList.remove('show-chatbot');
        console.log("Close button clicked");
    });


    function addMessageButtonListeners() {
        document.querySelectorAll('.message-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                messageInput.value = btn.dataset.message;
            });
        });
    }


    addMessageButtonListeners();

    sendBtn.addEventListener('click', () => {

        const message = messageInput.value.trim().toLowerCase();
        if (message) {
            chatbox.innerHTML += `<li class="chat outgoing"><p>${messageInput.value}</p></li>`;

            let botResponse;
            if (message === 'halo') {
                botResponse = '👋 Halo! Aku Dipa, bot yang siap membantu kamu mencari informasi seputar SKCK (Surat Keterangan Catatan Kepolisian). Ada yang bisa Dipa bantu hari ini?';
                options.innerHTML = `
                            <button class="message-btn" data-message="Syarat pembuatan SKCK">Syarat pembuatan SKCK</button>
                            <button class="message-btn" data-message="Cara membuat SKCK">Cara membuat SKCK</button>
                            <button class="message-btn" data-message="Perpanjangan SKCK">Perpanjangan SKCK</button>
                            <button class="message-btn" data-message="Biaya SKCK">Biaya SKCK</button>
                        `;
                addMessageButtonListeners();

            } else if (message === 'hai') {
                botResponse = '👋 Hai! Aku Dipa, bot yang siap membantu kamu mencari informasi seputar SKCK (Surat Keterangan Catatan Kepolisian). Ada yang bisa Dipa bantu hari ini?';
                options.innerHTML = `
                            <button class="message-btn" data-message="Syarat pembuatan SKCK">Syarat pembuatan SKCK</button>
                            <button class="message-btn" data-message="Cara membuat SKCK">Cara membuat SKCK</button>
                            <button class="message-btn" data-message="Perpanjangan SKCK">Perpanjangan SKCK</button>
                            <button class="message-btn" data-message="Biaya SKCK">Biaya SKCK</button>
                        `;
                addMessageButtonListeners();
            } else if (message === 'syarat pembuatan skck' || message === 'apa syarat membuat skck' || message === 'apa saja syarat membuat skck') {
                botResponse = `📄 Syarat Pembuatan SKCK:
1. Fotokopi KTP atau identitas lain (bawa asli juga)
2. Fotokopi Kartu Keluarga (KK)
3. Fotokopi Akta Kelahiran / Ijazah
4. Pas foto 4x6 berlatar belakang merah – biasanya 4–6 lembar
5. Surat Pengantar dari Kelurahan / RT RW (untuk keperluan tertentu)
6. Formulir Sidik Jari dari kepolisian (diambil di tempat)
7. Jika pembuatan SKCK online, siapkan file digital dari dokumen di atas`;
                responBotGanda(botResponse)
            } else if (message === 'cara membuat skck' || message === 'gimana cara membuat skck' || message === 'bagaimana cara membuat skck') {
                botResponse = `📄 Untuk membuat SKCK secara online, kamu bisa langsung mengunjungi situs resmi berikut:

👉 <a href="https://skck.polri.go.id" target="_blank">https://skck.polri.go.id</a>

Pastikan kamu sudah menyiapkan dokumen persyaratan dalam bentuk digital sebelum mendaftar.`;
                responBotGanda(botResponse)
            } else if (message === 'perpanjangan skck' || message === 'bagaimana cara perpanjang skck' || message === 'gimana cara perpanjang skck') {
                botResponse = `🔁 Untuk perpanjangan SKCK secara online, silakan kunjungi situs resmi berikut:

👉 <a href="https://skck.polri.go.id" target="_blank">https://skck.polri.go.id</a>

Setelah masuk, pilih menu Perpanjangan SKCK, lalu isi formulir dan unggah dokumen yang diminta. Pastikan kamu login atau buat akun terlebih dahulu.`;
                responBotGanda(botResponse)
            } else if (message === 'biaya skck' || message === 'berapa biaya membuat skck' || message === 'berapa biaya untuk membuat skck') {
                botResponse = `💰 Biaya Pembuatan SKCK:
SKCK dikenakan biaya sebesar Rp 30.000, sesuai dengan Peraturan Pemerintah No. 76 Tahun 2020.

Pembayaran dapat dilakukan secara langsung di loket pelayanan SKCK, atau secara online jika menggunakan layanan pendaftaran SKCK daring.`;
                responBotGanda(botResponse)
            } else if (message === 'terimakasih' || message === 'makasih') {
                botResponse = '🙏 Sama-sama! Senang bisa membantu!';
            }
            else if (message === 'cukup' || message === 'tidak' || message === 'sudah cukup' || message === 'tidak, terimakasih' || message === 'ngga') {
                botResponse = '😊 Baik! Kalau ada pertanyaan lain seputar skck lagi, jangan ragu untuk tanya ya. Selamat beraktivitas!! Senang bisa membantu!';
            }
            else {
                botResponse = `Saya menerima pesan Anda tentang "${messageInput.value}"`;
            }


            setTimeout(() => {
                chatbox.innerHTML += `<li class="chat incoming"><span class="material-symbols-outlined">smart_toy</span><p>${botResponse}</p></li>`;
                chatbox.scrollTop = chatbox.scrollHeight;
            }, 500);

            messageInput.value = '';
        }
    });

});


