class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
    this.handleSearch = _.debounce(this.handleInputChange, 1000);
  }

  handleInputChange(value) {
    this.props.handleSearchInputChange(value);
    this.setState({
      value: value
    });
  }

  render() {
    return (
      <div className='search-bar form-inline'>
        <input 
          className='form-control' type='text' 
          value={this.state.value} 
          onChange={e => this.handleSearch(e.target.value)}/>
        <button className='btn hidden-sm-down'>
          <span className='glyphicon glyphicon-search'></span>
        </button>
      </div> 
    );
  }
}

window.Search = Search;
