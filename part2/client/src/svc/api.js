const apiAddress = "http://localhost:5154"
export default {
    sendMessage: async (messageText, parentId) => {
        const parent = parentId ?? null
        const body = {
            id: Date.now(),
            text: messageText,
            parentId: parent
        }
        const result = await axios.post(`${apiAddress}/messages`, body)
    },
    getMessages: async () => {
        const response = await axios.get(`${apiAddress}/messages`)
        return response.data;
    }
}