import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Cardp = props => {
	const { store, actions } = useContext(Context);
	const local = props.content;
	const isFavorite = store.favorites.includes(local.name);
	return (
		<Col className="mt-2">
			<div className="card" style={{ width: "15rem" }}>
				<img
					className="card-img-top"
					src="https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2019/08/Planet-with-Three-Suns-Discovered-Featured-image.jpg"
					alt="Placeholder"
				/>
				<div className="card-body">
					<font color="blue">
						<h5 className="card-title">{local.name}</h5>
					</font>
					<p className="card-text">
						Population: {local.population} <br />
						Terrain: {local.terrain} <br />
					</p>
					<Link to={"/planets/" + local.url.slice(local.url.length - 2)}>
						<button className="btn btn-outline-primary mr-2">Details</button>
					</Link>
					<button
						className="btn btn-outline-warning"
						onClick={() => {
							actions.setFavorites(local.name);
						}}>
						<i className={isFavorite ? "fas fa-heart" : "far fa-heart"} />
					</button>
				</div>
			</div>
		</Col>
	);
};

Cardp.propTypes = {
	content: PropTypes.object
};
