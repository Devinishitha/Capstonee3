import React from "react";
import im1 from "../images/11.png";
import Layout from "./../components/Layout/Layout";

const Thankspage = () => {
  return (
    <Layout>
        <div style={{background:'Pink',color:'Black',marginTop:'50px',marginBottom:'20px',padding:'30px'}}>
        <br />
      <h1><center><strong>Thankyou</strong></center></h1>
        </div>
        <div style={{background:'Yellow',color:'Black',marginTop:'50px',marginBottom:'20px',padding:'30px'}}>
      <h1><center><strong>Please Visit Again</strong></center></h1>
        </div>
        <center><img src={im1} height={600} width={800}/><br /></center>
    </Layout>
  );
};

export default Thankspage;
