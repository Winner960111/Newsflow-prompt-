import React, { useState } from "react";
import "./Settings.css";
import User_DashBoard_Header from "../User_DashBoard_Header/User_DashBoard_Header";
import { Button, Checkbox, Form, Input, Modal, Space } from "antd";
import { FiEdit } from "react-icons/fi";
import { Footer, Header } from "../../layout";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
// import Input from '@mui/material/Input';
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { toast } from "react-hot-toast";
import axios from "axios";
import { apiUrl } from "../../../config";

export default function Settings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const UserInfo = useSelector((state) => state.UserAuth.UserInfo);
  const [Spinner, setSpinner] = useState(false);

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };


  function formatEmail(email) {
    // Split the email into the local part and the domain part
    const [localPart, domain] = email.split('@');
  
    // Check if the local part is longer than 2 characters to proceed with the masking
    if (localPart.length > 2) {
      // Show the first character, mask the middle characters, and then show the last character before the "@"
      const formattedLocalPart = `${localPart[0]}${'*'.repeat(localPart.length - 2)}${localPart[localPart.length - 1]}`;
      return `${formattedLocalPart}@${domain}`;
    } else {
      // If the local part is 2 characters or less, return it as is
      return email;
    }
  }
  
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = async (values) => {
  
    try {
      setSpinner(true);

      let res = await axios.put(
        apiUrl+`/api/v1/changePassword/${UserInfo.email}`,
        {
         
          oldPassword: values.Old_Password,
          newPassword: values.password,
        }
      );
 
      if (res.data.message == "Password changed successfully") {
        // dispatch(User_Data(res.data.data));
        toast.success(res.data.message);
        setIsModalOpen(false)
        // dispatch(updateAuth({ isAuth:true}));

        // navigate("/User/DashBoard")
        setSpinner(false);
      } else {
        toast.error(res.data.message);
        setSpinner(false);
      }
    } catch (error) {

      setSpinner(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
  
  };
  let url = window.location.pathname;
  return (
    <>
      {url == "/Contact_Us" ? <Header /> : <></>}

      <div className="About_bg " style={{paddingTop:"5rem",paddingBottom:"5rem"}}>
        <div className="container">
          <div className="first_heading2">
            <div className="Text_Top_About2"></div>
            <div className="text_on_about_bg2">
              <h1>Settings</h1>
            </div>
          </div>
          <div className="mt-5">
            <div className="User_Name">
              <div className="Input_labe">
                <label htmlFor="UserName "> UserName:</label>

                <Space.Compact className="me-4 space_compact">
                  <Input
                    style={{
                      padding: "10px",
                      marginLeft: "1rem",
                    }}
                    defaultValue="PersonPerson"
                    value={UserInfo.UserName}
                    className="first_input"
                  />
                  <Input
                    style={{
                      width: "30%",
                    }}
                    defaultValue="#8927"
                  />
                </Space.Compact>
                {/* <FiEdit onClick={showModal} style={{ cursor: "pointer" }} /> */}
              </div>

              <div className="d-flex justify-content-center">
                <hr width="40%" />
              </div>
              <div className="Input_labe">
                <label htmlFor="UserName "> Email:</label>

                <Input
                  style={{
                    padding: "10px",
                    marginLeft: "1rem",
                  }}
                  defaultValue="vic*******984@gmail.com"
                  value={formatEmail(UserInfo.email)}
                  className="me-3 first_Second"
                />
                <div className="me-3"></div>
                {/* <FiEdit /> */}
              </div>
              <div className="d-flex justify-content-center">
                <hr width="40%" />
              </div>
              <div className="Input_labe">
                <label htmlFor="UserName "> Change Password:</label>

                <Input
                  style={{
                    padding: "10px",
                    marginLeft: "1rem",
                  }}
                  defaultValue="**************************"
                  value={UserInfo.password}
                  type="password"
                  className="me-4 first_Second"
                />
                <FiEdit onClick={showModal} style={{ cursor: "pointer" }} />
              </div>
              <div className="d-flex justify-content-center">
                <hr width="40%" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title={<span className="Title_model">Change Password</span>}
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form
          name="basic"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="mt-5"
        >
          <Form.Item
            label="Old Password"
            name="Old_Password"
            rules={[
              {
                required: true,
                message: "Please input your Old Password!",
              },
            ]}
          >
            <Input.Password className="password" />
          </Form.Item>
          <Form.Item
            label="Verify Old Password"
            name="Verify_Old_Password"
            dependencies={["Old_Password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please input your Verify Old Password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("Old_Password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password className="password" />
          </Form.Item>{" "}
          <Form.Item
            label="New Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your New Password!",
              },
            ]}
          >
            <Input.Password className="password" />
          </Form.Item>
          <Form.Item
            label="Verify New Password"
            name="Verify_New_Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please input your Verify New Password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password className="password" />
          </Form.Item>
          <div className="d-flex justify-content-center">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="_Submit_BTn me-3"
              >
                {Spinner == true ? (
                      <>
                        <div class="spinner-border" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </>
                    ) : (
                      "Save"
                    )}
                
              </Button>
            </Form.Item>

            <Button type="primary" className="_Submit_BTn" onClick={()=>handleCancel()} >
              Cancel
            </Button>
          </div>
        </Form>
      </Modal>

      <Footer/>
    </>
  );
}
