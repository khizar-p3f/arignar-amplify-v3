require("isomorphic-fetch");
const sharp = require('sharp');

class GenerateImage {
  synthesizeImage = async function (prompt) {
    const apiKey = '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';
    const apiUrl = 'https://api.openai.com/v1/images/generations';
  
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({        
        'prompt': prompt,
        'num_images': 1,
        'size': '256x256',
      }),
    });
  
    const data = await response.json();
  
    if (data.data && data.data.length > 0) {
      const imageFile = await fetch(data.data[0].url);
      const imageFileBuffer = await imageFile.buffer();
      console.log('imageFile', imageFile);
         // Compress and convert image to webp format
         const compressedImageBuffer = await sharp(imageFileBuffer)
         .resize(256, 256)
         .webp({ quality: 100 })
         .toBuffer();
  
         //Convert image buffer to base64
          const base64Image = compressedImageBuffer.toString('base64');
  
      data.data[0].url = `data:image/webp;base64,${base64Image}`;
      return data.data[0].url;
  
    } else {
      throw new Error('Failed to generate image' + JSON.stringify(data));
    }
  }

  compressImage = async function (imageURL) {
    const imageFile = await fetch(imageURL);
    const imageFileBuffer = await imageFile.buffer();
    console.log('imageFile', imageFile);
       // Compress and convert image to webp format
       const compressedImageBuffer = await sharp(imageFileBuffer)
       .resize(256, 256)
       .webp({ quality: 100 })
       .toBuffer();

       //Convert image buffer to base64
        const base64Image = compressedImageBuffer.toString('base64');
        return `data:image/webp;base64,${base64Image}`;
  }

}


module.exports = GenerateImage;
