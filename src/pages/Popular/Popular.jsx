import { useEffect, useState } from "react";
import PopularCart from "./PopularCart";
import SectionTittle from "../../SectionTittle/SectionTittle";

const Popular = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allclasses')
            .then(res => res.json())
            .then(data => {
                setClasses(data)
            })
    }, [])

    return (
        <div className="mt-10 mb-10">
            <SectionTittle sunheading={"Popular Classes Section"}></SectionTittle>
            <div className="grid md:grid-cols-2 mx-auto justify-center gap-5">

                {
                    classes.map(pro => <PopularCart key={pro._id} pro={pro}></PopularCart>)
                }

            </div>
        </div>
    );
};

export default Popular;