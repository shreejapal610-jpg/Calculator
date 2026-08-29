import index from './index.html';
import nxtpg from './nxtpg.html';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function route() {
    return (
        <Router>
            <div className="App">
                <display/>
                <div classname="routing">
                    <Switch>
                    <Route>
                        <Route path="/" element={<index.html/>}/>
                        <Route path="/nxtpg.html" element={<nxtpg.html/>}/>
                    </Route>
                    </Switch>
                </div>
            </div>
            
            
            </Router>
        
    );}
