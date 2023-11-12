import { PrismaClient } from '@prisma/client';

const seedData = [
	{
		id: '2175660205',
		title: 'chair',
		description: 'stupid shit',
		picture:
			'https://www.ikea.com/us/en/images/products/mammut-childrens-chair-indoor-outdoor-red__0727924_pe735940_s5.jpg',
		price: 10,
		school: 'Moravian College',
		phone: '(555) 555-5555'
	},
	{
		id: '1417275676',
		title: 'Phone',
		description: 'Iphone 17',
		picture:
			'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-purple-2021?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202738000',
		price: 900,
		school: 'Lafayette College',
		phone: '(111) 111-111'
	},
	{
		id: '1428987762',
		title: 'Duck ',
		description: 'Ha',
		picture:
			'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=',
		price: 278,
		school: 'Moravian College',
		phone: '(222) 222-2222'
	},
	{
		id: '2047861015',
		title: 'Epic Chair',
		description: 'SpongeBob Square Pants',
		picture:
			'https://www.deltachildren.com/cdn/shop/products/y8sklpkrls44udnvnrpd_1512x.jpg?v=1614635808',
		price: 60,
		school: 'Lehigh University',
		phone: '(333) 333-3333'
	},
	{
		id: '2199617976',
		title: 'Fluffers',
		description: 'Fluffers is a really cool dog!',
		picture:
			'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2v8jGQFEHwDE0bEIm2Sofs-0n5RUWyiNtY_JQw46IozVB-YPU',
		price: 1500,
		school: 'Muhlenberg College',
		phone: '(444) 444-444'
	},
	{
		id: '3881766018',
		title: 'Carpet',
		description: 'Old carpet in a roll',
		picture:
			'https://www.selfstorageplus.com/wp-content/uploads/2019/10/How-to-Store-Rugs-e1570031431704.jpg',
		price: 0,
		school: 'Lafayette College',
		phone: '(123) 456-7890'
	}
];
// prisma/seed.ts

const prisma = new PrismaClient();

async function main() {
	console.log(`Start seeding ...`);

	if (!(await prisma.listing.findFirst())) {
		await prisma.listing.createMany({
			data: seedData
		});
		console.log(`Seeding finished.`);
	} else {
		console.log('Already seeded');
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
