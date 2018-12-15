import React from 'react';

const BlogForm = ({ onSubmit, handleBlogChange, newBlogtitle, newBlogauthor, newBlogurl }) => {
  return (
    <div>
      <h2>Create new Blog</h2>

      <form onSubmit={onSubmit}>
        <div>
          <label>title:
            <input
              name="newBlogtitle"
              type="text"
              value={newBlogtitle}
              onChange={handleBlogChange}
            />
          </label>
        </div>
        <div>
          <label>author:
            <input
              name="newBlogauthor"
              type="text"
              value={newBlogauthor}
              onChange={handleBlogChange}
            />
          </label>
        </div>
        <div>
          <label>url:
            <input
              name="newBlogurl"
              type="text"
              value={newBlogurl}
              onChange={handleBlogChange}
            />
          </label>
        </div>
        <button>create new blog</button>
      </form>
    </div>
  );
};

export default BlogForm;

/**
  const blogForm = () => (
    <div>
      <h2>Create new blog</h2>
      <form onSubmit={this.addBlog}>
        <div>
          <label>title:
            <input
              name="newBlogtitle"
              type="text"
              value={this.state.newBlogtitle}
              onChange={this.handleBlogChange}
            />
          </label>
        </div>
        <div>
          <label>author:
            <input
              name="newBlogauthor"
              type="text"
              value={this.state.newBlogauthor}
              onChange={this.handleBlogChange}
            />
          </label>
        </div>
        <div>
          <label>url:
            <input
              name="newBlogurl"
              type="text"
              value={this.state.newBlogurl}
              onChange={this.handleBlogChange}
            />
          </label>
        </div>
        <button>create new blog</button>
      </form>
    </div>
  );
 */
