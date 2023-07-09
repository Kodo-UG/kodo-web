import React from "react";
import {Link} from 'react-router-dom'

const Footer = () => {
	return (
<div>
  <div>
    <footer className="main-footer" style={{ height: '30px' }}>
      <strong>
        &copy; 2023 <Link to="">Kodo scholarships</Link>.
      </strong>
      All rights reserved.
      <div className="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.0.0
      </div>
    </footer>
  </div>
</div>

	);
};

export default Footer;
