
const SectionHeading = ({ subHeading, heading }) => {
    return (
        <div className="text-center">
            <p className="text-yellow-700 text-xl font-semibold font-serif uppercase">--- {subHeading} ---</p>
            <hr className="divider w-1/4 mx-auto h-1"></hr>
            <h1 className="font-bold text-4xl text-black font-serif uppercase">{heading}</h1>
            <hr className="divider w-1/4 mx-auto pb-10 h-1"></hr>
        </div>
    );
};

export default SectionHeading;