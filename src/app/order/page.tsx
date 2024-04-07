'use client';

import React from 'react';
import NavBar from '../components/NavBar';
import { getCusIds, getItemIds } from '../service/order.service';
import { getItem } from '../service/item.service';
import { getCustomer } from '../service/customer.service';

interface Item {
    id: string;
    description: string;
    price: number;
    quantity: number;
}

interface Customer {
    id: string;
    name: string;
    address: string;
    salary: number;
}

const OrderPage = () => {

    const [cusids, setCusids] = React.useState<string[]>([]);

    const [itemIds, setItemIds] = React.useState<string[]>([]);

    const [item, setItem] = React.useState<Item>({id: '', description: '', price: 0, quantity: 0}); 

    const [customer, setCustomer] = React.useState<Customer>({id: '', name: '', address: '', salary: 0});

    React.useEffect(() => {
        getItemIds().then(data => setItemIds(data));
    }, []);

    React.useEffect(() => {
       getCusIds().then(data => setCusids(data));
    }, []);

    return (
        <div>
            <NavBar />
            <section className='container m-auto'>
                <input type="text" placeholder="Next ID" className="input input-bordered w-96 mt-5 mr-8" />
                <input type="date" placeholder="Type here" className="input input-bordered w-96 mt-5" />
                <div className="grid grid-cols-3 gap-4 mt-5 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
                    <div className="border rounded-lg">
                        <form className="p-4">
                            <label className="label">Select Customer</label>
                            <select onChange={(e)=>{
                                getCustomer(e.target.value).then(data => {
                                    setCustomer(data);
                                });
                            }} aria-placeholder='select customer' className="select select-bordered w-full m-auto">
                                <option className='h-5' selected></option>
                                {cusids.map(id => <option className='cursor-pointer' key={id}>{id}</option>)}
                            </select>
                            <input type="text" value={customer.name} placeholder="Type here" className="input input-bordered w-full mt-5 h-10" />
                            <input type="text"  value={customer.address}  placeholder="Type here" className="input input-bordered w-full mt-5 h-10" />
                            <input type="text"  value={customer.salary}  placeholder="Type here" className="input input-bordered w-full mt-5 h-10" />
                        </form>
                    </div>
                    <div className="border rounded-lg">
                        <form className="p-4">
                            <label className="label">Select Item</label>
                            <select onChange={(e)=>{
                                getItem(e.target.value).then(data => {
                                    setItem(data);
                                });
                            }} aria-placeholder='select customer' className="select select-bordered w-full m-auto">
                                <option className='h-5' selected></option>
                                {itemIds.map(id => <option key={id}>{id}</option>)}
                            </select>
                            <input type="text" value={item.description} placeholder="description" className="input input-bordered w-full mt-5 h-10" />
                            <input type="text" value={item.price} placeholder="Type here" className="input input-bordered w-full mt-5 h-10" />
                            <input type="text" value={item.quantity} placeholder="Type here" className="input input-bordered w-full mt-5 h-10" />
                            <input type="number" placeholder="QTY" className="input input-bordered w-full mt-5 h-10" />
                            <button className="btn btn-primary w-full mt-5" type='button'>Add Item</button>
                        </form>
                    </div>
                    <div className="border">
                        <form className="p-4">
                            <h1 className="text-2xl">Order Summary</h1>
                            <h2 className="text-xl">Total: $0.00</h2>
                            <input type="text" placeholder="Cash" className="input input-bordered w-full mt-5 h-10" />
                            <input type="text" placeholder="Balance" className="input input-bordered w-full mt-5 h-10" />
                            <button className="btn btn-primary w-full mt-5" type='button'>Place Order</button>
                        </form>
                    </div>
                </div>
                <table className="table mt-11">
                        {/* head */}
                        <thead>
                            <tr className='text-cyan-50 text-left'>
                                <th>#</th>
                                <th>Desctiption</th>
                                <th>Unit Price</th>
                                <th>Qty</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className='hover:bg-lime-900 text-cyan-50'>
                                <th>CUS-001</th>
                                <td>SAVINDA</td>
                                <td>GALLE</td>
                                <td>12500.998</td>
                            </tr>
                        </tbody>
                    </table>
            </section>
        </div>
    );
};

export default OrderPage;