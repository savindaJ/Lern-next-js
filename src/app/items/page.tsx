'use strict';


import React from 'react';
import NavBar from '../components/NavBar';
import AddItemButton from '../components/AddItemButton';
import ItemEditButton from '../components/ItemEditButton';
import DeleteButton from '../components/DeleteButton';

const ItemPage = () => {
    return (
        <div>
            <NavBar />
            <section className='container mt-10 flex justify-end'>
                <AddItemButton />
            </section>

            <section className='container m-auto mt-10'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-cyan-50 text-left'>
                                <th>#</th>
                                <th>Description</th>
                                <th>Unit Price</th>
                                <th>QTY</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className='hover:bg-lime-900 text-cyan-50'>
                                <td>ITM-001</td>
                                <td>LUX</td>
                                <td>12500.998</td>
                                <td>10</td>
                                <td className='flex'>
                                    <ItemEditButton />
                                    <DeleteButton id={'ITM-0001'} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default ItemPage;