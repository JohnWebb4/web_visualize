import express from "express";

import { logger } from "./logger";

express.static.mime.define({"application/wasm": ["wasm"]});

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.static("public"));

app.listen(PORT, () => {
  logger.log(`Listening on port ${PORT}.`);
});
