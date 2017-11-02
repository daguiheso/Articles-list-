import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Post from '../../posts/containers/Post.jsx'

import api from '../../api.js'

class Home extends Component {

	constructor(props) {
		super(props)

		// list component states
		this.state = {
			page: 1,
			posts: [],
			loading: true
		}
	}

	async componentDidMount() {
		const posts = await api.posts.getList(this.state.page)

		this.setState({
			posts, // posts(estate) : posts(const) ecma2015
			page: this.state.page + 1,
			loading: false
		})
	}

	render() {
		return (
			<section name="Home">
				<h1>Home</h1>

				<section>
					{/* si esta cargando va a renderizar el <h2> */}
					{this.state.loading && (
						<h2>Loading posts...</h2>
					)}

					{/* mapeo de la lista de posts */}
					{this.state.posts
						.map(post => <Post key={post.id} {...post} />)
					}
				</section>
				<Link to="/about">
					Go to about
				</Link>
			</section>

		)
	}
}

export default Home