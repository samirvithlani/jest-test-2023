describe("all numric test case", () => {
  test("1 plus 1 equlas to be 2", () => {
    var a = 1;
    var b = 1;
    expect(a + b).toBe(2);
  });

  test("10 plss 10 not to be 10", () => {
    var x = 10;
    var y = 10;
    expect(x + y).not.toBe(10);
  });

  test("var should not be undefined", () => {
    var x = undefined;
    expect(x).toBeUndefined();
  });
  test("var should not be undefined", () => {
    var x = 100;
    expect(x).not.toBeUndefined();
  });
  test("var should not be undefined", () => {
    var x = 10;
    expect(x).toBeDefined();
  });

  test("objct should be null", () => {
    var user = null;
    expect(user).toBeNull();
  });
  test("objct should be null", () => {
    var user = { name: "sajjad", age: 20 };
    expect(user).not.toBeNull();
  });
});

describe("number comparision", () => {
  test("a should be greater than b", () => {
    var a = 10;
    var b = 5;

    expect(a).toBeGreaterThan(b);
    expect(b).toBeLessThan(a);
    expect(b).toBeLessThanOrEqual(a);
    expect(a).toBeGreaterThanOrEqual(b);
  });
});
describe("string comparision", () => {
  test("name should be contains I", () => {
    var name = "samIr";
    expect(name).toMatch(/i/i);
  });

  const user = ["raj", "sam", "samir", "amit"];
  test("user contains sam", () => {
    expect(user).toContain("sam");
  });
});

describe("referance equalities", () => {
  var emp = {
    name: "samir",
    salary: 10000,
  };
  test("slaary of employee should be 10000", () => {
    expect(emp).toEqual({ name: "samir", salary: 10000 });
  });
});

describe("object test case", () => {
  const users = {
    name: "samir",
    age: 20,
  };

  test("user should be same as users", () => {
    expect(users).toMatchObject({
      name: expect.any(String),
      age: expect.any(Number),
    });
  });
});

describe("array test case", () => {

  const users = [100,200,"java"]
  test("array equal",()=>{
    //expect(users).toEqual(["samir","raj","parth"])
    //expect(users).toContain("samir")
    //expect(users).toContainEqual("samir")
    //expect(users).toHaveLength(3)
    //expect(users).toEqual(expect.arrayContaining([expect.any(String)]))
    //expect only string in array
    //expect(users).toEqual(expect.arrayContaining([expect.any(String)]))
    //expect each elemet to be string in array
    //expect(users.every(item => typeof item === 'number')).toBe(true);


  })
  var userObj = [
    {
      id:1,
      name:"rahul",
      age:23
    },
    {
      id:2,
      name:"parth",
      age:24
    },
    {
      id:3,
      name:"amit",
      age:24
    }
  ]

  userObj.push({
    id:4,
    name:"samir",
    year:24
  })
  

  test("array equal 2",()=>{
    expect(userObj).toEqual(expect.arrayContaining([
      expect.objectContaining({
        id:expect.any(Number),
        name:expect.any(String),
        age:expect.any(Number)
      })
    ]))
  }) 

})