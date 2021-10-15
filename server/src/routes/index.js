const express = require("express");
const router = express.Router();

const printTable = require("./printTable/printTable");
const shorten = require("./shorten/shorten");
const redirect = require("./redirect/redirect");

const ENDPOINT_SUFFIX = "ky";

router.use(`/printTable.${ENDPOINT_SUFFIX}`, printTable);
router.use(`/shorten.${ENDPOINT_SUFFIX}`, shorten);
router.use(`/*`, redirect);

module.exports = router;
