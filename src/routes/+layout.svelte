<script>
	import '../app.css';
</script>

<div class="relative isolate overflow-hidden py-9">
	<div class="w-1/2 p-4 mx-auto text-center">
	  <div class="mx-auto max-w-2xl lg:mx-0">
		<h2 class="text-6xl font-bold tracking-tight">Leh-Laf Classifieds</h2>
		<p class="mt-6 text-2xl leading-8 text-gray-600">Buy and sell items in the Lehigh Valley from students you trust.</p>
	  </div>
	  <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
		<div class="text-base font-semibold leading-7 text-gray-600 text-xl">
		  <a href="/post">Make a listing<span aria-hidden="true">&rarr;</span></a>
		</div>
		
	  </div>
	</div>
  </div>

<main class="py-10">
	<div class="flex flex-col items-center justify-center">
		<slot />
	</div>
</main>
