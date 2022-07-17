<script>
    import "../main.css";
    import Header from "$lib/components/Header.svelte";
</script>

<Header></Header>
<div class="page">
    
    <slot></slot>
    
    <h3>Footer</h3>
</div>


<style>
    :root {
        --background-clr: #fff;
        --accent-clr: #0059ff;
    }

    .page {
        background-color: var(--background-clr);
        margin-inline: 10rem;
    }
</style>