import React, { useState } from 'react';
import style from './GenericDropdown.module.scss';

const GenericDropdown = ({
	children,
	title = "title",
	options = [

	],
	className,
	...props
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	return (
		<div className={[style.genericDropdown, className].join(" ")}{...props}>
			<div className={style.selectBox}
				style={{
					position: "relative"
				}}
				onClick={() => {
					setIsExpanded(!isExpanded);
				}}>
				<select >
					<option>{title}</option>
				</select>
				<div className="overSelect" style={{
					position: "absolute",
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
				}}></div>
			</div>
			<div style={{ display: isExpanded ? "block" : "none" }} className={style.option}>
				{options.map((item, index) => {
					return (
						<label htmlFor={item.text} key={item.text + index}>
							<input
								type="checkbox"
								id={item.text}
								onChange={(event) => { item.setChecked(event.target.value) }}
							/>
							{item.text}
						</label>
					);
				})}
			</div>

		</div>
	);
};

export default GenericDropdown;
