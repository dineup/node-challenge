const request = require("supertest");
const { WEBTOKENKEY } = require("../../../config/login");

const JWT = require("jsonwebtoken");

const { app } = require("../../app");

describe("login", () => {
  it("should fail to log in user philipp with wrong pw", async () => {
    const loginResponse = await request(app).post("/v1/user/login").send({
      username: "philipp",
      password: "mysecretpw",
    });

    expect(loginResponse.status).toBe(401);
    expect(loginResponse.body).toBe("Username or password wrong");
  });

  it("should log in user philipp", async () => {
    const loginResponse = await request(app).post("/v1/user/login").send({
      username: "philipp",
      password: "mysecretPw",
    });

    expect(loginResponse.status).toBe(200);
    const jwt = JWT.verify(loginResponse.body, WEBTOKENKEY);
    expect(jwt).toBeTruthy();
    expect(jwt).toMatchObject({
      id: 1,
      username: "philipp",
    });
  });
});
