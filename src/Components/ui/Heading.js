const Heading = ({ children, className = "" }) => {
    return (
        <h1 className={`relative text-6xl font-black leading-tight group ${className}`}>
            {children}
            <span className="absolute left-0 -bottom-1 h-1 w-20 bg-[#ffb700] rounded-full transition-all duration-300 group-hover:w-full"></span>
        </h1>
    );
};

export default Heading;
