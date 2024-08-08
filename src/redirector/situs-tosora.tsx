import React, { useState, useEffect } from "react";

export const SitusTosora: React.FC = () => {
	const time = 3;
	const [countdown, setCountdown] = useState(time);

	useEffect(() => {
		const interval = setInterval(() => {
			setCountdown((prevCountdown) => prevCountdown - 1);
		}, 1000);

		const timer = setTimeout(() => {
			window.location.href =
				"https://tosora-culture-guide.vercel.app/explore/sites";
		}, time * 1000);

		return () => {
			clearInterval(interval);
			clearTimeout(timer);
		};
	}, []);

	return <>Redirecting to Situs Tosora in {countdown} seconds...</>;
};
