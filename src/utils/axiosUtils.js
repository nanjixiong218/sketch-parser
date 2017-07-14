import axios from 'axios'

axios.defaults.headers.common["Accept"] = "application/json"
axios.defaults.headers.common["Content-Type"] = "application/json;charset=UTF-8"

/**
 * for JSON request
 */
const axiosJSON = axios.create({
	baseURL: "./target"
})

axiosJSON.interceptors.request.use(config => {
	if (!/\.json$/.test(config.url)) {
		config.url = config.url + '.json'
	}
	return config
})
axiosJSON.interceptors.response.use(response => {
	return response.data
});

const fetchPages = async function(json) {
	const document = await axiosJSON.get('document.json');
	const pages = await Promise.all(document.pages.map(page => axiosJSON.get(page._ref)));
	return pages;
}


export {
	axiosJSON,
	fetchPages
}