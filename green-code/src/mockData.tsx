import { ParkData } from "./components/Map/Marker";

export const MockParks: ParkData[] = [
    {id: 1,
        name: 'Зарядье',
        image: '123',
    id_description: 1,
    description_park: 'Описание парка Зарядье',
    description: 'Описание',
    list_creatures: [{title: 'Белка', img: '../public/mockData/image.png', describe: 'Описание'}, {title: 'Трясогуска', img: '../public/mockData/image.png', describe: 'Описание'}], 
    coordinates: [37.68, 55.76]
    },
]