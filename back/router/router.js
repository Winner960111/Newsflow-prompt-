const express = require("express");
const bodyParser = require("body-parser");

const {getUser} = require("../controller/userController");
const { changePassword, create_user_profile, User_Sign_in, sendOTP, VarifyOTP, sendOTPForgot, forgotPassword, VarifyForgotOTP } = require("../controller/User_ProfileController");
const { politics, stage_articles, entertainment, artandfashions, impactful_news } = require("../controller/NewsShow_Control");
const {serveAdsFile}=require("../controller/User_ProfileController")
const {sendEmailToClient}=require("../controller/contactUs_Controller")
const {verifyRecaptcha}=require("../controller/User_ProfileController")
const { articleCategories, articleDetails, groupingArticle, sendEmailToAll, predictedDevs, importantReason, articleAvailableDates } = require("../controller/Articles_Controller");
const router = express.Router();
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.route("/getUser").get(getUser)
router.route("/changePassword/:email").put(changePassword)
router.route("/create_user_profile").post(create_user_profile)
router.route("/User_Sign_in").post(User_Sign_in)
router.route("/sendOTP").post(sendOTP)
router.route("/VarifyOTP").post(VarifyOTP)
router.route("/sendOTPForgot").post(sendOTPForgot)
router.route("/forgotPassword/:email").post(forgotPassword)
router.route("/VarifyForgotOTP").post(VarifyForgotOTP)
// ---
router.route("/politics").get(politics)
router.route("/stage_articles").get(stage_articles)
router.route("/entertainment").get(entertainment)
router.route("/artandfashion").get(artandfashions)


//Article

// router.route("/availableDates").get(articleAvailableDates)
router.route("/articalCategories").post(articleCategories)
router.route("/articalDetails").post(articleDetails)
router.route("/groupingArticle").post(groupingArticle)
router.route("/predictDevs").post(predictedDevs)
router.route("/importantReason").post(importantReason)

router.route("/impactfulNews").post(impactful_news)

//Send Email
router.route("/sendEmailToAll").post(sendEmailToAll)



//contact form apis
router.route("/getContactDetails").post(sendEmailToClient)
//verify reCaptcha
router.route("/verifyRecaptcha").post(verifyRecaptcha)
//serve ads.txt file
router.route("/ads.txt").get(serveAdsFile)
module.exports = router;