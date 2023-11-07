/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_S3STORAGE_BUCKETNAME
Amplify Params - DO NOT EDIT */ /*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const express = require("express");
const bodyParser = require("body-parser");
const AudioManager = require("/opt/audioManager");
const SpeechManager = require("/opt/speechManager");
const crypto = require("crypto");
var AWS = require("aws-sdk");

const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

/**********************
 * Example get method *
 **********************/

app.get("/audio", function (req, res) {
  /**
   * Lists available voices for the specified language.
   *
   * @param {string} languageCode - The language code.
   */
  const audioManager = new AudioManager();
  /*audioManager.listVoices("ta-IN").then((voices) => {
    res.json({
      success: "get call succeed!",
      url: req.url,
      voices: voices,
    });
  });*/

  var voiceOptions = {
    languageCode: "ta-IN",
    name: "ta-IN-Standard-C",
  };

  var text = "ஞாயிற்றுக்கிழமை";
  //General
  //Get Text from the request
  if (req.query.text) {
    text = req.query.text;
  }

  //Get Voice from the request
  if (req.query.voice) {
    voiceOptions.name = req.query.voice;
  }

  if (req.query.name) {
    voiceOptions.languageCode = req.query.name;
  }

  console.log("Voice Options", voiceOptions);

  audioManager.synthesizeSpeech(text, voiceOptions).then(async (audio) => {
    //console.log(audio);
    // Write the binary audio content to a local file
    //const writeFile = util.promisify(fs.writeFile);
    //await writeFile("output.mp3", audio, "binary");

    let fileName = createUtf8Hash(text);

    // Upload the audio to the S3 bucket
    var s3 = new AWS.S3();
    var params = {
      Bucket: process.env.STORAGE_S3STORAGE_BUCKETNAME,
      Key: `public/audio/${fileName}.mp3`,
      Body: audio,
    };
    s3.putObject(params, function (err, data) {
      if (err) {
        console.log(err, err.stack); // an error occurred
        res.json({
          success: "get call failed!",
          url: req.url,
          audio: err,
        });
      } else console.log(data); // successful response
      res.json({
        success: "get call succeed!",
        url: `public/audio/${fileName}.mp3`,
        audio: data,
      });
    });
  });
});

app.post("/speech", function (req, res) {
  /**
   * Lists available voices for the specified language.
   *  
   * @param {string} languageCode - The language code.
   * @param {string} encoding - The encoding of the audio content.
   * @param {number} sampleRateHertz - The sample rate in hertz of the audio content.
   * @param {string} audioContent - The text to synthesize.
   * */

  //Decode JSON body
   var body = req.body;
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch (e) {
        console.log("Error parsing JSON body:", e);
      }

   speechOptions = {
    languageCode: body.config.languageCode || "ta-IN",    
    encoding: body.config.encoding || "MP3",
    sampleRateHertz: body.config.sampleRateHertz || 16000
  };

  var audioContent = body.audioContent;


  console.log("Speech Options", speechOptions);
  console.log("Audio Content", audioContent);

  const speechManager = new SpeechManager();
  speechManager.recognizeText(audioContent, speechOptions).then(async (text) => {
    console.log(text);
    res.json({
      success: "get call succeed!",
      text: text,
    });
  }).catch((error) => {
    console.log(error);
    res.json({
      success: "get call failed!",
      error: error,
    });
  } 
  );
    
}
});
   

function createUtf8Hash(text) {
  // Convert the text to UTF-8 encoded buffer
  const utf8Buffer = Buffer.from(text, 'utf-8');

  // Create a SHA-256 hash object
  const hash = crypto.createHash('sha256');

  // Update the hash object with the UTF-8 buffer
  hash.update(utf8Buffer);

  // Get the hexadecimal representation of the hash
  const hashValue = hash.digest('hex');

  return hashValue;
}

app.get("/audio/*", function (req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

/****************************
 * Example post method *
 ****************************/

app.post("/audio", function (req, res) {
/**
   * Lists available voices for the specified language.
   *
   * @param {string} languageCode - The language code.
   */
const audioManager = new AudioManager();
/*audioManager.listVoices("ta-IN").then((voices) => {
  res.json({
    success: "get call succeed!",
    url: req.url,
    voices: voices,
  });
});*/

var voiceOptions = {
  languageCode: "ta-IN",
  name: "ta-IN-Standard-C",
};

var text = "ஞாயிற்றுக்கிழமை";
//General
//Get Text from the body
if (req.body.text) {
  text = req.body.text;
}

//Get Voice from the request
if (req.query.voice) {
  voiceOptions.name = req.query.voice;
}

if (req.query.name) {
  voiceOptions.languageCode = req.query.name;
}

let speakingRate = 1.0;

if (req.query.speakingRate) {
  speakingRate = req.query.speakingRate;
}


console.log("Voice Options", voiceOptions);

audioManager.synthesizeSpeechwithSSML(text, voiceOptions, speakingRate).then(async (audio) => {
  //console.log(audio);
  // Write the binary audio content to a local file
  //const writeFile = util.promisify(fs.writeFile);
  //await writeFile("output.mp3", audio, "binary");

  let fileName = createUtf8Hash(text);

  // Upload the audio to the S3 bucket
  var s3 = new AWS.S3();
  var params = {
    Bucket: process.env.STORAGE_S3STORAGE_BUCKETNAME,
    Key: `public/audio/${fileName}.mp3`,
    Body: audio,
  };
  s3.putObject(params, function (err, data) {
    if (err) {
      console.log(err, err.stack); // an error occurred
      res.json({
        success: "get call failed!",
        url: req.url,
        audio: err,
      });
    } else console.log(data); // successful response
    res.json({
      success: "get call succeed!",
      url: `public/audio/${fileName}.mp3`,
      audio: data,
    });
  });
});
});

app.post("/audio/*", function (req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example put method *
 ****************************/

app.put("/audio", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/audio/*", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example delete method *
 ****************************/

app.delete("/audio", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.delete("/audio/*", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
