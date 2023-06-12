/* eslint-disable no-unused-vars */
import useAuth from "../../Hooks/useAuth";



const AddClass = () => {
    const {user} = useAuth()
    const handleupdate = () =>{

    }

    return (
        <div className='bg-[#F4F3F0] p-24 -mt-60'>
            <h3 className='text-black text-center'>UPDATE YOUR TOYS</h3>
            <form onSubmit={handleupdate}>
                {/* name and quentity */}


                <div className='flex gap-5 m-5'>
                    <div className="form-control md:w-1/2">
                        <label className="input-group">
                            <input type="text"  placeholder="name" name='name' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">

                        <label className="input-group">
                            <input type="text" placeholder="Photo"  name='photo' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='flex gap-5 m-5'>
                    <div className="form-control md:w-1/2">

                        <label className="input-group">
                            <input type="text" placeholder="instructor name" name='discription' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">

                        <label className="input-group">
                            <input type="email" placeholder="instructor email"  name='discription' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">

                        <label className="input-group">
                            <input type="text" placeholder="price"  name='discription' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">

                        <label className="input-group">
                            <input type="text"  placeholder="sits" name='quantity' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>



                {/* name and quentity */}

                <div>
                    <input className="btn btn-block m-5 gap-5 ms-5" type="submit" value="UPDATE" />
                </div>
            </form>
        </div>
    );
};

export default AddClass;