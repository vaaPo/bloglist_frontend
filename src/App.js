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
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser');  // try in chrome dev console: window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      this.setState({ user });
      blogService.setToken(user.token);
    }
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
  //https://developer.mozilla.org/en-US/docs/Web/API/Storage
  //window.localStorage.setItem('nimi', 'juha tauriainen')
  //window.localStorage.getItem('nimi')
  //window.localStorage.removeItem('nimi')



login = async (event) => {
  event.preventDefault();
  try{
    console.log('App.js login try before loginService.login');
    const user = await loginService.login({
      username: this.state.username,
      password: this.state.password
    });
    console.log('App.js login try after loginService.login');
    window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user));
    console.log('App.js login window.localStorage.getItem(\'loggedBlogAppUser\')');

    blogService.setToken(user.token);
    console.log('App.js login blogService.setToken');

    this.setState({ username: '', password: '', user });
  } catch(exception) {
    this.setState({
      error: 'username or password is wrong',
    });
    setTimeout(() => {
      this.setState({ error: null });
    }, 5000);
  }
}

logout = async (event) => {
  event.preventDefault();
  try {
    window.localStorage.removeItem('loggedBlogappUser');
    blogService.setToken(null);
    this.setState({ user: null });
  } catch(exception) {
    this.setState({
      error: 'problem when trying logout'
    });
    setTimeout(() => {
      this.setState({ error: null});
    },5000);
  }
}

handleBlogChange = (event) => {
  this.setState({ newBlog: event.target.value });
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
  const loginForm = () => (
    <div>
      <h2>Log in to application</h2>

      <form onSubmit={this.login}>
        <div>
            username
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleLoginFieldChange}
          />
        </div>
        <div>
          password
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleLoginFieldChange}
          />
        </div>
        <button>LOGIN</button>
      </form>
    </div>
  );

//        <button type="submit">login</button>


  const blogForm = () => (
    <div>
      <h2>Create new blog</h2>
      <form onSubmit={this.addBlog}>
        <input
          value={this.state.newBlog}
          onChange={this.handleBlogChange}
        />
        <button type="submit">create new blog</button>
      </form>
    </div>
  );

  const blogsRows = () => (
    <div>
      <h2>Blogs</h2>
      {this.state.blogs.map(blog => 
        <Blog key={blog._id} blog={blog}/>
      )}
    </div>
  );

  const loggedInuser = () => (
    <div>
      <p>{this.state.user.name} logged in</p><button onClick={this.logout}>logout</button>
    </div>
  );

  return (
    <div>
      <h1>Blogs</h1>

      <Notification message={this.state.error} />
      <okNotification message={this.state.oklogin} />

      {this.state.user === null && loginForm()}
      {this.state.user !== null && loggedInuser()}
      {this.state.user !== null && blogsRows()}
      {this.state.user !== null && blogForm()}
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