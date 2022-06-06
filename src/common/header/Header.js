import {Component} from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="Movies App Logo" />
                </header>
            </div>
        );
    }
}
 
export default Header;