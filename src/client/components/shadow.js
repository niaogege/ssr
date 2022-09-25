/*
 * @Author: Chendapeng
 * @Date: 2021-09-12 18:28:57
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-25 14:58:07
 * @Description:
 */
import React from "react";
import Seo from "../../components/helmet";
const Shadow = () => {
  return (
    <>
      <Seo title="client title this is Home" meta="client meta home" />
      <div>
        <h2 onClick={() => alert(111)}>client</h2>
        this is shadow <br />
        shadow component is public Component
      </div>
    </>
  );
};
export default Shadow;
