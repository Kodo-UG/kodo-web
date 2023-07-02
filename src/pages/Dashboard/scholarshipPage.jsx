/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Scholarshipcard from "../../components/card/Scholarshipcard";
import { Link } from "react-router-dom";

const ScholarshipPage = () => {
	const [data, setData] = useState([]);
	const [subscription, setSubscription] = useState(false);
	const getScholarship = async () => {
		try {
			const token =
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbm8xOTIwMkBnbWFpbC5jb20iLCJ1c2VySWQiOiI2NDk2YzE4ZDc3ZGYzMTBkMWU3OWRmNWEiLCJpYXQiOjE2ODc2MDE1OTR9.W_HZn7Z8diK-D3Qjfyg_C8JTcnC2QRjALVh3Dr7Aick";
			const headers = {
				Authorization: `Bearer ${token}`,
			};

			let res = await axios.get("http://165.227.139.53/api/v1/scholarship", {
				headers,
			});

			setData(res.data.data);
			// console.log(res.data.data);
			setSubscription(res.data.subscription);
			// console.log(res.data.subscription);
		} catch (error) {
			// Handle the error here
		}
	};

	useEffect(() => {
		getScholarship();
	}, []);

	return (
		<div>
			<div className="content-wrapper">
				{/* Content Header (Page header) */}
				<div className="content-header">
					<div className="container-fluid">
						<div className="row mb-2">
							<div className="col-sm-6">
								<h1 className="m-0 text-dark">Scholarship Available</h1>
							</div>
							{/* /.col */}
							<div className="col-sm-6">
								<ol className="breadcrumb float-sm-right">
									<li className="breadcrumb-item">
										<Link to="/">Home</Link>
									</li>
									<li className="breadcrumb-item active">Dashboard</li>
								</ol>
							</div>
							{/* /.col */}
						</div>
						{/* /.row */}
					</div>
					{/* /.container-fluid */}
				</div>
				{/* /.content-header */}
				{/* Main content */}
				<section className="content">
					<div className="container-fluid">
						{/* Small boxes (Stat box) */}
						<div className="row">
							{/* ./col */}

							{/* ./col */}

							{/* ./col */}
							<div className="col-lg-3 col-6">
								{/* small box */}
								<div className="small-box bg-danger">
									<div className="inner">
										<h3>65</h3>
										<p>Pending Scholarships</p>
									</div>
									<div className="icon">
										<i className="ion ion-pie-graph" />
									</div>
									<a href="#" className="small-box-footer">
										More info{" "}
										<i className="fas fa-arrow-circle-right" />
									</a>
								</div>
							</div>
							{data?.map((dta) => (
								<Scholarshipcard
									key={dta.id}
									cardTitle={dta.title}
									award={dta.award}
									deadline={dta.deadline}
									text={dta.about}
									subscription={subscription}
								/>
							))}
						</div>
					</div>
				</section>
				{/* /.content */}
			</div>
		</div>
	);
};

export default ScholarshipPage;
