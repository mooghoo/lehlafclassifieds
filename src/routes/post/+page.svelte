<script>
	import CreatePostForm from '$lib/components/CreatePostForm.svelte';
	import Listing from '$lib/components/Listing.svelte';
	import { Schools } from '$lib/schools';

	let title = 'Your title here';
	let desc = '';
	let picture = ''; // URL or path to the image
	let price = 0;
	let school = Schools[0]; // default school
</script>

<!-- add POST -->

<div class="mt-0 pb-10">
	<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
		<div class="text-base font-semibold leading-7 text-gray-600">
			<a href="/"><span aria-hidden="true">&larr;</span>Go back</a>
		</div>
	</div>
</div>

<CreatePostForm {title} {desc} {picture} {price} {school} />
