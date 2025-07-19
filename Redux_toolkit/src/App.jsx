import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userDelete } from "./store/reducers/UserReducer";

function App() {
  
  const {users} = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();     //Action
  //  console.log(users);

  const deleteHandler = (index) => {
    dispatch(userDelete(index));
  }

  return (
    <div className="mx-10 container  bg-red-200 p-5 mt-5 ">
      <h1 className="text-2xl font-bold overflow-hidden text-red-900">User list</h1>
      {users.map((user, index) => {
        return (
          <div key={user.id} >
            <p>{user.name} {" "}
            <span onClick={()=> deleteHandler(index)}
            className='text-red-700 font-black cursor-pointer'>X</span> </p> 
          </div>
      )
      })}
    </div>
  );
}

export default App;
