/* eslint-disable react/prop-types */


const SectionTittle = ({ heading, sunheading }) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-yellow-600 mb-2">{heading}</p>
            <h1 className="text-3xl text-yellow-600 mb-2 uppercase border-y-4 py-4">---{sunheading}---</h1>
        </div>
    );
};

export default SectionTittle;