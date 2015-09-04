var Post = React.createClass({
    render: function () {
        return (
            <div className="post">
                <div className="post-header">{this.props.post.title}</div>
                <div className="post-content">{this.props.post.contents}</div>
            </div>
        )
    }
});