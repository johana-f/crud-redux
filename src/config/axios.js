import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'http://localhost:4000'
   /*  para arrancar el puerto del API pongo en la terminal: npx json-server --watch db.json --port 4000 */
});
export default clienteAxios;