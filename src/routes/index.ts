import { variables } from "$lib/variables";

export async function get() {
    const BASE_URL: string = variables.apiBasePath;
    const apiKey = variables.apiKey;

	const completeUrl = BASE_URL + `/movie/popular?api_key=${apiKey}`;

	const res = await fetch(completeUrl);

	const trendingMovies = await res.json();    

	if (!trendingMovies) {
		return {
			status: 400
		};
	}

	return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*'
		},
		body: {
			trendingMovies: trendingMovies.results,
		}
	};
}