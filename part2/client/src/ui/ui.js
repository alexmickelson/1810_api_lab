import api from "../svc/api.js"
import messagesDomain from "../domain/messages.js"

export default {
  displayMessages: async () => {
    messagesDomain.setMessages(await api.getMessages())

    const messageContainer = document.getElementById("previousMessages")
    messageContainer.replaceChildren()

    messagesDomain.getMessages().forEach((msg) => {
      const li = document.createElement("li")
      li.textContent = msg.text
      messageContainer.appendChild(li)
    })
  },
}
