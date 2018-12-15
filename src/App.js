import React from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      newBlog: '',
      showAll: true,
      error: null,
      username: '',
      password: '',
      user: null
    };
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    );
  }

  addBlog = (event) => {
    event.preventDefault();
    const noteObject = {
      title: this.state.newBlog
    };
    noteService
      .create(noteObject)
      .then(newNote => {
        this.setState({
          notes: this.state.notes.concat(newNote),
          newNote: ''
        });
      });
  }

  login = (event) => {
    event.preventDefault();
    console.log('logging in with', this.state.username, this.state.password);
  }

  handleNoteChange = (event) => {
    this.setState({ newNote: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  }

  toggleVisible = () => {
    this.setState({ showAll: !this.state.showAll });
  }

  render() {
    return (
      <div>
      <h1>Muistiinpanot</h1>

      <Notification message={this.state.error} />

      <h2>Log in to application</h2>

      <form onSubmit={this.login}>
        <div>
          username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          password:
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </div>
        <button type="submit">login</button>
      </form>

      <h2>Create new Blog</h2>

      <form onSubmit={this.addBlog}>
        <input
          value={this.state.newBloge}
          onChange={this.handleBlogChange}
        />
        <button type="submit">save</button>
      </form>

      <h2>Blogs</h2>
      {this.state.blogs.map(blog => 
          <Blog key={blog._id} blog={blog}/>
        )}
      </div >
    );
  }
}

export default App;
/**
 *       <div>
        <h2>blogs</h2>
        {this.state.blogs.map(blog => 
          <Blog key={blog._id} blog={blog}/>
        )}
      </div>
 */