


export const fetcher = (url: string) => {
	if(!url || url.indexOf('undefined')) Promise.resolve(undefined)
	return fetch(url)
		.then(e=> e.json())
		.then(json=> json)
		.catch(e=> e.toString())
}