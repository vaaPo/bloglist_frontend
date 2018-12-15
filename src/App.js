import React from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Notification from './components/Notification/Notification';    //notifications
import OkNotification from './components/Notification/OkNotification';    //notifications
import loginService from './services/login';

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
      user: null,
      oklogin: null
    };
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    );
  }

  /**
  addBlog = (event) => {
    event.preventDefault();
    const noteObject = {
      title: this.state.newBlog
    };
    blogService
      .create(blogObject)
      .then(newBlog => {
        this.setState({
          blogs: this.state.blogs.concat(newBlog),
          newBlog: ''
        });
      });
  }
 */
/**
  login = (event) => {
    event.preventDefault();
    console.log('logging in with', this.state.username, this.state.password);
    this.setState({ oklogin: "logging in"});
  }
 */
login = async (event) => {
  event.preventDefault();
  try{
    const user = await loginService.login({
      username: this.state.username,
      password: this.state.password
    });

    this.setState({ username: '', password: '', user });
  } catch(exception) {
    this.setState({
      error: 'käyttäjätunnus tai salasana virheellinen',
    });
    setTimeout(() => {
      this.setState({ error: null, oklogin: 'logging in' });
    }, 5000);
  }
}



  handleNoteChange = (event) => {
    this.setState({ newNote: event.target.value });
  }
/**
  handleLoginFieldChange = (event) => {
    if (event.target.name === 'password') {
      this.setState({ password: event.target.value });
    } else if (event.target.name === 'username') {
      this.setState({ username: event.target.value });
    }
  }
 */
  handleLoginFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

/**
 * const field = 'name'
   const object = { [field] : 'Arto Hellas' }

 */
/**
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  }
 */

  toggleVisible = () => {
    this.setState({ showAll: !this.state.showAll });
  }

  render() {
    return (
      <div>
      <h1>Muistiinpanot</h1>

      <Notification message={this.state.error} />

      <h2>Log in to application</h2>
      <okNotification message={this.state.oklogin} />

      <form onSubmit={this.login}>
        <div>
          käyttäjätunnus
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleLoginFieldChange}
          />
        </div>
        <div>
          salasana
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleLoginFieldChange}
          />
        </div>
        <button type="submit">kirjaudu</button>
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