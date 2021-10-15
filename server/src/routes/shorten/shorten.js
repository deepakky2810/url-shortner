const express = require("express");
const router = express.Router();
const pool = require("../../sql/connectionPool");
const { Response } = require("../../utils/networkUtils");
const { insertQuery } = require("../../sql/queries");

const log = console.log;
const URL_PREFIX = "https://deepak.ky/";

router.post("/", async (req, res, next) => {
  const responseObj = new Response();
  const { longUrl, shortEndPoint } = req.body;
  try {
    const connection = await pool.getConnection();
    log("connected as id " + connection.threadId);
    const queryTemplate = "INSERT INTO url_mappings VALUES(0, ?, ?, ?)";
    const formatterArray = [longUrl, shortEndPoint, -1]; //-1 -> means used for testing_user
    const mySqlResponse = await insertQuery(
      connection,
      queryTemplate,
      formatterArray
    );
    const shortUrl = `${URL_PREFIX}${shortEndPoint}`;
    responseObj.successResponse(Response.RESPONSE_CODE.SUCCESS, shortUrl);
    res.send(responseObj);
    log(`Insertion done at ${mySqlResponse.insertId}`);
  } catch (err) {
    responseObj.failureResponse(Response.RESPONSE_CODE.FAILURE, err);
    res.send(responseObj);
  }
});

module.exports = router;
