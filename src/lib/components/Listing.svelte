<script>
	export let title = '';
	export let desc = '';
	export let picture = '';
	export let price = 0;
</script>

<div class="bg-slate-200 p-8">
	<article class="listing">
		<h2 class="text-6xl">{title} - ${price}</h2>
		<p>{desc}</p>
		<img src={picture} alt={title} />
	</article>
</div>
