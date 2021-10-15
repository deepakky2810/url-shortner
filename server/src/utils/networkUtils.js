class Response {
  code;
  success;

  constructor() {}

  setShortUrl = (shortUrl) => {
    this.shortUrl = shortUrl;
  };

  setCode = (code) => {
    this.code = code;
  };

  setSuccess = (flag) => {
    this.success = flag;
  };

  setMessage = (message) => {
    this.message = message;
  };

  successResponse = (code, shortUrl) => {
    this.setCode(code);
    this.setSuccess(true);
    this.setShortUrl(shortUrl);
  };

  failureResponse = (code, message) => {
    this.setCode(code);
    this.setSuccess(false);
    this.setMessage(message);
  };

  static RESPONSE_CODE = Object.freeze({
    SUCCESS: 20,
    FAILURE: 10,
  });
}

module.exports = { Response };
