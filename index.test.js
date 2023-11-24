const request = require("supertest");
const User = require("./models/User");
const Fruit = require("./models/Fruit");
const syncSeed = require("./seed");
const app = require("./src/app");

let users;
let fruits;
beforeEach(async () => {
  await syncSeed();
  users = await User.findAll();
  fruits = await Fruit.findAll();
});

describe("testing", () => {
  test("find all users", async () => {
    const response = await request(app).get("/users");

    expect(response.body.length).toBe(users.length);
  });

  test("find all fruits", async () => {
    const response = await request(app).get("/fruits");

    expect(response.body.length).toBe(fruits.length);
  });
});
