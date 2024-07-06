import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from './redux/store';
import "bootstrap/dist/css/bootstrap.min.css";
import amplitude from 'amplitude-js';
import { BrowserRouter } from "react-router-dom";

amplitude.getInstance().init('fe2df2edc7d2369890cd9bb20e024d30');
const loadAdSenseScript = () => {
  const script = document.createElement('script');
  script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
  script.async = true;
  script.setAttribute('data-ad-client', 'ca-pub-5336140276709901');
  document.head.appendChild(script);
};

loadAdSenseScript();


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
     <Provider store={store}>

    <App />
     </Provider>
  {/* // </React.StrictMode> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
