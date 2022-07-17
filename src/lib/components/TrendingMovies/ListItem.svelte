<script lang="ts">
	import type { IMovie } from '$lib/interfaces/MovieInterfaces';

	export let movie: IMovie;
</script>

<div class="container">
	<img class="movie-img" src={'https://image.tmdb.org./t/p/w500' + movie.poster_path} alt="movie" />
	<div class="vertical-container">
		<a class="movie-title" href="/movies/{movie.id}">{movie.title}</a>
		<p class="movie-release-date">{movie.release_date}</p>
		<p class="movie-overview">{movie.overview}</p>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: row;
		cursor: pointer;
	}

	.movie-img {
		height: 10rem;
		aspect-ratio: 2 / 3;
		object-fit: cover;
		border-radius: 1rem;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
	}

	.vertical-container {
		margin-left: 1rem;
		display: flex;
		flex-direction: column;
	}

	.movie-title {
		font-size: 1.75rem;
		transition: color 0.1s ease-in-out;
	}

	.movie-title:hover {
		color: var(--accent-clr);
	}

	.movie-release-date {
		font-size: 0.85rem;
		font-weight: bold;
	}
</style>
