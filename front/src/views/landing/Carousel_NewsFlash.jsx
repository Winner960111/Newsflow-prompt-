import React from "react";
import "./Carousel_NewsFlash.css";
import { Carousel } from "antd";
import FAQ from "../components/About_Us/FAQ";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  paddingTop:"3rem"
};

const faqs = [{
  title: "What is NewsFlow?",
  content: "NewsFlash is an experiment to re-imagine the user’s relationship with the traditional news cycle.  Our aim is to provide more than just a convenient update - we want to facilitate and encourage the search for deeper understanding.  Join us on our journey to revolutionize the way you stay informed.",
}, {
  title: "Source, Bias, and Methodology",
  content: "Of course, bias is the elephant in the room when building a site of this nature. To mitigate this, we sample our articles from a wide range of sources on the political spectrum (around 200 at this time) and coalesce content on the same topic into one. Most of the sites we scrape are United States focused, however, we are continuing to add more international sources.<br/>\<br/>\
  If you have any recommendations on news organizations to add, simply shoot us a message!",
}, {
  title: "Methodology Continued",
  content: "Overall, our goal is to summarize the news topic at hand into tangible bite sized chunks that convey the original intent and semantics of its inputs while keeping an eye on words/phrases that could potentially signal a screw towards one viewpoint over another.\n\n\
  Our current system is simple yet effective.  From a top down view, we determine the importance of each of the news articles fed into the system (typically a few thousand at a time) based on political significance, economic impact, social consequences, and general public attention.\n\n\
  From there, the most relevant articles are summarized down to their main points from which overall topics are constructed. Additional research is gathered with predictions being constructed alongside for each time frame.",
}, {
  title: "Is the news real/accurate?",
  content: "NewsFlash is an experiment to re-imagine the user’s relationship with the traditional news cycle.  Our aim is to provide more than just a convenient update - we want to facilitate and encourage the search for deeper understanding.  Join us on our journey to revolutionize the way you stay informed.",
}, {
  title: "What topics are shown to users?",
  content: "We do not use readers’ cookies or browsing history to engineer the news users see. Instead, the entirety of articles scraped are individually weighted by importance based on political significance, economic impact, social consequences, and general public attention.",
}, {
  title: "The Present and Future of NewsFlow",
  content: "We are currently in the testing phase, so the features only consist of what we deem to be the most essential.  However, based on user input, we are always polishing and tweaking the site along with its overall mechanics.  If you have any thoughts or inputs into what you think would be a good fit for the site, do reach out!\n\n\
  We hope to, in the future, integrate methods for determining political bias (by category and news organization), more in-depth subcategories, Twitter integration, an api, and many more user centric features.",
}]

export default function Carousel_NewsFlash() {
  return (
    <div>
      <div className="content-qna-item-active">
        <Carousel>
          {faqs.map(faq => (
            <FAQ title={faq.title} content={faq.content} />
          ))}
        </Carousel>{" "}
      </div>
      <div className="content-qna">
        {/* <div className="content-qna-select">
          <div className="conetnt-qna-slecet-item select-first-qna conetnt-qna-slecet-item-active"></div>
          <div className="conetnt-qna-slecet-item select-second-qna"></div>
          <div className="conetnt-qna-slecet-item select-third-qna"></div>
        </div> */}
      </div>
    </div>
  );
}
