import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

const SecondsCounter = (props) => {
	// console.log(digitSix);

	return (
		<>
			<div className="fondo">
				<div className="container">
					<div className="col-2">
						<p>
							<i className="fa-solid fa-clock"></i>
						</p>
					</div>
					<div className="col-1 six">
						<p>{props.digitSix % 10}</p>
					</div>
					<div className="col-1 five">
						<p>{props.digitFive % 10}</p>
					</div>
					<div className="col-1 four">
						<p>{props.digitFour % 10}</p>
					</div>
					<div className="col-1 three">
						<p>{props.digitThree % 10}</p>
					</div>
					<div className="col-1 two">
						<p>{props.digitTwo % 10}</p>
					</div>
					<div className="col-1 one">
						<p>{props.digitOne % 10} </p>
					</div>
				</div>
			</div>
		</>
	);
};

SecondsCounter.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number,
};
let counter = 0;
setInterval(function () {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(six, five, four, three, two, one);
	counter++;
	ReactDOM.render(
		<SecondsCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
			digitSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);


export default SecondsCounter;
