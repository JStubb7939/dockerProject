class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: this.props.videos,
      currentVideo: this.props.videos[0]
    };
  }

  handleListEntryTitleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className='col-md-7'>
          <VideoPlayer video={ this.state.currentVideo }/>
        </div>
        <div className='col-md-5'>
          <VideoList videos={ this.state.videos } handleListEntryTitleClick={ this.handleListEntryTitleClick.bind(this) }/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
