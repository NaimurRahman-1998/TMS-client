import Swal from 'sweetalert2'
import Header from '../../Components/Header';
import TransitionEffect from '../../Components/TransitionEffect';

const AddTask = () => {
    const handleTask = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const status = form.status.value;
        const time = form.time.value;
        const description = form.description.value
        const data = { name: name, status: status, time: time, description: description }

        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Add Task!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('https://task-server-blue.vercel.app/tasks', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)
                        if (result.insertedId) {
                            console.log(data)
                            Swal.fire(
                                'Added!',
                                'Your task has been added.',
                                'success'
                            )
                        }
                    })
            }
        })

    }
    return (
        <div>
        <TransitionEffect></TransitionEffect>
        <Header></Header>
            <div className="w-[90%] lg:w-[40%] mx-auto mt-10">
                <form onSubmit={() => handleTask(event)}>
                    <div className="card-body">
                        <div className="block lg:flex justify-between gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Task Name</span>
                                </label>
                                <input type="text" required name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Status</span>
                                </label>
                                <select required name="status">
                                    <option value="active">Active</option>
                                    <option value="complete">Completed</option>
                                    <option value="pending">Pending</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Time</span>
                                </label>
                                <input required type="time" name="time" placeholder="name" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input required type="text" name="description" className="input w-full h-20 input-bordered" />
                        </div>
                        <input type="submit" value="submit" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddTask;