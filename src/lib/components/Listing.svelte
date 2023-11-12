<script>
	import { validateURL } from '$lib/utils';

	export let id = '';
	export let title = '';
	export let desc = '';
	export let picture = '';
	export let price = 0;
	export let school = '';

	$: shownPicture =
		validateURL(picture) ??
		'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=';
</script>

<a href={id ? `/listing/${id}` : '#'}>
	<div class="mt-5 max-w-lg rounded overflow-hidden shadow-lg">
		<img class="w-[32rem] h-[32rem] object-cover" src={shownPicture} alt={title} />
		<div class="px-6 pt-4">
			<div class="font-bold text-xl mb-2">
				<span>{title}</span>
			</div>
			<p class=" font-medium text-gray-700 text-base">
				{desc}
			</p>
		</div>
		<div class="px-6 pt-4 pb-2">
			<span
				class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
			>
				{price > 0 ? `$${price}` : 'Free'}
			</span>
			<span class="font-medium text-gray-700 text-base"> Posted from {school} </span>
		</div>
	</div>
</a>
