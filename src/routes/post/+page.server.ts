import type { Listing } from '$lib/listing.js';
import { Schools } from '$lib/schools.js';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const title = data.get('title') as string;
		const description = data.get('description') as string;
		const picture = data.get('picture') as string;
		const price = data.get('price') as string;
		const school = data.get('school') as string;
		const phone = data.get('phone') as string;

		if (!title || !school || !phone) {
			console.log('Missing required fields');
			return { success: false, error: 'Missing required fields' };
		}

		const priceNum = Number(price);

		// validate price
		if (isNaN(priceNum) || priceNum < 0) {
			console.log('Invalid price');
			return { success: false, error: 'Invalid price' };
		}

		// validate phone number
		if (!phone.match(/^\d{10}$/)) {
			console.log('Invalid phone number');
			return { success: false, error: 'Invalid phone number' };
		}

		if (!Schools.includes(school)) {
			console.log('Invalid school');
			return { success: false, error: 'Invalid school' };
		}

		// randomly generate 32 bit integer for id
		const id = crypto.getRandomValues(new Uint32Array(1))[0];

		const listing: Listing = {
			id: id,
			title: title,
			description: description ?? null,
			picture: picture ?? null,
			price: priceNum ?? null,
			school: school,
			phone: phone
		};

		console.log(listing);

		// if school is not one of the schools in the enum, return error
		return { success: true };
	}
};
