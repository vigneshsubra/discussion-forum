import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useParams } from "react-router-dom";
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
  const { id } = useParams();
  // const location = useLocation();
  const [discussion, setDiscussion] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const headers = {
    'Content-Type': 'application/json',
  }

  useEffect(() => {
    axios.get(`https://discussion-forum-1aece-default-rtdb.firebaseio.com/discussions/${id}.json`).then((response) => {
      setDiscussion(response);
      setIsLoading(false);
    })
  }, [id]);

  const replyHandler = (data) => {
    // const reply = {
    //   r: data
    // }
    axios.put(`https://discussion-forum-1aece-default-rtdb.firebaseio.com/discussions/${id}/replies.json`, data, { headers: headers })
  }

  return (
    <div className={classes.outer}>
      <h3> Topic:</h3>
      <BaseCard>
        <div>
          {isLoading ? 'Loading... Please wait..' : (<h2>{discussion.data && discussion.data.topic}</h2>)}
        </div>
      </BaseCard>
      <h3>Description:</h3>
      <BaseCard>
        <div>
        {isLoading ? 'Loading... Please wait..' : (<p>{discussion.data && discussion.data.description}</p>)}  
        </div>
      </BaseCard>
      <BaseCard>
        <div className={classes.control}>
          <label htmlFor='reply'>Type your reply here:</label>
          <textarea id='reply' rows='5' ref={replyInputref}></textarea>
        </div>
        <div className={classes.actions}>
          <button onClick={() => replyHandler(replyInputref.current.value)}>Post</button>
        </div>
      </BaseCard>
      <h3>Replies:</h3>
      {/* {currentData && currentData.replies && currentData.replies.map((rep) => (
        <BaseCard>
          <div>
            {rep}
          </div>
        </BaseCard>
      ))} */}
    </div>
  );
}

export default DiscussionPage;