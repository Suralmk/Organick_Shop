import  {veg1, veg2, veg3, veg14, organic, bischolate,juice,  veg4, veg5, veg6, veg7, veg8, veg9, egg, bread, lemon, girl1, girl2, girl3, girl4, man1, vegs7}  from "../assets/images"
const products = [
    {
        "name":"Cabbage",
        "catagory":"Vegateble",
        "price" : 30,
        "prev_price" :45,
        "image": veg1
    },
    {
        "name":"Fresh Carrots",
        "catagory":"Fresh",
        "price" : 14,
        "prev_price" :18,
        "image": veg5
    },
    {
        "name":"Eggs",
        "catagory":"Fresh",
        "price" : 17,
        "prev_price" :23,
        "image": egg
    },
    {
        "name":"Zelco Suji Elaichi Rusk",
        "catagory":"Fresh",
        "price" : 11,
        "prev_price" :23,
        "image": bread
    },
    {
        "name":"Brown Hazlenut",
        "catagory":"Nuts",
        "price" : 12,
        "prev_price" :15,
        "image": veg14
    },
    {
        "name":"Green Lemons",
        "catagory":"Fresh",
        "price" : 12,
        "prev_price" :15,
        "image": lemon
    },
    {
        "name":"Mung Bean",
        "catagory":"Health",
        "price" : 12.8,
        "prev_price" :15,
        "image": veg3
    },
]


const testimonals = [
    {
        "image": girl1,
        "saying": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aut provident. Earum debitis consequuntur amet numquam adipisci corporis, voluptatem quibusdam enim excepturi, porro consequatur voluptatum nisi? Consequuntur in eius officia",
        "name" : "Sara Tayler"
    },
    {
        "image": man1,
        "saying": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aut provident. Earum debitis consequuntur amet numquam adipisci corporis, voluptatem quibusdam enim excepturi, porro consequatur voluptatum nisi? Consequuntur in eius officia",
        "name" : "Stephen Farshing"
    },
    {
        "image": girl2,
        "saying": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aut provident. Earum debitis consequuntur amet numquam adipisci corporis, voluptatem quibusdam enim excepturi, porro consequatur voluptatum nisi? Consequuntur in eius officia",
        "name" : "Lexi Tayler"
    },
    {
        "image": girl3,
        "saying": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aut provident. Earum debitis consequuntur amet numquam adipisci corporis, voluptatem quibusdam enim excepturi, porro consequatur voluptatum nisi? Consequuntur in eius officia",
        "name" : "Maya Tayler"
    }
]

const banner2 = [
    {
        "image": juice,
        "content": "Organic Jiuce"
    },
    {
        "image": organic,
        "content": "Organic Food"
    },
    {
        "image": bischolate,
        "content": "Organic Cookies"
    },

]

const news = [
    {
        "image" : organic,
        "date" :"2024",
        "author": "Surafel Melaku",
        "title":"Why is it better for us if we use organick's products.",
        "sub_title" : "Simply dummy text of the printing and typesetting  industry. Lorem Ipsum"
    },
    {
        "image" : vegs7,
        "date" :"2024",
        "author": "Surafel Melaku",
        "title":"Why is it better for us if we use organick's products.",
        "sub_title" : "Simply dummy text of the printing and typesetting  industry. Lorem Ipsum"
    },
    {
        "image" : bischolate,
        "date" :"2024",
        "author": "Surafel Melaku",
        "title":"Why is it better for us if we use organick's products.",
        "sub_title" : "Simply dummy text of the printing and typesetting  industry. Lorem Ipsum"
    },
    {
        "image" : organic,
        "date" :"2024",
        "author": "Surafel Melaku",
        "title":"Why is it better for us if we use organick's products.",
        "sub_title" : "Simply dummy text of the printing and typesetting  industry. Lorem Ipsum"
    },
    {
        "image" : juice,
        "date" :"2024",
        "author": "Surafel Melaku",
        "title":"Why is it better for us if we use organick's products.",
        "sub_title" : "Simply dummy text of the printing and typesetting  industry. Lorem Ipsum"
    }
]
export {testimonals, products, banner2, news}