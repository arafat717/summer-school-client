import { useEffect, useState } from "react";
import PopularInstructorCart from "./PopularInstructorCart";
import SectionTittle from "../../SectionTittle/SectionTittle";


const PopularInstructor = () => {
    const [instructor, setInstructor] = useState([]);
    useEffect(()=>{
        fetch('https://summer-camp-school-server-wheat.vercel.app/instructoris')
        .then(res=> res.json())
        .then(data=>{
            setInstructor(data)
        })
    },[])
    return (
        <div className="mt-8 mb-5">
            <SectionTittle sunheading={"popular instructors"}></SectionTittle>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    instructor.map(instru => <PopularInstructorCart key={instru._id} instru={instru}></PopularInstructorCart>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;