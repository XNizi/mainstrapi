const body = document.querySelector('.body')

const url = 'http://145.239.91.37:1337/api/articles'

fetch(url, {
	headers: {
		Authorization:
			'Bearer ' +
			'47d94c33e0f9a06fbb540d7d9891dbd5107d91596399d0db493cc6453aa36404dce0e32a9c08b39db699c199af3427a4dd6a418493f76beeacb0837f0a789d32cfbed6e7004a92bc6d1b819f1b1555fa71693202de8877820e238dac29fb4598a6fda717207f2efce9127466b66697307c40773355653d123cae58d0bf3ee74f',
	},
})
	.then(res => res.json())
	.then(data => main(data))
	.catch(err => console.error(err))

const main = data => {
	for (let i = 0; i < data.data.length; i++) {
		const para = document.createElement('p')
		para.textContent = data.data[i].attributes.Title
		body.appendChild(para)
	}
}
