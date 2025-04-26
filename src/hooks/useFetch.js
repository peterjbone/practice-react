import React, { useState, useEffect } from "react";

export const useFecth = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, seteError] = useState(null);

	useEffect(() => {
		const getData = async (url) => {
			try {
				let res = await fetch(url);

				if (!res.ok) {
					throw {
						err: true,
						status: res.status,
						statusText: res.statusText || "Ocurrió un error"
					};
				}

				//comienza la peticion
				let data = await res.json();

				setIsPending(false);
				setData(data);
				seteError({ err: false });
			} catch (error) {
				setIsPending(true);
			}
		};

		getData(url);
	}, [url]);

	return { data, isPending, error };
};
