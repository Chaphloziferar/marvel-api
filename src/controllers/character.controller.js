import env from 'dotenv';
import axios from 'axios';

env.config();

const publicKey = process.env.PUBLIC_KEY || '';
const md5Hash = process.env.MD5HASH || '';
const url = 'https://gateway.marvel.com/v1/public'

const getAllCharacters = async (req, res) => {
    try {
        const response = await axios.get(`${url}/characters?ts=1&apikey=${publicKey}&hash=${md5Hash}`)

        const data = response?.data?.data?.results;

        const result = data.map(item => {
            const newItem = {
                Id: item.id,
                Name: item.name,
                Description: (item.description !== '') ? item.description : 'No description Provided',
                ImageUrl: `${item.thumbnail.path}.jpg`
            }

            return newItem;
        })

        return res.json({code: 200, data: result});
    } catch (error) {
        res.json({code: 400, data: error});
    }
}

module.exports = {
    getAllCharacters
}
