import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "@pages/Dashboard";
import All from "@pages/dashborad/All";
import Cooking from "@pages/dashborad/Cooking";
import Queue from "@pages/dashborad/Queue";
import Completed from "@pages/dashborad/Completed";
import Canceled from "@pages/dashborad/Canceled";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} >
      <Route index element={<Navigate to="all" replace />} />
        <Route path="all" element={<All />} />
        <Route path="cooking" element={<Cooking />} />
        <Route path="queue" element={<Queue />} />
        <Route path="completed" element={<Completed />} />
        <Route path="canceled" element={<Canceled />} />
      </Route> 
    </Routes>
  )
}

export default App
