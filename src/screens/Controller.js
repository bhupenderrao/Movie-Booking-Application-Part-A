import Home from "./home/Home";
import {Component} from 'react';

class Controller extends Component {
    constructor() {
        super();
        this.baseUrl = "https://cdn.upgrad.com/uploads/production/c78acb1f-6c84-44c5-bad9-14aba05e5fbf/moviesData.js";
      }
    state = {  } 
    render() { 
        return (
            <div className="main-container">
                <Home />
            </div>
        );
    }
}
 
export default Controller;