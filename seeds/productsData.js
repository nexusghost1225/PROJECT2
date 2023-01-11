const { Products } = require('../models');

const productdata = [

    //Apparel Products
    {
        prod_name: `Limited Edition Ben t-Shirt`,
        prod_description: '100% cotton backwards NEB shirt.',
        price: 20,
        status: true,
        categories_id: 1,
        filename: '1-1.png',
        feature1: '100% cotton',
        feature2: 'Actually it is 115% cotton',
        feature3: 'Great for coding HTML',
        testimonial: 'Fantastic t-shirt for a great price!  At first I was confused if the t-shirt just had the word BEN or if it was a picture of the guy wearing a shirt with the word BEN.  I have already ordered 3 more shirts to send to my friends as gifts.',
        testimonial_name: 'Sarah Henderson',
        testimonial_filename: 'profile1.avif',
    },
    {
        prod_name: `D&D T-shirt`,
        prod_description: 'D&D t-shirt w/ no logo or artwork.',
        price: 35,
        status: true,
        categories_id: 1,
        filename: '1-2.png',
        feature1: 'Automatically grants the user +15 HP',
        feature2: 'Also deducts +15hp',
        feature3: 'Comes in various colors that are then dyed black',
        testimonial: 'This is my favorite shirt!  I wear it during every D&D game I play and I am the most popular person in my group because of it.  I am so popular that my friends stopped inviting me to D&D games because they must be intimidated by my awesome shirt.',
        testimonial_name: 'Sally the Pally',
        testimonial_filename: 'profile2.avif',
    },
    {
        prod_name: `Evil Justin Baseball Cap`,
        prod_description: `Fitted baseball cap inspired by Ben's nemesis, Evil Justin.  The typo is intentional to emphasize how evil the hat and Justin are.`,
        price: 40,
        status: true,
        categories_id: 1,
        filename: '1-3.png',
        feature1: 'Now 30% more evil!',
        feature2: 'Spelled with two Ls to emphasize how evil it is',
        feature3: 'Great gift for children',
        testimonial: 'I am not exactly sure who Evil Justin is or why he is evil.  What I do know is that this hat rocks and I love wearing it to baseball games',
        testimonial_name: 'Henry Carpenter',
        testimonial_filename: 'profile3.avif',
    },
    //Tableware Products
    {
        prod_name: `Limited Edition Ben Mug`,
        prod_description: 'Keep your coffee warm in this limited edition Ben Mug.  Great gift for anyone.',
        price: 8,
        status: true,
        categories_id: 2,
        filename: '2-1.png',
        feature1: 'Keeps coffee hot but not too hot',
        feature2: 'Plays a recording reminding you how terrible you are after ever sip',
        feature3: 'Comes in two colors, both are black',
        testimonial: 'I use this coffee mug at work and I am the center of attention!  This mug is great for keeping my coffee warm and not too hot.',
        testimonial_name: 'Jeff Miller',
        testimonial_filename: 'profile4.avif',
    },
    {
        prod_name: `Fancy Custom Ben Fork`,
        prod_description: 'Custom fork designed by Ben in the shape of a spoon.',
        price: 8,
        status: true,
        categories_id: 2,
        filename: '2-2.png',
        feature1: '100% high quality plastic',
        feature2: 'Does not bend',
        feature3: 'Can be used as a spoon',
        testimonial: 'I ordered this item thinking it was a fork.  Apparently it is a fork shaped like a spoon.  My life is now complete.',
        testimonial_name: 'Slug the Pug',
        testimonial_filename: 'profile5.avif',
    },

    //Figure Products
    {
        prod_name: `Rare Ben's Pirate Bobblehead`,
        prod_description: 'A head that bobbles outfitted in a fun pirate costume featuring a glitching hat and eye patch.',
        price: 10,
        status: true,
        categories_id: 3,
        filename: '3-1.png',
        feature1: 'Bobble radius has been increased by 15%',
        feature2: 'The glitching hat and eye patch are a feature',
        feature3: 'So rare that none actually exist',
        testimonial: 'This bobblehead is absolutely amazing!  Every so often, the hat and eye patch glitch causing me to laugh during my Zoom meetings.  I am now fired but my heart is full from laughter.',
        testimonial_name: 'Jenny Walters',
        testimonial_filename: 'profile6.avif',
    },
    {
        prod_name: `2nd Edition Ben w/ Suit of Armor POP Figure`,
        prod_description: 'Ben POP figure with wearing a shiny piece of level 14 steel armor.',
        price: 15,
        status: true,
        categories_id: 3,
        filename: '3-2.png',
        feature1: 'Armor now shines 27% brighter',
        feature2: 'Glows in the dark, but not really',
        feature3: 'Made from the tears of students',
        testimonial: 'This is my favorite POP figure. I am not sure who Ben is but I can appreciate his sense of style!',
        testimonial_name: 'Britney Pears',
        testimonial_filename: 'profile7.avif',
    },
    {
        prod_name: `Ben Action Figure`,
        prod_description: 'Life sized action figure shrunken down to action figure size with a kung-fu grip.',
        price: 18,
        status: true,
        categories_id: 3,
        filename: '3-3.png',
        feature1: 'Life Size',
        feature2: 'But also compact',
        feature3: 'Realistic movement',
        testimonial: 'I cannnot believe they did it!  Science is amazing!  They created a life-sized action figure and shrunk it down to the size of a regular action figure... Amazing!',
        testimonial_name: 'Lucy Smith',
        testimonial_filename: 'profile8.avif',
    },
    {
        prod_name: `3d Printed Ben D&D Character`,
        prod_description: '3d printed model of Ben as a D&D level 9 mage.',
        price: 22,
        status: true,
        categories_id: 3,
        filename: '3-4.png',
        feature1: 'Not actually made from a 3d printer',
        feature2: 'Cannot be used in a D&D game',
        feature3: 'Materials costs more than the item is selling for',
        testimonial: 'This figure is my lucky D&D charm.  Every since I purchased it, I have rolled perfectly every turn.',
        testimonial_name: 'Jamie Karl',
        testimonial_filename: 'profile9.avif',
    },
    {
        prod_name: `Castle Play Set w/ Real Working Drawbridge`,
        prod_description: '10 foot castle play set w/ a working wooden drawbridge and fillable moat.',
        price: 200,
        status: true,
        categories_id: 3,
        filename: '3-5.png',
        feature1: 'Moat comes pre-filled with water',
        feature2: 'Castle comes 100% pre-assembled',
        feature3: 'Ships via freight in a large wooden box',
        testimonial: 'I thought this was a small place set.  When it arrived, it took 17 people to unbox it.  Now I own a castle.',
        testimonial_name: 'Lindsey Bennett',
        testimonial_filename: 'profile10.avif',
        
    },

    //Comic & Art Products
    {
        prod_name: `First Edition The Adventures of Benjamin`,
        prod_description: 'First issue of The Adventures of Benjamin, the newest super hero comic revolving around the every day life of Ben.',
        price: 12,
        status: true,
        categories_id: 4,
        filename: '4-1.png',
        feature1: '100% AI generated images and captions',
        feature2: 'Only two pages long',
        feature3: 'One of the pages is the cover.',
        testimonial: 'What a fantastic comic!  It had such big highs and low lows and told such a detailed story.  I cannot believe it is only 2 pages long...',
        testimonial_name: 'Sam Huxinton',
        testimonial_filename: 'profile11.avif',
    },
    {
        prod_name: `AI Generated Portrait of Ben Watching Movies`,
        prod_description: 'Own this special one of a kind AI generated portrait of Ben watching shark movies.',
        price: 500,
        status: true,
        categories_id: 4,
        filename: '4-2.jpg',
        feature1: '100% AI generated',
        feature2: 'Comes safely secured in a gold plated wooden frame.',
        feature3: 'Only one in existence',
        testimonial: 'I am now the talk of the town!  People from all over the world stop by my house to admire this wonderful piece of art.',
        testimonial_name: 'Jared Appleton',
        testimonial_filename: 'profile12.avif',
    },
    {
        prod_name: `Ben has a Half-orc Warrior Painting`,
        prod_description: 'Fantastic work of art of Ben has a half-orc about to fight in a heroic battle.',
        price: 150,
        status: true,
        categories_id: 4,
        filename: '4-3.jpg',
        feature1: '50% Human',
        feature2: '50% Orc',
        feature3: '100% Cool',
        testimonial: 'I am not sure what a half-orc is but I am digging it!  This is such a great painting that I ordered 4 of them to place side-by-side in my living room.',
        testimonial_name: 'Francis Bobby',
        testimonial_filename: 'profile13.avif',
    },
    {
        prod_name: `Oil Painting of Ben`,
        prod_description: 'Priceless oil painting created with color pencils of Ben looking into the distance during a beautiful sunset in April somewhere in Europe or maybe Kentucky.',
        price: 120,
        status: true,
        categories_id: 4,
        filename: '4-4.jpg',
        feature1: 'Added 15% more beard',
        feature2: 'Sized perfectly to be sent as a postcard to loved ones',
        feature3: 'Fun for the whole family',
        testimonial: 'I am a fine collector of art with over 1000 paintings in my collection.  Is this one my favorite? No.',
        testimonial_name: 'Michelle Rutherford',
        testimonial_filename: 'profile14.avif',
    },
    {
        prod_name: `Painting of Ben Petting a Dog`,
        prod_description: 'Heartwarming depiction of Ben petting a sweet dog during a lazy afternoon.',
        price: 80,
        status: true,
        categories_id: 4,
        filename: '4-5.png',
        feature1: 'So cute that even the darkest hearts will appreciate it',
        feature2: 'Vibrant colors',
        feature3: 'Painted from the tears of former students',
        testimonial: 'What can I say about this painting... It has everything.  A sunset, a man, and a dog.  What a wonderful representation of our world.',
        testimonial_name: 'Jason Morrison',
        testimonial_filename: 'profile15.avif',
    },

    {
        prod_name: `Argh, the Dungeon Master Saga`,
        prod_description: 'Follow along as Ben seeks the holy grail of becoming a dungeon master... or not.',
        price: 35,
        status: true,
        categories_id: 4,
        filename: '4-6.png',
        feature1: 'Detailed adventure of Ben becoming a world-class DM',
        feature2: 'Super heavy',
        feature3: '200 illustrated pages all showing the same image of Ben',
        testimonial: 'I am not even sure what a Dungeon Master is but this book is fantastic as a door stop.',
        testimonial_name: 'Harrison Chevy',
        testimonial_filename: 'profile16.avif',
    }, 

    {
        prod_name: `Ben chooses their own adventure!`,
        prod_description: 'Unlike other choose your adventure style comics, Ben will tell you exactly what the story line is in this twist-of-fate dramedy',
        price: 2,
        status: true,
        categories_id: 4,
        filename: '4-7.png',
        feature1: 'No need to make any decisions',
        feature2: 'You will laugh',
        feature3: 'You will cry',
        testimonial: 'What is better than a choose your own adventure where you cannot choose your own adventure.  Choices are tough and this book removes them all for you!.',
        testimonial_name: 'Jimmy Bean',
        testimonial_filename: 'profile17.avif',
    }
];

const seedProducts = () => Products.bulkCreate(productdata);

module.exports = seedProducts;

