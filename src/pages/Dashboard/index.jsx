/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import { Button, Form } from "react-bootstrap";

const Dashboard = () => {
	const [activeDropdown, setActiveDropdown] = useState("");

	const handleDropdownSelect = (option) => {
		setActiveDropdown(option);
	};

	let content;
	if (activeDropdown === "action1") {
		content = <h1>Action 1 Content</h1>;
	} else if (activeDropdown === "action2") {
		content = <h1>Action 2 Content</h1>;
	} else if (activeDropdown === "action3") {
		content = <h1>Action 3 Content</h1>;
	} else {
		content = <h1>Dashboard Content</h1>;
	}

	return (
		<div className="dashboard">
			<nav className="sidebar">
				<ul className="nav flex-column">
					<li className="nav-item">
						<a className="nav-link" href="#">
							Dashboard
						</a>
					</li>
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="dropdown1"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
							onClick={() => handleDropdownSelect("action1")}
						>
							Dropdown 1
						</a>
						<div className="dropdown-menu" aria-labelledby="dropdown1">
							<a className="dropdown-item" href="#">
								Action 1
							</a>
							<a className="dropdown-item" href="#">
								Action 2
							</a>
							<a className="dropdown-item" href="#">
								Action 3
							</a>
						</div>
					</li>
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="dropdown2"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
							onClick={() => handleDropdownSelect("action2")}
						>
							Dropdown 2
						</a>
						<div className="dropdown-menu" aria-labelledby="dropdown2">
							<a
								className="dropdown-item"
								href="#"
								onClick={() => handleDropdownSelect("action2")}
							>
								Action 4
							</a>
							<a
								className="dropdown-item"
								href="#"
								onClick={() => handleDropdownSelect("action3")}
							>
								Action 5
							</a>
						</div>
					</li>

					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="dropdown2"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
							onClick={() => handleDropdownSelect("action2")}
						>
							Dropdown 2
						</a>
						<div className="dropdown-menu" aria-labelledby="dropdown2">
							<a
								className="dropdown-item"
								href="#"
								onClick={() => handleDropdownSelect("action2")}
							>
								Action 4
							</a>
							<a
								className="dropdown-item"
								href="#"
								onClick={() => handleDropdownSelect("action3")}
							>
								Action 5
							</a>
						</div>
					</li>
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="dropdown2"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
							onClick={() => handleDropdownSelect("action2")}
						>
							Dropdown 2
						</a>
						<div className="dropdown-menu" aria-labelledby="dropdown2">
							<a
								className="dropdown-item"
								href="#"
								onClick={() => handleDropdownSelect("action2")}
							>
								Action 4
							</a>
							<a
								className="dropdown-item"
								href="#"
								onClick={() => handleDropdownSelect("action3")}
							>
								Action 5
							</a>
						</div>
					</li>
				</ul>
			</nav>
			<div className="content">
				<div className="header">
					<button className="menu-toggle" aria-label="Toggle Menu">
						<span className="menu-icon"></span>
					</button>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-success">Search</Button>
					</Form>
				</div>
				{content}
			</div>
		</div>
	);
};

export default Dashboard;
