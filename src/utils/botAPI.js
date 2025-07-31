const axios = require("axios");

module.exports = {
  getStreamFromURL
};

async function getStreamFromURL(url) {
  const response = await axios({
    method: "GET",
    url,
    responseType: "stream"
  });
  return response.data;
}
