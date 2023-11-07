import openai from "openai-api";

const { DALLE_URL } = process.env;

const aws = require("aws-sdk");

const { Parameters } = await new aws.SSM()
  .getParameters({
    Names: ["DallEAPIKey"].map((secretName) => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

function getApiKey() {
  return Parameters[0].Value;
}

async function generateImage(text) {
  const apiKey = getApiKey();

  const response = await Axios.post(DALLE_URL, {
    text,
    api_key: apiKey,
  });

  return response.data;
}

module.exports = {
  generateImage,
};
