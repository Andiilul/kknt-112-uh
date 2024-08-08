import React, { useState, useEffect } from "react";

export const SitusTosora: React.FC = () => {
	const time = 3;
	const [countdown, setCountdown] = useState(time);

	useEffect(() => {
		const interval = setInterval(() => {
			setCountdown((prevCountdown) => prevCountdown - 1);
		}, 1000);

		const timer = setTimeout(() => {
			window.location.href = "https://mui.com/material-ui/react-modal";
		}, time * 1000);

		return () => {
			clearInterval(interval);
			clearTimeout(timer);
		};
	}, []);

	return <>Redirecting to Situs Tosora in {countdown} seconds...</>;
};
