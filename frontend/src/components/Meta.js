import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keyword }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta name="keyword" content={keyword}></meta>
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to proshop",
  description: "we sell best products for cheap prices",
  keyword: "electronics, gadgets, shop",
};

export default Meta;
