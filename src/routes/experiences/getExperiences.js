const getExperiences = async ({ db }, res) => {
  const rows = await new Promise((res) =>
    db.all(`SELECT * FROM experiences`, (err, rows) => {
      res(rows);
    })
  );
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(rows));
};

module.exports = { getExperiences };
