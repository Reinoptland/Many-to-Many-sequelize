// postgres://postgres:secret@localhost:5432/postgres

const Sequelize = require("sequelize");
const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5432/postgres";
const db = new Sequelize(databaseUrl, { logging: false });

db.sync({ force: false }).then(() => console.log("Models loaded"));

module.exports = db;
