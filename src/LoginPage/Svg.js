import React from "react";

const Svg = (props) => {
    return (
        <svg className={props.class} viewBox="0 0 24 24">{props.children}</svg>
    )
}

export default Svg