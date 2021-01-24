import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SPORTS } from 'routes/paths';
import Sports from './SportsNews';

function SportsNews() {
    return (
        <Switch>
            <Route path={SPORTS}>
                <Sports />
            </Route>
        </Switch>
    );
}

export default SportsNews;
    
    
