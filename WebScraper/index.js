const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const PORT = 8000;

// Create new app express (all http request methods)
const app = express();

// Axios make HTTP requests
const url = "https://www.parroquiasanpablovi.es/";
axios(url)
    .then(response => {
        const html = response.data;

        // Cheerio helps load HTML page.
        const $ = cheerio.load(html);
        const articles = [];

        $('.colibri-word-wrap', html).each(function() {
            const title = $(this).text()
            articles.push({title})
        })
        console.log(articles);
    }).catch(error => console.log(error))

// We are listening in specific port
app.listen(PORT, () => console.log("Server running in " + PORT));