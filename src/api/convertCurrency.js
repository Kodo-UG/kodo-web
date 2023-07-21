import React,{useState} from "react"
// import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://openexchangerates.org/api/convert/null/Required/Required',
//   params: {app_id: '1ea893cebe9d4cbb8a9092e76a7c4511'},
//   headers: {accept: 'application/json'}
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });





const AutoConvert = () => {
    const [initialState , setState] = useState({
        currencies:["USD","EUR","INR","UGX"],
        base:"USD",
        amount:"",
        to:"UGX",
        result:"",
        
    })
}