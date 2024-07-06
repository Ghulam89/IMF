import React from "react";

const Team = () => {
  return (
    <div id="taskSection" className="tw-bg-cover  tw-relative tw-bg-center">
      <div className="container  tw-pb-6  tw-pt-6">
        <div className="row tw-g-5 ">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 tw-pt-12 col-md-6 tw-mb-5">
              <div className="tw-text-center  tw-min-h-56 tw-relative tw-border-2 tw-border-[#003459] tw-rounded-lg tw-rounded-tr-none tw-rounded-bl-none tw-p-6">
                <div className="   tw-h-28 tw-w-32 tw-mx-auto  tw-left-32 tw-absolute  tw--top-12">
                  <img
                    src={member.image}
                    className="tw-h-full tw-mx-auto   tw-w-full  tw-bg-center    tw-bg-white"
                    alt={member.name}
                  />
                </div>
                <div className="tw-pt-12">
                  <h3 className="tw-text-[#003459] tw-text-xl tw-font-poppins tw-font-semibold">
                    {member.name}
                  </h3>
                  <p className="tw-text-[#003459] m-0 tw-text-xl  tw-font-semibold">
                    {member.role}
                  </p>
                  <p className=" m-0 tw-font-medium tw-text-[#003459]">{member?.para}</p>
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
    name: "Position in Queue",
    role: "3/300",
    image: require("../../assets/images/d2.png"),
  },
  {
    name: "provide help",
    role: "20 times",
    image: require("../../assets/images/d3.png"),
  },
  {
    name: "Recieved Help",
    role: "9 times",
    image: require("../../assets/images/d4.png"),
  },
  {
    name: "Your Referral Code",
    role: "10",
    image: require("../../assets/images/d6.png"),
  },
  {
    name: "Referral Code Has Been Used",
    role: "5/30 Times",
    image: require("../../assets/images/d5.png"),
    para:"5 - Represents the no. times ref. code used weekly 30. represents the no. total number f times since joiner"
  },
  
];

export default Team;
