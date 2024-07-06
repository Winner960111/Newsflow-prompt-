import React, { useState } from "react";
import "./Legal_Docs.css";
import { Footer, Header } from "../../layout";

export default function Legal_Docs() {
  const [active, setActive] = useState(1);
  return (
    <div>
      <div className="Deep_Dive">
        <Header />
        <div className="container">
          <div className="d-flex justify-content-between align-items-center main_div_deep_dive_heading">
            <div
              className="main_div_deep_dive_heading"
              style={{ marginTop: "100px" }}
            >
              <div
                className="Text_Top_Deep"
                style={{ position: "absolute" }}
              ></div>
              <div className="text_on_Deep_bg">
                <h1>
                  {(() => {
                    switch (active) {
                      case 1:
                        return "Privacy Policy";
                      case 2:
                        return "Terms";
                      case 3:
                        return "Disclaimer";
                      case 4:
                        return "Cookies";
                      default:
                        return "Legal Doc";
                    }
                  })()}
                </h1>
              </div>
            </div>
          </div>

          <div className="main_Deep_dive">
            <div className="row">
              <div className="col-lg-3">
                <ul className="deep_dive_list">
                  <li
                    className={active == 1 ? "Active_Item_legal" : ""}
                    onClick={() => {
                      window.gtag(
                        "event",
                        "newsflow_legalDoc_privacy_policy_click",
                        {
                          event_category: "LegalDoc",
                          event_label:
                            "NewsFlow Legal Doc Privacy Policy Clicked",
                        }
                      );
                      setActive(1);
                    }}
                  >
                    <span className={active == 1 ? "Active_Legal" : ""}>
                      Privacy Policy
                    </span>
                  </li>
                  <li
                    className={active == 2 ? "Active_Item_legal" : ""}
                    onClick={() => {
                      window.gtag("event", "newsflow_legalDoc_terms_click", {
                        event_category: "LegalDoc",
                        event_label: "NewsFlow Legal Doc Terms Clicked",
                      });
                      setActive(2);
                    }}
                  >
                    <span className={active == 2 ? "Active_Legal" : ""}>
                      Terms
                    </span>
                  </li>
                  <li
                    className={active == 3 ? "Active_Item_legal" : ""}
                    onClick={() => {
                      window.gtag(
                        "event",
                        "newsflow_legalDoc_disclaimer_click",
                        {
                          event_category: "LegalDoc",
                          event_label: "NewsFlow Legal Doc Disclaimer Clicked",
                        }
                      );
                      setActive(3);
                    }}
                  >
                    <span className={active == 3 ? "Active_Legal" : ""}>
                      Disclaimer
                    </span>
                  </li>
                  <li
                    className={active == 4 ? "Active_Item_legal" : ""}
                    onClick={() => {
                      window.gtag("event", "newsflow_legalDoc_cookies_click", {
                        event_category: "LegalDoc",
                        event_label: "NewsFlow Legal Doc Cookies Clicked",
                      });
                      setActive(4);
                    }}
                  >
                    <span className={active == 4 ? "Active_Legal" : ""}>
                      Cookies
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-9">
                {active == 2 ? (
                  <>
                    <div className="deep_dive_second_col">
                      <p>
                      Terms and Conditions for NewsFlow
                      </p>
                      <p>Welcome to NewsFlow ("the Site"). We appreciate your interest in our platform. These Terms and Conditions govern your access to and use of NewsFlow, including viewing AI-generated news summaries and analyses. By engaging with our content, you agree to these legally binding terms, so please review them carefully.
</p>
                      <h4>Acceptance of Terms</h4>
                      <p>
                      By accessing NewsFlow, you acknowledge you've read, understand, and consent to these Terms, alongside our Privacy Policy and Cookie Policy. These documents collectively form a binding agreement between you and NewsFlow, regulating your use of our service.
  </p>
                      <h4>Content and Services</h4>
                      <p>
                      NewsFlow harnesses AI to deliver comprehensive news insights, offering article summaries and predictive analyses. Our AI, built on advanced technologies, dynamically aggregates content from diverse sources. However, we cannot assure the complete accuracy or immediacy of our content, underscoring that our service is "as is." We continually strive to improve accuracy and relevance but advise users to consult multiple sources when making decisions based on our content.
 </p>
                      <h4>User Responsibilities</h4>
                      <p>
                      You commit to lawful use of NewsFlow, acknowledging our content as informational. It's crucial to regard our service as a starting point for personal research, not a definitive advisory platform. Your decisions, informed by our content, are your sole responsibility.
   </p>
                      <h4>Prohibited Activities</h4>
                      <p>
                      You agree not to misuse NewsFlow's content or technology, including unauthorized commercial use or attempts to disrupt our service. Our intellectual property, including AI-generated content, is legally protected, and we restrict its unauthorized reproduction or modification.
 </p>
                      <h4>Intellectual Property</h4>
                      <p>
                      NewsFlow's content, including AI-generated articles and analyses, is protected under intellectual property laws. We grant you a non-exclusive, limited right to access our content for personal, non-commercial use, provided you respect our intellectual property rights.
        </p>
                      <h4>Disclaimers and Limitation of Liability</h4>
                      <p>
                      Our service is provided without warranties, explicit or implied, regarding content accuracy or completeness. NewsFlow's liability for any damages arising from your use of the site is limited to the maximum extent permitted by law. Please refer to our full Disclaimer for detailed information.
       </p>
                      <h4>Dispute Resolution</h4>
                      <p>
                      Should disputes arise, we strongly advocate for amicable resolution. However, unresolved disputes will be subject to the jurisdiction of Wisconsin, USA courts, emphasizing our commitment to resolving issues fairly and lawfully.
     </p>
                      <h4>Modification, Severability, and Termination</h4>
                      <p>
                      We reserve the right to modify or discontinue our service and these Terms, ensuring you're informed of significant changes. If any Term is deemed unenforceable, we'll adapt it minimally, maintaining the agreement's overall integrity.
</p>

                      <h4>Governing Law and Contact Information</h4>
                      <p>
                      These Terms are governed by Wisconsin law. For any inquiries or concerns, reach us at contact@newsflow.io, ensuring open communication.

Your engagement with NewsFlow confirms your acceptance of these updated Terms, our commitment to transparency, and our dedication to providing insightful, AI-driven news analysis. </p>
                      <p>Thank you for using NewsFlow.</p>
                    </div>
                  </>
                ) : active == 1 ? (
                  <>
                    <div className="deep_dive_second_col">
                      <h4>Privacy Policy</h4>
                      <h4>Introduction</h4>
                      <p>
                        NewsFlow is committed to protecting the privacy of our
                        users. This Privacy Policy outlines how we collect, use,
                        maintain, and disclose information from users of our
                        AI-driven news analysis website. It applies to the Site
                        and all products and services offered by NewsFlow.{" "}
                      </p>
                      <h4>Information Collection and Use</h4>
                      <ol>
                        <li>
                          <h4>Personal Identification Information</h4>
                          <ol>
                            <li>
                              <p>
                                We collect personal information (e.g., name,
                                email address) through voluntary submissions and
                                interactions with the Site, such as
                                registration, forms, and other activities. This
                                information enables us to personalize your
                                experience and communicate with you. You can
                                choose not to provide personal information, but
                                it may limit your ability to engage in certain
                                Site activities.
                              </p>
                            </li>
                            <li>
                              <h4>Non-personal Identification Information</h4>
                              <p>
                                We also collect non-personal information (e.g.,
                                browser type, device type, connection details)
                                through your interaction with the Site. This
                                information helps us improve site functionality
                                and user experience.
                              </p>
                            </li>
                            <li>
                              <p>
                                We will collect personal identification
                                information from Users only if they voluntarily
                                submit such information to us. Users can always
                                refuse to supply personal identification
                                information, except that it may prevent them
                                from engaging in certain Site-related
                                activities.
                              </p>
                            </li>
                          </ol>
                        </li>
                        <li>
                          <h4>Non-personal Identification Information</h4>
                          <ol>
                            <li>
                              <p>
                                We also collect non-personal information (e.g.,
                                browser type, device type, connection details)
                                through your interaction with the Site. This
                                information helps us improve site functionality
                                and user experience.
                              </p>
                            </li>
                          </ol>
                        </li>
                        <li>
                          <h4>Log Files and Cookies</h4>

                          <p>
                            Our Site uses log files and cookies to enhance user
                            experience, analyze trends, and administer the Site.
                            Cookies are small files stored on your device that
                            help remember your preferences. You may adjust your
                            browser settings to refuse cookies, but this may
                            affect your use of the Site.
                          </p>
                        </li>

                        <li>
                          <h4>Use of Information</h4>

                          <p>
                            Personalizing User Experience: We use information to
                            understand how our Users as a group utilize our
                            services and resources.
                          </p>
                          <p>
                            Improving Our Site: Feedback and data help us
                            enhance our website offerings.
                          </p>
                          <p>
                            Communication: We use your email address to respond
                            to inquiries and send updates or news. You can
                            unsubscribe at any time.
                          </p>
                        </li>

                        <h4>Information Usage</h4>
                        <ol>
                          <li>
                            <p>
                              NewsFlow collects and uses Users' personal
                              information for the following purposes:
                            </p>
                            <ul>
                              <li>
                                <p>
                                  To personalize User experience: We may use
                                  information in the aggregate to understand how
                                  our Users as a group use the services and
                                  resources provided on the Site.
                                </p>
                              </li>
                              <li>
                                <p>
                                  To improve the Site: We continually strive to
                                  improve our website offerings based on the
                                  information and feedback we receive from
                                  Users.
                                </p>
                              </li>
                              <li>
                                <p>
                                  To send periodic emails: We may use the email
                                  address to respond to inquiries, questions,
                                  and/or other requests from Users. If a User
                                  decides to opt-in to our mailing list, they
                                  will receive emails that may include company
                                  news, updates, related product or service
                                  information, etc. If at any time the User
                                  would like to unsubscribe from receiving
                                  future emails, we include detailed unsubscribe
                                  instructions at the bottom of each email.
                                </p>
                              </li>
                            </ul>
                          </li>
                        </ol>

                        <li>
                          <h4>Information Protection</h4>
                          <ol>
                            <li>
                              <p>
                                We implement security measures to protect your
                                personal information from unauthorized access,
                                alteration, or destruction.
                              </p>
                            </li>
                          </ol>
                        </li>
                        <li>
                          <h4>Sharing Personal Information</h4>
                          <ol>
                            <li>
                              <p>
                                We do not sell or rent personal information. We
                                may share aggregated, non-personal information
                                with partners and advertisers for the purposes
                                outlined above.
                              </p>
                            </li>
                          </ol>
                        </li>
                        <li>
                          <h4>Third-Party Websites</h4>
                          <ol>
                            <li>
                              <p>
                                Our Site may link to third-party sites not
                                controlled by us. We are not responsible for the
                                content or privacy practices of these sites.
                              </p>
                            </li>
                          </ol>
                        </li>
                        <li>
                          <h4>Changes to this Privacy Policy</h4>
                          <ol>
                            <li>
                              <p>
                                NewsFlow reserves the right to update this
                                policy at any time. We encourage users to
                                regularly review this page for any changes.
                              </p>
                            </li>
                          </ol>
                        </li>
                        <li>
                          <h4>Your Acceptance of These Terms</h4>
                          <ol>
                            <li>
                              <p>
                                By using the Site, you accept this Privacy
                                Policy. If you disagree, please do not use our
                                Site.
                              </p>
                            </li>
                          </ol>
                        </li>
                      </ol>
                      <h4>Contacting Us</h4>
                      <p>
                        For questions about this Privacy Policy or our
                        practices, please contact us at{" "}
                        <strong>contact@newsflow.io.</strong>{" "}
                      </p>
                      <p>This Privacy Policy was last updated on 3/11/24.</p>
                    </div>
                  </>
                ) : active == 3 ? (
                  <div className="deep_dive_second_col">
                    <h4>Disclaimer </h4>
                    <p>
                    Welcome to NewsFlow. The content provided on our website ("the Site") is intended for general informational and educational purposes only. Our aim is to offer insights and perspectives on current events and topics, leveraging the power of artificial intelligence (AI) for news analysis. Please read the following disclaimer carefully before using the Site.
 </p>
 <h4>Accuracy and Completeness</h4>
                    <p>
                    While we endeavor to keep the information on the Site timely and accurate, NewsFlow makes no guarantees of any kind regarding the completeness, accuracy, reliability, or timeliness of the information provided. All content on the Site is subject to change without notice and is offered on an "as is" basis. We encourage users to critically evaluate the information and consult multiple sources when making decisions.
</p>
<h4>AI-Powered Predictions</h4>
<p>
The Site features advanced AI capabilities, including a prediction tool that analyzes news articles to generate potential outcomes. These predictions are based on data models trained on historical information up to the year 2023 and should be regarded as hypothetical scenarios rather than concrete advice or forecasts. The nature of AI-generated predictions is inherently speculative, and they may not reflect future realities. Users should interpret these predictions as informational tools rather than bases for critical decision-making, particularly in financial or investment contexts.
</p>
<h4>No Endorsement
</h4>
<p>

NewsFlow does not endorse, nor does it assume any responsibility for, the accuracy or reliability of any information offered on the Site, including links to external websites. The inclusion of external links does not signify endorsement of the linked content. We disclaim any liability for the content, products, or services offered by third-party sites.

</p>   
<h4>
Limitation of Liability</h4>        
<p>Under no circumstances shall NewsFlow be liable for any direct, indirect, incidental, or consequential damages arising from the use of or inability to use the Site, including but not limited to reliance on information obtained from the Site, errors, omissions, interruptions, deletion of files or emails, defects, viruses, delays in operation or transmission, or any failure of performance.
</p>
<h4>Indemnification</h4>
<p>
By using the Site, you agree to indemnify, defend, and hold harmless NewsFlow and its affiliates, officers, agents, and employees from any claims, damages, losses, liabilities, and expenses (including attorneys' fees) related to your use of the Site or violation of this disclaimer.
</p>
<h4>
Educational Purpose</h4>
<p>
It is crucial to understand that the Site is designed solely for educational purposes. The information provided is not intended as professional advice and should not be the sole basis for personal or professional decisions. Always seek the advice of qualified professionals when necessary.
</p>
<h4>
Changes to the Disclaimer</h4>
<p>
NewsFlow reserves the right to modify this disclaimer at any time. We encourage users to frequently review the disclaimer to stay informed of any changes. Your continued use of the Site after any modification to this disclaimer will constitute your acceptance of such changes.
</p>
<h4>
Conclusion</h4>
<p>
The use of the Site is at your own risk. While we strive to provide valuable and accurate educational content, it is the responsibility of each user to evaluate the usefulness and accuracy of the information provided and to seek additional sources and professional advice as needed.</p>
   </div>
                ) : active == 4 ? (
                  <>
                    <div className="deep_dive_second_col">
                      <h4>Cookie Policy</h4>
                      <p>Effective Date: 3/11/23</p>
                      <p>
                      Welcome to NewsFlow's Cookie Policy. This policy provides detailed information about how NewsFlow (www.newsflow.io) uses cookies and similar tracking technologies on our website. This policy is designed to help you understand what cookies are, how we use them, and your choices regarding their use.
     </p>
     <h4>What Are Cookies?</h4>
                      <p>
                      Cookies are small text files stored on your device (computer, tablet, mobile phone, etc.) when you visit websites. They are used to remember your preferences, improve your browsing experience, and provide us with analytics data.

                      </p>

                      <h4>
                      Types of Cookies We Use </h4>
                      <ol className="list_alpha">
                        <li>
                          <p>
                          Essential Cookies: Vital for website functionality, enabling navigation and access to secure areas. These cookies do not require consent and cannot be turned off.
  </p>
                        </li>
                        <li>
                          <p>
                          Analytical/Performance Cookies: Collect anonymous data on website usage, helping us improve our site.
                          </p>
                        </li>
                        <li>
                          <p>
                          Functional Cookies: Remember your preferences and allow for a more personalized experience.
   </p>
                        </li>
                        <li>
                          <p>
                          Advertising Cookies: Tailored advertising based on your browsing habits and preferences.
 </p>
                        </li>
                        <li>
                          <p>
                          Third-Party Cookies: Set by services used on our website for various purposes, such as analytics or advertising.
Managing Your Cookie Preferences
Upon your first visit, we'll ask for your consent to use non-essential cookies. You have the right to accept or decline cookies. Learn how to manage your preferences by visiting our Cookie Settings page or adjusting your browser settings. Please note, disabling cookies may affect your experience on our site.

                          </p>
                        </li>
                      </ol>
                      <h4>Third-Party Cookies</h4>
                      <p>
                      Some cookies we use are from third-party providers. These cookies are governed by the third parties' privacy policies. We recommend reviewing these policies to understand their practices.
            </p>
                      <h4>
Updates to This Policy</h4>
                      <p>We may update this Cookie Policy to reflect changes in legislation, our cookie practices, or the functionalities of our website. We encourage you to review it periodically. The "Effective Date" indicates the last update.
</p>
<h4>
Your Rights
</h4>
                      <p>
                      You have certain rights regarding your personal data, including accessing, correcting, deleting, or restricting its use. For more information on your rights and how to exercise them, please see our Privacy Policy.
   </p>
   <h4>Contact Us</h4>
   <p>For questions about this Cookie Policy or our privacy practices, contact us at contact@newsflow.io.
</p>
<h4>Data Processing Agreement (DPA)</h4>
<p>This section outlines the agreement between NewsFlow (Data Controller) and its users (Data Processors) concerning the processing of personal data. It includes definitions, scope, obligations, data transfer regulations, term, termination, governing law, and jurisdiction.
</p>
<p>Please note: By using our website, you acknowledge and agree to our Cookie and Data Processing policies. If you do not agree, you may choose to discontinue use of our site or manage your cookie preferences as outlined above.
</p>
<h4>
External Link Disclaimer
</h4>
<p>Our website includes links to external sites, not controlled by NewsFlow. We are not responsible for the content or reliability of these sites. Engaging with these links is at your own risk. For more detailed information, please refer to the full disclaimer within this policy.</p>
                     </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
