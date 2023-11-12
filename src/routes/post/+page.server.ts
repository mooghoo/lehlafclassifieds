import { prisma } from '$lib/db.js';
import type { Listing } from '$lib/listing.js';
import { Schools } from '$lib/schools.js';
import { validateURL } from '$lib/utils';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		console.log(await prisma.listing.findMany());

		const data = await request.formData();

		const title = data.get('title') as string;
		const description = data.get('description') as string;
		let picture = data.get('picture') as string;
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

		const phoneFormatted = formatPhoneNumber(phone);
		// validate phone number
		if (!phoneFormatted) {
			console.log('Invalid phone number');
			return { success: false, error: 'Invalid phone number' };
		}

		if (!Schools.includes(school)) {
			console.log('Invalid school');
			return { success: false, error: 'Invalid school' };
		}

		picture =
			validateURL(picture) ??
			'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=';

		// randomly generate 32 bit integer for id
		const id = String(crypto.getRandomValues(new Uint32Array(1))[0]);

		const listing: Listing = {
			id: id,
			title: title,
			description: description ?? null,
			picture: picture ?? null,
			price: priceNum ?? null,
			school: school,
			phone: phoneFormatted
		};

		console.log(listing);
		try {
			const written = await prisma.listing.create({
				data: listing
			});

			if (written) {
				return { success: true };
			}
		} catch (e) {
			console.log(e);
		}
		return { success: false, error: 'Unknown error has occurred' };
	}
};

function formatPhoneNumber(phoneNumber: string): string | null {
	// Strip all characters except digits
	const digits = phoneNumber.replace(/\D/g, '');

	// Check if phone number has 10 digits (US standard)
	if (digits.length === 10) {
		// Format as (xxx) xxx-xxxx
		return digits.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
	} else {
		// If not 10 digits, return original or handle as needed
		return null;
	}
}
