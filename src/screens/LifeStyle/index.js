import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LIFESTYLE } from 'routes/paths';
import LifeStyle from './LifeStyleNews';

function LifeStyleNews() {
    return (
        <Switch>
            <Route path={LIFESTYLE}>
                <LifeStyle />
            </Route>
        </Switch>
    );
}

export default LifeStyleNews;
    
    
    
