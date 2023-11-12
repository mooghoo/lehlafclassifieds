import { prisma } from '$lib/db.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const data = await prisma.listing.findFirst({
		where: {
			id: params.id
		}
	});

	if (data) {
		return data;
	}

	throw error(404, 'Not found');
}
