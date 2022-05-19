
exports.up = async function(knex) {
  await knex.schema
  .createTable('recipes', tbl => {
    tbl.increments("recipe_id")
    tbl.varchar("recipe_name", 128).notNullable()
    tbl.timestamp("created at").defaultTo(knex.fn.now()).notNullable()
  })
  .createTable('steps', tbl => {
    tbl.increments('steps_id')
    tbl.integer("step_number").unsigned().notNullable()
    tbl.varchar("step_instructions", 128).notNullable()
    tbl.integer("recipe_id").unsigned().notNullable().references("recipe_id").inTable("recipes")
  })
  .createTable('ingredients', tbl => {
    tbl.increments('ingredients_id')
    tbl.varchar("ingredient_name", 128).notNullable()
    tbl.float("quantity")
  })
  .createTable('step_ingredients', tbl => {
    tbl.increments('step_ingredients_id')
    tbl.float("quantity").notNullable()
    tbl.integer("steps_id").unsigned().notNullable().references("steps_id").inTable("steps")
    tbl.integer('ingredients_id').unsigned().notNullable().references('ingredients_id').inTable("ingredients")
    tbl.primary("steps_id", "ingredients_id")
})
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
