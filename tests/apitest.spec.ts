import { test,expect,request } from '@playwright/test';
//...fixture...
//
test('read color by index', async () => {
  const apihadnling = await request.newContext();
  const res = await apihadnling.get('https://api.restful-api.dev/objects');
 
  //response validation shoul be 200/201(if its post)
  expect(res.status()).toBe(200);//401.. wrong credentails... 403
  
  //Converting Json to body......
  const body = await res.json();
  console.log(body);
  console.log(body[0].data.color);
  console.log(body[1].name);
 
});

test('create object', async () => {
  const api = await request.newContext();
  const res = await api.post('https://api.restful-api.dev/objects', {
    data: {
      name: "Allam MacBook Pro 16",
      data: {
        year: 2019,
        price: 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
      }
    },    
  });
  expect(res.status()).toBe(200);
  const body = await res.json();
  console.log(body);
});
 