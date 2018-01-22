import React from 'react';

export const EachListItem = (props) => {
    return (
        <div
            onClick={props
            .openByCategory}
            className=" row list-group-item   list-group-item-action ml-0"
            style={{
            background: " #FFF8DC"
        }}>
            <div className="col-md-0 fa fa-arrow-right" area-hidden="true"></div>
            <div className="col" style={{
                textAlign: "left", textTransform:'capitalize'
            }}>{props.categoryName}</div>
            <div className="row">
                <div className="badge badge-pill badge-warning mr-3">{props.completeArray
                        .filter(r => r.details.category.toLowerCase() === props.categoryName.toLowerCase())
                        .length}</div>
            </div>
        </div>
    );
}