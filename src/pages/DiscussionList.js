// import axios from 'axios';
import { useEffect, useState } from 'react';
import DiscussionItem from '../components/discussions/DiscussionItem';
import classes from './DiscussionList.module.css';

// const DUMMY_DISCUSSIONS = [
//   {
//     id: '1',
//     topic: 'test_topic_1',
//     description: 'test_description_1',
//     replies: [
//       {
//         uId:'person1',
//         reply:'reply1'
//       },
//       {
//         uId:'person2',
//         reply:'reply2'
//       }
//     ]
//   },
//   {
//     id: '2',
//     topic: 'test_topic_2',
//     description: 'test_description_2',
//     replies: [
//       {
//         uId:'person1',
//         reply:'reply1'
//       },
//       {
//         uId:'person2',
//         reply:'reply2'
//       }
//     ]
//   }
// ];

function DiscussionListPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    fetch('https://discussion-forum-1aece-default-rtdb.firebaseio.com/discussions.json')
      .then((response) => {
        return response.json();
      })
      .then(data => {
        const allDiscussions = [];

        for (const key in data) {
          const disc = {
            id: key,
            ...data[key]
          };
          allDiscussions.push(disc);
        }

        setIsLoading(false);
        setDiscussions(allDiscussions);
      })
  }, []);

  return (
    <section>
      <h1>List of Discussions.</h1>
      {isLoading ? <p>Loading... Please wait..</p> : (
        <ul className={classes.list}>
          {discussions.map((discussion) => (
            <DiscussionItem
              key={discussion.id}
              id={discussion.id}
              title={discussion.topic}
              description={discussion.description}
            />)
          )}
        </ul>
      )}
    </section>
  );
}

export default DiscussionListPage;