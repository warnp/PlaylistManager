var data = [
{id: 1, author: "Toto", title:"First music"},
{id: 2, author:"titi", title:"Second music"}
];


var MusicList = React.createClass({
    render: function(){
        var musicNode = this.props.data.map(function(music){
            return (
                <div key={music.id}>{music.title}</div>
            );
        });
        return (
            <div className="musicList">{musicNode}</div>
        );

    }
});

var Container = React.createClass({
    render: function(){
        return (
            <div className="container">
                <MusicList data={this.props.data} />
            </div>
        );
    }
});

ReactDOM.render(
    <Container data={data} />,
    document.getElementById('content')
);