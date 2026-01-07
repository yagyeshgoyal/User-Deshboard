import { useEffect, useState, useContext, use } from "react";
import { ShopContext } from '../context/ShopContext';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const {user,setUser , token ,setToken, navigate} = useContext(ShopContext);


  const handleLogout = () => {
    setUser('');
    setToken('');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // navigate to login page if needed
  }
  
  useEffect(()=>{
      if(token == ''){
        navigate('/');
      }
    },[token])
  

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Welcome, {user} </h1>
        <button onClick={handleLogout} className="text-red-600">Logout</button>
      </div>

      <button className="btn mb-4" onClick={() => setShowModal(true)}>
        New Task
      </button>

      {/* {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))} */}

      {/* {showModal && <TaskModal onSave={addTask} onClose={() => setShowModal(false)} />} */}
    </div>
  );
};

export default Dashboard;
