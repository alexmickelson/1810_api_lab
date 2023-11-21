var messages = []

export default {
    setMessages: (newMessages) => messages = newMessages,
    getTopMessages: () => messages.filter(m => !m.parentId),
    getMessagesByParent: (id) => messages.filter(m => m.parentId === id)
}