<script>
	export let title = '';
	export let desc = '';
	export let picture = '';
	export let price = 0;
</script>

<div class="max-w-sm rounded overflow-hidden shadow-lg">
	<img class="w-full" src={picture} alt={title} />
	<div class="px-6 py-4">
		<div class="font-bold text-xl mb-2">{title}</div>
		<p class="text-gray-700 text-base">
			{desc}
		</p>
	</div>
	<div class="px-6 pt-4 pb-2">
		<span
			class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
		>
			${price}
		</span>
	</div>
</div>
