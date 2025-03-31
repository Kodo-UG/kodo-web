import { ScholarshipCard } from "./ScholarshipCard";
import FAQ from "./FAQ";
import CustomContainer from "../components/ShredComponents/CustomerContainer";
import "./accordion.css"; // Import the CSS file
import axios from 'axios';
import { BASE_URL } from "../constants/api";
import {useState,useEffect} from 'react';

export default function Accordion() {
  const [data,setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [sports,setSports] = useState([]);
  const [free,setFree] = useState([]);

  const scholarship_data = [
    {
      id: 1,
      title:"Felix Scholarships",
      about:"TThe Felix Scholarship enables outstanding students from India to pursue graduate studies in any subject at the University of Oxford, the University of Reading and the School of Oriental and African Studies, University of London (SOAS). Felix has been supporting students at Oxford since 1991.",
      deadline:"05/09/2023",
      award:"£8,000"
    },
    {
      id: 2,
      title:"Standard Bank Africa Chairman's Scholarships",
      about:"The following scholarships are managed by the University's Student Fees and Funding team. This list is provided to give an idea of the centrally-managed funds that are available to graduate students starting a degree in the 2024-25 academic year. ",
      deadline:"05/09/2023",
      award:"£5,000"
    },
    {
      id: 3,
      title:"Flinders International Postgraduate Research Scholarship",
      about:"The Flinders International Research Scholarship (FIPRS) is a scholarship specifically intended to support international students that covers international tuition fees and also provides a stipend.",
      deadline:"05/09/2023",
      award:"£10,000"
    },
    {
      id: 4,
      title:"Be Bold No-Essay Scholarship",
      about:"At Bold.org, we believe that the world will be shaped by the bold—the fighters, the risk-takers, the earnest overachievers who won’t take no for an answer—the ones who know that a mountain is climbed a step at a time",
      deadline:"05/09/2023",
      award:"£15,000"
    },
    {
      id: 5,
      title:"Nitro Pay For College No-Essay Scholarship",
      about:"aying for college can be daunting. With so many options available, navigating financial aid and student loan resources is no trivial matter, and a wrong turn can mean far more debt than you bargained for.",
      deadline:"05/09/2023",
      award:"£5,000"
    }
  ]
  
	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	};

  const token = localStorage.getItem("token");

	const getScholarship = async () => {
		try {
			const res = await axios.get(`${BASE_URL}/scholarship`, config);
			// console.log(res?.data.subscription, "==-----");

			setData(res.data.data);
      console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

  const getFree = async() => {
    try{
      const res = await axios.get(`${BASE_URL}/scholarship/free/scholarships`);
      console.log(res);
      setData(res.data.data);
    }catch(error){
      console.log(error);
    }
  }

  const getSports = async() => {
    try{
      const res = await axios.get(`${BASE_URL}/scholarship/sports`,config);
      console.log(res);
      setData(res.data.data);
    }catch(error){
      console.log(error);
    }
  }

  const getSTEM = async() => {
    try{

    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    // getScholarship();
 if(token){
  getScholarship();
 } else {
  getFree();
 }
    // getSports();
  },[]);

  
  // Pagination Logic
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <>
      <section className="accordion-section"
        style={{
            color: '#1d2855' 
        }}
      >
        <CustomContainer>
          <div className="accordion-container"
          > 
            <h1 className="accordion-title">
              Find the right
              <br />
              scholarships for you
            </h1>
            <div className="filter-buttons">
              <button className="filter-button primary">All Scholarships</button>
              <button className="filter-button secondary">STEM</button>
              <button className="filter-button secondary">Women</button>
              <button className="filter-button secondary"
                // onClick={async () => {
                //   const res = await getSports();  // Wait for API call to complete
                //   setData(res?.data?.data || []);
                // }}
              >Sports</button>
            </div>
          </div>
          <div className="scholarship-list" 
          >
            {currentData
              .map((data, i) => (
                <ScholarshipCard
                  key={i}
                  data={data}
                />
              ))}
          </div>
          <div className="pagination-controls">
            <button 
              className="pagination-button" 
              onClick={handlePrevPage} 
              disabled={currentPage === 1}
            >
              ←
            </button>
            <span className="pagination-text">
              <span>{currentPage}</span>
              <span className="text-muted"> of </span>
              <span>{totalPages}</span>
            </span>
            <button 
              className="pagination-button" 
              onClick={handleNextPage} 
              disabled={currentPage === totalPages}
            >
              →
            </button>
          </div>
        </CustomContainer>
      </section>

      <CustomContainer>
        <section className="faq-section"
        >
          <div className="faq-grid">
            <div className="faq-image-container">
              <div className="faq-image">
                <img
                  src="https://res.cloudinary.com/digrh1wj1/image/upload/v1742428495/Group_4_cl8hlc.png"
                  alt="Student with backpack"
                />
              </div>
            </div>
            <FAQ />
          </div>
        </section>
      </CustomContainer>
    </>
  );
}
