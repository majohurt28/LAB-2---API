export async function bringApi() {
    try{
        const star = await fetch ("https://swapi.dev/api/starships/").then((res) => {
            return res.json();
        });
        console.log(star)
        return star.results;
    }catch (error) {
		console.log(error);
	}
    
}