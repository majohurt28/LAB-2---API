

export async function bringApi() {
    try{
        const star = await  fetch ('https://swapi.dev/api/vehicles/').then((res) => {
            return res.json();
        });
        return star.data;
    }catch (error) {
		console.log(error);
	}
    
}