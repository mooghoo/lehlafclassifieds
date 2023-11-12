<script>
	export let data;

	import Listing from '$lib/components/Listing.svelte';
</script>

<div class="md:grid md:grid-cols-2 md:gap-4">
	{#each data.listings as item}
		<Listing
			title={item.title}
			desc={item.description ?? ''}
			picture={item.picture ??
				'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fplaceholder-image&psig=AOvVaw20AY-9_pmxWZL_MMaDTnKT&ust=1699849754340000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDYl_jPvYIDFQAAAAAdAAAAABAh'}
			price={item.price ?? 0}
			school={item.school}
			id={item.id}
		/>
	{/each}
</div>
