var NewPostForm = React.createClass({
    render: function () {
        return (
            <div className="post-form">
            <input type="text" placeholder="title"/>
            <input type="text" placeholder="content"/>
            <button type="submit">Submit</button>
            </div>
        )
    }
});