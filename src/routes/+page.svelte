<script>
	export let data;

	import Listing from '$lib/components/Listing.svelte';
	let names = ['John', 'Jane', 'Jack', 'Jill'];
</script>


    <Listing
	title="Vintage Chair"
	desc="A classic wooden chair in good condition."
	picture="https://www.ikea.com/us/en/images/products/stefan-chair-brown-black__0727320_pe735593_s5.jpg?f=s"
	price={50}
/>

{#each names as name}
	<Listing title={name} />
{/each}

{#each data.items as item}
	<Listing title={item} />
{/each}



