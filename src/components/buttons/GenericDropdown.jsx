import React from 'react';
import style from './GenericDropdown.module.scss'

const GenericDropdown = ({
	 children,
	 onClick,
	 className,
	 disabled,
	 ...props
}) => {
	return (
		<select
			className={[style.genericDropdown, className].join(" ")}
			onClick={onClick}
			disabled={disabled}
			{...props}
		>
			{children}
		</select>
	);
};

export default GenericDropdown;
