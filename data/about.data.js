export const about = {
    data: {
        gallery: [
            { 
                image: { 
                    url: '/images/jewelry-gallery-1.jpg', 
                    alt: 'Diamond Necklace Display' 
                } 
            },
            { 
                image: { 
                    url: '/images/jewelry-gallery-2.jpg', 
                    alt: 'Gold Ring Showcase' 
                } 
            },
            { 
                image: { 
                    url: '/images/jewelry-gallery-3.jpg', 
                    alt: 'Emerald Earrings' 
                } 
            }
        ],
        body: [
            {
                slice_type: 'title',
                primary: {
                    text: 'Creating new dialogues\nbetween threads and metal.'
                }
            },
            {
                slice_type: 'content',
                primary: {
                    type: 'Left',
                    label: 'Our Heritage',
                    description: [
                        { type: 'paragraph', text: 'Founded in 1990, Floema blends tradition with innovation to create jewelry that tells a story.' },
                        { type: 'paragraph', text: 'Each piece is handcrafted with precision, using ethically sourced materials.' }
                    ],
                    image: { url: '/images/heritage.jpg', alt: 'Artisan crafting jewelry' }
                }
            },
            {
                slice_type: 'highlight',
                primary: {
                    link: { url: 'https://example.com/collections' },
                    label: 'Explore Our Collections',
                    title: 'Discover Floema’s Signature Pieces'
                },
                items: [
                    { image: { url: '/images/highlight-1.jpg', alt: 'Diamond Bracelet' } },
                    { image: { url: '/images/highlight-2.jpg', alt: 'Sapphire Pendant' } }
                ]
            },
            {
                slice_type: 'content',
                primary: {
                    type: 'Left',
                    label: 'Our Heritage',
                    description: [
                        { type: 'paragraph', text: 'Founded in 1990, Floema blends tradition with innovation to create jewelry that tells a story.' },
                        { type: 'paragraph', text: 'Each piece is handcrafted with precision, using ethically sourced materials.' }
                    ],
                    image: { url: '/images/heritage.jpg', alt: 'Artisan crafting jewelry' }
                }
            },
            {
                slice_type: 'gallery',
                items: [
                    { image: { url: '/images/gallery-1.jpg', alt: 'Ruby Necklace' } },
                    { image: { url: '/images/gallery-2.jpg', alt: 'Gold Cuff' } },
                    { image: { url: '/images/gallery-3.jpg', alt: 'Pearl Earrings' } }
                ]
            },
            {
                slice_type: 'title',
                primary: {
                    text: 'The surprise of what is possible\nto create from a single,\nthin thread.'
                }
            },
            {
                slice_type: 'content',
                primary: {
                    type: 'Right',
                    label: 'Our Vision',
                    description: [
                        { type: 'paragraph', text: 'We envision a world where beauty and sustainability coexist in every design.' }
                    ],
                    image: { url: '/images/vision.jpg', alt: 'Sustainable jewelry design' }
                }
            },
            {
                slice_type: 'content',
                primary: {
                    type: 'Right',
                    label: 'Our Vision',
                    description: [
                        { type: 'paragraph', text: 'We envision a world where beauty and sustainability coexist in every design.' }
                    ],
                    image: { url: '/images/vision.jpg', alt: 'Sustainable jewelry design' }
                }
            },
            {
                slice_type: 'highlight',
                primary: {
                    link: { url: 'https://example.com/collections' },
                    label: 'Explore Our Collections',
                    title: 'Discover Floema’s Signature Pieces'
                },
                items: [
                    { image: { url: '/images/highlight-1.jpg', alt: 'Diamond Bracelet' } },
                    { image: { url: '/images/highlight-2.jpg', alt: 'Sapphire Pendant' } }
                ]
            },
        ],
        footer_copyright: '© 2025 Floema. All rights reserved.',
        footer_credits: [
            { type: 'paragraph', text: 'Designed by <a href="https://example.com">Creative Studio</a>' },
            { type: 'paragraph', text: 'Photography by <a href="https://example.com">Jane Doe</a>' }
        ]
    }
  };