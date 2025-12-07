const request = require('supertest');
const app = require('./app');


describe("GET /", () => {
    it("should display the DevOps welcome message in HTML", async () => {
        const res = await request(app).get("/");

        expect(res.status).toBe(200);
        expect(res.text).toContain("<h1>Welcome to DevOps world</h1>");
    });
});
