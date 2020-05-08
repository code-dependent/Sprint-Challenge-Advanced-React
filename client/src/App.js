// 1a. ______Import Useful Dependencies/Assets_________//
import React from 'react';
import {Button} from 'reactstrap'
import axios from 'axios'
import {url} from './assets/Assets'
import ContestantCards from './components/ContestantCards'
import './App.css';


// 1b. ______Build Class Component_________//
class App extends React.Component {
// 2.______Initalize State_________//
  constructor(){
    super();
    this.state = {
      data:[],
      darkMode:false
    }
  }
// 3.______Fetch Data From API Through Lifecycle Method cDM_________//
  componentDidMount(){
    axios
      .get(url)
      .then(res=>{
        console.log(res.data)
        this.setState({
          data:res.data
        })
      })
      .catch(err=>{
        console.log(err)
      })
  }
  toggleMode = e => {
    e.preventDefault();
    this.setState({
      darkMode:!this.state.darkMode});
  };
// 4.______Render JSX Elements Through 'render' method_________//
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 data-testid='headline'>🏆Women of the World Cup🏆</h1>
          <a>June 2019 - July 2019</a>
          <a onClick={this.toggleMode} className={this.state.darkMode ? 'toggle toggled' : 'toggle'}>{this.state.darkMode ? 'Lighten Page':'Darken Page'}</a>
          
        <ContestantCards data={this.state.data}/>
        </header>
        {/* <SearchForm
          changeHandle={this.changeHandle}
          submitHandle={this.submitHandle}
          formValue={this.state.formValue}/> */}
      </div>
    );
  }
}

export default App;
