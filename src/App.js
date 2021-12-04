import React from 'react'
import SongDetail from './components/SongDetail'
import Songs from './components/Songs'

const App = () => {
    return (
        <div style={{ marginTop: '20px' }} className="ui grid container">
            <div className="eight wide column"> <Songs /> </div>
            <div className="eight wide column"> <SongDetail /> </div>
        </div>
    )
}

export default App
