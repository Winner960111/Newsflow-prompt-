import { ShareOutlined } from "@mui/icons-material";
import axios from "axios";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import toast from "react-hot-toast";
import { useState } from "react";
import { apiUrl } from "../../config"
import QuestionMark from "../components/QuestionMark/QuestionMark";

const SendEmail = () => {
  const [spinner, setspinner] = useState(false);
  const sendEmailToAll = () => {
    try {
      
      setspinner(true);
      axios
        .post(apiUrl + "/api/v1/sendEmailToAll", {
          senderName: "NewsFlow",
          subject: "Daily News",
          textMsg: "Dumy Email 1",
          // htmlMsg:"",
          //if we send htmlBody then textMsg is not sent onlt html is sent
        })
        .then((res) => {

          toast.success("Email Sent Successfully");
          setspinner(false);
        });
    } catch (error) {
    setspinner(false)

    }
  };
  return (
    <>
      <div className="first_heading">
        <div className="Text_Top_About mt-8"></div>
        <div className="text_on_about_bg  mt-5">
          <h1 className="fs-3 mt-0">Most Impactful News of the Day </h1>
       
        </div>
      </div>
      <div className=" dflexNews mt-5">
        <div className=" dgridNews">
          <div className=" todaynews">
            <div className="Email_subject">
              <h4>asdfasdadsadsfasd</h4>
              {
                spinner ? 
                "Loading...":<>
                <ForwardToInboxIcon
                  onClick={() => {
                    sendEmailToAll();
                  }}
                  style={{ cursor: "pointer" }}
                />
                </>
              }
            </div>
            <ul>
              <li className="p-0 m-0">
                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                enim ad minim veniam, quis adsasf
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendEmail;
