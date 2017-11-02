import fecth from 'isomorphic-fetch'

const baseUrl = 'https://jsonplaceholder.typicode.com'

const api = {
	posts: {
		async getList(page = 1) {
			const response = await fetch(`${baseUrl}/posts?_page=${page}`)
			// pasando a  josn la data
			const data = await response.json()
			return data
		},
		async getSingle(id = 1) {
			const response = await fetch(`${baseUrl}/posts/${id}`)
			const data = await response.json()
			return data
		},
		async getComments(id = 1) {
			const response = await fetch(`${baseUrl}/post/${id}/comments`)
			const data = await response.json()
			return data
		}
	},
	users: {
		async getSingle(id = 1) {
			const response = await fetch(`${baseUrl}/users/${id}`)
			const data = await response.json()
			return data
		}
	}
}

export default api