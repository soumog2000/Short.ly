const express = require("express");
const shortId = require("short-id");
const router = express.Router();


const shortURLs = {};
router.get("/", function (req, res) {
    res.send(shortURLs);
  });

router.get("/:id", function (req, res) {
  console.log("redirected");
  res.redirect(shortURLs[req.params.id]);
  console.log((shortURLs[req.params.id]));
});

router.post("/", function (req, res) {
  console.log("successs");
  console.log(req.body);
  
  const id = shortId.generate();
  shortURLs[id] = req.body.url;
  res.send(JSON.stringify({shorturl:req.protocol + '://' + req.get('host') + req.originalUrl + id}));
  console.log(shortURLs);
});

module.exports = router;
