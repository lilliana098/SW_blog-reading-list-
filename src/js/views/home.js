import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Section } from "../component/section";
import { Container, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Section title="Characters" dlist={store.peopleList} />
			<Section title="Planets" dlist={store.planetList} />
			{/* <span>{JSON.stringify(store.favorites)}</span> */}
			{/* <ul>
				{store.peopleList.map((item, index) => {
					return (
						<li key={index}>
							<span>{item.name}</span>
							{store.favorites.includes(item.name) ? null : (
								<Button onClick={() => actions.setFavorites(item.name)} variant="outline-primary">
									Favorito
								</Button>
							)}
						</li>
					);
				})}
			</ul> */}
		</>
	);
	// <div className="mt-5">
	// <br />
	// 	<Section />
	// 	<h1>Planets</h1>
	// 	<Section />	<h1>Characters</h1>

	// </div>
};
