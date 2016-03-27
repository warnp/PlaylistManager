//var React = require("react");
//var $ = require("jquery");

var content =
$.ajax({
    url: 'https://api.deezer.com/user/4398801/playlists?output=jsonp',
    dataType: 'jsonp',
    error: function (xhr, status, err) {
        console.log(err);
    }
});

var data = [];
var MusicList = React.createClass({
    render: function(){
        var musicNode = this.props.data.map(function(playlist){
            return (

                <li role="presentation" key={playlist.id}><a href={'#'+playlist.title} role="tab">{playlist.title}</a></li>
            );
        });
        return (
            <ul className="musicList nav nav-tabs" role="tablist" >{musicNode}</ul>
        );

    }
});

var TabContent = React.createClass({
    render: function () {
        var contentNode = this.props.data.map(function(playlist){
            return (
                <div key={playlist.id} role="tabpanel" className="tab-pane" id={playlist.title}></div>
            );
        });
        return (
            <div className="TabContent tab-content">{contentNode}</div>
        );
    }
});

var Container = React.createClass({
    getInitialState: function(){
        return ({data: []});
    },
    componentDidMount: function () {
        var r = this;
        content.done(function (data) {
            console.log(data);
            r.setState(data);
        });
        console.log("done");
    },
    render: function(){
        return (
            <div className="container">
                    <MusicList data={this.state.data} />
                    <TabContent data={this.state.data}/>
            </div>
            
        );
    }
});

ReactDOM.render(
    <Container data={data} />,
    document.getElementById('content')
);