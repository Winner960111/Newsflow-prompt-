const { currentDate, removeQuotes, yesterdayDate } = require("../helper/helper");

const MongoClient = require("mongodb").MongoClient;
const mongo_url = require("../config").mongo_url

const client = new MongoClient(
  mongo_url, { useNewUrlParser: true, useUnifiedTopology: true }
);

const axios = require("axios").default;

const authUsername = "0587f491685d571b66210175468cf676";
const authPassword = "eb6c606b41b16aac0b29395aa0e54aae";
// const authUsername = "7f5be08cf944712538e8f8dd723da546";
// const authPassword = "e94bc942f35c51823945e6b421b5422b";

exports.availableDates = async () => {
  try {
    const prefix = "prediction-month"
    const db = client.db("news-test");
    const collections = await db.listCollections().toArray()
    const dates = collections.map((collection) => {
      return collection.name
    }).filter((str) => {
      return str.includes(prefix)
    }).map((v) => {
      return v.replace(prefix+'.', '')
    }).sort().reverse()
    return dates
  } catch (error) {

  }
  return []
}

exports.lastDate = async () => {
  const dates = await this.availableDates()
  if (dates.length > 0) {
    return dates[dates.length - 1]
  } else {
    return ''
  }
}

exports.availableDate = async (date) => {
  let dates = await this.availableDates()
  const p = date
  if (date === '' || date === undefined) {
    p = currentDate()
  }
  for (let index = 0; index < dates.length; index++) {
    const v = dates[index]; 
   
    if (p >= v) {
      return v 
    }    
  }
  return currentDate()
}

exports.articleCategories = async (req, res) => {
  try {

    var timeframe = req.body.timeframe
    if (timeframe !== "day" && timeframe !== "week" && timeframe == "month") {
      timeframe = "day";
    }
    
    var curDate = currentDate();
    if (typeof req.body.datetime == "string") {
      const datetime = new Date(req.body.datetime);
      curDate = currentDate(datetime);
    }
    curDate = await this.availableDate(curDate)
    const db = client.db("news-test");
    if (req.body.category != "At a Glance") {

 const category=req.body.category?.split(/[\/\s]+/);
 console.log(category)
 
 category.forEach(catString => {
  
  
 });
      var find_cursor = {}
      find_cursor = { category: req.body.category };
      db.listCollections({ name: `category_${timeframe}.${curDate}` })
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
      db.collection(`category_${timeframe}.${curDate}`)
        .find(find_cursor)
        .toArray((err, result) => {
          res.status(200).send({
            data: result,
            success: true,
          });
        });
    } else {
      const results = (await db.collection(`impactful-new-${timeframe}.${curDate}`).find(find_cursor).toArray()).map((v) => {
        return v['title']
      });
      let dataToReturn = []
      for (let index = 0; index < results.length; index++) {
        const result = results[index];
        const res = await db.collection(`category_${timeframe}.${curDate}`).find({ "data.Primary": result }).toArray()
        if (res.length > 0) {
          res[0]["data"].forEach((v) => {
            if (v['Primary'] === result) {
              let tmp = {
                // category: res[0]["category"],
                // data: [v],
                ...v,
                weight: index
              }
              dataToReturn.push(tmp)
            }
          })
        }
      }
      dataToReturn.sort((a, b) => a.weight - b.weight)
      res.status(200).send({
        data: [{
          category: "At a Glance",
          data: dataToReturn
        }],
        success: true,
      });
    }
  } catch (e) {

    res.status(500).send({
      data: {error: e},
      success: false,
    });
  }
};

exports.articleDetails = async (req, res) => {

  try {
    const db = client.db("news-test");
    var curDate = currentDate();
    if (typeof req.body.datetime == "string") {
      const datetime = new Date(req.body.datetime);
      curDate = currentDate(datetime);
    }
    curDate = await this.availableDate(curDate)
    var data = await db.collection(`analyzed_articles.${curDate}`).find({ title: req.body.title}).toArray()
    if (data.length == 0) {
      db.collection(`analyzed_articles.${curDate}`).createIndex([{"title": "text"}])
      const searchTerm = req.body.title;
      data = await db.collection(`analyzed_articles.${curDate}`).find({ $text: { $search: searchTerm } }).toArray();
    }
    res.status(200).send({
      data: data,
      success: true,
    });
  } catch (e) {

    res.status(500).send({
      data: {error: e},
      success: false,
    });
  }
};
exports.groupingArticle = async (req, res) => {
  try {

    var timeframe = req.body.timeframe
    if (timeframe !== "day" && timeframe !== "week" && timeframe == "month") {
      timeframe = "day";
    }
    
    var curDate = currentDate();
    if (typeof req.body.datetime == "string") {
      const datetime = new Date(req.body.datetime);
      curDate = currentDate(datetime);
    }
    curDate = await this.availableDate(curDate)
    const db = client.db("news-test");

    var find_cursor = {}
    if (req.body.category != "At a Glance") find_cursor = { category: req.body.category };
    db.listCollections({ name: `extra_research_${timeframe}.${curDate}` })
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
    db.collection(`extra_research_${timeframe}.${curDate}`)
      .find(find_cursor)
      .toArray( async (err, result) => {
        var items = []
        if (req.body.category != "At a Glance") {
          items = result[0].data;
        } else {
          result.forEach((r) => {
            items = items.concat(r.data)
          })
        }
        var regExp = new RegExp(removeQuotes(req.body.primary), 'i')
        var item = items.find((ele) => regExp.test(ele.topic))

        // articles data
        let articleTitles = []
        const cate = await db.collection(`category_${timeframe}.${curDate}`).find({ "data.Primary": req.body.primary }).toArray()
        if (cate.length > 0) {
          cate[0]["data"].forEach((v) => {
            if (req.body.primary === v['Primary']) {
              articleTitles = [
                ...articleTitles,
                v['Primary'],
                // ...v['Secondary']
              ]
            }
          })
        }

        let summaries = []
        for (let idx = 0; idx < articleTitles.length; idx++) {
          const articleTitle = articleTitles[idx];            
          const summary = await summaryByTitle(curDate, articleTitle)
          if (summary.length > 0) {
            summaries = [
              ...summaries, {
                title: articleTitle,
                summary: summary[0]["summary"],
                link: summary[0]["link"],
              }
            ]
          }
        }

        db.collection(`deep_research_${timeframe}.${curDate}`).find(find_cursor).toArray((err1, result) => {
          var totalres = []
          if (req.body.category != "At a Glance") {
            totalres = result[0].data;
          } else {
            result.forEach((r) => {
              totalres = totalres.concat(r.data)
            })
          } 
          var deep_research = totalres.find((ele) => regExp.test(ele.topic)).deep_research
          res.status(200).send({
            data: {...item, deep_research, summaries},
            success: true,
          });
        })
      });
  } catch (e) {

    res.status(500).send({
      data: {error: e},
      success: false,
    });
  }
};

exports.predictedDevs = async (req, res) => {
  try {

    var timeframe = req.body.timeframe
    if (timeframe !== "day" && timeframe !== "week" && timeframe == "month") {
      timeframe = "day";
    }
    
    var curDate = currentDate();
    if (typeof req.body.datetime == "string") {
      const datetime = new Date(req.body.datetime);
      curDate = currentDate(datetime);
    }
    curDate = await this.availableDate(curDate)

    const db = client.db("news-test");

    var find_cursor = {}
    if (req.body.category != "At a Glance") find_cursor = { category: req.body.category };
    else find_cursor = { category: "at_glance" }
    db.listCollections({ name: `prediction-${timeframe}.${curDate}` })
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
    db.collection(`prediction-${timeframe}.${curDate}`)
      .find(find_cursor)
      .toArray( async (err, result) => {
        res.status(200).send({
          data: result,
          success: true,
        });
      });
  } catch (e) {

    res.status(500).send({
      data: {error: e},
      success: false,
    });
  }
};

exports.importantReason = async (req, res) => {

  try {
    const db = client.db("news-test");
    var curDate = currentDate();
    if (typeof req.body.datetime == "string") {
      const datetime = new Date(req.body.datetime);
      curDate = currentDate(datetime);
    }
    curDate = await this.availableDate(curDate)
    var sortbase = ""
    var find_cursor = {}
    if (req.body.category != "At a Glance") find_cursor = { category: req.body.category };
    db.listCollections({ name: `analyzed_articles.${curDate}` })
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
    var beforeSort = db.collection(`analyzed_articles.${curDate}`)
      // .find({ title: req.body.title })
      .find(find_cursor)
    var sorted = beforeSort.sort({ "score.day": -1  })
    switch (req.body.datetime) {
      case "day":
        var sorted = beforeSort.sort({ "score.day": -1  })
        break;
      case "week":
        var sorted = beforeSort.sort({ "score.week": -1  })
        break;
      case "month":
        var sorted = beforeSort.sort({ "score.month": -1  })
        break;      
      }
      
    sorted.limit(5)
      .toArray((err, result) => {
        res.status(200).send({
          data: result,
          success: true,
        });
      });
  } catch (e) {
    
    res.status(500).send({
      data: {error: e},
      success: false, 
    });
  }
};

exports.sendEmailToAll = (req, res) => {
  const sendEmail = async (emailDetails, reciversData) => {
    const reqURL = "https://api.mailjet.com/v3.1/send";
    const reqBody = {
      Messages: [
        {
          From: {
            Email: emailDetails.senderEmail,
            Name: emailDetails.senderName,
          },
          To: reciversData,
          Subject: emailDetails.subject,
          TextPart: emailDetails.textMessage,
          HTMLPart: emailDetails.htmlMessage,
        },
      ],
    };
    const reqAuth = {
      username: authUsername,
      password: authPassword,
    };
    const reqHeader = {
      "Content-Type": "application/json",
    };
    await axios
      .post(reqURL, reqBody, {
        auth: reqAuth,
        headers: reqHeader,
      })
      .then((ress) => {
        res.status(200).send({
          data:ress.data,
          success: true,
        });
      })
      .catch((err) => {

      });
  };
  try {
    const db = client.db("test");
    db.collection("user_registration_forms")
      .find({})
      .toArray((err, result) => {
        const reciversData = [
          // {
          //   Email:"usamamuneebai@gmail.com",
          //   Name:"Usama"
          // }
        ];
        result.map((user)=>{
          if(user.email.match(/@/)){
            reciversData.push({
              Email:user.email,
              Name:user.UserName
            })
          }
        })
        const emailDetails = {
          // senderEmail: "contact@newsflow.io",
          senderEmail: "softchunck@gmail.com",
          senderName: req.body.senderName,
          subject: req.body.subject,
          textMessage: req.body.textMsg,
          htmlMessage: req.body.htmlMsg,
        };
        sendEmail(emailDetails,reciversData)
        
      });
  } catch (e) {

  }
};

const summaryByTitle = async (curDate, title) => {
  const db = client.db("news-test");
  var summaries = await db.collection(`analyzed_articles.${curDate}`).find({ title: title }).toArray()
  if (summaries.length == 0) {
    db.collection(`analyzed_articles.${curDate}`).createIndex([{"title": "text"}])
    summaries = await db.collection(`analyzed_articles.${curDate}`).find({ $text: { $search: title } }).toArray();
  }
  return summaries;
}