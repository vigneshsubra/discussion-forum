import { Link, useHistory } from "react-router-dom";

import classes from './HeaderBar.module.css';

function HeaderBar() {
  const history = useHistory();

  function newDiscussionHandler() {
    history.push('/new-discussion')
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Discussion Forum</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Discussion List</Link>
          </li>
          <li className={classes.actions}>
            <button onClick={newDiscussionHandler}>New Discussion</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderBar;