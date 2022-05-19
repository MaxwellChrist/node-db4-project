exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('recipes').insert([
    {
      "recipe_name": "Spaghetti Bolognese"
    },
    {
      "recipe_name": "Hamburger"
    },
    {
      "recipe_name": "Pretzels"
    }
  ]);
};
