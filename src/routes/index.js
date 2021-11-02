import {Switch, Route} from 'react-router-dom';
import Initial from '../Pages/Initial';
import Primeira from '../Pages/Primeira';
import Segunda from '../Pages/Segunda';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Initial />
            </Route>
            <Route exact path="/primeira">
                <Primeira />
            </Route>
            <Route exact path="/segunda">
                <Segunda />
            </Route>
        </Switch>
    )
}

export default Routes;