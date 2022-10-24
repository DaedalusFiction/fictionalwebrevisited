// 1. Meta

const siteName = "FICTIONAL WEB";

const pages = [
    {
        name: "services",
        href: "/services",
        subPages: [],
    },
    {
        name: "templates",
        href: "/templates",
        subPages: [],
    },
    {
        name: "projects",
        href: "/projects",
        subPages: [],
    },
    {
        name: "about",
        href: "/about",
        subPages: [],
    },
];

// 2. Layout

const navbar = {
    buttonOne: {
        text: "Get Started",
        href: "/contact",
        variant: "contained",
    },
    image: { url: "/images/logo.png", alt: "nautilus shell design" },
};

// 3. Services

const servicesContent = [
    {
        title: "Template",
        price: "$399",
        content:
            "Choose from one of several templates, all of which are built by us from the ground up in React and MUI. Select a color scheme and provide your own images and text.",
        button: {
            href: "/templates",
            text: "view templates",
            variant: "outlined",
        },
        features: [
            {
                name: "Customized Photo Gallery",
                description:
                    "Determine your own categories and sub-categories.",
            },
            {
                name: "Custom Color Scheme",
                description: "Select your own primary and secondary colors.",
            },
            {
                name: "Selection of Hero Sections",
                description:
                    "Choose from one of our stylish landing page layouts.",
            },

            {
                name: "Social Media Links",
                description:
                    "High-quality SVG Icon links to your external profiles.",
            },

            {
                name: "2hrs first-month revisions",
                description: "Adjust image location, text, and color scheme.",
            },
        ],
    },
    {
        title: "Hybrid",
        price: "$799",
        content:
            "Start from a template, but get more control over the layout and style of your website. Select your own fonts, rearrange sections, and design customized components. ",
        button: {
            href: "/contact",
            text: "Start with hybrid",
            variant: "outlined",
        },
        features: [
            {
                name: "All Template Features",
                description:
                    "Start with a template, then customize from there.",
            },
            {
                name: "Custom Pages",
                description: "Create informational pages to suit your needs.",
            },
            {
                name: "Custom Page Layouts",
                description: "Organize images, text, and buttons.",
            },
            {
                name: "Unique Hero Section",
                description:
                    "Impress visitors with a custom-designed landing page.",
            },
            {
                name: "Font Selection",
                description:
                    "Choose from any Google Font, or provide your own.",
            },
            {
                name: "Animated elements",
                description: "Text and images that slide, fade, and/or expand.",
            },
            {
                name: "4hrs first-month revisions",
                description:
                    "Change everything from fonts to component layouts.",
            },
        ],
    },
    {
        title: "Custom",
        price: "$1599",
        content:
            "Get a completely unique website, built from scratch just for you. We'll design a personalized theme and craft a website to suit your precise individual needs.",
        button: {
            href: "/contact",
            text: "Get started with custom",
            variant: "outlined",
        },
        features: [
            {
                name: "Custom Design",
                description:
                    "Completely new design to fit your style or brand.",
            },
            {
                name: "Custom Architecture",
                description: "Highly optimized routing and layout.",
            },
            {
                name: "Unique Functionality",
                description: "Design your own interactive elements and forms.",
            },
            {
                name: "Comments and message board",
                description: "Engage visitors by creating discussions.",
            },
            {
                name: "Custom admin panel",
                description: "Control how content appears on your website.",
            },

            {
                name: "Unlimited first-month revisions",
                description: "Change whatever you like, as often as you like.",
            },
        ],
    },
];

const templatesContent = [
    {
        name: "Author",
        image: {
            url: "/images/authorScreencap.webp",
            alt: "author template website screenshot",
        },
        href: "https://fictionalweb-author.com",
        price: "$399",
        features: [
            {
                name: "Books and Published Works Showcase",
                description:
                    "Display your books, articles, and other publications with descriptions and links to vendors.",
            },
            {
                name: "Events Page",
                description:
                    "Create events with date, time, description, venue location and link. Past events archive automatically.",
            },
            {
                name: "Social Media and Other Links",
                description:
                    "Direct visitors to your other social media platforms and online media.",
            },
            {
                name: "Newsletter Sign-Up box",
                description:
                    "Gather email addresses that you can use to create a newsletter and keep people up-to-date.",
            },
        ],
        button: {
            href: "/contact",
            text: "Get Started",
            variant: "outlined",
        },

        description:
            "This is great for authors who want to quickly create a place where visitors can quickly access your information.",
    },
    {
        name: "Musician",
        image: {
            url: "/images/cosimaScreencap.webp",
            alt: "musician template website screenshot",
        },
        href: "https://fictionalweb-musician.com",
        price: "$499",
        features: [
            {
                name: "Photo Gallery",
                description:
                    "Upload high-quality images that venues and press can use to promote your music",
            },
            {
                name: "Music Samples",
                description:
                    "Dedicated page for visitors to sample your music, straight from the website",
            },
            {
                name: "Events Page",
                description:
                    "Create events with date, time, description, venue location and link. Past events archive automatically.",
            },
            {
                name: "Social Media and Other Links",
                description:
                    "Direct visitors to your other social media platforms and online media.",
            },
            {
                name: "Newsletter Sign-Up box",
                description:
                    "Gather email addresses that you can use to create a newsletter and keep people up-to-date.",
            },
        ],
        button: {
            href: "/contact",
            text: "Get started",
            variant: "outlined",
        },
        description:
            "Perfect for groups, solo acts, students, songwriters, or anyone ready to melt faces.",
    },
    {
        name: "Academic",
        image: {
            url: "/images/academicScreencap.webp",
            alt: "academic template website screenshot",
        },
        href: "https://fictionalweb-academic.com",
        price: "$599",
        features: [
            {
                name: "Books and Published Works Showcase",
                description:
                    "Display your books, articles, and other publications with descriptions and links to vendors.",
            },
            {
                name: "Curriculum Vitae",
                description:
                    "Display your CV as a pdf in the browser, and get a custom admin panel to update it as often as you like.",
            },
            {
                name: "Events Page",
                description:
                    "Create events with date, time, description, venue location and link. Past events archive automatically.",
            },
            {
                name: "Social Media and Other Links",
                description:
                    "Direct visitors to your other social media platforms and online media.",
            },
            {
                name: "Newsletter Sign-Up box",
                description:
                    "Gather email addresses that you can use to create a newsletter and keep people up-to-date.",
            },
        ],
        button: {
            href: "/contact",
            text: "Get started",
            variant: "outlined",
        },
        description:
            "With a personal website academics can make sure that all of their information is up to date and easily accessible.",
    },
    {
        name: "Designer",
        image: {
            url: "/images/designerScreencap.webp",
            alt: "designer template website screenshot",
        },
        href: "https://fictionalweb-designer.com",
        price: "$699",
        features: [
            {
                name: "Photo Gallery",
                description:
                    "Upload high-quality images that venues and press can use to promote your music",
            },
            {
                name: "Mosaic Layout Sections",
                description:
                    "Three mosaic layouts to display selections of your work, with custom descriptions and links.",
            },
            {
                name: "Social Media and Other Links",
                description:
                    "Direct visitors to your other social media platforms and online media.",
            },
            {
                name: "Process Page",
                description:
                    "Let potential clients know what your process looks like, with as many steps as you like, so that they can feel reassured.",
            },
            {
                name: "Contact Page",
                description:
                    "Get details information from visitors, including their names, email addresses, interests, and anything else you'd like.",
            },
            {
                name: "Newsletter Sign-Up box",
                description:
                    "Gather email addresses that you can use to create a newsletter and keep people up-to-date.",
            },
        ],
        button: {
            href: "/contact",
            text: "Get started",
            variant: "outlined",
        },
        description:
            "With this beautifully laid-out website you can showcase your hard work, inform visitors of what the process looks like, and generate those leads!",
    },
    {
        name: "Blog",
        image: {
            url: "/images/blogScreencap.webp",
            alt: "blog template website screenshot",
        },
        href: "https://fictionalweb-blog.com",
        price: "$799",
        features: [
            {
                name: "Markdown-supported Articles",
                description:
                    "Leverage the power of Markdown to create beautiful content that will set you apart.",
            },
            {
                name: "Admin Page",
                description:
                    "Create, update, or delete articles straight from the browser, and watch them appear instantly.",
            },
            {
                name: "Social Media and Other Links",
                description:
                    "Direct visitors to your other social media platforms and online media.",
            },
            {
                name: "Submissions Page",
                description:
                    "Let visitors submit their own work, as text files or images.",
            },
            {
                name: "Contact Page",
                description:
                    "Get details information from visitors, including their names, email addresses, interests, and anything else you'd like.",
            },
            {
                name: "Newsletter Sign-Up box",
                description:
                    "Gather email addresses that you can use to create a newsletter and keep people up-to-date.",
            },
        ],
        button: {
            href: "/contact",
            text: "Get started",
            variant: "outlined",
        },
        description:
            "With this beautifully laid-out website you can showcase your hard work, inform visitors of what the process looks like, and generate those leads!",
    },
];

const contactConfig = {
    website: "FICTIONAL WEB",
    category: "contact",
    fields: [
        { name: "Name", type: "text", value: "" },
        { name: "Email", type: "text", value: "" },
        { name: "Comment", type: "text", value: "", multiline: true, rows: 4 },
    ],
};

// 7. About

const aboutContent = {
    image: {
        url: "/images/about1.webp",
        alt: "Moses Striking the Rock, by Joachim Anthonisz Wetwael",
    },
    name: "OUR ROOTS",
    buttons: [
        {
            text: "Button Text",
            href: "/about/masthead",
            variant: "contained",
        },
        {
            text: "Button Text",
            href: "/about/missionstatement",
            variant: "contained",
        },
    ],
    content:
        "SICKTOOTH was founded in 2022 by failed novelist David Sorensen, who decided that he could do more good in this world by creating a platform on which to publish other writers than he ever could by simply writing things himself. \n\nPublishing fiction, poetry, creative non-fiction, and art, SICKTOOTH strives to publish the best content we can find, particulary that by previously unpublished artists and writers. \n\nThe name SICKTOOTH doesn't really have any particular significance; we just thought it sounded cool. Oh, and on that point, we think semicolons are just fine (when used in moderation).",
};

const leadProfile = {
    image: {
        url: "/images/profile1.webp",
        alt: "Self-Portrait, by Henri Fantin-Latour",
    },
    name: "David Sorensen",
    content:
        "David Sorensen is a writer, musician, and web developer living in central Virginia. His stories have appeared in a number of literary magazines, including New Reader Magazine, The Squawk Back, Infinite Rust, and, depending on how gullible you are, Harper's and The New Yorker. His upcoming novel, Unconventional Desire, will probably never actually be released or even finished. \n\nFor anyone who is interested, David's favorite writers include David Foster Wallace, Dave Eggers, Douglas Coupland, Kurt Vonnegut, Thomas Mann, T.S. Eliot, and Albert Camus. He also likes trashy memoirs, by anyone.",
};

const secondaryProfiles = [
    {
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        name: "Designer One",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n\nQuibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque.",
    },
    {
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        name: "Designer Two",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.",
    },
    {
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        name: "Designer Three",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.\n\nDolore ipsa sed asperiores voluptatibus nam modi.",
    },
];

// 8. Projects

const projectsContent = [
    {
        name: "Sicktooth",
        image: {
            url: "/images/sicktoothScreencap.webp",
            alt: "screenshot of sicktooth website",
        },
        technologies: ["Next.js", "MUI", "Markdown", "Firebase"],
        type: "Literary magazine",
        dividerImageUrl: "/images/rose5.webp",
        description:
            "Website created for literary magazine Sicktooth. Stories, poetry, and articles are easily uploaded via a custom admin panel.",
        href: "https://sicktooth.com",
        details:
            "This is a longer description of the website. Here we can talk about what we did and how it helped the client.",
    },
    {
        name: "Cosima Hewes",
        image: {
            url: "/images/cosimaScreencap.webp",
            alt: "screenshot of Cosima Hewes website",
        },
        technologies: ["Next.js", "MUI", "Firebase"],
        type: "Artist Portfolio",
        href: "https://cosimahewes.com",
        dividerImageUrl: "/images/rose4.webp",
        reversed: true,
        details:
            "This is a longer description of the website. Here we can talk about what we did and how it helped the client.",
        description:
            "Website created for artist Cosima Hewes. Features a photo gallery with categories and subcategories that can be easily adjusted. ",
    },
    {
        name: "Zuzu's Hot Five",
        image: {
            url: "/images/sicktoothScreencap.webp",
            alt: "screenshot of Zuzu's website",
        },
        technologies: ["Next.js", "MUI", "Firebase"],
        type: "Musician Portfolio",
        description: "Client can quickly add, delete, or edit events.",
        href: "https://zuzushotfive.com",
        dividerImageUrl: "/images/rose3.webp",
        details:
            "This is a longer description of the website. Here we can talk about what we did and how it helped the client.",
    },
    {
        name: "Josh Stehle",
        image: {
            url: "/images/joshScreencap.webp",
            alt: "screenshot of Josh Stehle website",
        },
        technologies: ["Next.js", "MUI", "Firebase"],
        type: "Author Portfolio",
        reversed: true,
        dividerImageUrl: "/images/rose2.webp",
        description:
            "Website created for author and autism advocate Josh Stehle. Contact form allows client to build newsletter mailing list.",
        href: "https://joshstehle.com",
        details:
            "This is a longer description of the website. Here we can talk about what we did and how it helped the client. This can be any length you like.\n\nIt can even support multiple paragraphs. Maybe even other stuff.\n\nPretty cool, huh?",
    },
];

export {
    siteName,
    pages,
    navbar,
    contactConfig,
    projectsContent,
    servicesContent,
    templatesContent,
    aboutContent,
    leadProfile,
    secondaryProfiles,
};
