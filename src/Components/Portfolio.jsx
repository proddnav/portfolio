import React, { useState, useEffect } from 'react';

const projects = [
    {
        id: 1,
        title: "Monetization Features on Paytm Insider",
        detail: "Identified new revenue opportunities by leveraging the current platform offerings. Additionally suggested high impact low effort features to achieve the desired business objective.",
        image: '/portfolio/paytm.png',
        link: 'https://docs.google.com/presentation/d/1TYYj6od34r6kfHFRDP9_vwkFu10oJKpiT6vGhCMGAJA/edit?usp=sharing',
        category: "product",
    },
    {
        id: 2,
        title: "App Design for Masala Tech",
        detail: "Created a log-in page and a portfolio of brands page",
        image: '/portfolio/figma.png',
        link: 'https://www.figma.com/proto/3MPWABksAJKpeDOS7NWU3i/Masala-Tech-Log-in?page-id=25%3A140&type=design&node-id=25-141&viewport=218%2C218%2C0.71&t=TFxErgqNFV6bg388-1&scaling=scale-down&starting-point-node-id=25%3A141&mode=design',
        category: "wireframe",
    },
    {
        id: 3,
        title: "Accelerate Your PM Journey! Must-See PM Resources Inside",
        detail: "A weekly newsletter covering important updates, resources necessary for aspiring product managers and product enthusiasts",
        image: '/portfolio/news.png',
        link: 'https://docs.google.com/document/d/1sHZBGvnREWklPmULaXqKTLdE1O1f6TSJBcQK-g8FhNg/edit?usp=sharing',
        category: "newsletter",
    },
    {
        id: 4,
        title: "Marco Polo Feature Introduction",
        detail: "Keeping the business outcome in mind added new features to the existing home-page to drive user acquisition and engagement",
        image: '/portfolio/mp.png',
        link: 'https://www.figma.com/proto/ZUindRY2SNCt4tUObIwyXE/Marco_Polo_Find_A_Counsellor?page-id=0%3A1&type=design&node-id=4-75&viewport=268%2C352%2C0.58&t=9BnS1wStWIz6z0dK-1&scaling=scale-down&starting-point-node-id=1%3A2&mode=design',
        category: "wireframe",
    },
    {
        id: 5,
        title: "Marco Polo",
        detail: "Strategically enhanced Marco Polo's platform, integrating mental health features to boost user acquisition and engagement.",
        image: '/portfolio/mp.png',
        link: 'https://docs.google.com/presentation/d/1_CPAXu2TO81Og2YWCQ1oYk_b1zjq6W3TJ6j9DNOgE8M/edit?usp=sharing',
        category: "product",
    },
    {
        id: 6,
        title: "Enhancing User Experience for Priceline Users",
        detail: "Implemented user-centric strategies to enhance the overall experience for Priceline users, leading to increased engagement and satisfaction.",
        image: '/portfolio/priceline.png',
        link: 'https://docs.google.com/presentation/d/1waiP4iYgUaQuKWtKstfJhu5c2-LL2aVf_nQug41KSnQ/edit?usp=sharing',
        category: "product",
    },
    {
        id: 7,
        title: "Visa Easy App",
        detail: "Designed a flutter and dart application displaying visa requirements based on nationality and destination of travel",
        link: 'https://drive.google.com/file/d/164ym4KOWYb7CKCu-ZPqN60Ae82lBObYX/view?usp=share_link',
        image: '/portfolio/visaeasy.png',
        category: "Mobile Applications",
    },
    {
        id: 8,
        title: "Cars24 Service App",
        detail: "Designed a service request app for Cars24 where users can book for on-demand car service requests",
        link: 'https://drive.google.com/file/d/1m0tuGkxNVOgrIv5g_H7zlbakaLFsNuPW/view?usp=sharing',
        image: '/portfolio/cars24.png',
        category: "Mobile Applications",
    },
    {
        id: 9,
        title: "Increasing Hotel Bookings on Easemytrip",
        detail: "Explored and analysed different UI features, new category introductions to improve hotel bookings on Easemytrip platform",
        link: 'https://docs.google.com/presentation/d/1gWZ3zoBd9Kjxx8K_cZo5yOGMpiayQ48zJGpsb8bSfsM/edit?usp=sharing',
        image: '/portfolio/emt.png',
        category: "product",
    },
    {
        id: 10,
        title: "Meal Subscription App",
        detail: "Application powered to manage the meal subscription.",
        image: '/portfolio/meal.png',
        link: 'https://drive.google.com/file/d/1bO24vu5W1WTAT_TbR_2BZZOFqPUnJCBr/view?usp=share_link',
        category: "Mobile Applications",
    },
];

const Portfolio = () => {
    const [data, setData] = useState(projects);
    const [button, setButton] = useState({
        wireframe: false,
        product: true,
        newsletter: false,
        "Mobile Applications": false,
    });

    const FilterData = (category) => {
        const filter = projects.filter((item) => item.category === category);
        setData(filter);
        setButton({
            wireframe: false,
            product: false,
            newsletter: false,
            "Mobile Applications": false,
            [category]: true,
        });
    };

    useEffect(() => {
        const filter = projects.filter((item) => item.category === "product");
        setData(filter);
    }, []);

    return (
        <section id='portfolio' className="bg-[#141414]">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center capitalize lg:text-5xl text-white">My Portfolio</h1>
                <p className="max-w-2xl mx-auto my-6 text-center text-gray-300">
                    Crafting user-first innovative solutions with a blend of creativity and strategy.
                </p>
                <div className="flex items-center justify-center">
                    <div className="flex items-center p-1 md:gap-5 gap-2 rounded-xl">
                        <button onClick={() => { FilterData('wireframe') }} className={`px-4 py-2 text-sm border border-blue-400 font-medium text-white capitalize hover:bg-blue-600 ${button.wireframe && 'bg-blue-600'} md:py-2 rounded-md md:px-6`}>Wireframe</button>
                        <button onClick={() => { FilterData('product') }} className={`px-4 md:py-2 text-sm border border-blue-400 font-medium text-white capitalize hover:bg-blue-600 ${button.product && 'bg-blue-600'} md:py-2 rounded-md md:px-6`}>Product Portfolio</button>
                        <button onClick={() => { FilterData('newsletter') }} className={`px-4 py-2 text-sm border border-blue-400 font-medium text-white capitalize hover:bg-blue-600 ${button.newsletter && 'bg-blue-600'} md:py-2 rounded-md md:px-6`}>Newsletters</button>
                        <button onClick={() => { FilterData('Mobile Applications') }} className={`px-4 py-2 text-sm border border-blue-400 font-medium text-white capitalize hover:bg-blue-600 ${button['Mobile Applications'] && 'bg-blue-600'} md:py-2 rounded-md md:px-6`}>Mobile Applications</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 py-10 xl:grid-cols-3">
                    {data.map((item) => (
                        <div className=' ' key={item.id}>
                            <a href={item.link} target='_blank' rel="noopener noreferrer">
                                <img className="object-fit object-center w-full h-64 lg:h-80 aspect-video" src={item.image} alt={item.title} />
                            </a>
                            <div className="p-2 rounded-b-md bg-gray-600">
                                <h1 className="text-xl font-semibold text-white">
                                    {item.title}
                                </h1>
                                <p className="mt-2 text-gray-400">
                                    {item.detail}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
