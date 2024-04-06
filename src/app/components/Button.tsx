'use client'


export default function Button() {

  return (
    <div>
      <button className='btn btn-secondary btn-sm' onClick={() => {
        const modal = document.getElementById('my_modal_1');
        if (modal) {
          (modal as HTMLDialogElement).showModal();
        }
      }}>Add New Customer</button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box ">
          <input type="text" placeholder="Customer ID" className="input input-bordered w-full" />
          <input type="text" placeholder="Customer Name" className="input input-bordered w-full mt-5" />
          <input type="text" placeholder="Customer Address" className="input input-bordered w-full mt-5" />
          <input type="text" placeholder="Customer Salary" className="input input-bordered w-full mt-5" />

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
              <button className="btn ml-4 btn-primary">Add Customer</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}