import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Accordion from '../../components/Accordion/Accordion';

const FAQS = () => {
    const [accordions, setAccordion] = useState([
        {
          key: 1,
          title:
            "What is Crypto Pannel Token?",
          data: "Through Buy4Less, $EBM holders can purchase various cryptocurrencies at discounted rates ranging from 0.1% to 10% basing on monthly average $EBM holdings.",
          isOpen: false,
        },
        {
          key: 2,
          title:
            "What cryptocurrencies can I use to purchase?",
            data: "This staking opportunity is exclusive to the presale buyers to grow their investment with native $EBM token rewards during the presale before listing $EBM for trade for limited period.",
            isOpen: false,
        },
        {
          key: 3,
          title:
            "How can I participate in the Crypto Website?",
            data: "By staking $EBM tokens, community members can earn passive income through daily automated distribution of 40-60% of the company's revenue, fostering community engagement and financial growth.",
            isOpen: false,
        },
        {
          key: 4,
          title: "How do I benefit from the Crypto Website Token?",
          data: "Upon starting of operations, the program start will be announced. Like staking in native token rewards but this staking will reward in USDT/USDC on daily basis.",
          isOpen: false,
        },
        {
          key: 5,
          title:
            "How do I benefit from the Pannel Token?",
            data: "Other than Buy4Less and Stake4PIE, we aim to boost growth of True DeFi blockchains like Bitcoin, Litecoin, Zilliqa, Ethereum Classic, Raven, Kaspa, Dodge, BlockDAG etc.",
            isOpen: false,
        }
      ]);
    
      const toggleAccordion = (accordionkey) => {
        const updatedAccordions = accordions.map((accord) => {
          if (accord.key === accordionkey) {
            return { ...accord, isOpen: !accord.isOpen };
          } else {
            return { ...accord, isOpen: false };
          }
        });
    
        setAccordion(updatedAccordions);
      };
  return (


    <>


<div className=" tw-bg-white   tw-bg-no-repeat tw-w-full tw-bg-cover  tw-py-24  tw-h-auto ">
       
       <div className=" container">
       <div className='row tw-items-center'>
         <div className='col-lg-6 col-md-12'>
         <h5 className=" tw-font-semibold  tw-flex tw-items-end tw-gap-2 tw-text-2xl sm:tw-text-start tw-text-center  tw-text-[#003459]">  <p className='  tw-w-14  tw-h-[2px] tw-bg-[#003459]'></p> FAQS</h5>
 
         <h1 className="  tw-font-semibold tw-text-4xl sm:tw-text-start tw-text-center  tw-text-[#003459]">Frenquently Questions</h1>
         <div className="  tw-mt-12">
           {accordions.map((accordion) => (
             <Accordion
               key={accordion.key}
               title={accordion.title}
               data={accordion.data}
               isOpen={accordion.isOpen}
               toggleAccordion={() => toggleAccordion(accordion.key)}
             />
           ))}
         </div>
         </div>
         <div className="col-lg-6 col-md-12  tw-relative">
            
                <div className='row'>
                 <div className='col-md-10 tw-mx-auto'>
                 <img
                   src={require("../../assets/images/faqs.png")}
                   className=" tw-w-full"
                 />
                 </div>
                </div>
              
            
           </div>
       </div>
       </div>
     </div>
    
    <div>
    <div className=" tw-overflow-x-hidden tw-bg-[#054776]">
        <div className="container tw-py-4 ">
          <div className="row g-4 tw-items-center">
            <div className="col-md-2">
             <div className=" tw-flex  sm:tw-justify-start tw-justify-center tw-items-center tw-gap-2"> 
             <div>
             <img src={require("../../assets/images/white_logo.png")} className="" />
             </div>
           <div>
           <h2 className="   tw-font-bold tw-text-white">IMF</h2>
           </div>
             </div>
             
             
            </div>

            <div className='col-md-4'>
            <div className=" border tw-flex tw-rounded-md tw-justify-center  tw-gap-2 tw-items-center  tw-border-white">
              
              <div>
                <img src={require('../../assets/images/files.png')} className=" tw-w-12" alt="" />
              </div>

              <div className=" tw-flex tw-items-center tw-gap-4">
                <span className=" tw-text-white tw-font-semibold tw-text-xl">Transection History    </span>
                <p className=" tw-pt-1 tw-m-0 tw-text-lg  tw-leading-4 tw-font-semibold tw-text-white tw-border-white tw-border-b">Here</p>
              </div>


            </div>
            </div>
            <div className='col-md-4'>
            <div className=" border tw-flex tw-rounded-md tw-justify-center  tw-gap-2 tw-items-center tw-border-[#003459]">
              
              <div>
                <img src={require('../../assets/images/market.png')} className=" tw-w-12" alt="" />
              </div>

              <div className=" tw-flex tw-items-center tw-gap-4">
                <span className=" tw-text-white  tw-font-semibold tw-text-xl">Marketing Budget    </span>
                <p className=" tw-pt-1 tw-m-0   tw-leading-4 tw-font-bold tw-text-white tw-border-white tw-border-b">ADDRESS</p>
              </div>


            </div>
            </div>

            <div className="col-md-2">
            <ul className=" tw-p-0 tw-pt-4 sm:tw-justify-end tw-justify-center tw-flex tw-gap-2 tw-items-center">
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
     
    </div>
    </>
    



  )
}

export default FAQS
