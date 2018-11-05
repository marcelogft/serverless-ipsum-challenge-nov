'use strict';

const axios = require("axios");
const url = "http://www.randomtext.me/api/lorem";

module.exports.ipsum =  async () => {
  try {
    const randomText = await axios.get(url);    
    const html = `
    <html>
      <style>
        h1 { color: #0b45a3; } 
        p {color: #5e6e87; }
      </style>
      <body>
        <h1>No Server - Ipsum - November</h1>
        ${randomText.data.text_out}
        <p>Text From: 
        <span><a href="http://www.randomtext.me/api/lorem">http://www.randomtext.me/api/lorem</a></span>
        </p>
      </body>
    </html>`;
  
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
      },
      body: html,
    }; 
  } catch (error) {
      console.log(error);
      return error.message;
  }


  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
