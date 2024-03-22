import  {veg1, veg2, veg3, veg14, organic, bischolate,juice,  veg4, veg5, veg6, veg7, veg8, veg9, egg, bread, lemon, girl1, girl2, girl3, veg18, veg12, man1, vegs7, man2, project2, veg13, diary,vegs5, veg19, veg11}  from "../assets/images"
const products = [
    {
        "name":"Broccoli",
        "catagory":"Vegateble",
        "price" : 30,
        "prev_price" :45,
        "image": veg1,
        "id":0
    },
    {
        "name":"Fresh Banana",
        "catagory":"Fruits",
        "price" : 14,
        "prev_price" :18,
        "image": veg12,
        "id":1
    },
    {
        "name":"Eggs",
        "catagory":"Fresh",
        "price" : 17,
        "prev_price" :23,
        "image": egg,
        "id":2
    },
    {
        "name":"Zelco Suji Elaichi Rusk",
        "catagory":"Fresh",
        "price" : 11,
        "prev_price" :23,
        "image": bread,
        "id":3
    },
    {
        "name":"Brown Hazlenut",
        "catagory":"Nuts",
        "price" : 12,
        "prev_price" :15,
        "image": veg14,
        "id":4
    },
    {
        "name":"Green Lemons",
        "catagory":"Fresh",
        "price" : 12,
        "prev_price" :15,
        "image": lemon,
        "id":5
    },
    {
        "name":"Mung Bean",
        "catagory":"Health",
        "price" : 12.8,
        "prev_price" :15,
        "image": veg3,
        "id":6
    },
    {
        "name":"Cabbage",
        "catagory":"Fresh",
        "price" : 14.8,
        "prev_price" :18.00,
        "image": veg18,
        "id":6
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
        "date" :"DEC 03",
        "author": "Surafel Melaku",
        "title":"Why is it better for us if we use organick's products.",
        "sub_title" : "Simply dummy text of the printing and typesetting  industry. Lorem Ipsum"
    }
]
const chooseReasons = [
    {
        "reason":"Return Ploicy",
        "description" : "Simply dummy text ofthe printinty pesetting industry"
    },
    {
        "reason":"100% Fresh",
        "description" : "Simply dummy text ofthe printinty pesetting industry"
    },
    {
        "reason":"Support 24/7",
        "description" : "Simply dummy text ofthe printinty pesetting industry"
    },
    {
        "reason":"Secured Payment",
        "description" : "Simply dummy text ofthe printinty pesetting industry"
    },
]

const teams = [
    {
        "name" : "Giovani Bacardo",
        "role": "farmer",
        "image" : man2
    },
    {
        "name" : "Marianne Loreno",
        "role": "Designer",
        "image" : girl1
    },
    {
        "name" : "Riga Pelore",
        "role": "Manager",
        "image" : girl3
    },
]
const oprojects = [
    {
        "name" : "Value-Added Processing Facility",
        "area": "Food",
        "image": project2
    },
    {
        "name" : "Herbal Medicine Cultivation Cooperative",
        "area": "Herbs",
        "image": veg19
    },
    {
        "name" : "Aquaculture Collective",
        "area": "AgroIndustries",
        "image" : veg11
    },
    {
        "name" : "Fruits Cooperative",
        "area": "Fruits",
        "image": organic
    },
    {
        "name" : "Dairy Farming Collective",
        "area": "Diary",
        "image": diary
    },
    {
        "name" : "Organic Produce Farming Cooperative",
        "area": "Vegtables",
        "image": vegs5
    },
]
export {testimonals, products, banner2, news, chooseReasons, teams, oprojects}