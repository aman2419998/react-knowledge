import React from 'react'
import { Router, Route } from 'react-router-dom';

import StreamList from './components/streams/StreamList';
import StreamCreate from './components/streams/StreamCreate';
import StreamEdit from './components/streams/StreamEdit';
import StreamShow from './components/streams/StreamShow';
import StreamDelete from './components/streams/StreamDelete';
import Header from './components/Header';
import history from './history';

const App = () => {
    return (
        <div className="ui container" >
            <Router history={ history }>
                <div>
                    <Header />
                    <Route path="/" exact component={ StreamList } />
                    <Route path="/stream/create" exact component={ StreamCreate } />
                    <Route path="/stream/edit/:id" exact component={ StreamEdit } />
                    <Route path="/stream/delete/:id" exact component={ StreamDelete } />
                    <Route path="/stream/show" exact component={ StreamShow } />
                </div>
            </Router>
        </div>
    )
}

export default App
