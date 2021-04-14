import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logoamarillo.png";
import { Navbar, Nav, Image, DropdownButton, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";

export const NavbarMenu = () => {
	const { store, actions } = useContext(Context);
	return (
		<Navbar src="https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2019/08/Planet-with-Three-Suns-Discovered-Featured-image.jpg">
			<Navbar.Brand>
				<Link to="/">
					<Image src={logo} alt="" width="250px" height="100px" />
				</Link>
			</Navbar.Brand>
			{/* <Nav className="mr-auto">
				<Link className="nav-link" to="/planets">
					Planets
				</Link>
				<Link className="nav-link" to="/characters">
					Characters
				</Link>
			</Nav> */}
			<Dropdown>
				<Dropdown.Toggle id="dropdown-basic">
					Favoritos <span className="badge badge-light">{store.favorites.length}</span>
				</Dropdown.Toggle>
				<Dropdown.Menu>
					{store.favorites.map((item, index) => {
						return (
							<Dropdown.Item key={index} href="#/action-1">
								{item}
								<span onClick={() => actions.setFavorites(item)}>
									<i className="fas fa-trash-alt float-right" />
								</span>
							</Dropdown.Item>
						);
					})}
					{/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
					<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
					<Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
				</Dropdown.Menu>
			</Dropdown>
		</Navbar>
		// <nav className="navbar navbar-light bg-light mb-3">
		// 	<Link to="/">
		// 		{/* <span className="navbar-brand mb-0 h1"></span> */}
		// 		<img src={logo} alt="" style={{ width: "90px", height: "90px" }} />
		// 	</Link>
		// 	<div className="ml-auto">
		// 		<Link to="/demo">
		// 			<button className="btn btn-primary">Check the Context in action</button>
		// 		</Link>
		// 	</div>
		// </nav>
	);
};
