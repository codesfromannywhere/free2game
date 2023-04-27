import React from 'react';
import style from './Layout.scss?inline'
import {Outlet} from "react-router-dom";

const Layout = ({children}) => {
	return (
		<div className={style.layout}>
			<aside>

			</aside>
			<header>

			</header>
			<main>
				{children}
			</main>
		</div>
	);
};

export default Layout;
