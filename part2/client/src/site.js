import api from "./svc/api.js"
import ui from "./ui/ui.js"

const form = document.getElementById("newMessage")
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const text = document.getElementById("messageText").value
    await api.sendMessage(text);
    await ui.displayMessages()
})

await ui.displayMessages()