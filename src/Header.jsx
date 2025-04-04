function Header({title, listUpdateFunction}){
    return(
        <>
            <div className="header-div">
                <h1 className="header-title">{title}</h1>
                <div className="header-button-div">
                    <button className="header-button" onClick={() => listUpdateFunction("top_rated")}>Top Rated</button>
                    <button className="header-button" onClick={() => listUpdateFunction("popular")}>Popular</button>
                    <button className="header-button" onClick={() => listUpdateFunction("upcoming")}>Upcoming</button>
                </div>
            </div>
        </>
    );
}

export default Header;