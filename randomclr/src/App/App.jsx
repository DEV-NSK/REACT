import React from 'react';
import Navbar from '/src/Navbar/Navbar.jsx';
import {Route , Routes} from 'react-router-dom';
import Randomclr from '/src/Randomclr/Randomclr.jsx';
import TeluguQuotes from '/src/TeluguQuotes/TeluguQuotes.jsx';
import ThemeToggler from '/src/ThemeTogglr/ThemeTglr.jsx';
import SignUp from '/src/SignUp/SignUp.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Randomclr/>}/>
                    <Route path='/TeluguQuotes' element={<TeluguQuotes/>}/>
                    <Route path='/ThemeToggler' element={<ThemeToggler/>}/>
                    <Route path='/SignUp' element={<SignUp/>}/>
                </Routes>
            </div>
        )
    }
}

export default App;