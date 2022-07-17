<script lang="ts">
import TrendingMovies from "$lib/components/TrendingMovies/index.svelte";
import type { IMovie} from "$lib/interfaces/MovieInterfaces";

export let trendingMovies: IMovie[] = [];

</script>

<div class="page">
    <section class="hero">
        <h1 class="title">Cinemax</h1>
    </section>


    <section class="trending">
        <TrendingMovies trendingMovies={trendingMovies}></TrendingMovies>
    </section>
</div>

<style>
    .page {
        height: 100vh;
        padding-top: 2.5rem;
    }

    .hero {
        height: 30vh;
    }

    .title {
        font-family:'Humane', sans-serif;
        font-weight: bold;
        letter-spacing: 0.5rem;
        text-transform: uppercase;
        font-size: 10rem;
    }
</style>