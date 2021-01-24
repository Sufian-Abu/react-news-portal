import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {
    ALL_NEWS,
    SPORTS,
    CULTURE,
    LIFESTYLE
} from '../../routes/paths';

// App header
function Header() {  
    return (
        <header>
            <div className="container">
            <div className="logo">
                The Peaks
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={ALL_NEWS}>NEWS TODAY</Link>
                    </li>
                    <li>
                        <Link to={SPORTS}>SPORTS</Link>
                    </li>
                    <li>
                        <Link to={CULTURE}>CULTURE</Link>
                    </li>
                    <li>
                        <Link to={LIFESTYLE}>LIFESTYLE</Link>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    );
}

export default withRouter(Header);
