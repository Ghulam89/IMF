import React from "react";

const Team = () => {
  return (
    <div id="taskSection" className="tw-bg-cover tw-relative tw-bg-center">
      <div className="container  tw-pt-24">
        <div className="row tw-g-5 ">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 tw-pt-12 col-md-6 tw-mb-5">
              <div className="tw-text-center tw-relative tw-border-2 tw-border-[#003459] tw-rounded-lg tw-rounded-tr-none tw-rounded-bl-none tw-p-6">
                <div className=" sm:tw-w-60  tw-w-52 tw-h-28 tw-mx-auto tw-absolute tw-left-24 tw--top-12">
                  <img
                    src={member.image}
                    className="tw-w-full tw-h-full tw-mx-auto  tw-object-contain    tw-bg-white"
                    alt={member.name}
                  />
                </div>
                <div className="tw-pt-16">
                  <h3 className="tw-text-[#003459] tw-text-2xl tw-font-poppins tw-font-semibold">
                    {member.name}
                  </h3>
                  <p className="tw-text-[#003459] tw-text-xl tw-font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>


       
     
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: "Total Donation",
    role: "$25,000.00",
    image: require("../../assets/images/d1.png"),
  },
  {
    name: "No of user",
    role: "300,000",
    image: require("../../assets/images/d2.png"),
  },
  {
    name: "No of provide help",
    role: "20 times",
    image: require("../../assets/images/d3.png"),
  },
  {
    name: "No of recieved Help",
    role: "9 times",
    image: require("../../assets/images/d4.png"),
  },
  {
    name: "Weekly Referral",
    role: "5",
    image: require("../../assets/images/d5.png"),
  },
  {
    name: "Your Referral code",
    role: "10",
    image: require("../../assets/images/d6.png"),
  },
  
];

export default Team;
