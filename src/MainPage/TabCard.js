import Card from "./Card";
import React from "react";


const TabCard = (props) => {
    let table = [];
    let tcard = [];
    table = props.gtable;
    let size = 0;

    if (table) {
        size = table.length;

        for (let i = 0; i < size; i++) {
            tcard[i] = (
                <Card
                    key={i+1}
                    openPosts={props.openPosts}
                    lesson={table[i]["name"]}
                    group="II"
                    color="#ec524b"

                />
            )
        }
    }

    return tcard;
}

export default TabCard