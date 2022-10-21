const express = require('express');
const cors = require('cors');
const puppeteer = require("puppeteer");
const projects = require('./projects.json');

const app = express();
const port = 3000;
app.use(cors());
app.use(express.static('public'));

app.get('/api/projects', (req, res) => {
    res.send(projects);
});

// for(let project of projects) {
//     console.log(project);
//     let { url } = project;
//     console.log(url);
//     let { githubName } = project;
//     puppeteer
//         .launch(url, githubName, {
//             defaultViewport: {
//                 width: 1280,
//                 height: 1000,
//             },
//         })
//         .then(async (browser) => {
//             const page = await browser.newPage();
//             await page.goto(url);
//             await page.screenshot({ path: `./public/images/${githubName}.png` });
//             await browser.close();
//         })
//         //delay to prevent rate limiting
//         .then(() => { setTimeout(() => {}, 1000); });
// };









app.listen(port, () => console.log(`Example app listening on port ${port}!`));
