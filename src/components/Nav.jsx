import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';



const Nav = (props) => {

    if (props.activeUser.username !== undefined)
    {
        return (
            <>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                Sign In
                            </Link>
                        </li>
                        <li>
                            <Link to="/Browse">
                                Browse
                            </Link>
                        </li>
                        <li>
                            <Link to="/Recommended">
                                Recommended
                            </Link>
                        </li>
                        <li>
                            <Link to="/UserProfile">
                                User Profile
                            </Link>
                        </li>
                    </ul>
                </nav>
            </>
        );
    }
    else {
        return (
            <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                Sign In
                            </Link>
                        </li>
                    </ul>
            </nav>
        );
    }
    
}
export default connect ( state => ({activeUser: state.activeUser}))(Nav);