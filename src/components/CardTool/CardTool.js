import React from 'react';
import {Card, Image, Rating} from "semantic-ui-react";
import {getTimeAgo, timeAgo} from '../../utilities/util';
import {Link} from "react-router-dom";


function cardTool(props) {

    // A bit of formatting of description before showing

    let description = props.description;
    description = description.toString();
    let len = description.length;
    const sliceIndex = description.length < 100 ? description.length : 100;
    description = description.slice(0, sliceIndex);
    if (sliceIndex < len) {
        description = description + '...';
    }
    return (
        <Card as={Link} to={`/tools/${props.id}`}>
            <Image src={props.thumb} wrapped ui={false}/>
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Meta>
                    <Card.Meta>
                        <span className='date'>Added {getTimeAgo(props.timestamp)}</span>
                        <Rating icon='star' defaultRating={3.5} maxRating={5} disabled/>
                    </Card.Meta>
                </Card.Meta>
                <Card.Description>
                    {description}
                </Card.Description>
                <span>
          <i className="rupee sign icon"></i>
          {props.cost} per hour
        </span>
            </Card.Content>
        </Card>
    );
}
export default cardTool;