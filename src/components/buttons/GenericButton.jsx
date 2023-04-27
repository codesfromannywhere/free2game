import React from 'react';
import style from './GenericButton.module.scss'

const GenericButton = ({children}) => {
	return (
		<button className={style.genericButton}>
			{children}
		</button>
	);
};

export default GenericButton;
