const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: 'rgb(119, 38, 38)',
                    borderRadius: '8px'
                }}>Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: 'rgb(119, 38, 38)',
                    borderRadius: '8px',
                }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;