import NewDiscussionForm from "./NewDiscussionForm";
import axios from 'axios';
import { useHistory } from "react-router-dom";

function NewDiscussionPage() {
  const history = useHistory();
  const headers = {
    'Content-Type': 'application/json',
  }

  function postDiscussionHandler(newDiscussionData) {
    axios.post('https://discussion-forum-1aece-default-rtdb.firebaseio.com/discussions.json', newDiscussionData, {headers: headers})
      .then(() => {
        history.replace('/');
      });
  }
  return (
    <section>
      <h3>Post a new discussion!</h3>
      <NewDiscussionForm onPostDiscussion={postDiscussionHandler} />
    </section>
  );
}

export default NewDiscussionPage;