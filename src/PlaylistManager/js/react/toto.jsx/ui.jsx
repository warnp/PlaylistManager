var data = [
  { id: 1, author: "Pete Hunt", text: "This is one comment" },
  { id: 2, author: "Jordan Walke", text: "This is *another* comment" }
];

var ListBox = React.createClass({
    displayName: 'ListBox',
    render: function () {
        return (
            React.createElement('music', null,
                    this.props.author)
        );
    }
});

var ContainerBox = React.createClass({
    displayName: 'ContainerBox',
    render: function () {
        return (
            React.createElement('ListBox', { className: "containerBox", data: this.props.data })
            //<ListBox data={this.props.data} />
        );
    }
});

ReactDOM.render(
    React.createElement(ContainerBox, { data: { data } }),
    document.getElementById('content')
);