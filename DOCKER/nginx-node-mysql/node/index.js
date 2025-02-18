const { faker } = require('@faker-js/faker');

const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000

const config={
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

const users = faker.helpers.multiple(createRandomUser, {
  count: 5,
});

app.get( '/', (req, res) => {
  const connection = mysql.createConnection(config)
  const pessoa = faker.helpers.fake('{{person.prefix}} {{person.lastName}}')

  const sql = `INSERT INTO people (name) values ('${pessoa}')`;
  connection.query(sql)
  listaPessoas(res, connection);
})

app.listen(port, () => {
  console.log('Rodando na porta ' + port)
})

async function listaPessoas(res, connection) {
  const select = 'SELECT id, name FROM people';
  
  connection.query(select, (error, results) => {
 
    const tableRows = results
      .map(
        (person) => `
        <tr>
          <th>${person.id}</th>
          <th>${person.name}</th>
        </tr>
      `
      )
      .join('');

    const table = `
      <table border="2">
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
        ${tableRows}
      </table>`;
  
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      ${table}
    `);
  
      connection.end();
    });
}