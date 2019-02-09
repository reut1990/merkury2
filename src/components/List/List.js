import React from 'react'
import './List.css'

const List = (props) => {

    const list = props.list;
    const Component =props.CmpPreviewName;

     const List = list ? (
        list.map((item, index) => {
            return (
                <Component item={item} key={index} />
            )
        })
    ) : (
            <p> No Items To show</p>
        )

    return (
        <ul className="list-container">
            {List}
        </ul>
    )
}

export default List