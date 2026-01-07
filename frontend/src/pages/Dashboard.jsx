import { useEffect, useState } from "react";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  ;

  

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Welcome </h1>
        <button onClick="" className="text-red-600">Logout</button>
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
