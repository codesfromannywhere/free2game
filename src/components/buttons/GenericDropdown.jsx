import React, {useState} from 'react';
import style from './GenericDropdown.module.scss';
import {ClickAwayListener} from "@mui/base";

const GenericDropdown = ({
	children,
	title="title",
	singleOptionOnly= false,
	options = [],
	className,
	onOptionChange,
	optionType,
	...props
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [genreSearch, setGenreSearch] = useState("");
	return (
		<ClickAwayListener onClickAway={() => {if(isExpanded) setIsExpanded(false)}}>
			<div className={[style.genericDropdown, className].join(" ")}{...props}>
				<div className={style.selectBox}
					 style={{
						 position: "relative"
					 }}
					 onClick={() => {
						 setIsExpanded(!isExpanded);
					 }}>
					<select>
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
				<div style={{ display: isExpanded ? "flex" : "none" }} className={style.options}>
					<input type="text" id={"genre-search"} onChange={(event) => {
						setGenreSearch(event.target.value);
					}}
					onBlur={(event) => {
						event.target.value = "";
					}}/>
					{options.map((item, index) => {
						if(item.text.includes(genreSearch)){
							return (
								<label htmlFor={item.text} key={item.text + index}>
									<input
										type={singleOptionOnly ? "radio" : "checkbox"}
										name={title}
										id={item.text}
										checked={item.state}
										onChange={(event) => {
											onOptionChange(index, event.target.checked, optionType);
										}}
									/>
									{item.text}
								</label>
							);
						}
						return null;
					})}
				</div>
			</div>
		</ClickAwayListener>
	);
};

export default GenericDropdown;
