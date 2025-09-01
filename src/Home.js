const Home = () => {

    const handleclick = (e) => {
        console.log("hello ninjas", e);
    }
    const handleclickagain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleclick}>Click Me</button>
            <button onClick={(e) => {handleclickagain('jerome', e)}}>Click Me Again</button>
        </div>
    )
}

export default Home;