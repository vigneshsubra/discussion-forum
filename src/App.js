import { Route, Switch } from 'react-router-dom';

import DiscussionListPage from './pages/DiscussionList';
import NewDiscussionPage from './pages/NewDiscussion';
import './App.css';
import Layouts from './components/layouts/Layouts';
import DiscussionPage from './pages/Discussion';

function App() {
  return (
    <div>
      <Layouts>
        <Switch>
          <Route path='/' exact>
            <DiscussionListPage />
          </Route>
          <Route path='/new-discussion' exact>
            <NewDiscussionPage />
          </Route>
          <Route path='/discussion-page/:id' component={DiscussionPage}/>
        </Switch>
      </Layouts>
    </div>
  );
}

export default App;
