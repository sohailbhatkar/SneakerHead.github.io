        // SLIDER

const wrapper = document.querySelector(".sliderWrapper")
const menuItems =document.querySelectorAll(".menuItem")


     // PRODUCT COlOR AND SIZE DESCRIPTION

const products = [
    {
        id: 1,
        title: "Air Force",
        price: "₹9,800 ",
        description: "The Nike Air Force 1 Mid '07 is everything you know best: '80s construction, smooth leather and nothing-but-net style. Plus, we're taking it up a notch with a padded, mid-cut collar with an adjustable strap.",
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",  
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: "₹12,200",
        description: "This iteration of the AJ1 re-imagines Mike's first signature model with a fresh mix of colours. Premium materials, soft cushioning and a padded ankle collar offer total support and celebrate the shoe that started it all.",

        colors: [
            {
                code: "lightgray",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",  
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: "₹9,200",
        description: "Styled for the '70s. Loved in the '80s. Classic in the '90s. Ready for your special touch. The Nike Blazer Mid By You lets you customise the timeless design. Choose between a variety of colours on the pebbled leather upper, tailor it with suede accents and personalise it with a message. Go ahead, perfect your outfit.",
        colors: [
            {
                code: "green",
                img: "./img/blazer.png",
            },
            {
                code: "lightgray",
                img: "./img/blazer2.png",  
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: "₹9,600",
        description: "When it fits this good and looks this great, it doesn't need a Swoosh. The coveted hug-your-foot design, plus Air cushioning and a sturdy heel cage, gets updated with a chequerboard upper to match the season. Its Crater Foam midsole adds to the sporty-yet-sophisticated look. Go ahead, give your feet bragging rights.",
        colors: [
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",  
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: "₹8,200",
        description : "Space Hippie is an exploratory footwear collection inspired by life on Mars—where materials are scarce and there is no resupply mission. Created from scraps, or space junk, Space Hippie is the result of sustainable practices meeting radical design.",
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",  
            },
        ],
    },
];

        let chosenProduct = products[0]

        const currentProductImg = document.querySelector(".productImg");
        const currentProductTitle = document.querySelector(".productTitle");
        const currentProductPrice = document.querySelector(".productPrice");
        const currentProductDescription = document.querySelector(".productDescription");
        const currentProductColors = document.querySelectorAll(".color");
        const currentProductSizes = document.querySelectorAll(".size");


        menuItems.forEach((item, index) => {
        item.addEventListener("click", ()=> {
        // change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        chosenProduct = products[index]

        //change text of current product
        currentProductTitle.textContent = chosenProduct.title
        currentProductPrice.textContent = chosenProduct.price
        currentProductDescription.textContent = chosenProduct.description
        currentProductImg.src = chosenProduct.colors[0].img

        // assigning new colors
        currentProductColors.forEach((color,index)=> {
            color.style.backgroundColor = chosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = chosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",() => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white"
            size.style.color = "black"
        });
        size.style.backgroundColor = "black"
        size.style.color = "white"
    });
    });
        
        // PAYMENT INFORMATION
        
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");


productButton.addEventListener("click",() => {
    payment.style.display = "flex"
});

close.addEventListener("click",() => {
    payment.style.display = "none"
})

