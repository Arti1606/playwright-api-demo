import { test, expect, request } from "@playwright/test";
 
test.describe('API Testing Demo', () =>
{
 
test("GET- Fetch all post", async({request})=>
{
 
const response = await request.get('/posts');
expect(response.status()).toBe(200);
 
})
 
test("GET- single post", async ({request}) =>
{
    const response = await request.get('/posts/1');
    expect(response.status()).toBe(200)
    const body = await response.json();
    expect(body.id).toBe(1)
})
 
test("POST-single post", async ({request}) =>
{
  const response = await request.post('/posts',{
 
    data: {
        title: 'Playwright API Test',
        body: 'This is a demo project',
        userId: 16
    }
});
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.title).toBe('Playwright API Test');
  });
 
 
  })