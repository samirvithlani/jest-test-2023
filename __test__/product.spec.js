const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const config = require('../config');
console.log("db.....",config.DB_URL);
beforeEach(async() => {

    await mongoose.connect(config.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

})
afterEach(async() => {
    //await mongoose.connection.db.dropDatabase();
    //clear all data 
    // const collections = mongoose.connection.collections;
    // for (const key in collections) {
    //     const collection = collections[key];
    //     await collection.deleteMany();
    // }

    
    await mongoose.connection.close();

})

describe('Product API', () => {

    const product = {
        name:"iphone",
        price:1000,
    }
    describe("get product routes",()=>{

        test("get all products",async()=>{

            const res = await supertest(app).get("/api/products")
            expect(res.statusCode).toBe(200);
            expect(res.body.data).toBeTruthy();
            //expect(res.body.data.length).toBe(0);

        })

        test("add product",async()=>{

            const res  = await supertest(app).post("/api/products").send(product);
            expect(res.statusCode).toBe(201);
        })

    })
    


})