<script lang="ts">
	import { page } from '$app/stores';

	var scrollingDown = false;

	var oldScrollY = window.scrollY;
	
	window.onscroll = function () {
		scrollingDown = window.scrollY >= 250 && oldScrollY < window.scrollY;

		oldScrollY = window.scrollY;
	};
</script>

<nav class="header" class:hide={scrollingDown}>
	<ul class="header-links">
		<li class="header-nav-item-home" class:invisible={$page.url.pathname === '/'}>
			<a class="header-nav-link home" sveltekit:prefetch href="/">CINEMAX</a>
		</li>
		<li class:active={$page.url.pathname === 'movies'}>
			<a class="header-nav-link" sveltekit:prefetch href="/movies"> Movies </a>
		</li>
		<li class:active={$page.url.pathname === 'shows'}>
			<a class="header-nav-link" sveltekit:prefetch href="/shows"> TV shows </a>
		</li>
		<li class:active={$page.url.pathname === 'peoples'}>
			<a class="header-nav-link" sveltekit:prefetch href="/peoples"> People </a>
		</li>
	</ul>
</nav>

<style>
	.header {
		position: fixed;
		width: 100%;
		padding-inline: 10rem;
		background: var(--background-clr);
		transition: transform 0.2s ease-in-out;
		box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
	}

	.header.hide {
		transform: translateY(-100%);
	}

	.header-links {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 4rem;
	}

	.header-nav-item-home {
		flex: 1;
	}

	.header-nav-item-home.invisible {
		opacity: 0;
	}

	.header-nav-link {
		text-transform: uppercase;
	}

	.header-nav-link.home {
		font-family: 'Humane', sans-serif;
		font-weight: bold;
		text-transform: uppercase;
		font-size: 2rem;
	}
</style>
