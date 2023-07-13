import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../toolkit/formReducer";
import "./stp3.css";
import { Link } from "react-router-dom";
import { Select } from "antd";
import { AiOutlineDown } from "react-icons/ai";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
const { Option } = Select;

const StepThree = ({ nextStep, prevStep, formData, setFormData }) => {
  const { scholarshipcategory } = useSelector((state) => state.formData);
  const [data, setData] = useState();
  const [selectedOption, setSelectedOption] = useState("select a subject");
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to track the dropdown open/close state

  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, [scholarshipcategory]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://demo.kodoscholarships.com/api/v1/scholarship/categories/${scholarshipcategory}`
      );
      setData(data.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  const selectStyle = {
    border: "none", // Remove border
    boxShadow: "none", // Remove box shadow
    width: "100%",
  };
  const handleChange = (value) => {
    dispatch(updateFormData({ field: "subject", value: value }));
  };

  const handleList = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleOptionChange=(selected)=>{
    setSelectedOption(selected)
  }
  return (
    <div
      className="selections-contai "
      style={{
        transform: "none",
        transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
        width: "40vw",
      }}
    >
      <h2 
        style={{
          paddingTop: "0px",
          paddingBottom: "0px",
          color: "#00234a",
          fontFamily: "Lexend Deca, Helvetica, Arial, sans-seri",
        }}
      >
        What subject do you want to study?
      </h2>
      <div className="dropdown-containe bg-secondary">
        <button
          className="dropdow "
          style={{
            backgroundColor: "#fff",
            border: "1px solid #e9e9e9",

            padding: "20px 10px",
            textTransform: "none",
            width: "100%",
          }}
        >
          <div
            className=""
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "auto",
              width: "90%",
            }}
          >
            <div
              className=""
              style={{
                color: "#424242",
                fontSize: "16px",
                fontWeight: "500",
                height: "28px",
                letterSpacing: "0",
                lineHeight: "28px",
              }}
            >
              <p>{selectedOption}</p>
            </div>
            <div className="icon" onClick={handleList}>
              {dropdownOpen ? (
                <AiOutlineDown size={20} color="red" />
              ) : (
                <MdOutlineKeyboardArrowUp size={20} color="red" />
              )}
            </div>
          </div>
          <div
            className="dropdown-break-lin"
            style={{
              backgroundColor: "#c11b94",
              height: "2px",
              margin: "auto",
              width: "90%",
            }}
          ></div>
        </button>
        {dropdownOpen ? (
          <div
            id="dropdown-lst"
            className="dropdown-lis"
            style={{
              // visibility: "hidden",
              // transform: "translateY(857px) translateY(-10.2148px)",
              background: "white", // Glass morphism background color
              boxShadow: "0 2px 2px 0 rgba(31, 38, 135, 0.37)", // Glass morphism shadow
              backdropFilter: "blur(5px)", // Glass morphism blur effect
              padding: "20px", // Padding around the div
            }}
          >
            {data?.map((option, index )=>
             <button
             onClick={()=>{setSelectedOption(option)
             setDropdownOpen(!dropdownOpen)}
             }
              type="button"
              className="option-butto"
              style={{
                border: "none",
                borderRadius: "3px",
                // fontSize: "40px",
                display: "block",
                // fontSize: "16px",
                fontWeight: "500",
                letterSpacing: "0",
                // lineHeight: "28px",
                padding: "5px",
                textAlign: "left",
                textTransform: "capitalize",
                width: "100%",
              }}
            >
              <h4 style={{ color: "#00234a" }} className="text">{option}</h4>
            </button>
            )
           
        }
          </div>
        ) : null}
      </div>
    </div>

    // <div className="" style={{}}>
    //   <div
    //     className="app-wrapper"
    //     style={{ display: "flex", flexDirection: "column" }}
    //   >
    //     <div style={{ padding: "2rem" }} className="">
    //       <h2
    //         style={{
    //           fontSize: "2rem",
    //           fontFamily: "Lexend Deca, Helvetica, Arial, sans-serif",
    //           fontWeight: "700",
    //           color: "#00234a",
    //         }}
    //       >
    //         What subject do you want to study?
    //       </h2>
    //       <div className="dropdown-container">
    //         <button className="dropdown">
    //           <div className="dropdown-top">
    //             {/* <Link to="/test">next</Link> */}
    //             <Select
    //               style={selectStyle}
    //               showSearch
    //               className="selectr "
    //               placeholder="Search to Select"
    //               optionFilterProp="children"
    //               onChange={handleChange}
    //             >
    //               {data?.map((option, index) => (
    //                 <Option
    //                   // onClick={() => nextStep()}
    //                   key={index}
    //                   value={option}
    //                 >
    //                   {option}
    //                 </Option>
    //               ))}
    //             </Select>
    //           </div>
    //           <div className="dropdown-break-line"></div>
    //         </button>

    //         <div
    //           id="dropdown-list"
    //           className="dropdown-list"
    //           style={{
    //             visibility: "hidden",
    //             transform: "translateY(915px) translateY(-10.9727px)",
    //           }}
    //         ></div>
    //       </div>

    //       <div className=""></div>
    //     </div>

    //     <div
    //       style={{
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <Link to="/test">
    //         <button
    //           type="button"
    //           className="_buttonContinue_pmptr_46 _button_pmptr_30"
    //           data-testid="continue"
    //           style={{ width: "12rem" }}
    //         >
    //           <span>Continue</span>
    //           <svg
    //             width="26"
    //             height="16"
    //             viewBox="0 0 26 16"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               clipRule="evenodd"
    //               d="M16.6774 0.468629C17.3023 -0.15621 18.3153 -0.15621 18.9402 0.468629L25.3402 6.86863C25.965 7.49347 25.965 8.50653 25.3402 9.13137L18.9402 15.5314C18.3153 16.1562 17.3023 16.1562 16.6774 15.5314C16.0526 14.9065 16.0526 13.8935 16.6774 13.2686L20.346 9.6H1.80879C0.925131 9.6 0.208786 8.88366 0.208786 8C0.208786 7.11634 0.925131 6.4 1.80879 6.4H20.346L16.6774 2.73137C16.0526 2.10653 16.0526 1.09347 16.6774 0.468629Z"
    //               fill="white"
    //             ></path>
    //           </svg>
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default StepThree;
