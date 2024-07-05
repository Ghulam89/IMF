import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className=" tw-overflow-x-hidden tw-bg-[#054776]">
        <div className="container  tw-py-12">
          <div className="row tw-items-center">
            <div className="col-md-8">
             <div className=" tw-flex sm:tw-justify-start tw-justify-center tw-items-center tw-gap-2"> 
             <div>
             <img src={require("../../assets/images/white_logo.png")} className="" />
             </div>
           <div>
           <h2 className="   tw-font-bold tw-text-white">IMF</h2>
           </div>
             </div>
             
             
            </div>

            <div className="col-md-4">
            <ul className=" tw-p-0 tw-pt-4 sm:tw-justify-end  tw-justify-center tw-flex tw-gap-2 tw-items-center">
                <li>
                  <Link to={''} className=" ">
                   <div className="  tw-bg-white tw-w-11  tw-rounded-md tw-flex tw-justify-center tw-items-center tw-h-11">
                   <img src={require("../../assets/images/facebook-02.png")} />
                   </div>
                
                  </Link>
                </li>
                <li>
                  <Link to={''}>
                  <div className="  tw-bg-white tw-w-11  tw-rounded-md tw-flex tw-justify-center tw-items-center tw-h-11">
                   <img src={require("../../assets/images/whatsapp.png")} />
                   </div>
                  </Link>
                </li>
                <li>
                  <Link to={''} >
                  <div className="  tw-bg-white tw-w-11  tw-rounded-md tw-flex tw-justify-center tw-items-center tw-h-11">
                   <img src={require("../../assets/images/iconoir_telegram.png")} />
                   </div>
                  </Link>
                </li>
              </ul>
            </div>
           
          </div>
        </div>
      </div>
      <div className="tw-bg-[#003459] tw-w-full tw-py-2  tw-text-center">
        <p className=" tw-m-0 tw-text-white tw-font-poppins">
        Copyright © 2024. All rights reserved by Your Crypto Currency Website.
        </p>
      </div>
    </div>
  );
};

export default Footer;
