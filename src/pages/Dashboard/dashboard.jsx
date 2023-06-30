/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import Scholarshipcard from "../../components/card/Scholarshipcard";

const Dashboard = () => {
	const data = [
		{
			id: 1,
			text: "Active Scholarships",
			bg: "bg-info",
			total: 45,
		},
		{
			id: 2,
			text: "Completed Scholarships",
			bg: "bg-success",
			total: 45,
		},
		{
			id: 3,
			text: "Scholarship Registrations",
			bg: "bg-warning",
			total: 45,
		},
		{
			id: 4,
			text: "Pending Scholarships",
			bg: "bg-warning",
			total: 45,
		},
	];

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

			console.log(res, "am here sir");
			// Process the response here
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
								<h1 className="m-0 text-dark">Dashboard</h1>
							</div>
							{/* /.col */}
							<div className="col-sm-6">
								<ol className="breadcrumb float-sm-right">
									<li className="breadcrumb-item">
										<a href="#">Home</a>
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
							<div className="col-lg-3 col-6">
								{/* small box */}
								<div className="small-box bg-info">
									<div className="inner">
										<h3>150</h3>
										<p>Active Scholarships</p>
									</div>
									<div className="icon">
										<i className="ion ion-bag" />
									</div>
									<a href="#" className="small-box-footer">
										More info{" "}
										<i className="fas fa-arrow-circle-right" />
									</a>
								</div>
							</div>
							{/* ./col */}
							<div className="col-lg-3 col-6">
								{/* small box */}
								<div className="small-box bg-success">
									<div className="inner">
										<h3>
											53<sup style={{ fontSize: 20 }}>%</sup>
										</h3>
										<p>Completed Scholarships</p>
									</div>
									<div className="icon">
										<i className="ion ion-stats-bars" />
									</div>
									<a href="#" className="small-box-footer">
										More info{" "}
										<i className="fas fa-arrow-circle-right" />
									</a>
								</div>
							</div>
							{/* ./col */}
							<div className="col-lg-3 col-6">
								{/* small box */}
								<div className="small-box bg-warning">
									<div className="inner">
										<h3>44</h3>
										<p>Scholarship Registrations</p>
									</div>
									<div className="icon">
										<i className="ion ion-person-add" />
									</div>
									<a href="#" className="small-box-footer">
										More info{" "}
										<i className="fas fa-arrow-circle-right" />
									</a>
								</div>
							</div>
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

							<Scholarshipcard />
						</div>
					</div>
				</section>
				{/* /.content */}
			</div>
		</div>
	);
};

export default Dashboard;
