const db = {
    tequileros: [
        {
            name: 'Sauza Tequila',
            tequilas: [
                {
                    marca: 'Tres Generaciones Plata',
                    description: {
                        color: 'Plata bb',
                        aroma: 'rosas',
                        taste: 'arcoiris',
                        text: 'Tres Generaciones Plata es un tequila rifado que sabe mejor solito.',
                    },
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwjhtHvmSj8clszL_4ynKaSMdIvSkptd79x2nl9bTVJ9XnFezCA',
                    sku: 'ttgp123456',
                },
                {
                    marca: 'Tres Generaciones Reposado',
                    description: {
                        color: 'cobre reposado',
                        aroma: 'popis',
                        taste: 'jamaica',
                        text: 'Reposado está más viejo que tu bisabuelo, sabe bien rifado.',
                    },
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwjhtHvmSj8clszL_4ynKaSMdIvSkptd79x2nl9bTVJ9XnFezCA',
                    sku: 'ttgr234567',
                },
                {
                    marca: 'Tres Generaciones Añejo',
                    description: {
                        color: 'añejo',
                        aroma: 'padre jesús',
                        taste: 'hamburguesa',
                        text: 'Tequila muy caro para ti bb.',
                    },
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwjhtHvmSj8clszL_4ynKaSMdIvSkptd79x2nl9bTVJ9XnFezCA',
                    sku: 'ttga345678',
                },
            ],
        },
        {
            name: 'IMGP',
            tequilas: [
                {
                    marca: 'Tequila Gutierrez Reposado',
                    description: {
                        color: 'oro',
                        aroma: 'a gloria',
                        taste: 'sueños',
                        text: 'Es el mejor tequila que probarás en tu corta vida.',
                    },
                    image: 'https://vignette.wikia.nocookie.net/coraje-el-perro-cobarde/images/a/a6/226px-Coraje_elperro.jpg/revision/latest?cb=20121009214558&path-prefix=es',
                    sku: 'tgrimgp123',
                }
            ],
        },
        {
            name: 'Destilados Gómez',
            tequilas: [
                {
                    marca: '2090',
                    description: {
                        color: 'Lorem ipsum',
                        aroma: 'Lorem ipsum',
                        taste: 'Lorem ipsum',
                        text: 'Lorem ipsum',
                    },
                    image: 'https://vignette.wikia.nocookie.net/coraje-el-perro-cobarde/images/a/a6/226px-Coraje_elperro.jpg/revision/latest?cb=20121009214558&path-prefix=es',
                    sku: 'dsgmz2090a',
                },
                {
                    marca: 'Tequila Chapoteo',
                    description: {
                        color: 'Lorem ipsum',
                        aroma: 'Lorem ipsum',
                        taste: 'Lorem ipsum',
                        text: 'Lorem ipsum',
                    },
                    image: 'https://vignette.wikia.nocookie.net/coraje-el-perro-cobarde/images/a/a6/226px-Coraje_elperro.jpg/revision/latest?cb=20121009214558&path-prefix=es',
                    sku: 'dsgmztqcho',
                }
            ],
        },
        {
            name: 'Tequilas Cariñocitos',
            tequilas: [
                {
                    marca: 'Tequieromucho',
                    description: {
                        color: 'Lorem ipsum',
                        aroma: 'Lorem ipsum',
                        taste: 'Lorem ipsum',
                        text: 'Lorem ipsum',
                    },
                    image: 'https://vignette.wikia.nocookie.net/coraje-el-perro-cobarde/images/a/a6/226px-Coraje_elperro.jpg/revision/latest?cb=20121009214558&path-prefix=es',
                    sku: 'tqmtsca123',
                },
            ],
        },
    ],
    users: [
        {
            user: 'LuisBrime',
            pwd: 'elbrimes',
            historial: [
                {
                    sku: 'dsgmz2090a',
                    fc: '02-11-2008',
                    doc: '03-04-2019',
                },
                {
                    sku: 'tgrimgp123',
                    fc: '01-01-2011',
                    doc: '03-04-2018',
                },
            ],
        },
        {
            user: 'GenelJose',
            pwd: 'naysek',
            historial: [
                {
                    sku: 'tqmtsca123',
                    fc: '01-01-1880',
                    doc: '01-02-1780',
                },
            ],
        },
    ],
};

export default db;