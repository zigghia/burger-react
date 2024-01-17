import axios from 'axios';

const instace = axios.create({
	baseURL: 'https://create-my-burger-44c38-default-rtdb.firebaseio.com/'
});

export default instace;
