const addExperience = async (
  { db, body: { category, description, rating } },
  res
) => {
  db.run(
    `INSERT INTO experiences
       VALUES ($category, $description, ${rating});`,
    {
      $category: category,
      $description: description,
    },
    (error) => {
      if (error) {
        console.log(error);
      }
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify("ok"));
    }
  );
};

module.exports = { addExperience };
