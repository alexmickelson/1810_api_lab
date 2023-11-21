import api from "./svc/api.js"
import ui from "./ui/ui.js"

const form = document.getElementById("newMessage")
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    e.stopPropagation()
    e.stopImmediatePropagation()
    
    const text = document.getElementById("messageText").value
    await api.sendMessage(text);

    input.value = ""
    
    await ui.displayMessages();
})

await ui.displayMessages()