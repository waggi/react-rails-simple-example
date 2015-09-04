var Posts = React.createClass({
    getInitialState: function () {
        return {posts: this.props.initialPosts}
    },
    render: function () {
        var posts = this.state.posts.map(function (post) {
            return <Post key={post.id} post={post}/>
        });
        return (
            <div className="container">
                <div className="controls">
                    <NewPostForm></NewPostForm>
                </div>
                <div className="posts">
                    {posts}
                </div>
            </div>
        )
    }
});