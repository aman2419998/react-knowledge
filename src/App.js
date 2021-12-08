import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import StreamList from './components/streams/StreamList';
import StreamCreate from './components/streams/StreamCreate';
import StreamEdit from './components/streams/StreamEdit';
import StreamShow from './components/streams/StreamShow';
import StreamDelete from './components/streams/StreamDelete';
import Header from './components/Header';

const App = () => {
    return (
        <div className="ui container" >
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={ StreamList } />
                    <Route path="/stream/create" exact component={ StreamCreate } />
                    <Route path="/stream/edit" exact component={ StreamEdit } />
                    <Route path="/stream/delete" exact component={ StreamDelete } />
                    <Route path="/stream/show" exact component={ StreamShow } />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
