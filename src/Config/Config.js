// const development_domain_server = "http://192.168.0.108:3030"
const development_domain_server = "https://jsonplaceholder.typicode.com"
const production_domain_server = 'https://jsonplaceholder.typicode.com'

const development = {
	apiGateway: {
		URL: development_domain_server,

	}
}

const production = {
	apiGateway: {
		URL: production_domain_server,

	}
};

const config = process.env.NODE_ENV != "development" ? production : development;
console.log("API URL", config.apiGateway.URL);
export default config;