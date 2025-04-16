import React, { useState, useEffect } from "react";

export const useFecth = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, seteError] = useState(null);

	useEffect(() => {}, [url]);

	return { data, isPending, error };
};
