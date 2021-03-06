import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../../presentational/practice/Input.jsx"

export default class FormContainer extends Component {
	state = {
		seo_title: ""
	}

	handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
	}

	render() {
		const { seo_title } = this.state;
		return(
      <form id="article-form">
      	<Input
      		text="SEO Title"
      		label="seo_title"
      		type="text"
      		id="seo_title"
      		value={seo_title}
      		handleChange={this.handleChange}
      	/>
      </form>
		)
	}
}
