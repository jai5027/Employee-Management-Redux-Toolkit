import { useDispatch, useSelector } from "react-redux"
import { closeDeletePopup } from "../../store/features/popup/popup.Slice";

function DeletePopup() {

    const dispatch = useDispatch()

    const deletepopup = useSelector(state=> state.popup.deletepopup)
    console.log(deletepopup);
    
    if(!deletepopup) return null

    return (
        <div onClick={() => dispatch(closeDeletePopup())} className="fixed top-0 left-0 w-full h-full bg-black/70 z-20 flex items-center justify-center">
        <div onClick={(e)=> e.stopPropagation()} className="card card-dash bg-base-100 w-96">
  <div className="card-body flex flex-col justify-center items-center">
    <h2 className="card-title text-2xl">Delete</h2>
    <p className="text-lg">Are you sure you want to detele this ?</p>
    <div className="card-actions justify-end mt-5">
      <button className="btn btn-primary">Yes</button>
      <button onClick={() => dispatch(closeDeletePopup())} className="btn btn-primary">No</button>
    </div>
  </div>
</div>

</div>
    )
}

export default DeletePopup