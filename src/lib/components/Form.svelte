<script>
	export let title = '';
	export let desc = '';
	export let picture = '';
	export let price = 0;
</script>

<form>
    <div>
        <label for='post-title'>Listing Title</label>
        <input class="w-48" type='text' id='post-title' name='post-title' />
      </div>
      <div>
        <label for='desc'>Description</label>
        <input type='text' id='post-title' name='post-title' />
      </div>
      <div>
        <label for='picture'>Insert image</label>
        <input type='file' id='pic' name='pic' accept="image/png, image/jpeg"/>
      </div>
      <div>
        <label for='price'>Price</label>
        <input type='number' id='price' name='price'/>
      </div>
</form>