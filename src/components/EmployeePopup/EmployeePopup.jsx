import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { closeEmployeePopup } from '../../store/features/popup/popup.Slice';

function EmployeePopup() {

        const dispatch = useDispatch()  
    
    const popup = useSelector(state=> state.popup.employeepopup)
    console.log(popup);
    
    if(!popup) return null


    return (
        <div onClick={() => dispatch(closeEmployeePopup())} className="fixed top-0 left-0 w-full h-full bg-black/70 z-20 flex items-center justify-center">
        <fieldset onClick={(e) => e.stopPropagation()} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Page details</legend>
  
  <label className="label">Employee Name</label>
  <input type="text" className="input" placeholder="Enter Name" />

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Enter Email" />

  <label className="label">Profile Url</label>
  <input type="text" className="input" placeholder="Profile Url" />

  <label className="label">Bio</label>
  <textarea className="textarea h-24" placeholder="Bio"></textarea>

  <button className="btn btn-neutral mt-4">Submit</button>

</fieldset>
</div>
    )
}

export default EmployeePopup