// Create a new  component  this component should produce some html
import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videolist';
import SearchBar from './components/searchbar';
import VideoDetail from './components/videodetail';
import _ from 'lodash';

const API_KEY = 'AIzaSyDSAoFarYZUcm6ydoadIYBCpbctW3DFOCM';
                    
class App extends Component{
  
  constructor(props){
    super(props);
    this.state={
      videos:[],
      selectedVideo:null
    };
   this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key:API_KEY,term:term},(videos) =>{
      this.setState({
          videos:videos,
          selectedVideo:videos[0]  
        });
    });
  }

  render(){

    const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo:selectedVideo}) } />
        
      </div>
    );
  }
}
  


ReactDOM.render(<App />,document.getElementById('container'));