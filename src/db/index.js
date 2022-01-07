var sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:");

const setupDB = () => {
  db.run(
    `CREATE TABLE experiences
       (category TEXT, description TEXT, rating INT)`
  );
  db.run(
    `CREATE TABLE users
       (id INTEGER PRIMARY KEY, username TEXT, password TEXT)`,
    () => {
      db.run(
        `INSERT INTO users (username, password)
     VALUES ('philipp', 'mysecretPw'), ('carol', 'ilikepasta')`
      );
    }
  );

  return db;
};

module.exports = { setupDB, db };
