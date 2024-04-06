'use client'

import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import ButtonComponent from '../components/Button';
import EditButton from '../components/EditButton';
import DeleteButton from '../components/DeleteButton';


const CustomersPage = () => {

    const [id, setId] = useState('CUS-001');
    const [name, setName] = useState('kamal');
    const [address, setAddress] = useState('Matara');
    const [salary, setSalary] = useState('Galle');


    return (
        <div>
            <NavBar />

            <section className='container mt-10 flex justify-end'>
                <ButtonComponent />
            </section>

            <section className='container m-auto mt-10'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-cyan-50 text-left'>
                                <th>#</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Salary</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className='hover:bg-lime-900 text-cyan-50'>
                                <th>CUS-001</th>
                                <td>SAVINDA</td>
                                <td>GALLE</td>
                                <td>12500.998</td>
                                <td className='p-0'>
                                <EditButton id={id} name={name} address={address} salary={salary} />
                                <DeleteButton id={'CUS-000001'} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

        </div>
    );
};

export default CustomersPage;