// Table of Contents:
// 1. Meta
// 2. Layout
// 3. Home
// 4. Services
// 5. Projects
// 6. Studio
// 7. About
// 8. Social Media
// 9. The Process
// 10. Contact

import lightTheme from "./styles/themes/theme";

// 1. Meta

const siteName = "FICTIONAL WEB";
// const siteName = "Cosima Hewes";

// 2. Layout

const navbar = {
    buttonOne: {
        text: "Get Started",
        href: "/contact",
        variant: "contained",
    },
    image: { url: "/images/logo.png", alt: "nautilus shell design" },
};

const header = {
    buttonOne: {
        text: "Contact",
        href: "/contact",
        variant: "outlined",
    },
};
// 3. Home

const heroContent = {
    image: { url: "/images/hero.webp", alt: "alt hero text" },
    title: "YOUR NAME",
    highlights: [
        "This is the first highlight.",
        "This is the second highlight",
        "This is the third highlight",
        "This is the fourth highlight",
    ],
    buttons: [
        { variant: "contained", href: "/curriculumvitae", text: "View cv" },
        {
            variant: "contained",
            href: "/publications",
            text: "View publications",
        },
    ],
};

const servicesContent = [
    {
        title: "Service One!",
        price: "$200",
        description:
            "This is the sample description for the service. It is a very good description and a very good service",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        button: { text: "Book Now!", href: "/contact" },
        features: [
            {
                primaryText: "Feature One",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Two",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Three",
                secondaryText: "Feature Description",
            },
        ],
    },
    {
        title: "Service Two",
        price: "$400-800",
        description:
            "This is the sample description for the service. It is a very good description and a very good service",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        button: { text: "Book Now!", href: "/contact" },
        features: [
            {
                primaryText: "Feature One",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Two",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Three",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Four",
                secondaryText: "Feature Description",
            },
        ],
    },
    {
        title: "Service Three",
        price: "Custom",
        description:
            "This is the sample description for the service. It is a very good description and a very good service",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        button: { text: "Book Now!", href: "/contact" },
        features: [
            {
                primaryText: "Feature One",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Two",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Three",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Four",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Five",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Six",
                secondaryText: "Feature Description",
            },
        ],
    },
];

const blockTextOne = {
    backgroundColor: "white",
    title: "BLOCK TEXT ONE",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, expedita veniam. Magni explicabo dignissimo!",
};
const blockTextTwo = {
    backgroundColor: "white",
    title: "BLOCK TEXT TWO",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, expedita veniam. Magni explicabo dignissimo!",
};
const blockTextThree = {
    backgroundColor: lightTheme.palette.background.accentLight,
    title: "BLOCK TEXT THREE",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, expedita veniam. Magni explicabo dignissimo!",
};

const mosaicSectionContentOne = {
    backgroundColor: lightTheme.palette.background.accentLight,
    title: "Mosaic Section One",
    content:
        "This is the mosaic section content. Here you can describe whatever you like about your service and the button below can link to any page in this website or any external site.",
    button: {
        text: "learn more",
        href: "/about",
        variant: "contained",
    },
    images: [
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    ],
};
const mosaicSectionContentTwo = {
    backgroundColor: "white",
    title: "Mosaic Section Two",
    content:
        "This is the mosaic section content. Here you can describe whatever you like about your service and the button below can link to any page in this website or any external site.",
    button: {
        text: "learn more",
        href: "/about",
        variant: "contained",
    },
    images: [
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    ],
};
const mosaicSectionContentThree = {
    backgroundColor: "white",
    title: "Mosaic Section Three",
    content:
        "This is the mosaic section content. Here you can describe whatever you like about your service and the button below can link to any page in this website or any external site.",
    button: {
        text: "learn more",
        href: "/about",
        variant: "contained",
    },
    images: [
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    ],
};

const blockPhotoContentOne = {
    background: lightTheme.palette.background.accentLight,
    title: "BLOCK PHOTO TITLE",
    content: "Block Photo One",
    button: {
        text: "Button Text",
        href: "/about",
        variant: "contained",
    },
    image: {
        url: "/images/novelists.webp",
        alt: "Michael hoberman speaking with two novelists",
    },
};
const blockPhotoContentTwo = {
    background: lightTheme.palette.background.accentLight,
    title: "BLOCK PHOTO TITLE",
    content: "Block Photo Two",
    button: {
        text: "Button Text",
        href: "/about",
        variant: "contained",
    },
    image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
};

const showcaseContentOne = {
    title: "Cool Book Title",
    subTitle: "Coming Soon",
    image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    quote: "Uncle Michael is so cool, he won a game of connect four in three moves",
    description:
        "This is the showcase description. This is where you can talk about what you're showcasing and tell people why they should be interested.",
    buttons: [
        { variant: "contained", href: "https://google.com", text: "Preorder" },
        { variant: "contained", href: "/work", text: "View publications" },
    ],
};

// 4. Services
// 5. Projects

const subscribeConfig = {
    website: "SICKTOOTH",
    category: "contact",
    fields: [{ name: "Email", type: "text", value: "" }],
};
const contactConfig = {
    website: "SICKTOOTH",
    category: "contact",
    fields: [
        { name: "Name", type: "text", value: "" },
        { name: "Email", type: "text", value: "" },
        { name: "Comment", type: "text", value: "", multiline: true, rows: 4 },
    ],
};

// 7. About

// 7a. About

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

// 7b. Studio

const studioContent = {
    imageOne: {
        url: "/images/missionStatement.webp",
        alt: "Venus Adorned by the Graces, by Annibale Carracci",
    },
    imageTwo: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    imageThree: {
        url: "/images/placeholder.webp",
        alt: "alt placeholder text",
    },
    header: "This is what we believe",
    content:
        "Literature can be a lot of things, but in terms of what it should be, we believe that there is only one: entertaining. Your time is valuable, and there is an incredible amount of literature out there, so to create something entertaining is in that sense a sign of courtesy and respect. We respect you, reader, and we are grateful for your decision to read SICKTOOTH, and to honor that we will do our best to keep you interested. \n\nLiterature as art, though, has a few additional responsibilities. These of course will change, and should change, but as far as SICKTOOTH is concerned, we aim to publish poetry, fiction, creative non-fiction, and art that connects people to one another as well as furthers people's knowledge of themselves. After all, what is a story but a chance to walk in someone else's shoes, and what is a poem but a fresh perspective on the familiar? \n\nAnd beyond all this, we want to support artists and writers. The future of SICKTOOTH depends on them, as does that of the human race.",
};

// 7c. Work

const workContent = {
    imageOne: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    imageTwo: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    imageThree: {
        url: "/images/placeholder.webp",
        alt: "alt placeholder text",
    },
    header: "Work Header",
    content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.",
};

// 8. Social Media

// 9. Process
// 10. Contact

const processSteps = [
    {
        title: "Step Title",
        name: "STEP ONE",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        reverse: false,
    },
    {
        title: "Step Title",
        name: "STEP TWO",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        reverse: true,
    },
    {
        title: "Step Title",
        name: "STEP THREE",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.\n\nDolore ipsa sed asperiores voluptatibus nam modi.",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        reverse: false,
    },
    {
        title: "Step Title",
        name: "STEP FOUR",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        reverse: true,
    },
];

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
    // {
    //     name: "about",
    //     href: "/about",
    //     subPages: [
    //         { name: "Masthead", href: "/about/masthead" },
    //         {
    //             name: "Mission Statement",
    //             href: "/about/missionstatement",
    //         },
    //     ],
    // },
];

export {
    siteName,
    pages,
    navbar,
    header,
    subscribeConfig,
    contactConfig,
    heroContent,
    blockTextOne,
    blockTextTwo,
    blockTextThree,
    blockPhotoContentOne,
    blockPhotoContentTwo,
    showcaseContentOne,
    mosaicSectionContentOne,
    mosaicSectionContentTwo,
    mosaicSectionContentThree,
    servicesContent,
    aboutContent,
    leadProfile,
    secondaryProfiles,
    studioContent,
    workContent,
    processSteps,
};
