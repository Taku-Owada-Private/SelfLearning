import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "taku12345";
const yourPassword = "taku12345";
const yourAPIKey = "52abd258-3035-4891-bcc2-e1d501317d49";
const yourBearerToken = "14b8f6ef-673d-48ed-9e2c-d7c0f2bda753";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/random");
    const result = response.data;
    //このリザルトはJSObjectだってことか
    console.log(result);

    const resultString = JSON.stringify(result);

    res.render("index.ejs", { content: resultString });

  } catch (error) {
    console.error("Failed to make request:", error.message);
  }
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint

  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    const result = response.data;
    const resultString = JSON.stringify(result);
    res.render("index.ejs", { content: resultString });
  } catch (error) {
    console.error("Failed to make request:", error.message);
  }


});

app.get("/apiKey", async (req, res) => {

  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/filter?score=5&apiKey="+yourAPIKey , {
      auth: {
        apiKey: yourAPIKey,
      },
    });
    const result = response.data;
    const resultString = JSON.stringify(result);
    res.render("index.ejs", { content: resultString });
  } catch (error) {
    console.error("Failed to make request:", error.message);
  }

  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
