let schools = [{text: 'Lafayette College', tags: ['laf']}, {text: 'Lehigh University', tags: ['lehigh']}, {text: 'Moravian University', tags: ['moravian']}, {text: 'DeSales University', tags: ['desales']}, {text: 'Cedar Crest University', tags: ['cedarCrest']}, {text: 'Mulhenberg University', tags: ['muhlenberg']}];

$: all_tags = [...new Set(schools.map((x) => x.tags).flat())];

let filters = new Map();

{#each filtered as school}
	<div class="school">
		<p>{school.text}</p>
		{#each school.tags as tag}
			<p>{tags}</p>
		{/each}
	</div>
{/each}

$: filtered = schools.filter(
	(x) =>
		(filters['tags'] != null &&
			Object.values(filters['tags']).every((func) => func == null || func(x))) ||
		!filters['tags']
);

{#each all_tags as tag}
	<button
		class="tag"
		on:click={() => {
			if (filters['tags'] == null) filters['tags'] = new Map();
			if (filters['tags'][tag] == null) {
				let f = (x) => {
					return x.tags != null && x.tags.includes(tag) != null;
				};
				// This is how you give the above function a dynamic
				// name so we can edit/delete it in the filters Map
				Object.defineProperty(f, 'name', {
					value: tag,
					writable: false
				});
				filters['tags'][tag] = f;
			} else {
				// Remove this tag filter if you click the tag again
				filters['tags'][tag] = null;
			}
		}}>{tag}</button
	>
{/each}