const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConnect = require("./database/helpers/dbconnect.js");
const routes = require("./routes/index.js");
require("dotenv").config();

const app = express();

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 200,
  })
);

routes.setupRoutes(app);

(async () => {
  try {
    await dbConnect().then(() => {
      app.listen(process.env.PORT, () => {
        console.log(`server listening on port ${process.env.PORT}`);
      });
    });
  } catch (error) {
    console.log(error);
  }
})();

/**
 * The block of code below is only used in development mode.
 * It is used to forward webhooks from GitHub to the local server.
 * This is necessary because the local server is not publicly accessible.
 * The smee.io service is used to forward the webhooks.
 * The smee.io target URL is the local server's URL.
 * The smee.io source URL is the GitHub webhook URL.
 * The smee.io service is started using the smee.start() method.
 *
 */
const SmeeClient = require("smee-client");
if (process.env.NODE_ENV === "development") {
  const smee = new SmeeClient({
    source: `${process.env.SMEE_CLIENT_URL}`,
    target: `http://localhost:${process.env.PORT}/api/event_badging`,
    logger: console,
  });

  smee.start();
}
