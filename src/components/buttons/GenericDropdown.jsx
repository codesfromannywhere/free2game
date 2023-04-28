import React from 'react';
import style from './GenericDropdown.module.scss'

const GenericDropdown = ({
	 children,
	 name,
	 className,
	 ...props
}) => {
	return (
		<select
			className={[style.genericDropdown, className].join(" ")}
			name={name}
			{...props}
		>
			{children}
		</select>
	);
};

export default GenericDropdown;
