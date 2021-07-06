import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Fashion from '../pages/Fashion/Fashion'
import Web from '../pages/Web/Web'
import About from '../pages/About/About'

const Routes = () => {
    return (
        <Switch>
            <Route path="https://pauladeandres.github.io/portfolio/" exact render={() => <Home />} />
            <Route path="/about" render={() => <About />} />
            <Route path="/fashion-projects" render={() => <Fashion />} />
            <Route path="/web-projects" render={() => <Web />} />
        </Switch>
    )
}

export default Routes