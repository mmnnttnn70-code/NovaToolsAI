const sendBtn = document.getElementById("sendBtn");
const input = document.getElementById("messageInput");
const messages = document.getElementById("messages");

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

async function sendMessage() {
    const text = input.value.trim();

    if (text === "") return;

    messages.innerHTML += `
        <div style="
            background:#4F46E5;
            color:white;
            padding:12px;
            border-radius:10px;
            margin-bottom:10px;">
            ${text}
        </div>
    `;

    input.value = "";
    messages.scrollTop = messages.scrollHeight;

    try {

        const response = await fetch("http://172.20.1.199:5000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: text
            })
        });

        console.log("Status:", response.status);

        const result = await response.text();
        console.log("Response:", result);

        // أوقف التنفيذ هنا مؤقتًا للاختبار
        return;

    } catch (error) {

        console.log(error);

        messages.innerHTML += `
            <div style="
                background:#ffdddd;
                color:red;
                padding:12px;
                border-radius:10px;
                margin-bottom:10px;">
                ❌ ${error}
            </div>
        `;

        messages.scrollTop = messages.scrollHeight;
    }
}