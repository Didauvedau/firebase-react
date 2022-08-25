import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { db } from "../../firebase/firebase";
import { doc, deleteDoc } from "firebase/firestore";
const Todo = ({ arr }) => {
  return (
    <div className="container">
      <List className="todo__list">
        <ListItem>
          <ListItemAvatar />
          <ListItemText primary={arr.item.todo} secondary={arr.item.todo} />
        </ListItem>
        <DeleteIcon
          fontSize="large"
          className="delete-icon"
          style={{ opacity: 0.7 }}
          onClick={() => {
            deleteDoc(doc(db, "todos", arr.id));
          }}
        />
      </List>
    </div>
  );
};
export default Todo;
