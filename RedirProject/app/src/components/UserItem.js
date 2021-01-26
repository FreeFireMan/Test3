import '../styles/user-item-styles.css'
import {useHistory} from 'react-router-dom';


export default function UserItem({item, id}) {
const history = useHistory();
    const changeLinkHandler = () => {
         history.push(`/users/${id}`)
    }
    const addPostHandler = () => {
        history.push(`/post`)
    }
    return (
        <div className="users-list-item col-4">
            {item.id}-{item.name}
            <button onClick={changeLinkHandler} type="button" className="btn btn-info details-btn">details</button>
            <button onClick={addPostHandler} type="button" className="btn btn-info details-btn">Add New Post</button>
        </div>
    );
}
