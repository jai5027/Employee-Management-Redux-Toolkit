import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { closeEmployeePopup } from '../../store/features/popup/popup.Slice';
import { useEffect, useState } from 'react';
import { postEmployee, updateEmployee } from '../../store/features/employee/employee.thunk';

function EmployeePopup() {

    const [formDetails, setFormDetails] = useState({
        name:'',
        email:'',
        bio:'',
        profileurl:'',
        highlight: false
    })
    
    const dispatch = useDispatch()  
    const popup = useSelector(state=> state.popup.employeepopup)

    const inputCLick = (e) => {
    const { name, value } = e.target
    setFormDetails({...formDetails, [name]: value})
    }

    const OnSubmit = async () => {
        if(popup.id) {
        await dispatch(updateEmployee({
            id: popup.id,
            details: formDetails
        }))
        } else {
        await dispatch(postEmployee(formDetails))
        }
        dispatch(closeEmployeePopup())
}

    useEffect(() => {
        if(!popup){
            setFormDetails({
                name:'',
                email:'',
                bio:'',
                profileurl:'',
                highlight: false
            })
        } else if(popup.id){
            setFormDetails({
                name: popup.name,
                email: popup.email,
                bio: popup.bio,
                profileurl: popup.profileurl,
                highlight: false 
            })
        }
    }, [popup])

    if(!popup) return null   


    return (
        <div onClick={() => dispatch(closeEmployeePopup())} className="fixed top-0 left-0 w-full h-full bg-black/70 z-20 flex items-center justify-center">
        <fieldset onClick={(e) => e.stopPropagation()} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Page details</legend>
  
  <label className="label">Employee Name</label>
  <input name='name' value={formDetails.name} onChange={inputCLick} type="text" className="input" placeholder="Enter Name" />

  <label className="label">Email</label>
  <input name='email' value={formDetails.email} onChange={inputCLick} type="email" className="input" placeholder="Enter Email" />

  <label className="label">Profile Url</label>
  <input name='profileurl' value={formDetails.profileurl} onChange={inputCLick} type="text" className="input" placeholder="Profile Url" />

  <label className="label">Bio</label>
  <textarea name='bio' value={formDetails.bio} onChange={inputCLick} className="textarea h-24" placeholder="Bio"></textarea>

  <button onClick={OnSubmit} className="btn btn-neutral mt-4">Submit</button>

</fieldset>
</div>
    )
}

export default EmployeePopup