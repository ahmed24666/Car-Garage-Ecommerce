const products = [
    {
        id:1,
        name:'Wheel Rims',
        rating:4,
        price:65,
        sale:0,
        isInStock:true,
        img1:'/images/1.jpg',
        category:'Cars',
        trending:false,
        fav:false,  
    },
    {
        id:2,
        name:'Motor Oil',
        rating:1,
        price:60,
        sale:0,
        isInStock:true,
        img1:'/images/2.jpg',
        category:'Electronical',
        trending:false,
        fav:false,
    },
    {
        id:3,
        name:'Cooler',
        rating:2,
        price:400,
        sale:5,
        isInStock:true,
        img1:'/images/3.jpg',
        category:'Electronical',
        trending:false,
        fav:false,
    },
    {
        id:4,
        name:'Generator Moto',
        rating:3,
        price:1100,
        sale:10,
        isInStock:false,
        img1:'/images/4.jpg',
        category:'Electronical',
        trending:true,
        fav:false, 
    },
    {
        id:5,
        name:'Air filter',
        rating:4,
        price:200,
        sale:0,
        isInStock:true,
        img1:'/images/5.jpg',
        category:'Electronical',
        trending:false,
        fav:true,
        
    },
    {
        id:6,
        name:'Car Sparks',
        rating:5,
        price:75,
        sale:20,
        isInStock:true,
        img1:'/images/6.jpg',
        category:'Gadgets',
        trending:false,
        fav:false,
    },
    {
        id:7,
        name:'Rim',
        rating:0,
        price:50,
        sale:0,
        isInStock:true,
        img1:'/images/7.jpg',
        category:'Gadgets',
        trending:false,
        fav:false,
    },
    {
        id:8,
        name:'Auto Oil',
        rating:1,
        price:50,
        sale:9,
        isInStock:true,
        img1:'/images/8.jpg',
        category:'Drive',
        trending:true,
        fav:false,
    },
    {
        id:9,
        name:'Engine Cooler',
        rating:2,
        price:400,
        sale:0,
        isInStock:true,
        img1:'/images/9.jpg',
        category:'Drive',
        trending:false,
        fav:false,
    },
    {
        id:10,
        name:'Cabin Filter',
        rating:3,
        price:85,
        sale:0,
        isInStock:true,
        img1:'/images/10.jpg',
        category:'Drive',
        trending:false,
        fav:true,
    },
    {
        id:11,
        name:'Energy Storage',
        rating:4,
        price:75,
        sale:30,
        isInStock:true,
        img1:'/images/11.jpg',
        category:'Drive',
        trending:false,
        fav:false,
    },
    {
        id:12,
        name:'Electric Generator',
        rating:5,
        price:1100,
        sale:0,
        isInStock:true,
        img1:'/images/12.jpg',
        category:'Drive',
        trending:true,
        fav:false,
        
    },
    {
        id:13,
        name:'Sparks Plugs',
        rating:0,
        price:75,
        sale:20,
        isInStock:true,
        img1:'/images/13.jpg',
        category:'Drive',
        trending:false,
        fav:false,
        
    },
    {
        id:14,
        name:'Oil System',
        rating:1,
        price:200,
        sale:0,
        isInStock:true,
        img1:'/images/14.jpg',
        category:'Drive',
        trending:false,
        fav:false,
        
    },
    {
        id:15,
        name:'Wheels',
        rating:2,
        price:65,
        sale:0,
        isInStock:false,
        img1:'/images/15.jpg',
        category:'Drive',
        trending:false,
        fav:true,
        
    },
    {
        id:16,
        name:'Disc Brakes',
        rating:3,
        price:50,
        sale:19,
        isInStock:true,
        img1:'/images/16.jpg',
        category:'Drive',
        trending:true,
        fav:false,
        
    },
    {
        id:17,
        name:'Generator',
        rating:4,
        price:1300,
        sale:0,
        isInStock:true,
        img1:'/images/17.jpg',
        category:'Mechanic',
        trending:false,
        fav:false,
    },
    {
        id:18,
        name:'Coupling',
        rating:5,
        price:120,
        sale:0,
        isInStock:true,
        img1:'/images/18.jpg',
        category:'Mechanic',
        trending:false,
        fav:false,
    },
    {
        id:19,
        name:'Bumpers',
        rating:0,
        price:100,
        sale:14,
        isInStock:true,
        img1:'/images/19.jpg',
        category:'Mechanic',
        trending:false,
        fav:false,
    },
    {
        id:20,
        name:'Air Filter',
        rating:1,
        price:90,
        sale:0,
        isInStock:true,
        img1:'/images/20.jpg',
        category:'Mechanic',
        trending:true,
        fav:true,
    },
    {
        id:21,
        name:'Accumulator',
        rating:2,
        price:98,
        sale:40,
        isInStock:true,
        img1:'/images/21.jpg',
        category:'Mechanic',
        trending:false,
        fav:false,
    },
    {
        id:22,
        name:'Brake Discs',
        rating:3,
        price:150,
        sale:0,
        isInStock:true,
        img1:'/images/22.jpg',
        category:'Mechanic',
        trending:false,
        fav:false,
    },
    {
        id:23,
        name:'Generators',
        rating:4,
        price:2000,
        sale:0,
        isInStock:true,
        img1:'/images/23.jpg',
        category:'Automotive',
        trending:false,
        fav:false,
    },
    {
        id:24,
        name:'Sparks',
        rating:5,
        price:500,
        sale:0,
        isInStock:true,
        img1:'/images/24.jpg',
        category:'Automotive',
        trending:true,
        fav:false,
    },
    {
        id:25,
        name:'Coupling Parts',
        rating:0,
        price:1475,
        sale:40,
        isInStock:true,
        img1:'/images/25.jpg',
        category:'Automotive',
        trending:false,
        fav:true,
    },
    {
        id:26,
        name:'Oils',
        rating:1,
        price:300,
        sale:65,
        isInStock:true,
        img1:'/images/26.jpg',
        category:'Automotive',
        trending:false,
        fav:false,
    },
    {
        id:27,
        name:'Oil Filter',
        rating:2,
        price:6781,
        sale:0,
        isInStock:true,
        img1:'/images/27.jpg',
        category:'Service',
        trending:false,
        fav:false,
    },
]
export default products