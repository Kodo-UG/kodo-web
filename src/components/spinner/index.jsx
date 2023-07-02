import React from "react";
import { Spin } from "antd";

const Spinner = ({ wrapperClassName, size }) => (
	<Spin wrapperClassName={wrapperClassName} size={size} />
);

export default Spinner;
