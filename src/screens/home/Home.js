import React from "react";
import './Home.css'
import "../../common/header/Header"
import Header from "../../common/header/Header.js";
import UpComingMoviesGrid from "./UpComingMoviesGrid";
import moviesData from "../../common/moviesData";
import ReleasedMoviesGrid from './ReleasedMoviesGrid'

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = { data: moviesData };
    }

    render() {
        return (

            <div>
                <Header />
                <span className="heading">Upcoming Movies</span>
                <UpComingMoviesGrid moviesData={this.state.data} />

                <div className="flex-container">
                    <div className="left">
                        <ReleasedMoviesGrid moviesData={this.state.data} />
                    </div>
                    <div className="right"></div>
                </div>

            </div>
        );

    }
}


export default Home;