

const Layout = ({children,className=""}) => {
    return (
        <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark dark:text-light p-8  ${className}`}>
            {children}
            
        </div>
    );
};

export default Layout;