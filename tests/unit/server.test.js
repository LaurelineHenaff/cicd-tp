const request = require("supertest");
const app = require("../../src/server");

describe("Server", () => {
  it("should handle GET /hello with no name", async () => {
    const res = await request(app).get("/hello");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world!");
  });

  it("should handle GET /hello with a name", async () => {
    const res = await request(app).get("/hello/John");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world! From John");
  });

  it("should handle POST /hello with a name in header", async () => {
    const res = await request(app)
      .post("/hello")
      .set("x-name", "Jane");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world! From Jane");
  });

  it("should return 400 for GET /hello with invalid name", async () => {
    const res = await request(app).get("/hello/invalid");
    expect(res.statusCode).toBe(400);
  });

  it("should return 400 for POST /hello without x-name header", async () => {
    const res = await request(app).post("/hello");
    expect(res.statusCode).toBe(400);
  });
});
