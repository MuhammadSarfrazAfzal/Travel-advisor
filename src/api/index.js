const url = 'https://travel-advisor.p.rapidapi.com/answers/v2/list?currency=USD&units=km&lang=en_US';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': 'b05518380cmsh26a58408c122a71p145bdbjsnaa30542ae3c0',
		'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
	body: {
		contentType: 'hotel',
		contentId: '4172546',
		questionId: '8393250',
		pagee: 0,
		updateToken: ''
	}
};
import { useState } from "react";
export async function getPlacesData(){
    const [places,setPlaces]=useState([])
    try {
        const response = await fetch(url, options);
        const result = await response.json()
        setPlaces(result)
        console.log(result)
    } catch (error) {
        console.error(error);
    }
}
