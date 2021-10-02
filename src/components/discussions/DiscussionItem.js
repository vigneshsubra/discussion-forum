import { Link } from 'react-router-dom';
import BaseCard from '../ui/BaseCard';
import classes from './DiscussionItem.module.css';

function DiscussionItem(props) {
  // const history = useHistory();

  const discussionId = props.id;

  // function openDiscussionHandler(){
  //   history.push({ 
  //     pathname: '/discussion-page',
  //     state: {detail: id}
  //    });
  // }

  return (
    <BaseCard>
      <li className={classes.item}>
        <div className={classes.title}>
          <h2>{props.title}</h2>
        </div>
        <div className={classes.content}>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          {/* <button onClick= {openDiscussionHandler}>Open Discussion</button> */}
          <Link to={{
            pathname: "/discussion-page",
            state: discussionId
          }}>Open Discussion</Link>
        </div>
      </li>
    </BaseCard>
  );
}

export default DiscussionItem;