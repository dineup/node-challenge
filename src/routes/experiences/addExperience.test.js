const request = require("supertest");

const { db } = require("../../db");
const { app } = require("../../app");

describe("addExperience", () => {
  it("should add experience", async () => {
    const response = await request(app).post("/v1/food/experiences").send({
      category: "pasta",
      description: "Spaghetti cabonara",
      rating: 5,
    });
    expect(response.status).toBe(200);
    expect(response.body).toBe("ok");
    const rows = await new Promise((res) =>
      db.all(`SELECT * FROM experiences`, (err, rows) => {
        res(rows);
      })
    );
    expect([...rows]).toEqual([
      {
        category: "pasta",
        description: "Spaghetti cabonara",
        rating: 5,
        // id: 1,
      },
    ]);
  });
});
