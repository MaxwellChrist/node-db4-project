exports.seed = async function(knex) {
  await knex('step_ingredients').insert([
    {
      "step_id": 2,
      "ingredients_id": 1
    },
    {
      "step_id": 2,
      "ingredients_id": 1
    },
    {
      "step_id": 2,
      "ingredients_id": 1
    },
  ]);
};
