import React from "react";
import Header from "../Header/header"
import Footer from "../Footer/footer"


const Wrapper = ({ children }) => {
  return (
    <div className='pagecontainer'>
      <Header/>

      {children}
      <Footer/>
    </div>
  );
};

export default Wrapper;
