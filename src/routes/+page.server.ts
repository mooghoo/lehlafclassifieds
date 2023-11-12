import { prisma } from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const listings = await prisma.listing.findMany();

	return { listings: listings };
}
