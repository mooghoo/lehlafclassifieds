<script>
	let title = '';
	let desc = '';
	let picture = ''; // URL or path to the image
	let price = 0;

	export let handleSubmit = () => {
		// Handle the form submission logic here
		// For example, send data to an API or store it locally
		console.log({ title, desc, picture, price });
	};
</script>

<form class="space-y-4" on:submit|preventDefault={handleSubmit}>
	<div>
		<label class="block text-sm font-medium text-gray-700">Title</label>
		<input
			type="text"
			bind:value={title}
			class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
		/>
	</div>

	<div>
		<label class="block text-sm font-medium text-gray-700">Description</label>
		<textarea bind:value={desc} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
	</div>

	<div>
		<label class="block text-sm font-medium text-gray-700">Picture URL</label>
		<input
			type="text"
			bind:value={picture}
			class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
		/>
	</div>

	<div>
		<label class="block text-sm font-medium text-gray-700">Price ($)</label>
		<input
			type="number"
			bind:value={price}
			class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
		/>
	</div>

	<button
		type="submit"
		class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
	>
		Create Listing
	</button>
</form>
