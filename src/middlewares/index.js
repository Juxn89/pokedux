export const logger = (store) => (next) => (action) => {
    console.log( action );
    next(action);
}

export const featuring = (store) => (next) => (actionInfo) => {
    const featured = [ 
        { 
            name: 'Pokemon from middlerware', 
            abilities: [
               {
                ability: { name: 'none' }
               }
            ], 
            sprites: { 
                front_default: 'https://imgs.search.brave.com/NA0-GtV3Gg8utyowETXbVrbUTYFrRl6cUoJf3rKJ-T0/rs:fit:768:465:1/g:ce/aHR0cDovL2FyY2hp/dmUucG9rZWRpdC5j/b20vYm9hcmRzL2Nr/ZmluZGVyL3VzZXJm/aWxlcy8yL2ltYWdl/cy80MDRfYnlfbW9s/dHJlczkzLmpwZw' 
            } 
        }, ...actionInfo.action.payload ];
    const updatedAction = { 
        ...actionInfo, 
        action: { ...actionInfo.action, payload: featured } 
    };
    next(updatedAction);
}