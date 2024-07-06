import React from "react";
import "./partners.css"
import { Header } from "../../layout";
const newsAgencies = [
    { newsChannelName: "BBC News", link: "https://www.logo.wine/a/logo/BBC_News/BBC_News-Logo.wine.svg" },
    { newsChannelName: "CNN", link: "https://www.logo.wine/a/logo/CNN/CNN-Logo.wine.svg" },
    { newsChannelName: "Al Jazeera", link: "https://www.logo.wine/a/logo/Al_Jazeera/Al_Jazeera-Logo.wine.svg" },
    { newsChannelName: "Fox News", link: "https://www.logo.wine/a/logo/Fox_News/Fox_News-Logo.wine.svg" },
    { newsChannelName: "NBC News", link: "https://www.logo.wine/a/logo/NBC/NBC-Logo.wine.svg" },
    { newsChannelName: "ABC News", link: "https://www.logo.wine/a/logo/ABC_News/ABC_News-Logo.wine.svg" },
    { newsChannelName: "CBS News", link: "https://www.logo.wine/a/logo/CBS/CBS-Logo.wine.svg" },
    { newsChannelName: "Reuters", link: "https://www.logo.wine/a/logo/Reuters/Reuters-Logo.wine.svg" },
    { newsChannelName: "The Guardian", link: "https://www.logo.wine/a/logo/The_Guardian/The_Guardian-Logo.wine.svg" },
    { newsChannelName: "The New York Times", link: "https://www.logo.wine/a/logo/The_New_York_Times/The_New_York_Times-Logo.wine.svg" },
    { newsChannelName: "The Washington Post", link: "https://www.logo.wine/a/logo/The_Washington_Post/The_Washington_Post-Logo.wine.svg" },
    { newsChannelName: "BBC World", link: "https://www.logo.wine/a/logo/BBC_World_News/BBC_World_News-Logo.wine.svg" },
    { newsChannelName: "Sky News", link: "https://www.logo.wine/a/logo/Sky_News/Sky_News-Logo.wine.svg" },
    { newsChannelName: "CNBC", link: "https://www.logo.wine/a/logo/CNBC/CNBC-Logo.wine.svg" },
    { newsChannelName: "Bloomberg", link: "https://www.logo.wine/a/logo/Bloomberg/Bloomberg-Logo.wine.svg" },
    { newsChannelName: "BBC Sport", link: "https://www.logo.wine/a/logo/BBC_Sport/BBC_Sport-Logo.wine.svg" },
    { newsChannelName: "ESPN", link: "https://www.logo.wine/a/logo/ESPN/ESPN-Logo.wine.svg" },
    { newsChannelName: "National Geographic", link: "https://www.logo.wine/a/logo/National_Geographic/National_Geographic-Logo.wine.svg" },
    { newsChannelName: "Discovery Channel", link: "https://www.logo.wine/a/logo/Discovery_Channel/Discovery_Channel-Logo.wine.svg" },
    { newsChannelName: "MTV News", link: "https://www.logo.wine/a/logo/MTV/MTV-Logo.wine.svg" },
    { newsChannelName: "NPR", link: "https://www.logo.wine/a/logo/NPR/NPR-Logo.wine.svg" },
    { newsChannelName: "BuzzFeed News", link: "https://www.logo.wine/a/logo/BuzzFeed_News/BuzzFeed_News-Logo.wine.svg" },
    { newsChannelName: "HuffPost", link: "https://www.logo.wine/a/logo/HuffPost/HuffPost-Logo.wine.svg" },
    { newsChannelName: "Time", link: "https://www.logo.wine/a/logo/Time/Time-Logo.wine.svg" },
    { newsChannelName: "USA Today", link: "https://www.logo.wine/a/logo/USA_Today/USA_Today-Logo.wine.svg" },
    { newsChannelName: "Vice News", link: "https://www.logo.wine/a/logo/Vice_News/Vice_News-Logo.wine.svg" },
    { newsChannelName: "Politico", link: "https://www.logo.wine/a/logo/Politico/Politico-Logo.wine.svg" },
]
  
const Partners = () => {
  let url = window.location.pathname;
  return (
<>
{url == "/Partners" ? <Header /> : <></>}
<div className=" About_bg" >
    <div className="container">
        <div class="partnersCard-container">
    {newsAgencies?.map((agency)=>(<div class="partnersCard">
      <img src= {`${agency?.link}`} alt="Logo img"/>
      <div class="partnersCard-content">
        <p>{agency?.ne}</p>
      </div>
    </div>))}
     
    </div>
   </div>
      </div>
  </>
  

  );
};

export default Partners;
