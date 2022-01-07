const request = require("supertest");

const { app } = require("../../app");

describe("getExperiences", () => {
  it("should get experiences", async () => {
    await request(app).post("/v1/food/experiences").send({
      category: "rice",
      description: "Wok with brokoli",
      rating: 4,
    });
    await request(app).post("/v1/food/experiences").send({
      category: "pasta",
      description: "Spaghetti cabonara",
      rating: 5,
    });

    const response = await request(app).get("/v1/food/experiences");
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual([
      {
        // id: 1,
        category: "rice",
        description: "Wok with brokoli",
        rating: 4,
      },
      {
        // id: 2,
        category: "pasta",
        description: "Spaghetti cabonara",
        rating: 5,
      },
    ]);
  });
});
