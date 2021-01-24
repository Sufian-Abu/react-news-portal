import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CULTURE } from 'routes/paths';
import Culture from './CultureNews';

function CultureNews() {
    return (
        <Switch>
            <Route path={CULTURE}>
                <Culture />
            </Route>
        </Switch>
    );
}

export default CultureNews;
    
    
    
   
