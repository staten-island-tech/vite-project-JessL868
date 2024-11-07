const products = [
    {
        name: "Clorox",
        price: "$16000000",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fcircle-colorful-icons-representing-technology-business-communication_298696561.htm&psig=AOvVaw2bNP4pxuKnoj34A_sr7AJY&ust=1731092008192000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPj83ozyyokDFQAAAAAdAAAAABAE"
    },
    {
        name: "Wet Wipes",
        price: "$13000000",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fcircle-colorful-icons-representing-technology-business-communication_298696561.htm&psig=AOvVaw2bNP4pxuKnoj34A_sr7AJY&ust=1731092008192000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPj83ozyyokDFQAAAAAdAAAAABAE"
    },
    {
        name: "Mop",
        price: "$500000000",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FAmerican-Market-Cotton-Solid-Handle%2Fdp%2FB06VXV3VPX&psig=AOvVaw3tyD6eafbhgJT6D351m_7o&ust=1731005261767000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCqxrfyyIkDFQAAAAAdAAAAABAE"
    },
    {
        name: "Vaccum",
        price: "$1000000000",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fcircle-colorful-icons-representing-technology-business-communication_298696561.htm&psig=AOvVaw2bNP4pxuKnoj34A_sr7AJY&ust=1731092008192000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPj83ozyyokDFQAAAAAdAAAAABAE"
    },
    {
        name: "Broom",
        price: "$4600000000",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fcircle-colorful-icons-representing-technology-business-communication_298696561.htm&psig=AOvVaw2bNP4pxuKnoj34A_sr7AJY&ust=1731092008192000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPj83ozyyokDFQAAAAAdAAAAABAE"
    },
    {
        name: "Twix",
        price: "$10000000",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fcircle-colorful-icons-representing-technology-business-communication_298696561.htm&psig=AOvVaw2bNP4pxuKnoj34A_sr7AJY&ust=1731092008192000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPj83ozyyokDFQAAAAAdAAAAABAE"
    },
    {
        name: "Hershey's",
        price: "$12000000",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fcircle-colorful-icons-representing-technology-business-communication_298696561.htm&psig=AOvVaw2bNP4pxuKnoj34A_sr7AJY&ust=1731092008192000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPj83ozyyokDFQAAAAAdAAAAABAE"
    },
    {
        name: "Milky Way",
        price: "$11000000",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fcircle-colorful-icons-representing-technology-business-communication_298696561.htm&psig=AOvVaw2bNP4pxuKnoj34A_sr7AJY&ust=1731092008192000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPj83ozyyokDFQAAAAAdAAAAABAE"
    },
    {
        name: "M&M's",
        price: "$10500000",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fcircle-colorful-icons-representing-technology-business-communication_298696561.htm&psig=AOvVaw2bNP4pxuKnoj34A_sr7AJY&ust=1731092008192000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPj83ozyyokDFQAAAAAdAAAAABAE"
    },
    {
        name: "Crunchy",
        price: "$10000000",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fcircle-colorful-icons-representing-technology-business-communication_298696561.htm&psig=AOvVaw2bNP4pxuKnoj34A_sr7AJY&ust=1731092008192000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPj83ozyyokDFQAAAAAdAAAAABAE"
    },
    {
        name: "Wall",
        price: "$1200000000",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fcircle-colorful-icons-representing-technology-business-communication_298696561.htm&psig=AOvVaw2bNP4pxuKnoj34A_sr7AJY&ust=1731092008192000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPj83ozyyokDFQAAAAAdAAAAABAE"
    },
    {
        name: "Door",
        price: "$1050000000",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fcircle-colorful-icons-representing-technology-business-communication_298696561.htm&psig=AOvVaw2bNP4pxuKnoj34A_sr7AJY&ust=1731092008192000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPj83ozyyokDFQAAAAAdAAAAABAE"
    },
    {
        name: "Floor",
        price: "$1400000000",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fcircle-colorful-icons-representing-technology-business-communication_298696561.htm&psig=AOvVaw2bNP4pxuKnoj34A_sr7AJY&ust=1731092008192000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPj83ozyyokDFQAAAAAdAAAAABAE"
    }
];

export {products}