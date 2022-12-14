import axios from 'axios';

const catalog = [
    {
        _id: "1",
        title: "Glazed",
        price: 2.99,
        category: "Donut",
        image: "test1.png"
    },
    {
        _id: "2",
        title: "Chocolate Frosted",
        price: 2.99,
        category: "Donut",
        image: "test2.png"
    },
    {
        _id: "3",
        title: "Choco w/ Sprinkles",
        price: 2.99,
        category: "Donut",
        image: "test3.png"
    },
    {
        _id: "4",
        title: "Berry w/ Sprinkles",
        price: 2.99,
        category: "Donut",
        image: "test4.png"
    },
    {
        _id: "5",
        title: "Chocolate Glazed",
        price: 2.99,
        category: "Donut",
        image: "test5.png"
    },
    {
        _id: "6",
        title: "Cinnamon Sugar",
        price: 2.99,
        category: "Donut",
        image: "test6.png"
    },
    {
        _id: "7",
        title: "Glazed Cinnamon Roll",
        price: 3.99,
        category: "Donut",
        image: "test7.png"
    },
    {
        _id: "8",
        title: "Cake Sprinkles",
        price: 3.99,
        category: "Donut",
        image: "test8.png"
    },
    {
        _id: "9",
        title: "Blueberry Cake",
        price: 3.99,
        category: "Donut",
        image: "test9.png"
    },
    {
        _id: "10",
        title: "Cruller",
        price: 3.99,
        category: "Donut",
        image: "test10.png"
    },
    {
        _id: "11",
        title: "Choco Cruller",
        price: 3.99,
        category: "Donut",
        image: "test11.png"
    },
    {
        _id: "12",
        title: "Reese's",
        price: 3.99,
        category: "Donut",
        image: "test12.png"
    },
];


class Dataservice {

    async getCatalog() {
    // use this line to work without a server    
    //  return catalog;

    // use these lines to work with the server
        let res = await axios.get("http://127.0.0.1:5000/api/catalog")
        return res.data;
    }

    async saveProduct(product) {
        let res = await axios.post("http://127.0.0.1:5000/api/catalog", product);
        return res.data;
    }

    saveOrder() {

    }

    validateCouponCode() {

    }


    async saveCoupon(coupon) {
        let res = await axios.post("http://127.0.0.1:5000/api/coupons", coupon);
        return res.data;
    }

    async getCoupons() {
        let res = await axios.get("http://127.0.0.1:5000/api/coupons");
        return res.data;
    }
}

export default Dataservice;

