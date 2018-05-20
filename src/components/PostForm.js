import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    console.log("Trigged componentWillMont in PostForm");
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    console.log("Test");

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <h2>Add Post</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title</label><br/>
            <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
          </div>
          <div>
            <label>Body</label><br/>
            <input type="text" name="body" value={this.state.body} onChange={this.onChange} />
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm;
