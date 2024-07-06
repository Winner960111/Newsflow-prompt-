const mongo_url = require("../config").mongo_url;
const MongoClient = require("mongodb").MongoClient;
const { availableDate } = require("./Articles_Controller")

const client = new MongoClient(
  mongo_url,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
exports.politics = async (req, res) => {
  try {
    const db = client.db("news-test");
    db.collection("politics")
      .find()
      .toArray((err, result) => {


        res.status(200).send({
          data: result,
          success: true,
          msg: "artandfashions Data",
        });
      });
  } catch (e) {
   }
};

exports.entertainment = async (req, res) => {
  try {
    const db = client.db("news-test");
    db.collection("entertainments")
      .find()
      .toArray((err, result) => {


        res.status(200).send({
          data: result,
          success: true,
          msg: "artandfashions Data",
        });
      });
  } catch (e) {

  }
};

exports.artandfashions = async (req, res) => {
  try {
    const db = client.db("news-test");
    db.collection("artandfashions")
      .find()
      .toArray((err, result) => {


        res.status(200).send({
          data: result,
          success: true,
          msg: "artandfashions Data",
        });
      });
  } catch (e) {

  }
};

exports.stage_articles = async (req, res) => {
  try {
    const db = client.db("news-test");
    db.collection("stage_5_articles")
      .find()
      .toArray((err, result) => {


        res.status(200).send({
          data: result,
          success: true,
          msg: "artandfashions Data",
        });
      });
  } catch (e) {

  }
};

exports.impactful_news = async (req, res) => {
  try {
    var timeframe = req.body.timeframe
    if (timeframe !== "day" || timeframe !== "week" || timeframe == "month") {
      timeframe = "day"
    }
    
    var curDate = currentDate();
    if (typeof req.body.datetime == "string") {
      const datetime = new Date(req.body.datetime);
      curDate = currentDate(datetime)
    }
    curDate = await availableDate(curDate)

    const db = client.db("news-test");
    db.listCollections({ name: `impactful-new-${timeframe}.${curDate}` })
    .next((err, collInfo) => {
      if (err) {
        return;
      }

      if (collInfo) {
        return;
      } else {
        const datetime = new Date(curDate);
        curDate = yesterdayDate(datetime);
      }
    });
    db.collection(`impactful-new-${timeframe}.${curDate}`)
      .find()
      .toArray((err, result) => {


        res.status(200).send({
          data: result,
          success: true,
          msg: "artandfashions Data",
        });
      });
  } catch (e) {

  }
};