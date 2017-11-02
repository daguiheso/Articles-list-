import React, { Component } from 'react'
import PropTypes from 'prop-types'

import api from '../../api.js'


class Post extends Component {

	constructor(props) {
		super(props)

		this.state = {
			loading: true,
			user: {},
			comments: []
		}
	}

	// cuando componente se monte
	async componentDidMount() {
		// descomponiendo un array para obtener su primer valor que va a ser usuario y su segundo valor que sera los comentarios
		const [
			user,
			comments
		] = await Promise.all([
			api.users.getSingle(this.props.userId),
			api.posts.getComments(this.props.id)
		])

		// actualizando el estado
		this.setState({
			loading: false,
			user,
			comments
		})
	}

	render() {
		return (
			<article id={`post-${this.props.id}`}>
				<h2>{this.props.title}</h2>
				<p>
					{this.props.body}
				</p>
				{/* si no esta cargando va a renderizar un <div> con datos extras */}
				{!this.state.loading && (
					<div>
						{/* rel="nofollow" para que los buscadores no sigan este link */}
						<a href={`//${this.state.user.website}`} target="_black" rel="nofollow">
              {this.state.user.name}
            </a>
            <span>
              hay {this.state.comments.length} comentarios
            </span>
					</div>
				)}
			</article>
		)
	}
}

Post.propTypes = {
	id: PropTypes.number,
	userId: PropTypes.number,
	title: PropTypes.string,
	body: PropTypes.string
}

export default Post