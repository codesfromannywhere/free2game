import React from 'react';
import style from './GenericButton.module.scss'

const GenericButton = ({
	children,
	onClick,
	className,
	disabled,
	...props
}) => {
	return (
		<button
			className={[style.genericButton, className].join(" ")}
			onClick={onClick ? onClick : undefined}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	);
};

export default GenericButton;


