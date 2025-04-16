import React, { useState, useEffect } from "react";

export const useFecth = (url) => {
	const [first, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, seteError] = useState(null);
};
