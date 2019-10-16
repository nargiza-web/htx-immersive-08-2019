const pgp = require("pg-promise")();
const pgpDb = pgp("postgres://localhost:5432/bcrypt_site");

/**
 * Checks if there is a user with the given email in the database.
 *
 * @param {string} email The email address for the user
 * @returns nothing if there is no user, the user if they exist
 */
function checkForUser(email) {
  return pgpDb.oneOrNone(
    "SELECT email, password, id FROM users WHERE email = $1",
    [email]
  );
}

function createUser(email, password) {
  return pgpDb.none("INSERT INTO users (email, password) VALUES ($1, $2)", [
    email,
    password
  ]);
}

function createDrink(name, ingredients, cat_id) {
  return pgpDb.one(
    "INSERT INTO drinks (name, ingredients, cat_id) VALUES ($1, $2, $3) RETURNING id",
    [name, ingredients, cat_id]
  );
}

function getDrink(id) {
  // "SELECT title FROM favorites INNER JOIN movies ON(favorites.movie_id = movies.id) WHERE user_id = $1;",
  return pgpDb.one(
    "SELECT d.name, d.ingredients, d.id, c.name AS cat FROM drinks d INNER JOIN categories c ON(d.cat_id = c.id) WHERE d.id = $1",
    [id]
  );
}

function getDrinks() {
  return pgpDb.any(
    "SELECT d.name, d.ingredients, d.id, c.name AS cat FROM drinks d INNER JOIN categories c ON(d.cat_id = c.id)"
  );
}

function getCategories() {
  return pgpDb.any("SELECT id, name FROM categories ORDER BY name ASC;");
}

module.exports = {
  checkForUser: checkForUser,
  createUser: createUser,
  createDrink: createDrink,
  getDrink: getDrink,
  getDrinks: getDrinks,
  getCategories: getCategories
};
