import React, { useState } from "react";
import "./Share_model.css";
import { Button, Input, Modal } from "antd";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { BsFillShareFill } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";

export default function Share_model({handleCancel,isModalOpen,handleOk,shareLink}) {
  
  return (
    <div>
     
      <Modal
        title="Share: NewsFlow.info summary of Politics"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        footer={null}
      >
        <div className="mt-5">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-2 col-4 share_menus">
              <div className="Icon_share">
                <FiFacebook />
              </div>
              <p className="title_share">Chat</p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-4">
              <div className="Icon_share">
                <TbBrandTelegram />
              </div>
              <p className="title_share">Telegram</p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-4">
              <div className="Icon_share">
                <FiTwitter />
              </div>
              <p className="title_share">Twitter</p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-4">
              <div className="Icon_share">
                <FaWhatsapp />
              </div>
              <p className="title_share">Whatsapp</p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-4">
              <div className="Icon_share">
                <MdAlternateEmail />
              </div>
              <p className="title_share">E-mail</p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-4">
              <div className="Icon_share">
                <BsFillShareFill />
              </div>
              <p className="title_share">More</p>
            </div>
          </div>
          <div className="mt-5">
            <p className="Share_link">Or share with link</p>

            <div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  value={shareLink}
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <span class="input-group-text" id="basic-addon1">
                  <AiOutlineCopy/>
                </span>
              </div>
              
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
