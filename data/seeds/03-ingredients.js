exports.seed = async function(knex) {
  await knex('ingredients').insert([
    {
      "ingredient_name": "olive oil",
      "quantity": 0.014
    },
    {
      "ingredient_name": "butter",
      "quantity": 2
    },
    {
      "ingredient_name": "pepper",
      "quantity": 0.010
    },
  ]);
};
