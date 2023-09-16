import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { useMediaQuery } from "@uidotdev/usehooks";
import axiosInstance from "../../api/axiosInstance";

const Blog = () => {
	const [blogs, setBlogs] = useState([]);

	const isSm = useMediaQuery("only screen and (max-width : 700px)");

	const isMd = useMediaQuery(
		"only screen and (min-width : 700px) and (max-width : 1250px)"
	);

	const isLg = useMediaQuery(
		"only screen and (min-width : 1250px) and (max-width : 1300px)"
	);

	const getBlogs = async () => {
		try {
			const res = await axiosInstance.get("/blogs");
			console.log(res.data.data, "====");
			setBlogs(res.data.data);
		} catch (error) {}
	};

	useEffect(() => {
		getBlogs();
	}, []);

	return (
		<section
			className="shop-area pt-120 pb-120 p-relative "
			data-animation="fadeInUp animated"
			data-delay=".2s"
		>
			<div class="container">
				<div className="row">
					<div className="col-lg-6 col-sm-6">
						<h6
							className="mt-20 mb-50"
							style={{
								fontFamily: "Jost, sans-serif",
								fontWeight: "bold",
								fontSize: "15px"
							}}
						>
							Showing 1–9 of 10 results
						</h6>
					</div>
					<div className="col-lg-6 col-sm-6 text-right">
						<select
							name="orderby"
							className="orderby"
							aria-label="Shop order"
						>
							<option value="menu_order" selected="selected">
								Default sorting
							</option>
							<option value="popularity">Sort by popularity</option>
							<option value="rating">Sort by average rating</option>
							<option value="date">Sort by latest</option>
							<option value="price">Sort by price: low to high</option>
							<option value="price-desc">
								Sort by price: high to low
							</option>
						</select>
					</div>
				</div>

				{blogs.length !== 0 ? (
					<>
						<div
							style={{
								overflow: "hidden",
								display: "grid",
								gap: 10,
								gridTemplateColumns: isSm
									? "1fr"
									: "" || isMd
									? "1fr 1fr"
									: "" || isLg
									? "1fr 1fr 1fr"
									: "1fr 1fr 1fr"
							}}
						>
							{blogs.map((data) => (
								<BlogCard
									key={data._id}
									id={data._id}
									tittle={data.title}
									text={data.description}
									blogType={data.blogType || "Public"}
									image={data.image}
								/>
							))}
						</div>
						<div className="row">
							<div className="col-12">
								<div className="pagination-wrap mt-20 text-center">
									<nav>
										<ul className="pagination">
											<li className="page-item">
												<a href="#">
													<i className="fas fa-angle-double-left" />
												</a>
											</li>
											<li className="page-item active">
												<a href="#">1</a>
											</li>
											<li className="page-item">
												<a href="#">2</a>
											</li>
											<li className="page-item">
												<a href="#">3</a>
											</li>
											<li className="page-item">
												<a href="#">...</a>
											</li>
											<li className="page-item">
												<a href="#">10</a>
											</li>
											<li className="page-item">
												<a href="#">
													<i className="fas fa-angle-double-right" />
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
							<div />
						</div>
					</>
				) : (
					<>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}}
						>
							<img
								style={{
									width: "7rem ",
									height: "7rem",
									justifyContent: "center",
									alignItems: "center"
								}}
								src="https://res.cloudinary.com/itgenius/image/upload/v1692167806/Kodo-Scholarship-Loader2-1_b89na9.gif"
								alt="middle"
							/>{" "}
						</div>
					</>
				)}
			</div>
		</section>
	);
};

export default Blog;
