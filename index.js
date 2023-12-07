const axios = require("axios");
const targetUrl = "https://book-api-ghwi.onrender.com/books/";
const sendRequest = async () => {
    try {
        const response = await axios.get(targetUrl);
        console.log(
            `Request sent successfully to ${targetUrl}. Response:`,
            response.data
        );
    } catch (error) {
        console.error(`Error sending request to ${targetUrl}:`, error.message);
    }
};

const interval = 600000;

sendRequest();

const intervalId = setInterval(() => {
    sendRequest();
}, interval);
