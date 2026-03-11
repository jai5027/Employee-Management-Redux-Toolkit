import Layout from "../layout/Layout"
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { openDeletePopup, openEmployeePopup } from "../../store/features/popup/popup.Slice";
import { updateEmployee } from "../../store/features/employee/employee.thunk";
import Loader from "../loader/Loader"

function Employees() {

  const employees = useSelector(state=>state.employee.employees)
  const loading = useSelector(state=>state.employee.loading)
  

    return (
        <Layout>
          {loading ? ( <Loader />
 ) : (
        <ul className="list bg-gray-800 rounded-box shadow-md">
          
{employees.map((details) => (
  <EmployeeCard key={details.id} details={details}/>
))}  
  </ul>
)}

</Layout>
    )
}

const EmployeeCard = ({details}) => {
  
  const dispatch = useDispatch()

  const Handlehighlight = (details) => {
    dispatch(updateEmployee({
      id: details.id,
      details: {
        ...details,
        highlight: !details.highlight
      }
    }))
  } 


    return (
        <li className="list-row">
    <div><img className="size-10 rounded-box" src={details.profileurl}/></div>
    <div>
      <div>{details.name}</div>
      <div className="text-xs uppercase font-semibold opacity-60">{details.email}</div>
    </div>
    <p className="list-col-wrap text-xs">{details.bio}
    </p>
    <button onClick={() => dispatch(openEmployeePopup(details))} className="btn btn-square btn-ghost">
       <MdEdit className="text-xl"/>
    </button>
     <button onClick={() => dispatch(openDeletePopup(details.id))} className="btn btn-square btn-ghost">
       <RiDeleteBin6Line className="text-xl"/>
    </button>
    <button onClick={() => Handlehighlight(details)} className="btn btn-square btn-ghost">
      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill={details.highlight ? 'red' : 'none'} stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
    </button>
  </li>
    )
}
export default Employees