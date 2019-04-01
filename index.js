async function test() {
  const argon2 = require('argon2');

  const password = 'Password';

  const hash = await argon2.hash('password');

  if (!await argon2.verify(hash, password)) {
    throw new Error('Unable to verify hash');
  }
}

test()
  .then(() => console.log('Test passed'))
  .catch(err => console.error('Test failed', err));
