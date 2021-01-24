import React from 'react';
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './components/Home';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import Category from './components/Category';

const App = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/product" component={Product}/>
                <Route exact path="/product/:id" component={ProductDetail}/>
                <Route exact path="/category/:id" component={Category}/>
            </Switch>
        </Layout>
    </Router>
);

export default App;