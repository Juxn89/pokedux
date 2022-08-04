import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { StarOutlined } from '@ant-design/icons';

export const PokemonCard = ( { pokemon } ) => {
    const { name, sprites, abilities } = pokemon;
    const allAbilities = abilities.map( item => item.ability.name).join(', ')

    return (
        <Card
            className='card-item'
            title= { name }
            cover= { <img src={ sprites?.front_default || '' } alt={ name }/> }
            style= { { width: 250 } }
            extra= { <StarOutlined />}
        >
            <Meta description= { <span><strong>Abilities: </strong>{allAbilities}</span>  }/>
        </Card>
    )
}
