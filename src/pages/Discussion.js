import { useEffect, useRef, useState } from 'react';
import { useLocation } from "react-router-dom";
import BaseCard from "../components/ui/BaseCard";
import classes from './Discussion.module.css';

// const DUMMY_DISCUSSIONS = [
//   {
//     id: '1',
//     topic: 'test_topic_1',
//     description: 'test_description_1jsdbgjkbsgsdbvkjlsvbkjdvbisdnosndshfpnfiefgoishfisnegfoshgoshgoisghhgohgosirhgsigngipprgknb;fn;dmfv;mdfmnldnbdfmdgnmdfo',
//     replies: [
//       {
//         uId: 'person1',
//         reply: 'reply1'
//       },
//       {
//         uId: 'person2',
//         reply: 'reply2'
//       }
//     ]
//   },
//   {
//     id: '2',
//     topic: 'test_topic_2',
//     description: 'test_description_2',
//     replies: [
//       {
//         uId: 'person1',
//         reply: 'reply1'
//       },
//       {
//         uId: 'person2',
//         reply: 'reply2'
//       }
//     ]
//   }
// ];

function DiscussionPage() {
  const replyInputref = useRef();
  const location = useLocation();
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

        setDiscussions(allDiscussions);
      })
  }, []);

  const currentData = discussions.find((discussion) => discussion.id === location.state);

  return (
    <div className={classes.outer}>
      <h3> Topic:</h3>
      <BaseCard>
        <div>
          <h2>{currentData && currentData.topic}</h2>
        </div>
      </BaseCard>
      <h3>Description:</h3>
      <BaseCard>
        <div>
          <p>{currentData && currentData.description}</p>
        </div>
      </BaseCard>
      <BaseCard>
        <div className={classes.control}>
          <label htmlFor='reply'>Type your reply here:</label>
          <textarea id='reply' rows='5' ref={replyInputref}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Post</button>
        </div>
      </BaseCard>
      <h3>Replies:</h3>
      {currentData && currentData.replies && currentData.replies.map((rep) => (
        <BaseCard>
          <div>
            {rep}
          </div>
        </BaseCard>
      ))}
    </div>
  );
}

export default DiscussionPage;