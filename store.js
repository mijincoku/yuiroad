const stores = [
    {
        id: 'michikusa',
        src: 'assets/michikusa.png',
        scale: '5 5 1',
        latitude: 24.34031586062179,
        longitude: 124.15826261612321
    },
    {
        id: 'klatch',
        src: 'assets/klatch.png',
        scale: '5 5 1',
        latitude: 24.340537303621755,
        longitude: 124.15833679907587
    },
    {
        id: 'cotton',
        src: 'assets/cotton.png',
        scale: '6 6 1',
        latitude: 24.340054755073425,
        longitude: 124.15845538605058
    },
    {
        id: 'comecome',
        src: 'assets/comecome.png',
        scale: '6 6 1',
        latitude: 24.340886042637198,
        longitude: 124.15771680158518
    },
    {
        id: 'maie',
        src: 'assets/maie.png',
        scale: '6 6 1',
        latitude: 24.34025369539998,
        longitude: 124.15835186617635
    },
    {
        id: 'penguin',
        src: 'assets/penguin.png',
        scale: '5 5 1',
        latitude: 24.340191368764113,
        longitude: 124.1583587245452
    },
    {
        id: 'shimashima',
        src: 'assets/shimashima.png',
        scale: '5 5 1',
        latitude: 24.33988775219514,
        longitude: 124.15845642072118
    },
    {
        id: 'tomo',
        src: 'assets/tomo.png',
        scale: '5 5 1',
        latitude: 24.33989917797152,
        longitude: 124.15856872619108
    },
    {
        id: 'view',
        src: 'assets/view.png',
        scale: '5 5 1',
        latitude: 24.339893861709967,
        longitude: 124.15856437963475
    }
];

const scene = document.querySelector('a-scene');

stores.forEach(store => {
    const entity = document.createElement('a-image');
    entity.setAttribute('id', store.id);
    entity.setAttribute('src', store.src);
    entity.setAttribute('look-at', '[gps-camera]');
    entity.setAttribute('scale', store.scale);
    entity.setAttribute('light-distance', '');
    entity.setAttribute('gps-entity-place', `latitude:${store.latitude}; longitude:${store.longitude};`);

    scene.appendChild(entity);
});
