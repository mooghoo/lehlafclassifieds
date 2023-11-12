<script>
	export let data;

	import Listing from '$lib/components/Listing.svelte';
</script>

<!-- <Listing
	title="Vintage Chair"
	desc="A classic wooden chair in good condition."
	picture="https://www.ikea.com/us/en/images/products/stefan-chair-brown-black__0727320_pe735593_s5.jpg?f=s"
	price={50}
/> -->

{#each data.listings as item}
	<Listing
		title={item.title}
		desc={item.description ?? ''}
		picture={item.picture ??
			'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fplaceholder-image&psig=AOvVaw20AY-9_pmxWZL_MMaDTnKT&ust=1699849754340000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDYl_jPvYIDFQAAAAAdAAAAABAh'}
		price={item.price ?? 0}
	/>
{/each}
