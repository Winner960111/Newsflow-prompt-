import React, { useState } from "react";
import { Button, Form, Modal, Select } from "antd";
import { useFormik, FormikProvider } from "formik";
export default function Model_steps({ setIsModalOpen, isModalOpen }) {
  const [count, setcount] = useState(0);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const options = {
    optionsForIndustry: [
      {
        value: "Student",
        label: "Student",
      },
      {
        value: "Professional_and ",
        label: "Professional and Business Service  ",
      },
      {
        value: "Advertising_and_Marketing",
        label: "Advertising and Marketing",
      },
      // {
      //   value: "advertising_and",
      //   label: "Advertising and",
      // },
      //
      // {
      //   value: "marketing",
      //   label: "Marketing",
      // },
      {
        value: "automotive",
        label: "Automotive",
      },
      {
        value: "mining_and_resources",
        label: "Mining and Resources",
      },
      {
        value: "Broadcast_and_Digital",
        label: "Broadcast and Digital",
      },
      {
        value: "Computer_software",
        label: "Computer software",
      },
      {
        value: "technology",
        label: "Technology",
      },
      {
        value: "consumer_goods_and_services",
        label: "Consumer goods and Services",
      },
      {
        value: "aerospace_and_defense",
        label: "Aerospace and Defense",
      },
      {
        value: "energy",
        label: "Energy",
      },
      {
        value: "financial_services",
        label: "Financial Services",
      },
      {
        value: "Food_and_Drink",
        label: "Food and Drink",
      },
      {
        value: "Healthcare",
        label: "Healthcare",
      },
      {
        value: "Government/Public_Sector",
        label: "Government/Public Sector",
      },
      {
        value: "Pharma_and_Life_Sciences",
        label: "Pharma and Life Sciences",
      },
      {
        value: "Real_Estate",
        label: "Real Estate",
      },
      {
        value: "Retail/Wholesale",
        label: "Retail/Wholesale",
      },
      {
        value: "Telecom",
        label: "Telecom",
      },
      {
        value: "Transport_and_Logistics",
        label: "Transport and Logistics",
      },
      {
        value: "Utilities",
        label: "Utilities",
      },
      {
        value: "Other",
        label: "Other",
      },
      {
        value: "Industry_and_Manufacturing",
        label: "Industry and Manufacturing",
      },
      {
        value: "Travel_Tourism_Hospitality",
        label: "Travel, Tourism, Hospitality",
      },
      {
        value: "Education",
        label: "Education",
      },
      {
        value: "Agriculture_and_Forestry",
        label: "Agriculture and Forestry",
      },
      {
        value: "Construction/Infrastructure",
        label: "Construction/Infrastructure",
      },
      {
        value: "Not_for_Profit ",
        label: "Not for Profit ",
      },
      {
        value: "Retired",
        label: "Retired",
      },
      {
        value: "Sports_Arts_and_Entertainment",
        label: "Sports, Arts, and Entertainment",
      },
      {
        value: "HR_and_Recruitment",
        label: "HR and Recruitment",
      },
    ],
    optionsForJob: [
      {
        value: "Accounting/Finance",
        label: "Accounting/Finance",
      },
      {
        value: "Administration",
        label: "Administration",
      },
      {
        value: "Anti_Corruption",
        label: "Anti-Corruption",
      },
      {
        value: "Asset/Portfolio_Manager_or_Broker",
        label: "Asset/Portfolio Manager or Broker",
      },
      {
        value: "Compliance/Risk_Management",
        label: "Compliance/Risk Management",
      },
      {
        value: "Consulting",
        label: "Consulting",
      },
      {
        value: "Corporate_Comms_and_Investor_Relations",
        label: "Corporate Comms and Investor Relations",
      },
      {
        value: "Corporate_Strategy",
        label: "Corporate Strategy",
      },
      {
        value: "Culture_and_Heritage",
        label: "Culture and Heritage",
      },
      {
        value: "Data_Science_and_Analytics",
        label: "Data Science and Analytics",
      },
      {
        value: "Dev/Programming",
        label: "Dev/Programming",
      },
      {
        value: "Editorial/Journalism",
        label: "Editorial/Journalism",
      },
      {
        value: "Elected_Representative/Parliamentarian",
        label: "Elected Representative/Parliamentarian",
      },
      {
        value: "Environment",
        label: "Environment",
      },
      {
        value: "Executive_Management",
        label: "Executive Management",
      },
      {
        value: "Finance",
        label: "Finance",
      },
      {
        value: "Financial_Advisor",
        label: "Financial Advisor",
      },
      {
        value: "Healthcare/Social_Service",
        label: "Healthcare/Social Service",
      },
      {
        value: "HR/Training/Recruitment",
        label: "HR/Training/Recruitment",
      },
      {
        value: "Immigration_and_Citizenship",
        label: "Immigration and Citizenship",
      },
      {
        value: "Insurance_and_Risk_Assessment",
        label: "Insurance and Risk Assessment",
      },
      {
        value: "Investment_Banking",
        label: "Investment Banking",
      },
      {
        value: "IT_(operations)",
        label: "IT (operations)",
      },
      {
        value: "IT_(Security)",
        label: "IT (Security)",
      },
      {
        value: "Licensing_and_Content_Acquisition",
        label: "Licensing and Content Acquisition",
      },
      {
        value: "Legal",
        label: "Legal",
      },
      {
        value: "Manufacturing_Production_Service_Delivery",
        label: "Manufacturing, Production, Service Delivery",
      },
      {
        value: "Marketing_PR_and_Media",
        label: "Marketing, PR, and Media",
      },
      {
        value: "Medical/Healthcare",
        label: "Medical/Healthcare",
      },
      {
        value: "Merchant_Banking",
        label: "Merchant Banking",
      },
      {
        value: "Mergers_and_Acquisitions",
        label: "Mergers and Acquisitions",
      },
      {
        value: "Military",
        label: "Military",
      },
      {
        value: "Network_Infrastructure",
        label: "Network Infrastructure",
      },
      {
        value: "Operations_and_Logistics",
        label: "Operations and Logistics",
      },
      {
        value: "Policing_and_Judiciary",
        label: "Policing and Judiciary",
      },
      {
        value: "Private/Angel_Investor",
        label: "Private/Angel Investor",
      },
      {
        value: "Private_Equity",
        label: "Private Equity",
      },
      {
        value: "Product_Management",
        label: "Product Management",
      },
      {
        value: "Purchasing_and_Procurement",
        label: "Purchasing and Procurement",
      },
      {
        value: "Real_Estate/Property",
        label: "Real Estate/Property",
      },
      {
        value: "Regulation_and_Policy",
        label: "Regulation and Policy",
      },
      {
        value: "Research_and_Development",
        label: "Research and Development",
      },
      {
        value: "Research/Intelligence/Information_Centers",
        label: "Research/Intelligence/Information Centers",
      },
      {
        value: "Retired",
        label: "Retired",
      },
      {
        value: "Sales/Business_Development",
        label: "Sales/Business Development",
      },
      {
        value: "Senior_Agency/Department_Leadership",
        label: "Senior Agency/Department Leadership",
      },
      {
        value: "Senior_Leadership",
        label: "Senior Leadership",
      },
      {
        value: "Supply_Chain",
        label: "Supply Chain",
      },
      {
        value: "Student",
        label: "Student",
      },
      {
        value: "Technology",
        label: "Technology",
      },
      {
        value: "Teaching_Faculty",
        label: "Teaching Faculty",
      },
      {
        value: "Trade_and_Foreign_Affairs",
        label: "Trade and Foreign Affairs",
      },
      {
        value: "Venture_Capital",
        label: "Venture Capital",
      },
      {
        value: "Wealth_Management",
        label: "Wealth Management",
      },
      {
        value: "Other",
        label: "Other",
      },
    ],
    optionsForJobLevel: [
      {
        value: "Most_Senior_ex_CEO_President_Chairman",
        label: "Most Senior ex: CEO, President, Chairman",
      },
      {
        value: "Executive_Level_ex_General_Manager",
        label: "Executive Level ex: General Manager",
      },
      {
        value: "Mid_Level_ex_Senior_Director",
        label: "Mid Level ex: Senior Director",
      },
      {
        value: "Director_Level",
        label: "Director Level",
      },
      {
        value: "Board_Level_ex_Managing_Director",
        label: "Board Level ex: Managing Director",
      },
      {
        value: "Manager/Supervisor",
        label: "Manager/Supervisor",
      },
      {
        value: "Investor",
        label: "Investor",
      },
      {
        value: "Retired",
        label: "Retired",
      },
      {
        value: "Not applicable",
        label: "Not applicable",
      },
    ],
    optionsForCheckBoxes: [
      { name: "Friends/Family", label: "Friends/Famil" },
      { name: "Advertisement ", label: "Advertisement" },
      { name: "Social_Media", label: "Social Media" },
      { name: "Search", label: "Search" },
      { name: "Media_Mention", label: "Media Mention" },
      { name: "Other", label: "Other" },
    ],
    newsInterestCheckBoxes: [
      { name: "at_a_Glance", label: "At a Glance" },
      { name: "web3", label: "Web 3" },
      { name: "politics", label: "Politics" },
      { name: "bizNFinance", label: "Biz & Finance" },
      { name: "lawNCrime", label: "Law & Crime" },
      { name: "entertainment", label: "Entertainment" },
      { name: "lifeStyleNHealth", label: "LifeStyle & Health" },
      { name: "scienceNTech", label: "Science & Tech" },      { name: "artNFashion", label: "Art & Fashion" },      { name: "sports", label: "Sports" }
    ],
  };
  const onFormLayoutChange = ({ size }) => {};
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      industry: "",
      jobDescription: "",
      jobLevel: "",
      whereYouHeared: [],
      topThreeChoices: [],
    },
    onSubmit: (values) => {
    },
    // validationSchema:ModalStepsValidation
  });
  return (
    <div>
      <Modal
        className="model_main"
        footer={null}
        width="40%"
        closable={false}
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormikProvider value={formik}>
          <Form onFinish={() => formik.handleSubmit()}>
            {count == 0 ? (
              <div className="model_main_div">
                <p className="first_p">Just a few more things</p>
                <p>Your Profession:</p>
                <div className="checkbox_model">
                  <div className="inner_div_model_checkbox1 ">
                    <Form.Item
                      label={<span className="Steps_labels">Industry</span>}
                    >
                      <Select
                        name="industry"
                        style={{width:"300px"}}
                        placeholder="Select..."
                        options={options?.optionsForIndustry}
                        onChange={(e) => {formik?.setFieldValue("industry", e);
                        window.gtag('event', 'industry_select', {
                          event_category: 'More User Info',
                          event_label: 'Industry Selected',
                          selected_value: e,
                        });
                      }}
                      />
                    </Form.Item>
                    <Form.Item
                      label={<span className="Steps_labels">Job Des...</span>}
                    >
                      <Select
                        name="jobDescription"
                        placeholder="Select..."
                        style={{width:"300px"}}
                        options={options?.optionsForJob}
                        onChange={(e) => {
                          formik?.setFieldValue("jobDescription", e);
                          window.gtag('event', 'job_des__select', {
                            event_category: 'More User Info',
                            event_label: 'Job Des Selected',
                            selected_value: e,
                          });
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      label={<span className="Steps_labels">Job Level</span>}
                    >
                      <Select
                        placeholder="Select..."
                        name="jobLevel"
                        style={{width:"300px"}}
                        options={options?.optionsForJobLevel}
                        onChange={(e) => {
                          formik?.setFieldValue("jobLevel", e);
                          window.gtag('event', 'job_level_select', {
                            event_category: 'More User Info',
                            event_label: 'Job Level Selected',
                            selected_value: e,
                          });
                        }}
                      />
                    </Form.Item>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <div className="model_footer_Things">
                        <span className="me-5">1/3</span>
                      </div>
                      <div className="model_footer_Things">
                        <button
                          className="btn"
                          onClick={() => setcount(count + 1)}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : count == 1 ? (
              <div className="model_main_div">
                <p className="first_p">Almost There!</p>
                <p>Where did you hear of NewsFlow?</p>
                <div className="checkbox_model">
                  <div className="inner_div_model_checkbox">
                    {options?.optionsForCheckBoxes?.map((checkBox) => (
                      <div>
                        <input
                          type="checkbox"
                          name="whereYouHeared"
                          id=""
                          value={checkBox?.name}
                          onChange={(checkBox) => {
                            window.gtag('event', 'checkbox_select', {
                              event_category: 'More User Info',
                              event_label: 'Check Box Selected',
                              selected_value: checkBox?.name,
                            });
                          }}
                          className="me-2"
                        />{" "}
                        <span>{checkBox?.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <div className="model_footer_Things">
                    <span className="me-5">2/3</span>
                    <button className="btn" onClick={() => setcount(count - 1)}>
                      Back
                    </button>
                  </div>
                  <div className="model_footer_Things">
                    <button className="btn" onClick={() => setcount(count + 1)}>
                      Next
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="model_main_div">
                <p className="first_p">News Interests:</p>
                <p>Pick you top 3 news categories</p>

                <div className="checkbox_model" >
                <div className="checkbox_model">
                  <div className="inner_div_model_checkbox">
                    {options?.newsInterestCheckBoxes?.map((checkBox) => (
                      <div>
                        <input
                          type="checkbox"
                          name="whereYouHeared"
                          id=""
                          value={checkBox?.name}
                          onChange={(checkBox) => {
                            window.gtag('event', 'top_3_news_cat_select', {
                              event_category: 'More User Info',
                              event_label: 'Top 3 News Categories Selected',
                              selected_value: checkBox?.name,
                            });
                          }}
                          className="me-2"
                        />{" "}
                        <span>{checkBox?.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <div className="model_footer_Things">
                    <span className="me-5">3/3</span>
                    <button className="btn" onClick={() => setcount(count - 1)}>
                      Back
                    </button>
                  </div>
                  <div className="model_footer_Things">
                    <button className="btn" type="submit"
                     onClick={()=>{
                      window.gtag('event', 'more_user_info_form_submit', {
                        event_category: 'More User Info',
                        event_label: 'More User Info Form Submitted',
                      });
                    }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Form>
        </FormikProvider>
      </Modal>
    </div>
  );
}
