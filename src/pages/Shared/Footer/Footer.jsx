

const Footer = () => {
    return (
        <div>
            <footer className="bg-slate-950 text-white py-6">
                <div className="container mx-auto flex flex-wrap">
                    <div className="w-full lg:w-1/3 px-6 mb-6 lg:mb-0">
                        <a className="btn btn-ghost normal-case text-xl"><img className='w-16 rounded-full' src="https://images.pexels.com/photos/1337382/pexels-photo-1337382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></a>
                        <p className="mt-4 uppercase">Sports academies</p>
                    </div>
                    <div className="w-full lg:w-1/3 px-6 mb-6 lg:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <p>Phone: 01972041006</p>
                        <p>Email: arafatjibon@gmail.com</p>
                    </div>
                    <div className="w-full lg:w-1/3 px-6 mb-6 lg:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Address</h4>
                        <p>123 Main Street</p>
                        <p>Sherpur, State 12345</p>
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <p className="text-sm">
                        &copy; 2023 Sports academies. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;