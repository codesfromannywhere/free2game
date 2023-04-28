import React from 'react';
import style from './AllGamesPage.module.scss'
import GenericDropdown from '../../components/buttons/GenericDropdown';

const AllGamesPage = () => {
	return (
		<main className={style.allGamesPage}>
			<GenericDropdown
				name="test">
				<option value={"Platform"}>PLATFORM</option>
				<option>All Platforms</option>
				<option>Windows (PC)</option>
				<option>Browser (Web)</option>
			</GenericDropdown>
			<GenericDropdown
				name="test">
				<option value={"Genre/Tag"}>GENRE/TAG</option>
				<option>MMORPG</option>
				<option>Shooter</option>
				<option>Strategy</option>
				<option>Moba</option>
			</GenericDropdown>
			<GenericDropdown
				name="test">
				<option value={"Sort by"}>SORT BY</option>
				<option>Relevance</option>
				<option>Popularity</option>
				<option>Release Date</option>
				<option>Alphabetical</option>
			</GenericDropdown>
		</main>
	);
};

export default AllGamesPage;
