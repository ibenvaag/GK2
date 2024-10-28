// data/const.js

export const CITY = [
    { name: "Oslo", places: ["Grünerløkka", "Majorstuen", "Frogner"] },
    { name: "Bergen", places: ["Bryggen", "Fyllingsdalen", "Nesttun"] },
    { name: "Trondheim", places: ["Midtbyen", "Moholt", "Lade"] }
];

export const STORES = {
    Grünerløkka: [
        { name: "Rema 1000", distance: "200m", acceptsPlastic: true, acceptsGlass: true },
        { name: "Kiwi", distance: "500m", acceptsPlastic: false, acceptsGlass: true },
        { name: "Joker Grünerløkka", distance: "300m", acceptsPlastic: true, acceptsGlass: false },
    ],
    Majorstuen: [
        { name: "Meny Majorstuen", distance: "300m", acceptsPlastic: true, acceptsGlass: false },
        { name: "Coop Mega", distance: "700m", acceptsPlastic: true, acceptsGlass: true },
        { name: "Bunnpris Majorstuen", distance: "400m", acceptsPlastic: true, acceptsGlass: true },
    ],
    Frogner: [
        { name: "Spar Frogner", distance: "600m", acceptsPlastic: true, acceptsGlass: false },
        { name: "Rema 1000 Frogner", distance: "450m", acceptsPlastic: true, acceptsGlass: true },
    ],
    Bryggen: [
        { name: "Rimi Bryggen", distance: "150m", acceptsPlastic: false, acceptsGlass: false },
        { name: "Kiwi Bryggen", distance: "350m", acceptsPlastic: true, acceptsGlass: true },
    ],
    Fyllingsdalen: [
        { name: "Extra Fyllingsdalen", distance: "600m", acceptsPlastic: true, acceptsGlass: true },
        { name: "Spar Fyllingsdalen", distance: "400m", acceptsPlastic: true, acceptsGlass: false },
    ],
    Nesttun: [
        { name: "Bunnpris Nesttun", distance: "500m", acceptsPlastic: true, acceptsGlass: false },
        { name: "Rema 1000 Nesttun", distance: "300m", acceptsPlastic: true, acceptsGlass: true },
    ],
    Midtbyen: [
        { name: "Spar Midtbyen", distance: "250m", acceptsPlastic: false, acceptsGlass: true },
        { name: "Rema 1000 Midtbyen", distance: "150m", acceptsPlastic: true, acceptsGlass: true },
    ],
    Moholt: [
        { name: "Kiwi Moholt", distance: "350m", acceptsPlastic: true, acceptsGlass: true },
        { name: "Coop Prix Moholt", distance: "200m", acceptsPlastic: false, acceptsGlass: true },
    ],
    Lade: [
        { name: "Obs Lade", distance: "800m", acceptsPlastic: true, acceptsGlass: false },
        { name: "Rema 1000 Lade", distance: "500m", acceptsPlastic: true, acceptsGlass: true },
    ]
};
