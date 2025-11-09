import { test as suite } from 'tap';
import http from 'node:http';

const HOST = process.env.HOST ?? 'localhost';
const PORT = process.env.PORT ?? 4000;

const userForTest = {
  username: 'Alex',
  age: 25,
  hobbies: ['coding', 'reading'],
};

/**
 * @function request
 * @param {object} options
 * @param {string | object} [body]
 */
const request = (options, body) => new Promise((resolve, reject) => {
  const req = http.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => (data += chunk));
    res.on('end', () => resolve({ status: res.statusCode, body: data }));
  });
  req.on('error', reject);
  if (body) req.write(typeof body === 'string' ? body : JSON.stringify(body));
  req.end();
});

/******************************************
 * Suite: GET /api/users (empty list)
 ******************************************/

suite('GET /api/users returns empty array', async (test) => {
  const reqOpts = {
    hostname: HOST,
    port: PORT,
    path: '/api/users',
    method: 'GET',
  };
  const res = await request(reqOpts);
  test.equal(res.status, 200, 'Status code should be 200');
  test.same(JSON.parse(res.body), [], 'Response body should be empty array');
  test.end();
});

/******************************************
 * Suite: POST /api/users (create user)
 ******************************************/
let createdUserId = '';

suite('POST /api/users creates a new user', async (test) => {
  const res = await request(
    {
      hostname: HOST,
      port: PORT,
      path: '/api/users',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    },
    userForTest,
  );

  test.equal(res.status, 201, 'Status code should be 201');

  const createdUser = JSON.parse(res.body || '{}');
  test.ok(createdUser.id, 'User should have an id');
  test.equal(createdUser.username, userForTest.username, 'Username should match');
  test.equal(createdUser.age, userForTest.age, 'Age should match');

  createdUserId = createdUser.id;
  test.end();
});

/******************************************
 * Suite: GET /api/users/{id} (get created user)
 ******************************************/
suite('GET /api/users/{id} returns created user', async (test) => {
  const reqOpts = {
    hostname: HOST,
    port: PORT,
    path: `/api/users/${createdUserId}`,
    method: 'GET',
  };
  const res = await request(reqOpts);
  test.equal(res.status, 200, 'Status code should be 200');

  const user = JSON.parse(res.body);
  test.equal(user.id, createdUserId, 'Returned user id should match');
  test.equal(user.username, userForTest.username, 'Username should match');
  test.end();
});

/******************************************
 * Suite: PUT /api/users/{id} (update user)
 ******************************************/

suite('PUT /api/users/{id} updates the user', async (test) => {
  const dataForUpdate = { age: 26 };
  const res = await request(
    {
      hostname: HOST,
      port: PORT,
      path: `/api/users/${createdUserId}`,
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
    },
    { ...userForTest, ...dataForUpdate },
  );

  test.equal(res.status, 200, 'Status code should be 200');

  const updatedUser = JSON.parse(res.body);
  test.equal(updatedUser.age, 26, 'Age should be updated');
  test.equal(updatedUser.username, userForTest.username, 'Username should remain the same');
  test.end();
});

/******************************************
 * Suite: DELETE /api/users/{id} (delete user)
 ******************************************/

suite('DELETE /api/users/{id} removes the user', async (test) => {
  const reqOpts = {
    hostname: HOST,
    port: PORT,
    path: `/api/users/${createdUserId}`,
    method: 'DELETE',
  };
  const res = await request(reqOpts);
  test.equal(res.status, 204, 'Status code should be 204');
  test.end();
});

/******************************************
 * Suite: GET /api/users/{id} (after deletion)
 ******************************************/

suite('GET /api/users/{id} after deletion returns 404', async (test) => {
  const reqOpts = {
    hostname: HOST,
    port: PORT,
    path: `/api/users/${createdUserId}`,
    method: 'GET',
  };
  const res = await request(reqOpts);
  test.equal(res.status, 404, 'Status code should be 404');
  test.end();
});

/*********************************************/
