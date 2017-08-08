import fecth from 'isomorphic-fetch'

const baseUrl = 'https://jsonplaceholder.typicode.com'

const api = {
	post: {
		async getList(page = 1) {
			const response = await fetch(`${baseUrl}/post?_page=${page}`)
			// pasando a  josn la data
			const data = await response.json()
			return data
		},
		async getSingle(id = 1) {
			const response = await fetch(`${baseUrl}/post/${id}`)
			const data = await response.json()
			return data
		},
		async getComment(id = 1) {
			const response = await fetch(`${baseUrl}/post/${id}/comments`)
			const data = await response.json()
			return data
		}
	},
	user: {
		async getSingle(id = 1) {
			const response = await fetch(`${baseUrl}/users/${id}`)
			const data = await response.json()
			return data
		}
	}
}

export default api