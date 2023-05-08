import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '83130b261fb14c1493d5679248658288'
    }
})