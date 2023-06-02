/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import Modal from "../../Components/Modal";
import TransitionEffect from "../../Components/TransitionEffect";
import Header from '../../Components/Header'

const Home = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('https://task-server-blue.vercel.app/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])



    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://task-server-blue.vercel.app/tasks/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your task has been deleted.',
                                'success'
                            )
                            const remaining = tasks.filter(task => task?._id !== id);
                            setTasks(remaining)
                        }
                    })

            }
        })
    }
    return (
        <>
        <Header></Header>
        <div className="max-w-5xl mx-auto mt-10">
            <TransitionEffect></TransitionEffect>
            
            <div className="flex justify-center">
                <Link to='/addTask'><button className="btn btn-neutral">Add A New Task</button></Link>
            </div>


            <div className="mt-10">
                <h1 className="text-center">Task Lists</h1>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>Delete</th>
                                <th>Task</th>
                                <th>Description</th>
                                <th>Time</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks?.map(task => <tr key={task?._id}>
                                    <th><button onClick={() => handleDelete(task?._id)} className="px-6 bg-red-500 rounded-full ">X</button></th>
                                    <td>{task?.name}</td>
                                    <td>{task?.description}</td>
                                    <td>{task?.time}</td>
                                    <td className="flex justify-between w-[12rem]"> <span>{task?.status}</span>
                                        <div>
                                        <label htmlFor={task?._id} className="px-6 bg-green-500 rounded-full">Update</label>
                                            <Modal data={task}/>
                                        </div>
                                    </td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
        </>
    );
};

export default Home;