import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { StarButtom } from './StarButtom';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../slices/dataSlice';

export const PokemonCard = ( { pokemon } ) => {
    const { name, sprites, abilities, types } = pokemon;
    const allAbilities = abilities.map( item => item.ability.name).join(', ');
    const allTypes = types.map( item => item.type.name).join(', ');

    const dispatch = useDispatch();

    const handleFavoriteClick = (pokemon) => {
        dispatch(setFavorite(pokemon))
    }

    return (
        <Card
            className='card-item'
            title= { name }
            cover= { <img src={ sprites?.front_default || '' } alt={ name }/> }
            style= { { width: 250 } }
            extra= { <StarButtom isFavorite={ true } onClick={ handleFavoriteClick } />}
        >
            <Meta description= { <span><strong>Abilities: </strong>{allAbilities}</span>  }/>
            <Meta description= { <span><strong>Type: </strong>{allTypes}</span>  }/>
        </Card>
    )
}
