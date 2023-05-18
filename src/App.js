import React, {useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

const App = () => {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) =>{
    setUserList((prevUserList)=>{
      return [...prevUserList, {name: uName, age: uAge}]
    })
  } 
  return (
    <div> 
      <AddUser onAddUser ={addUserHandler }/>
      {userList.length && <UsersList users={userList} />}
    </div>
  )
}

export default App