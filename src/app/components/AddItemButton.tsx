import React from 'react';

const AddItemButton = () => {
    return (
        <div>
            <button className='btn btn-secondary btn-sm' onClick={() => {
                const modal = document.getElementById('addItem');
                if (modal) {
                    (modal as HTMLDialogElement).showModal();
                }
            }}>Add New Item</button>

            <dialog id="addItem" className="modal">
                <div className="modal-box ">
                    <h2 className="text-2xl font-bold mb-5">Add New Item</h2>
                    <input type="text" placeholder="Item ID" className="input input-bordered w-full" />
                    <input type="text" placeholder="Item Description" className="input input-bordered w-full mt-5" />
                    <input type="text" placeholder="Item Unit Price" className="input input-bordered w-full mt-5" />
                    <input type="text" placeholder="Item QTY" className="input input-bordered w-full mt-5" />

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
    );
};

export default AddItemButton;