const speech = require('@google-cloud/speech');

class SpeechManager {
  constructor() {
    this.client = new speech.SpeechClient({
      credentials: {
        type: "service_account",
        project_id: "arignar-47e99",
        private_key_id: "5eb630e9cb58db3b2549e5b5e2e5f4e2b7a09df5",
        private_key:
          "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDK9kPt5VUNm5dS\nTnR3At3O8JLjK7sXuZ2hQM3ok9tT1LjITXx1ZkeVCAaJf3IJOWo3mXP8/gqwT+2V\njNIZUJe/7Ub4NNXAAPZ6OxdZPHJ7qm7M2vD+Go3vvcXbjmwz6f3oLyj1R0kaJMP/\nyk2Lj4unueksK/rdEZZ/dIuwatwjDEMi+xrh97PZwX1uAaBiGcdCMAAnuYUFq4/t\nLK+zJAsVra5nEcE1FgLpGuqtVIR4G5rkzGZszMDNF+81Cdh+RHxvRK39wdZ6Fh/X\npEJC3RGesCFbHx9rgcwZB2Oq/YY7I9H3ou3RDfnPss/AnbheaLTuvf459ajcj7Yo\nKdN1pk7BAgMBAAECggEAI8aE8soZ0+w5ICj0HoZC0tdVDPYIZIYzYtkpcnWdk4lL\niQMfjRIaTAq+HD56u2WDc4l5CH8/IxTzrAjGf+/Uz9/jQp0NkGqbB7CizPf6thG0\ntidhk2ja3Ad3eNwB9qSoPOUTMyj9mb4hTlU6lf8XftkmYMLf1VfkT1MbzF0JsKOI\nMHsX9gIi5OAvZfVDvGSZEADrXRNyUv3Q41q+q6XQnEW77WKUofIb5ZUqXROyAu+V\n9IkfcggLuU+yONFiSrp6ukhvCv9IpnEhIlqqlQD0mWTf8zODhq97pJPlAa2oNL8d\n5u63L3cLYGZZygo/aieIaqJHGnK2a1oMpQdgm7S+gQKBgQDyJwGtGAhdmFs230Eg\n0bUU2WCGPx/h1u0yfMBgCxQH5Hd0TyY75TCzm4AruZkN5kRK/c/M2rlkheiwa5lI\nMegq1+XsZF1cGPuMhhTFvTscB5LS6+4HWMLwBQHWvDW5hcf7IJVW8PcjZIHT/ZMr\n9coVAerxzpCPaVoia0rzZY9xKwKBgQDWkYfHeIO0anYi9uRzHglzjGagPyRJsCim\ndGuOoN8qJhRcauwvZ9tt+vdKP6dF2LhEdvZ75OEPqSXFVcUPUhr08VxsElaRp3JX\nUadPf7QvJ+yF7EdIbGKepcKtyMhKLFULLrT9CDHmNZzm1WOw1PbbFyLJ1TGq3ey2\ngZF0NH3RwwKBgQCnjHnKbNCNAjhK1VrY/IEQ9f+lo9PJjc79mff5/HBVra1BmupX\nkxOJktSybG8MgQFL6iZ4FfclKMqCF1Et9OoxisUaNa+rY9XZu4Rv9akKkerzai9+\ngdoP/Ubyb7O0tG5UwozSZVR69rYmGlRUnHLA6lzIBydbM4gcPKTVmLYRlQKBgEYA\nYqDUE3vXw8TycWORKBo3cv/Sub8Epq5viuuUVlpE5B2mkHmC05bU6rqhe6wQ4UUM\n3qta54YZdAYmTk0KR1skJzfm37FTRL1yGTiZfCpqRwMGK9dX7PC/OX1C5P0162Tj\njw6CDu2BDjhM4+I8CHE/4gyg7jxFfMWqDc8wlN/LAoGASr+zPNIpijYErnhQCImA\nfBLDFGqTeWNJIpqu/YTKrfElvokBLR36wZKXfQrYtxxJMQLa/fli9oQiKAch4sWZ\nsVNpSyJRcWz/j/XE9dEPZigg/cyAXI9daOwg88GbguJ+crl/shtWg8vyMsQbxuBA\nBdPlZabLYXVr4mFqJCcVEJU=\n-----END PRIVATE KEY-----\n",
        client_email:
          "arignar-mobile-client@arignar-47e99.iam.gserviceaccount.com",
        client_id: "113788076781376088008",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url:
          "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url:
          "https://www.googleapis.com/robot/v1/metadata/x509/arignar-mobile-client%40arignar-47e99.iam.gserviceaccount.com",
      },
    });
  }

  async listVoices(languageCode) {
    const [result] = await this.client.listVoices({ languageCode });
    const voices = result.voices;

    voices.forEach((voice) => {
      console.log(
        `${voice.name} (${voice.ssmlGender}): ${voice.languageCodes}`
      );
    });
    return voices;
  }

  async recognizeText(audioContent, speechOptions) {

    try {
        const config = {
            encoding: speechOptions.encoding,
            sampleRateHertz: speechOptions.sampleRateHertz,
            languageCode: speechOptions.languageCode,
          };
    
        const request = {
            audio: audioContent,
            config: config,
          };
    
          const [response] = await client.recognize(request);
          const transcription = response.results
          .map(result => result.alternatives[0].transcript)
          .join('\n');
          console.log(`Transcription: ${transcription}`);
        return transcription;
    } catch (error) {
        console.log(error);
        return null;
    }


  }
}

module.exports = SpeechManager;
