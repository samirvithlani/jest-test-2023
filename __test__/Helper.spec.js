
const {sum,deleteUserById,findUserById} = require('../utils/helper');

beforeEach(()=>{
    console.log("before each test case..");
    
})
beforeAll(()=>{
    console.log("before all test case..");
    const students = [1,2,3]
    console.log(students);
})

afterEach(()=>{
    console.log("after each test case..");
})
afterAll(()=>{
    console.log("after all test case..");
    students = [];
    console.log(students);
})
describe("custome function test case..",()=>{

    const users = [
        {
            id:1,
            name:"rahul",
        },
        {
            id:2,
            name:"parth",
        },
        {
            id:3,
            name:"amit",
        }
    ]
        test("custome function test case..",()=>{

            expect(sum(1,2)).toBe(3);
        })

        test("delete user by id test case..",()=>{

            expect(deleteUserById(users,1)).toEqual([
                {
                    id:2,
                    name:"parth",
                },
                {
                    id:3,
                    name:"amit",
                }
            ])

        })

        test("find user by id",()=>{

                expect(findUserById(users,2)).toEqual({
                    id:2,
                    name:"parth",
                })
        })



})