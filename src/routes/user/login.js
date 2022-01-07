const { WEBTOKENKEY } = require("../../../config/login");
const JWT = require("jsonwebtoken");

const login = async ({ db, body: { username, password } }, res) => {
  const rows = await new Promise((res) =>
    db.all(
      `SELECT id FROM users WHERE username = $username AND password = $password`,
      {
        $username: username,
        $password: password,
      },
      (err, rows) => {
        if (err) {
          console.log(err);
        }
        res(rows);
      }
    )
  );

  res.setHeader("Content-Type", "application/json");
  if (rows.length !== 1) {
    res.status(401);
    res.send(JSON.stringify("Username or password wrong"));
  } else {
    const payload = {
      id: rows[0].id,
      username,
    };
    const jwt = await JWT.sign(payload, WEBTOKENKEY, { expiresIn: "10 d" });
    res.send(JSON.stringify(jwt));
  }
};

module.exports = { login };
