/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Scholarshipcard from "../../components/card/Scholarshipcard";
import { Row } from "antd";
import MyChart from "../../components/chart";

const Dashboard = () => {
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
								<h1 className="m-0 text-dark">User Dashboard</h1>
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
									<a href="/" className="small-box-footer">
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
							<div
								style={{
									fontWeight: "",
									fontSize: "27px",
									margin: "5px",
								}}
							>
								Data Visualizations
							</div>
							<MyChart />
							{/* <Row justify="center" gutter={[16, 16]}>

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
							    </Row> */}
						</div>
					</div>
				</section>
				{/* /.content */}
			</div>
		</div>
	);
};

export default Dashboard;
