<script lang="ts">
	import type { IMovie } from '$lib/interfaces/MovieInterfaces';
import ListItem from './ListItem.svelte';

	export let trendingMovies: IMovie[];
</script>

<div class="container">
	<h3 class="trending-title">Currently trending</h3>
	<div class="list">
		{#each trendingMovies as movie}
			<ListItem movie={movie}></ListItem>
			<hr />
		{/each}
	</div>
</div>

<style>

	.trending-title {
		font-weight: bold;
		font-size: 1.25rem;
		margin-bottom: 1rem;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
</style>
