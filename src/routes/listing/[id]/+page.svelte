<script>
	/** @type {import('./$types').PageData} */
	export let data;
	const listing = data;
</script>

<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
	<div class="text-base font-semibold leading-7 text-gray-600">
		<a href="/"><span aria-hidden="true">&larr;</span>Go back</a>
	</div>
</div>

<div class="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto">
	<div class="grid md:grid-cols-5 gap-3 items-start">
		<div class="md:col-span-4">
			<img
				src={listing.picture || '/placeholder.svg'}
				alt={listing.title}
				class="h-[500px] aspect-[1/1] object-cover border border-zinc-200 w-full rounded-lg overflow-hidden dark:border-zinc-800"
			/>
		</div>
	</div>
	<div class="grid items-start mt-20">
		<div class="flex flex-col">
			<h1 class="font-bold text-3xl lg:text-4xl">
				{listing.title}
				<span> - {listing.price && listing.price > 0 ? `$${listing.price}` : 'Free'}</span>
			</h1>
			<div>
				<p>{listing.description || 'No description available'}</p>
			</div>
			<!-- 
			<div class="mt-">
				<span
					class="inline-block bg-gray-200 rounded-full px-3 py-3 font-bold text-xl text-gray-700 mr-2 mb-2"
				>
					{listing.price && listing.price > 0 ? `$${listing.price}` : 'Free'}
				</span>
			</div> -->

			<div>
				<p class="mt-2 text-gray-900 font-medium text-md">{listing.school}</p>
			</div>
		</div>
		<a
			href="sms:{data.phone}?&body=Hi there, I am interested in your {data.title} that you posted on Lehigh Valley Classifieds!"
			class="bg-blue-500 hover:bg-blue-700 mt-2 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
		>
			Send a text</a
		>
		<p class="pt-5 text-md text-gray-900 font-medium">Or contact at {data.phone}</p>
	</div>
</div>
