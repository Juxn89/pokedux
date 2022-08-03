import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { StarOutlined } from '@ant-design/icons';

export const PokemonCard = ( { pokemon } ) => {
    const {title, src, alt, description} = pokemon;

    return (
        <Card
            title= { title }
            cover={ <img src={ src } alt={ alt }/> }
            extra= { <StarOutlined />}
        >
            <Meta description= { description }/>
        </Card>
    )
}
