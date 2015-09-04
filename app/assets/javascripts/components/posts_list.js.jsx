var Posts = React.createClass({
    getInitialState: function () {
        return {posts: this.props.initialPosts}
    },
    handlePost: function (postData) {
        $.ajax({
            url: 'posts',
            data: postData,
            type: 'POST',
            dataType: 'json',
            success: function (data) {
                this.setState({posts: this.state.posts.concat([data])})
            }.bind(this)
        })
    },
    render: function () {
        var posts = this.state.posts.map(function (post) {
            return <Post key={post.id} post={post}/>
        });
        return (
            <div className="container">
                <div className="controls">
                    <NewPostForm onPostHandle={this.handlePost}/>
                </div>
                <div className="posts">
                    {posts}
                </div>
            </div>
        )
    }
});