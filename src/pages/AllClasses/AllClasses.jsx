import { useEffect, useState } from "react";
import AllClassesCart from "./AllClassesCart";
import SectionTittle from "../../SectionTittle/SectionTittle";

const AllClasses = () => {
    const [allclasses, setAllclasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allclasses')
            .then(res => res.json())
            .then(data => {
                setAllclasses(data)
            })
    }, [])
    return (
        <>
         <SectionTittle sunheading={"available calsses"}></SectionTittle>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    allclasses.map(classes => <AllClassesCart key={classes._id} classes={classes}></AllClassesCart>)
                }
            </div>
        </>
    );
};

export default AllClasses;