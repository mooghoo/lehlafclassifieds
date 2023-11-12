<script>
	import CreatePostForm from '$lib/components/CreatePostForm.svelte';
</script>

<!-- add POST -->

<div class="mt-0 pb-10">
	  <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
		<div class="text-base font-semibold leading-7 text-gray-600 text-xl">
		  <a href="/"><span aria-hidden="true">&larr;</span>Go back</a>
		</div>
	</div>
  </div>

<CreatePostForm
	handleSubmit={() => {
		console.log('Submitted the form!');
	}}
/>
