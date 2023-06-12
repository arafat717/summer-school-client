import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";


const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/instructoris')
        .then(res=>res.json())
        .then(data=>{
            setInstructors(data)
        })
    },[])
    return (
        <div className="grid md:grid-cols-3 mb-5">
            {
                instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
            }
        </div>
    );
};

export default Instructors;