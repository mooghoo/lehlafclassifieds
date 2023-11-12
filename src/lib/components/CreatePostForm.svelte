<script>
	import { Schools } from '$lib/schools';

	let title = '';
	let desc = '';
	let picture = ''; // URL or path to the image
	let price = 0;
	let school = Schools[0]; // default school
	let phone = '';
	let method = 'POST';
</script>

<form class="space-y-4" {method} action="/post">
	<div>
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="block text-sm font-medium text-gray-700">Title</label>
		<input
			type="text"
			name="title"
			bind:value={title}
			class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
		/>
	</div>

	<div>
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="block text-sm font-medium text-gray-700">Description</label>
		<textarea
			name="description"
			bind:value={desc}
			class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
		/>
	</div>

	<!-- svelte-ignore a11y-label-has-associated-control -->
	<div>
		<label class="block text-sm font-medium text-gray-700">Picture URL</label>
		<input
			name="picture"
			type="text"
			bind:value={picture}
			class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
		/>
	</div>

	<div>
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="block text-sm font-medium text-gray-700">Price ($)</label>
		<input
			name="price"
			type="number"
			bind:value={price}
			class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
		/>
	</div>

	<div>
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="block text-sm font-medium text-gray-700">Phone Number</label>
		<input
			name="phone"
			type="text"
			bind:value={phone}
			class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
		/>
	</div>
	<div>
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="block text-sm font-medium text-gray-700">School</label>
		<select
			name="school"
			id="school"
			class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
			bind:value={school}
		>
			{#each Schools as eachSchool}
				<option value={eachSchool}>{eachSchool}</option>
			{/each}
		</select>
	</div>

	<button
		type="submit"
		class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
	>
		Create Listing
	</button>
</form>
