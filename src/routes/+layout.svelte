<script>
	import '../app.css';
</script>

<div class="text-center mt-8">
	<h2 class="text-3xl md:text-6xl font-bold tracking-tight">LeBay</h2>
	<p class="mt-6 text-base md:text-2xl leading-8 text-gray-600">
		Buy and sell items in the Lehigh Valley from students you trust.
	</p>

	<div class="font-semibold leading-7 text-gray-600 text-xl mt-6">
		<a href="/post">Make a listing<span aria-hidden="true">&rarr;</span></a>
	</div>
</div>

<main class="py-4">
	<div class="flex flex-col items-center justify-center">
		<slot />
	</div>
</main>
