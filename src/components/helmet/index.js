import { Helmet } from "react-helmet";
import React from "react";
const Seo = ({ title = "", meta = "" }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={meta} />
      </Helmet>
    </>
  );
};

export default Seo;
