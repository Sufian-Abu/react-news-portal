import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllNewsContent from 'screens/AllNews';
import CultureNews from 'screens/Culture';
import LifeStyleNews from 'screens/LifeStyle';
import SportsNews from 'screens/Sports';
import { PageNotFound } from 'screens/Errors';
import {
    ALL_NEWS,
    SPORTS,
    CULTURE,
    LIFESTYLE
} from './paths';
import {
    NewsContextProvider
} from '../contexts/NewsContext';

const Routes = () => {
    return (
        <NewsContextProvider>
            <Switch>
                <Route path={LIFESTYLE}>
                    <LifeStyleNews />
                </Route>                
                <Route path={CULTURE}>
                    <CultureNews />
                </Route>                
                <Route path={SPORTS}>
                    <SportsNews />
                </Route>                
                <Route path={ALL_NEWS}>
                    <AllNewsContent />
                </Route>                
                <Route path="*">
                    <PageNotFound />
                </Route>
            </Switch>
        </NewsContextProvider>
    );
};

export default Routes;