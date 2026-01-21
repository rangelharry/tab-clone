function status (request, response) {
    response.status(200).json({ chave: "Respondendo ou Nâo..."})
}

export default status
