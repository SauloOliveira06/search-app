import axios from "axios";
import { selector } from "recoil";

// fetch API - metodo selector recoil
const searchQuery = selector({
    key: "Textos", //deve ser unico
    get: async () => {
        try {
            const response = await axios("https://jsonplaceholder.typicode.com/posts");
            return response.data || [];
        } catch (error) {
            console.log(`Erro: ${error}`);
            return []
        }
    }
});

export default searchQuery;