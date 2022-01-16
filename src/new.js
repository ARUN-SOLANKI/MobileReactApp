import react from "react";
const Arr = [

        {
                "id" : 1,
                "model" : "Samsung Galaxy M52 5G" , 
                "category" : "samsung",
                "prize" : 1471,
                "imgs"  : "images/sam1.jpg", 
                "spec" : {
                        "ram" : "6 GB RAM, 128 GB inbuilt", 
                        "rom" : "5000 mAh Battery with Fast Charging", 
                        "front_camera" : "64 MP + 12 MP + 5 MP Triple Rear & 32 MP Front Camera",
                        "rear_camera" : "6.7 inches, 1080 x 2400 px, 120 Hz Display with Punch Hole"}
        },
        {
                "id" : 2,
                "model" : "Samsung Galaxy M12" , 
                "category" : "samsung",
                "prize" : 10800,
                "imgs" : "images/sam2.jpg",
                "spec" : {
                                "ram" : "4 GB RAM, 64 GB inbuilt", 
                                "rom" : "6000 mAh Battery with Fast Charging", 
                                "front_camera" : "48 MP Quad Rear & 8 MP Front Camera",
                                "rear_camera" : "6.5 inches, 720 x 1600 px, 90 Hz Display with Water Drop Notch"}
        },
        {       "id" : 3,
                "model" : "Samsung Galaxy F62" ,
                "category" : "samsung", 
                "prize" : 19490,
                "imgs" : "images/sam3.jpg",
                "spec" : {
                                "ram" : "6 GB RAM, 128 GB inbuilt", 
                                "rom" : "7000 mAh Battery with Fast Charging", 
                                "front_camera" : "64 MP Quad Rear & 32 MP Front Camera",
                                "rear_camera" : "6.7 inches, 1080 x 2400 px Display with Punch Hole"}
        },
        {       "id" : 4,
                "model" : "Samsung Galaxy A52s 5G (8GB RAM + 128GB)" , 
                "prize" : 19970,
                "category" : "samsung",
                "imgs" : "images/sam4.jpg",
                "spec" : {
                                "ram" : "8 GB RAM, 128 GB inbuilt", 
                                "rom" : "4500 mAh Battery with Fast Charging", 
                                "front_camera" : "64 MP Quad Rear & 32 MP Front Camera",
                                "rear_camera" : "6.5 inches, 1080 x 2400 px, 120 Hz Display with Punch Hole"}
        },
        {       "id" : 5,
                "model" : "Samsung Galaxy S20 FE 5G" , 
                "prize" : 39999,
                "category" : "samsung",
                "imgs" : "images/sam5.jpg",
                "spec" : {
                                "ram" : "8 GB RAM, 128 GB inbuilt", 
                                "rom" : "4500 mAh Battery with Fast Charging", 
                                "front_camera" : "12 MP + 12 MP + 8 MP Triple Rear & 32 MP Front Camera",
                                "rear_camera" : "6.5 inches, 1080 x 2400 px, 120 Hz Display with Punch Hole"}
        },
        {       "id" : 6,
                "model" : "Samsung Galaxy S20 FE 5G" , 
                "prize" : 39999,
                "category" : "samsung",
                "imgs" : "images/sam6.jpg",
                "spec" : {
                                "ram" : "4GB", 
                                "rom" : "128GB", 
                                "front_camera" : "8 MP",
                                "rear_camera" : "13 MP"}
        },
        {       "id" : 7,
                "model" : "Samsung Galaxy M32" , 
                "prize" : 13890,
                "category" : "samsung",
                "imgs" : "images/sam7.jpg",
                "spec" : {
                                "ram" : "4GB", 
                                "rom" : "128GB", 
                                "front_camera" : "8 MP",
                                "rear_camera" : "13 MP"}
        },
        {       "id" : 8,
                "model" : "Samsung Galaxy S21 Ultra", 
                "prize" : 89599,
                "category" : "samsung",
                "imgs" : "images/sam8.jpg",
                "spec" : {
                                "ram" : "4GB", 
                                "rom" : "128GB", 
                                "front_camera" : "8 MP",
                                "rear_camera" : "13 MP"}
        },
        {       "id" : 9,
                "category" : "samsung",
                "model" : "Samsung Galaxy M21 2021" , 
                "prize" : 12949,
                "imgs" : "images/sam9.jpg",
                "spec" : {
                                "ram" : "4GB", 
                                "rom" : "128GB", 
                                "front_camera" : "8 MP",
                                "rear_camera" : "13 MP"}
        },
        {       "id" : 10,
                "category" : "samsung",
                "model" : "Samsung Galaxy M12 (6GB RAM + 128GB)" , 
                "prize" : 13499,
                "imgs" : "images/sam10.jpg",
                "spec" : {
                                "ram" : "4GB", 
                                "rom" : "128GB", 
                                "front_camera" : "8 MP",
                                "rear_camera" : "13 MP"}
        },
        {       "id" : 11,
                "model" : "Samsung Galaxy M31 (8GB RAM +128GB)" , 
                "prize" : 16999,
                "category" : "samsung",
                "imgs" : "images/sam11.jpg",
                "spec" : {
                                "ram" : "4GB", 
                                "rom" : "128GB", 
                                "front_camera" : "8 MP",
                                "rear_camera" : "13 MP"}
        },
        {       "id" : 12,
                "model" : "Samsung Galaxy M51" , 
                "prize" : 19999,
                "category" : "samsung",
                "imgs" : "images/sam12.jpg",
                "spec" : {
                                "ram" : "4GB", 
                                "rom" : "128GB", 
                                "front_camera" : "8 MP",
                                "rear_camera" : "13 MP"}
        },
       {        "id" : 13,
                "model" : "Samsung Galaxy M21 2021 (6GB RAM + 128GB)" , 
                "prize" : 14999,
                "category" : "samsung",
                "imgs" : "images/sam13.jpg",
                "spec" : {
                                "ram" : "4GB", 
                                "rom" : "128GB", 
                                "front_camera" : "8 MP",
                                        "rear_camera" : "13 MP"}
        },
       {        "id" : 14,
                "model" : "Samsung Galaxy A52s 5G" , 
                "prize" : 35899,
                "category" : "samsung",
                "imgs" : "images/sam14.jpg",
                "spec" : {
                                "ram" : "4GB", 
                                "rom" : "128GB", 
                                "front_camera" : "8 MP",
                                "rear_camera" : "13 MP"}
        },
        {       "id" : 15,
                "model" : "Samsung Galaxy M32 5G" , 
                "prize" : 20990,
                "category" : "samsung",
                "imgs" : "images/sam15.jpg",
                "spec" : {
                                "ram" : "4GB", 
                                "rom" : "128GB", 
                                "front_camera" : "8 MP",
                                "rear_camera" : "13 MP"}
        },
        {       "id" : 16,
                "model" : "Samsung Galaxy S22 Ultra 5G" , 
                "prize" :92999,
                "category" : "samsung",
                "imgs" : "images/sam16.jpg",
                "spec" : {
                                "ram" : "4GB", 
                                "rom" : "128GB", 
                                "front_camera" : "8 MP",
                                "rear_camera" : "13 MP"}
        },
        {       "id" : 17,
                "model" : "Samsung Galaxy A22 5G" , 
                "prize" : 19989,
                "category" : "samsung",
                "imgs" : "images/sam17.jpg",
                "spec" : {
                                "ram" : "4GB", 
                                "rom" : "128GB", 
                                "front_camera" : "8 MP",
                                "rear_camera" : "13 MP"}
        },
        {       "id" : 18,
                "model" : "Samsung Galaxy F12" , 
                "prize" : 11310,
                "category" : "samsung",
                "imgs" : "images/sam18.jpg",
                "spec" : {
                                "ram" : "4GB", 
                                "rom" : "128GB", 
                                "front_camera" : "8 MP",
                                "rear_camera" : "13 MP"}
        },
        {       "id" : 19,
                "model" : "Samsung Galaxy M52 5G (8GB RAM + 128GB)" , 
                "prize" : 31990,
                "category" : "samsung",
                "imgs" : "images/sam19.jpg",
                "spec" : {
                                "ram" : "4GB", 
                                "rom" : "128GB", 
                                "front_camera" : "8 MP",
                                "rear_camera" : "13 MP"}
        },
        {       "id" : 20,
                "model" : "Samsung Galaxy M32 (6GB RAM + 128GB)" , 
                "prize" : 16999,
                "category" : "samsung",
                "imgs" : "images/sam20.jpg",
                "spec" : {
                                "ram" : "4GB", 
                                "rom" : "128GB", 
                                "front_camera" : "8 MP",
                                "rear_camera" : "13 MP"}
        },
        {       "id" : 21,
                "model" : "Xiaomi Redmi Note 11 Pro Max 5G" , 
                "prize" : 19999,
                "category" : "mi",
                "imgs" : "images/reaomi1.jpg",
                "spec" : {
                                "ram" : "6 GB RAM, 128 GB inbuilt", 
                                "rom" : "5200 mAh Battery with Fast Charging", 
                                "front_camera" : "108 MP Quad Rear & 32 MP Front Camera",
                                "rear_camera" : "6.67 inches, 1080 x 2400 px, 120 Hz Display with Punch Hole"}
        },
        {       "id" : 22,
                 "model" : "Xiaomi Redmi Note 10S" , 
                "prize" : 14799,
                "category" : "mi",
                "imgs" : "images/reaomi2.jpg",
                "spec" : {
                                "ram" : "6 GB RAM, 64 GB inbuilt", 
                                "rom" : "5000 mAh Battery with Fast Charging", 
                                "front_camera" : "50 MP + 8 MP Dual Rear & 16 MP Front Camera",
                                "rear_camera" : "6.6 inches, 1080 x 2400 px, 90 Hz Display with Punch Hole"}
        },
        {       "id" : 23,
                "model" : "Xiaomi Redmi Note 10 Pro 5G" , 
                "prize" : 16999,
                "category" : "mi",
                "imgs" : "images/reaomi3.jpg",
                "spec" : {
                                "ram" : "6 GB RAM, 128 GB inbuilt", 
                                "rom" : "5000 mAh Battery with Fast Charging", 
                                "front_camera" : "64 MP + 8 MP + 2 MP Triple Rear & 16 MP Front Camera",
                                "rear_camera" : "6.6 inches, 1080 x 2400 px, 120 Hz Display with Punch Hole"}
        },
        {       "id" : 24,
                "model" : "OnePlus Nord 2" , 
                "prize" : 16999,
                "category" : "one Plus",
                "imgs" : "images/reaomi3.jpg",
                "spec" : {
                                "ram" : "8 GB RAM, 128 GB inbuilt", 
                                "rom" : "4500 mAh Battery with Fast Charging", 
                                "front_camera" : "50 MP + 8 MP + 2 MP Triple Rear & 32 MP Front Camera",
                                "rear_camera" : "6.43 inches, 1080 x 2400 px, 90 Hz Display with Punch Hole     "}
        },
        {       "id" : 25,
                "model" : "Apple iPhone 13" , 
                "prize" : 112254,
                "category" : "Iphone",
                "imgs" : "images/reaomi3.jpg",
                "spec" : {
                                "ram" : "6 GB RAM, 128 GB inbuilt", 
                                "rom" : "5000 mAh Battery with Fast Charging", 
                                "front_camera" : "64 MP + 8 MP + 2 MP Triple Rear & 16 MP Front Camera",
                                "rear_camera" : "6.6 inches, 1080 x 2400 px, 120 Hz Display with Punch Hole"}
        },
        {       "id" : 23,
                "model" : "Nokia X60 Pro 5G" , 
                "prize" : 49999,
                "category" : "Nokia",
                "imgs" : "images/reaomi3.jpg",
                "spec" : {
                                "ram" : "6 GB RAM, 128 GB inbuilt", 
                                "rom" : "5000 mAh Battery with Fast Charging", 
                                "front_camera" : "64 MP + 8 MP + 2 MP Triple Rear & 16 MP Front Camera",
                                "rear_camera" : "6.6 inches, 1080 x 2400 px, 120 Hz Display with Punch Hole"}
        },
        {       "id" : 24,
                "model" : "Toyota" , 
                "prize" : 49999,
                "category" : "Toyota",
                "imgs" : "images/reaomi3.jpg",
                "spec" : {
                                "ram" : "6 GB RAM, 128 GB inbuilt", 
                                "rom" : "5000 mAh Battery with Fast Charging", 
                                "front_camera" : "64 MP + 8 MP + 2 MP Triple Rear & 16 MP Front Camera",
                                "rear_camera" : "6.6 inches, 1080 x 2400 px, 120 Hz Display with Punch Hole"}
        },

]

export default Arr;