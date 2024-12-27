import { config } from "./config/env.js";
import app from "./app.js";
import { asserDataBaseConnection, sequelize } from "./database/initDB.js";

const PORT = config.PORT;

async function init() {
  try {
    await asserDataBaseConnection();

    await sequelize.sync({ force: false });

    app.listen(PORT, () => console.log("app is running on port ", PORT));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

init();
