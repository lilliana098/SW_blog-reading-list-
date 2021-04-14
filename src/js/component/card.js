import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card = props => {
	const { store, actions } = useContext(Context);
	const local = props.content;
	const isFavorite = store.favorites.includes(local.name);
	return (
		<Col className="d-flex justify-content-between">
			<div className="card" style={{ width: "15rem" }}>
				<img
					className="card-img-top"
					src="https://tecnotuto.com/wp-content/uploads/2019/11/img_5dce4fc50973f.jpg"
					alt="Placeholder"
				/>
				<div className="card-body">
					<font color="blue">
						<h5 className="card-title">{local.name}</h5>
					</font>
					<p className="card-text">
						Birth Year: {local.birth_year} <br />
						Eye Color: {local.eye_color} <br />
						Height: {local.height}
					</p>
					<Link to={"/characters/" + local.url.slice(local.url.length - 2)}>
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

Card.propTypes = {
	content: PropTypes.object
};
