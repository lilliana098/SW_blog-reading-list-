const remove = (arr, xborrar) => {
	return arr.filter(item => item != xborrar);
};
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			peopleList: [],
			planetList: []
		},
		actions: {
			fetchPeople: async () => {
				const URL = "https://swapi.dev/api/people/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();

				// console.log("Data: -->", json);
				setStore({ peopleList: json.results });
			},
			fetchPlanets: async () => {
				const URL = "https://swapi.dev/api/planets/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();

				//console.log("Data: -->", json);
				setStore({ planetList: json.results });
			},
			setFavorites: name => {
				const store = getStore();
				store.favorites.includes(name)
					? setStore({ favorites: remove(store.favorites, name) })
					: setStore({ favorites: [...store.favorites, name] });
			}
		}
	};
};

export default getState;
