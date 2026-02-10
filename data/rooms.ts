export interface Room {
    id: string;
    name: string;
    type: string;
    capacity: string;
    size: string;
    bed: string;
    price: string; // Per person
    desc: string;
    features: string[];
    images: string[];
}

export const roomsList: Room[] = [
    {
        id: "1",
        name: "Pokój typu Standard z 2 łóżkami pojedynczymi",
        type: "Standard",
        capacity: "2 Os.",
        size: "12 m²",
        bed: "2x Pojedyncze",
        price: "80-120",
        desc: "Ten pokój typu twin oferuje szafę, czajnik elektryczny, balkon z malowniczym widokiem na góry oraz prywatną łazienkę z prysznicem. Do dyspozycji Gości są 2 wygodne łóżka pojedyncze, telewizor z płaskim ekranem oraz bezpłatne Wi-Fi.",
        features: [
            "Balkon",
            "Widok na góry",
            "Prywatna łazienka",
            "Telewizor z płaskim ekranem",
            "Bezpłatne Wi-Fi",
            "Czajnik elektryczny",
            "Szafa lub garderoba",
            "Wieszak na ubrania",
            "Gry planszowe / puzzle",
            "Ręczniki",
            "Pościel",
            "Gniazdko koło łóżka",
            "Toaleta",
            "Papier toaletowy",
            "Ogrzewanie",
            "Żelazko"
        ],
        images: [
            "/images/room-std-twin-1.jpg",
            "/images/room-std-twin-2.jpg",
            "/images/room-std-twin-3.jpg"
        ]
    },
    {
        id: "2",
        name: "Pokój Dwuosobowy z balkonem",
        type: "Standard",
        capacity: "2 Os.",
        size: "12 m²",
        bed: "1 łóżko podwójne",
        price: "80-120",
        desc: "Ten pokój dwuosobowy oferuje balkon z widokiem na góry i prywatną łazienkę z prysznicem. Udogodnienia obejmują szafę i czajnik elektryczny. W tej opcji zakwaterowania dostępne jest 1 łóżko.",
        features: [
            "Balkon",
            "Widok na góry",
            "Prywatna łazienka",
            "Telewizor z płaskim ekranem",
            "Bezpłatne Wi-Fi",
            "Czajnik elektryczny",
            "Szafa lub garderoba",
            "Wieszak na ubrania",
            "Gry planszowe / puzzle",
            "Ręczniki",
            "Pościel",
            "Gniazdko koło łóżka",
            "Toaleta",
            "Papier toaletowy",
            "Ogrzewanie",
            "Żelazko",
            "Długie łóżka (> 2 metry)"
        ],
        images: [
            "/images/room-dbl-balcony-1.jpg",
            "/images/room-dbl-balcony-2.jpg",
            "/images/room-dbl-balcony-3.jpg"
        ]
    },
    {
        id: "3",
        name: "Pokój Dwuosobowy z balkonem (2+1)",
        type: "Comfort",
        capacity: "2+1 Os.",
        size: "15 m²",
        bed: "1 Podwójne + 1 Pojedyncze",
        price: "80-120",
        desc: "Ten pokój dwuosobowy wyposażony jest w szafę oraz czajnik elektryczny i dysponuje balkonem z widokiem na góry oraz łazienką z prysznicem. W opcji zakwaterowania znajdują się 2 łóżka (jedno podwójne i jedno pojedyncze).",
        features: [
            "Balkon",
            "Widok na góry",
            "Prywatna łazienka",
            "Telewizor z płaskim ekranem",
            "Bezpłatne Wi-Fi",
            "Lodówka",
            "Czajnik elektryczny",
            "Szafa lub garderoba",
            "Wieszak na ubrania",
            "Gry planszowe / puzzle",
            "Ręczniki",
            "Pościel",
            "Gniazdko koło łóżka",
            "Toaleta",
            "Papier toaletowy",
            "Ogrzewanie",
            "Żelazko",
            "Długie łóżka (> 2 metry)"
        ],
        images: [
            "/images/room-comfort-1.jpg",
            "/images/room-comfort-2.jpg",
            "/images/room-comfort-3.jpg"
        ]
    },
    {
        id: "4",
        name: "Pokój Trzyosobowy typu Classic",
        type: "Classic",
        capacity: "3 Os.",
        size: "20 m²",
        bed: "1 Podwójne + 1 Sofa",
        price: "80-120",
        desc: "Ten pokój trzyosobowy posiada część wypoczynkową, szafę, balkon z widokiem na góry oraz prywatną łazienkę z prysznicem. Wyposażony jest w wygodne łóżko podwójne oraz rozkładaną sofę.",
        features: [
            "Balkon",
            "Widok na góry",
            "Prywatna łazienka",
            "Telewizor z płaskim ekranem",
            "Bezpłatne Wi-Fi",
            "Część wypoczynkowa",
            "Sofa",
            "Lodówka",
            "Czajnik elektryczny",
            "Krzesełko dla dzieci",
            "Szafa lub garderoba",
            "Wieszak na ubrania",
            "Gry planszowe / puzzle",
            "Ręczniki",
            "Pościel",
            "Gniazdko koło łóżka",
            "Toaleta",
            "Papier toaletowy",
            "Ogrzewanie",
            "Żelazko",
            "Długie łóżka (> 2 metry)"
        ],
        images: [
            "/images/room-classic-1.jpg",
            "/images/room-classic-2.jpg",
            "/images/room-classic-3.jpg",
            "/images/room-classic-4.jpg",
            "/images/room-classic-5.jpg"
        ]
    },
    {
        id: "5",
        name: "Pokój typu Standard z 2 łóżkami pojedynczymi",
        type: "Standard",
        capacity: "2 Os.",
        size: "12 m²",
        bed: "2x Pojedyncze",
        price: "80-120",
        desc: "W tej opcji zakwaterowania zapewniono 2 łóżka. Ten pokój typu twin oferuje szafę, czajnik elektryczny oraz prywatną łazienkę z prysznicem.",
        features: [
            "Balkon",
            "Widok na góry",
            "Prywatna łazienka",
            "Telewizor z płaskim ekranem",
            "Bezpłatne Wi-Fi",
            "Czajnik elektryczny",
            "Szafa lub garderoba",
            "Wieszak na ubrania",
            "Gry planszowe / puzzle",
            "Ręczniki",
            "Pościel",
            "Gniazdko koło łóżka",
            "Toaleta",
            "Papier toaletowy",
            "Ogrzewanie",
            "Żelazko"
        ],
        images: [
            "/images/room-std-twin-1.jpg",
            "/images/room-std-twin-2.jpg",
            "/images/room-std-twin-3.jpg"
        ]
    }
];
