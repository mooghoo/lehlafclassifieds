<script>
	import CreatePostForm from '$lib/components/CreatePostForm.svelte';
</script>

<!-- add POST -->

<CreatePostForm
	handleSubmit={() => {
		console.log('Submitted the form!');
	}}
/>
