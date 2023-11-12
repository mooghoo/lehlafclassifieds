<script lang="ts">
	import type { Listing } from '$lib/listing';

	 let data: Listing = {
		id: 1,
		title: 'Vintage Chair',
		description: 'A classic wooden chair in good condition.',
		picture:
			'https://www.ikea.com/us/en/images/products/stefan-chair-brown-black__0727320_pe735593_s5.jpg?f=s',
		price: 50,
		phone: '555-555-5555',
		school: 'University of Waterloo'
	};
</script>

<div class="mt-0 pb-10">
	<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
	  <div class="text-base font-semibold leading-7 text-gray-600 text-xl">
		<a href="/"><span aria-hidden="true">&larr;</span>Go back</a>
	  </div>
  </div>
</div>
<div class="bg-white">
	<div class="pt-6">
  
	  <!-- Image gallery -->
	  <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
		<div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
		  <img src="https://www.ikea.com/us/en/images/products/stefan-chair-brown-black__0727320_pe735593_s5.jpg?f=s" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
		</div>
	  </div>
  
	  <!-- Product info -->
	  <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
		<div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
		  <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{data.title}</h1>
		</div>
  
		<!-- Options -->
		<div class="mt-4 lg:row-span-3 lg:mt-0">
		  <p class="text-3xl tracking-tight text-gray-900 font-medium">${data.price}</p>
		  <form class="mt-10">
  
			<a href="sms:{data.phone}?&body=Hi%2520there%252C%2520I%2527am%2520interested%2520in%2520your%2520{data.title}%2520on%2520classifieds" class="bg-blue-500 hover:bg-blue-700 mt-10 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Send a text</a>
			<p class="pt-5 text-md text-gray-900 font-medium">Or contact at {data.phone}</p>
		  </form>
		</div>
  
		<div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
		  <!-- Description and details -->
		  <div>
			
			<div class="mt-10">
				<h2 class="text-sm font-medium text-gray-900">Details</h2>
			  </div>
			<div class="space-y-6">
			  <p class="text-base text-gray-900">{data.description}</p>
			</div>
		  </div>
  
		</div>
	  </div>
	</div>
  </div>
  
