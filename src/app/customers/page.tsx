'use client'

import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import ButtonComponent from '../components/Button';
import EditButton from '../components/EditButton';
import DeleteButton from '../components/DeleteButton';
import { getAllCustomers } from '../service/customer.service';

interface Customer {
    id: string;
    name: string;
    address: string;
    salary: string;
}

const CustomersPage = () => {

    const [id, setId] = useState('CUS-001');
    const [name, setName] = useState('kamal');
    const [address, setAddress] = useState('Matara');
    const [salary, setSalary] = useState('Galle');

    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        getAllCustomers().then((response) => {
            setCustomers(response);
          });
    }, []);


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

                           {customers.map((customer, index) => {
                                return (
                                    <tr key={index} className='hover:bg-slate-500'>
                                        <td>{customer.id}</td>
                                        <td>{customer.name}</td>
                                        <td>{customer.address}</td>
                                        <td>{customer.salary}</td>
                                        <td>
                                            <EditButton />
                                            <DeleteButton />
                                        </td>
                                    </tr>
                                );
                            })
                           }
                        </tbody>
                    </table>
                </div>
            </section>

        </div>
    );
};

export default CustomersPage;