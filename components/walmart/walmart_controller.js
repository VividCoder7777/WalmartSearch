let axios = require('axios');

module.exports.get_search_product = async (req, res, next) => {
	let searchValue = req.params.search;

	let response = await axios.get(
		`https://api.walmartlabs.com/v1/search?apiKey=${process.env.WALMART_API_KEY}&query=${searchValue}`
	);

	res.send(response.data);
};
