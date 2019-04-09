let messages = [];
let id = 1;

module.exports = {
    read: (req, res) => {
        res.status(200).send(messages)
    },
    create: (req, res) => {
        let newMsg = req.body
        messages.push({
            id: id++,
            time: newMsg.time,
            text: newMsg.text
        })
        res.status(200).send(messages)
    },
    update: (req, res) => {
        let { id } = req.params
        let index = messages.findIndex(message => +message.id === +id)
        let newMsg = req.body
        for (key in newMsg){
            messages[index][key] = newMsg[key]
        }
        res.status(200).send(messages)
    },
    delete: (req, res) => {
        let {id} = req.params
        let index = messages.findIndex(message => +message.id === +id)
        messages.splice(index, 1)
        res.status(200).send(messages)
    }
}