/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Swal from 'sweetalert2'
const Modal = ({ data }) => {
    const handleUpdate = (event) => {
        event.preventDefault()
        const form = event.target;
        const status = form.status.value;
        const updateData = { status: status }
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://task-server-blue.vercel.app/tasks/${data._id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updateData)
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.modifiedCount > 0) {
                            Swal.fire(
                                'Updated !',
                                'Your status has been updated.',
                                'success'
                            )
                            window.location.reload(false);
                        }
                    })

            }
        })

        console.log(updateData)

    }


    return (
        <>
            <input type="checkbox" id={data._id} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form onSubmit={() => handleUpdate(event)}>
                        <h1 className="font-bold text-2xl text-center">Update Status {data.name}{data._id}</h1>
                        <div className="card-body">
                            <div className="flex justify-center gap-5">
                                <div className="form-control flex">
                                    <label className="label">
                                        <span className="label-text">Status</span>
                                    </label>
                                    <select name="status" defaultValue={data.status}>
                                        <option value="active">Active</option>
                                        <option value="complete">Completed</option>
                                        <option value="pending">Pending</option>
                                    </select>
                                </div>
                                <input type="submit" value="Update" className="btn w-20 btn-primary mt-5" />
                            </div>
                        </div>
                    </form>
                    <div className="modal-action">
                        <label  htmlFor={data._id} className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
