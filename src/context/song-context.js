import React from 'react';

export default React.createContext({
    songs: [
        {id:1, title:"en el nombre de jesus", artist:"christie checz", count:10},
        {id:2, title:"the stand", artist:"hillsong", count:10},
        {id:3, title:"abrenos los cielos", artist:"christine d'chlario", count:10},
        {id:4, title:"padre nuestro", artist:"bethel", count:10},
    ],
    songList: []
});
