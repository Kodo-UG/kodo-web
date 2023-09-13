import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";

const BlogDetails = () => {
  // Access the id parameter from the URL
  const { id } = useParams();
  const [blog, setBlog] = useState("");

  const getBlog = async () => {
    try {
      const res = await axiosInstance.get(`/blogs/${id}`);
      console.log(res.data.data);
      setBlog(res.data.data);
    } catch (error) {}
  };

//   console.log("BLOG:", blog);

  useEffect(() => {
    getBlog();
  }, []);

  return <div style={{ height: "100vh", marginTop:"10rem" }}>{blog?.description}</div>;
};

export default BlogDetails;
