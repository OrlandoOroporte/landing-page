import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="home">
			<h1 className="text">A Warm Welcome</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur doloribus iusto accusantium cum praesentium a omnis quo rerum maiores maxime quia quibusdam veniam vero nostrum modi fugiat, doloremque deserunt non!
			</p>
			<a href="#" className="btn btn-primary">
				Call to action
			</a>
			
		</div>
	);
};

export default Home;

