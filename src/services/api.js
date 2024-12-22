import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:3002'
})

export default api


//comando para fazer rodar o código (npm run dev), sempre para e rodar quando for atualizar algo.