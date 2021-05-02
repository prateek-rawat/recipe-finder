import React from "react";
import "../css/structure.css"
import mainLogo from "../images/main-logo.svg"

const Structure = (props) => {

    const searchInputHandler = (e) => {
        props.setInputValue(e.target.value)
    };

    const APIreq = async (e) => {
        e.preventDefault()
        props.setInputValue("")
        const data = await fetch(`https://api.edamam.com/search?q=${props.inputValue}&app_id=${props.appId}&app_key=${props.applicationKey}`)
        const response = await data.json()
        if (data.status === 200) {
            props.setRecipes(response.hits)
            props.setMore(response.more)
        }
        else {
            throw Error("unable to fetch data");
        }
    };

    return (
        <div className={`top-div ${props.more === "initial" ? "top-div-dynamic" : undefined}`}>
            <div className="head-image-div">
                <h1 className="top-head">Bon Appétit</h1>
                <img className="main-logo-image" src={mainLogo}></img>
            </div>
            <form className="search-form">
                <input className="search-input" onChange={searchInputHandler} value={props.inputValue} />
                <button className="search-button" onClick={props.inputValue !== "" ? APIreq : undefined}>Search</button>
            </form>
        </div>
    )
};

export default Structure;