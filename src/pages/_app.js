import React, { Fragment } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "../styles/globals.css";
import "../styles/grid.css";
import "../styles/colors.css";
import AsidePage from "./aside";
const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="container-fluid    ">
      <div className=" row ">
        <Component {...pageProps} />
        <AsidePage />
      </div>
    </div>
  );
};
export default MyApp;
