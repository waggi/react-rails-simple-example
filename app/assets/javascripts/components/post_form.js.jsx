var NewPostForm = React.createClass({
    addNewPost: function () {
        var newPost = {
            post: {
                title: this.refs.title.getDOMNode().value,
                contents: this.refs.content.getDOMNode().value
            }
        };
        this.props.onPostHandle(newPost);
    },
    render: function () {
        return (
            <div className="post-form">
                <input type="text" placeholder="title" ref="title"/>
                <input type="text" placeholder="content" ref="content"/>
                <button type="submit" onClick={this.addNewPost}>Submit</button>
            </div>
        )
    }
});