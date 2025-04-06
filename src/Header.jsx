import { useEffect, useRef } from "react";

function Header({ title, listUpdateFunction, currentListType }) {
  const headerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (type) => type === currentListType;

  return (
    <div className="header-div" ref={headerRef}>
      <h1 className="header-title">{title}</h1>
      <div className="header-button-div">
        <button className={`header-button ${isActive("top_rated") ? "active" : ""}`} onClick={() => listUpdateFunction("top_rated")}>Top Rated</button>
        <button className={`header-button ${isActive("popular") ? "active" : ""}`} onClick={() => listUpdateFunction("popular")}>Popular</button>
        <button className={`header-button ${isActive("upcoming") ? "active" : ""}`} onClick={() => listUpdateFunction("upcoming")}>Upcoming</button>
      </div>
    </div>
  );
}

export default Header;
