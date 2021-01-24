
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ALL_NEWS } from 'routes/paths';
import AllNews from './AllNewsContent';

function AllNewsContent() {
    return (
        <Switch>
            <Route path={ALL_NEWS}>
                <AllNews />
            </Route>
        </Switch>
    );
}

export default AllNewsContent;
    
