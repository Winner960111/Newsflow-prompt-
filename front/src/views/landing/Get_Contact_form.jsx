import React, { useRef, useState } from "react";
import "./Get_Contact_form.scss";
import { Check } from "@mui/icons-material";
import { Input } from "reactstrap";
import { Select, Skeleton, notification } from "antd";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { Formik, FormikProvider, useFormik } from "formik";
import { sendEmailToClient } from "../components/Contact_Us/_redux/contactUsServices.js/contactUs.service";
export default function Get_Contact_form() {
  const [Spinner, setSpinner] = useState(false);

  const formik = useFormik({
      enableReinitialize: true,
      initialValues: {
        to_name: "",
        Helpmessage: "",
        jobLevel: "",
        from_name: "",  
        email: "",
        pNumber: "",
        userOrgination: "",
        message: "",
      },
      onSubmit: (values) => {
        if(Spinner===true){return
        }      setSpinner(true);

        sendEmailToClient(values, (res) => {
          notification.open({
            message: res,
            placement: "top",
            className: "notification",
            closeIcon: <Check />,
            style: {
              width: "200px",
            },
          });
      
          setSpinner(false); // Move this line inside the callback
        });
      },
    }),
    sendEmail = (e) => {
      // e.preventDefault();
      // setSpinner(true);
      // emailjs
      //   .sendForm(
      //     "service_bu2iq5b",
      //     "template_lw8n0os",
      //     form.current,
      //     "bqIgsMkp_OTyfoTI1"
      //   )
      //   .then(
      //     (result) => {

      //       toast.success("Email have been send SuccessFully");
      //       setSpinner(false);
      //     },
      //     (error) => {

      //       toast.error(error.text);
      //       setSpinner(false);
      //     }
      //   );
    };
  return (
    <>
      <div className="content-contact mt-5" style={{ textAlign: "right" }}>
        <div
          style={{
            display: "inline-block",
          }}
        >
          <div className="content-title title_resp content-contact-title ">
            Get in Contact
          </div>
          <div className="content-title-line content-contact-title-line"></div>
        </div>
        <FormikProvider value={formik}>
          <form onSubmit={formik?.handleSubmit}>
            <div className="contact-body">
              <Input
                name="to_name"
                placeholder="Name*"
                className="input-contact input-item-name d-none"
                value="NewFlash"
                required
              ></Input>
              <Input
                id="exampleSelect"
                name="Helpmessage"
                type="select"
                className="select-question input-item-nam"
                required
                onChange={(e) => {
                  formik?.setFieldValue("Helpmessage", e?.target?.value);
                  window.gtag('event', 'contact_us_form_Option_select', {
                    event_category: 'Contact Us Form',
                    event_label: 'Contact Us Form Option Selected',
                    selected_value: e?.target?.value
                  });
                }}
              >
                <option> How Can We Help?</option>
                <option>Business Inquiry</option>
                <option>General Question</option>
                <option>Comment/Suggestion </option>
                <option>Bug Report</option>
                <option>Custom Data</option>
                <option>Other</option>
              </Input>
              <div className="div-contact-two-input-items">
                <Input
                  name="from_name"
                  placeholder="Name*"
                  className="input-contact input-item-name"
                  required
                  onChange={(e) => {
                    formik?.setFieldValue("from_name", e?.target?.value);
                  }}
                  value={formik?.values?.from_name}
                ></Input>
                <div className="div-item-space" />
                <Input
                  name="email"
                  placeholder="Email*"
                  className="input-contact input-item-email"
                  required
                  onChange={(e) => {
                    formik?.setFieldValue("email", e?.target?.value);
                  }}
                  value={formik?.values?.email}
               
                ></Input>
              </div>
              <div className="div-contact-two-input-items">
                <Input
                  name="pNumber"
                  placeholder="Phone"
                  className="input-contact input-item-phone"
                  onChange={(e) => {
                    formik?.setFieldValue("pNumber", e?.target?.value);
                  }}
                  value={formik?.values?.pNumber}
               
                ></Input>
                <div className="div-item-space" />
                <Input
                  name="userOrgination"
                  placeholder="Organization"
                  className="input-contact input-item-organize"
                  onChange={(e) => {
                    formik?.setFieldValue("userOrgination", e?.target?.value);
                  }}
                  value={formik?.values?.userOrgination}
               ></Input>
              </div>
              <Input
                name="message"
                placeholder="Message*"
                className="input-contact-message"
                type="textarea"
                required
                onChange={(e) => {
                  formik?.setFieldValue("message", e?.target?.value);
                }}
                value={formik?.values?.message}
             ></Input>
              <button type="submit" className="contact-button" >
                {Spinner === true ? (
              "waiting..."
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </form>
        </FormikProvider>
      </div>
    </>
  );
}

/// ADD
