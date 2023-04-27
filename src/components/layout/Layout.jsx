import React from 'react';
import style from './Layout.scss?inline'
import {Outlet} from "react-router-dom";

const Layout = () => {
	return (
		<div className={style.layout}>
			<Outlet/>
		</div>
	);
};

export default Layout;
