import DeletePopup from "./components/deletePopup/DeletePopup"
import EmployeePopup from "./components/EmployeePopup/EmployeePopup"
import Employees from "./components/Employees/Employees"
import Footer from "./components/Footer"
import Navbar from "./components/navbar/Navbar"
function App() {
  

  return (
    <>
<div className="flex flex-col min-h-screen w-full">
  <EmployeePopup />
  <DeletePopup />
       <Navbar />
  <div className="flex-1 py-10">
     <Employees />
  </div>

       <Footer />
</div>       
    </>
  )
}

export default App
