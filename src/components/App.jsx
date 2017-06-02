class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: this.props.videos,
      currentVideo: this.props.videos[0]
    };
  }

  render() {
    return (
      <div>
        <Nav />
        <div className='col-md-7'>
          <VideoPlayer video={ this.state.currentVideo }/>
        </div>
        <div className='col-md-5'>
          <VideoList videos={ this.state.videos }/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
