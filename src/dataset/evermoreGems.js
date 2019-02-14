const gems = [
    {
        "name": "Aquamarine",
        "id": 1,
        "color": ["Blue"],
        "family": "Beryl",
        "hardness": [7.5, 8],
        "image": "https://i.imgur.com/mupSKCl.jpg"
    },
    {
        "name": "Bixbite",
        "id": 2,
        "color": ["Red"],
        "family": "Beryl",
        "hardness": [7.5, 8],
        "image": "https://i.imgur.com/mupSKCl.jpg"
    },
    {
        "name": "Emerald",
        "id": 3,
        "color": ["Green"],
        "family": "Beryl",
        "hardness": [7.5, 8],
        "image": "https://i.imgur.com/mupSKCl.jpg"
    },
    {
        "name": "Goshenite",
        "id": 4,
        "color": ["White"],
        "family": "Beryl",
        "hardness": [7.5, 8],
        "image": "https://i.imgur.com/mupSKCl.jpg"
    },
    {
        "name": "Heliodor",
        "id": 5,
        "color": ["Yellow"],
        "family": "Beryl",
        "hardness": [7.5, 8],
        "image": "https://i.imgur.com/mupSKCl.jpg"
    },
    {
        "name": "Maxixe",
        "id": 6,
        "color": ["Yellow"],
        "family": "Beryl",
        "hardness": [7.5, 8],
        "image": "https://i.imgur.com/mupSKCl.jpg"
    },
    {
        "name": "Morganite",
        "id": 7,
        "color": ["Pink"],
        "family": "Beryl",
        "hardness": [7.5, 8],
        "image": "https://i.imgur.com/mupSKCl.jpg"
    },
    {
        "name": "Ruby",
        "id": 8,
        "color": ["Red"],
        "family": "Corundum",
        "hardness": [9],
        "image": "https://i.imgur.com/5Vs4Qrm.jpg"
    },
    {
        "name": "Sapphire",
        "id": 9,
        "color": ["Yellow", "Green", "Blue", "Purple", "Pink", "White", "Black", "Brown"],
        "family": "Corundum",
        "hardness": [9],
        "image": "https://i.imgur.com/5Vs4Qrm.jpg"
    },
    {
        "name": "Padparadscha",
        "id": 10,
        "color": ["Orange", "Pink"],
        "family": "Corundum",
        "hardness": [9],
        "image": "https://i.imgur.com/5Vs4Qrm.jpg"
    },
    {
        "name": "Diamond",
        "id": 11,
        "color": ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "White", "Black", "Grey", "Brown"],
        "family": "Diamond",
        "hardness": [10],
        "image": "https://i.imgur.com/eFfEgvb.jpg"
    },
    {
        "name": "MoonStone",
        "id": 12,
        "color": ["White"],
        "family": "Feldspar",
        "hardness": [6, 6.5],
        "image": "https://i.imgur.com/DOQd2zd.jpg"
    },
    {
        "name": "Almandine",
        "id": 13,
        "color": ["Red"],
        "family": "Garnet",
        "hardness": [6.5, 8.5],
        "image": "https://i.imgur.com/mupSKCl.jpg"
    },
    {
        "name": "Hessonite",
        "id": 14,
        "color": ["Orange"],
        "family": "Garnet",
        "hardness": [6.5, 8.5],
        "image": "https://i.imgur.com/mupSKCl.jpg"
    },
    {
        "name": "Pyrope",
        "id": 15,
        "color": ["Red", "Purple"],
        "family": "Garnet",
        "hardness": [6.5, 8.5],
        "image": "https://i.imgur.com/mupSKCl.jpg"
    },
    {
        "name": "Rhodalite",
        "id": 16,
        "color": ["Red", "Pink"],
        "family": "Garnet",
        "hardness": [6.5, 8.5],
        "image": "https://i.imgur.com/mupSKCl.jpg"
    },
    {
        "name": "Tsavorite",
        "id": 17,
        "color": ["Green"],
        "family": "Garnet",
        "hardness": [6.5, 8.5],
        "image": "https://i.imgur.com/mupSKCl.jpg"
    },
    {
        "name": "Jadeite",
        "id": 18,
        "color": ["Green", "Blue", "Purple"],
        "family": "Jade",
        "hardness": [6, 7],
        "image": "https://i.imgur.com/kHLGncp.jpg"
    },
    {
        "name": "Nephrite",
        "id": 19,
        "color": ["Yellow", "Green", "Blue", "Purple", "White", "Black", "Grey", "Brown"],
        "family": "Jade",
        "hardness": [6, 7],
        "image": "https://i.imgur.com/kHLGncp.jpg"
    },
    {
        "name": "Fire Opal",
        "id": 20,
        "color": ["Red", "Orange", "Yellow"],
        "family": "Jade",
        "hardness": [5.5, 6.5],
        "image": "https://i.imgur.com/x5JcADM.jpg"
    },
    {
        "name": "Opal",
        "id": 21,
        "color": ["Blue", "Purple", "Pink", "White", "Black", "Brown"],
        "family": "Jade",
        "hardness": [5.5, 6.5],
        "image": "https://i.imgur.com/x5JcADM.jpg"
    },
    {
        "name": "Pearl",
        "id": 22,
        "color": ["Orange", "Yellow", "Green", "Blue", "Pink", "White", "Black", "Grey", "Brown"],
        "family": "Pearl",
        "hardness": [2.5, 4.5],
        "image": "https://i.imgur.com/oi9kZTT.jpg"
    },
    {
        "name": "Peridot",
        "id": 23,
        "color": ["Green"],
        "family": "Peridot",
        "hardness": [7],
        "image": "https://i.imgur.com/kAA84Xb.jpg"
    },
    {
        "name": "Amethyst",
        "id": 24,
        "color": ["Purple"],
        "family": "Quartz",
        "hardness": [7],
        "image": "https://i.imgur.com/J1ZULQo.jpg"
    },
    {
        "name": "Carnelian",
        "id": 25,
        "color": ["Red", "Orange"],
        "family": "Quartz",
        "hardness": [7],
        "image": "https://i.imgur.com/J1ZULQo.jpg"
    },
    {
        "name": "Citrine",
        "id": 26,
        "color": ["Yellow"],
        "family": "Quartz",
        "hardness": [7],
        "image": "https://i.imgur.com/J1ZULQo.jpg"
    },
    {
        "name": "Onyx",
        "id": 27,
        "color": ["Black"],
        "family": "Quartz",
        "hardness": [7],
        "image": "https://i.imgur.com/J1ZULQo.jpg"
    },
    {
        "name": "Prasiolite",
        "id": 28,
        "color": ["Green"],
        "family": "Quartz",
        "hardness": [7],
        "image": "https://i.imgur.com/J1ZULQo.jpg"
    },
    {
        "name": "Rose Quartz",
        "id": 29,
        "color": ["Pink"],
        "family": "Quartz",
        "hardness": [7],
        "image": "https://i.imgur.com/J1ZULQo.jpg"
    },
    {
        "name": "Smoky Quartz",
        "id": 30,
        "color": ["Green"],
        "family": "Quartz",
        "hardness": [7],
        "image": "https://i.imgur.com/J1ZULQo.jpg"
    },
    {
        "name": "Almandine Spinel",
        "id": 31,
        "color": ["Purple"],
        "family": "Spinel",
        "hardness": [7.5, 8.0],
        "image": "https://i.imgur.com/J1ZULQo.jpg"
    },
    {
        "name": "Gahnospinel",
        "id": 32,
        "color": ["Green"],
        "family": "Spinel",
        "hardness": [7.5, 8.0],
        "image": "https://i.imgur.com/J1ZULQo.jpg"
    },
    {
        "name": "Peridotite",
        "id": 33,
        "color": ["Green"],
        "family": "Spinel",
        "hardness": [7.5, 8.0],
        "image": "https://i.imgur.com/J1ZULQo.jpg"
    },
    {
        "name": "Rubicelle",
        "id": 34,
        "color": ["Red"],
        "family": "Spinel",
        "hardness": [7.5, 8.0],
        "image": "https://i.imgur.com/J1ZULQo.jpg"
    },
    {
        "name": "Spinel",
        "id": 35,
        "color": ["Blue", "Pink", "White", "Black", "Brown"],
        "family": "Spinel",
        "hardness": [7.5, 8.0],
        "image": "https://i.imgur.com/J1ZULQo.jpg"
    },
    {
        "name": "Topaz",
        "id": 36,
        "color": ["Red", "Orange", "Yellow", "Green", "Blue", "Pink", "White", "Brown"],
        "family": "Topaz",
        "hardness": [8],
        "image": "https://i.imgur.com/uDTv9o5.jpg"
    },
    {
        "name": "Achroite",
        "id": 37,
        "color": ["White"],
        "family": "Tourmaline",
        "hardness": [7, 7.5],
        "image": "https://i.imgur.com/vXzrtJz.jpg"
    },
    {
        "name": "Chrome Tourmaline",
        "id": 38,
        "color": ["Green"],
        "family": "Tourmaline",
        "hardness": [7, 7.5],
        "image": "https://i.imgur.com/vXzrtJz.jpg"
    },
    {
        "name": "Dravite",
        "id": 39,
        "color": ["Black", "Brown"],
        "family": "Tourmaline",
        "hardness": [7, 7.5],
        "image": "https://i.imgur.com/vXzrtJz.jpg"
    },
    {
        "name": "Elbaite",
        "id": 40,
        "color": ["Green"],
        "family": "Tourmaline",
        "hardness": [7, 7.5],
        "image": "https://i.imgur.com/vXzrtJz.jpg"
    },
    {
        "name": "Indicolite",
        "id": 41,
        "color": ["Blue"],
        "family": "Tourmaline",
        "hardness": [7, 7.5],
        "image": "https://i.imgur.com/vXzrtJz.jpg"
    },
    {
        "name": "Rubellite",
        "id": 42,
        "color": ["Red", "Pink"],
        "family": "Tourmaline",
        "hardness": [7, 7.5],
        "image": "https://i.imgur.com/vXzrtJz.jpg"
    },
    {
        "name": "Schorl",
        "id": 43,
        "color": ["Green"],
        "family": "Tourmaline",
        "hardness": [7, 7.5],
        "image": "https://i.imgur.com/vXzrtJz.jpg"
    },
    {
        "name": "Siberite",
        "id": 44,
        "color": ["Purple"],
        "family": "Tourmaline",
        "hardness": [7, 7.5],
        "image": "https://i.imgur.com/vXzrtJz.jpg"
    },
    {
        "name": "Verdelite",
        "id": 45,
        "color": ["Green"],
        "family": "Tourmaline",
        "hardness": [7, 7.5],
        "image": "https://i.imgur.com/vXzrtJz.jpg"
    },
    {
        "name": "Watermelon Tourmaline",
        "id": 46,
        "color": ["Red", "Green", "Pink"],
        "family": "Tourmaline",
        "hardness": [7, 7.5],
        "image": "https://i.imgur.com/vXzrtJz.jpg"
    },
    {
        "name": "Turquoise",
        "id": 47,
        "color": ["Green", "Blue"],
        "family": "Turquoise",
        "hardness": [5, 6],
        "image": "https://i.imgur.com/pE2BSmW.jpg"
    },
    {
        "name": "Zircon",
        "id": 48,
        "color": ["Red", "Yellow", "Green", "Blue", "White", "Grey", "Brown"],
        "family": "Zircon",
        "hardness": [7.5],
        "image": "https://i.imgur.com/vq8Q35k.jpg"
    }
]

const metals = [
    {
        "name": "Gold",
        "id": 1,
        "color": ["Yellow", "Pink", "Green"],
        "makeup": ["Gold", "Silver", "Copper"],
        "durable": "True",
        "resizeable": "True"
    },
    {
        "name": "White Gold",
        "id": 2,
        "color": ["White"],
        "makeup": ["Gold", "Silver", "Rhodium-Plated"],
        "durable": "True",
        "resizeable": "True"
    },
    {
        "name": "Palladium",
        "id": 3,
        "color": ["White"],
        "makeup": ["Platinum-group"],
        "durable": "True",
        "resizeable": "True"
    },
    {
        "name": "Platinum",
        "id": 4,
        "color": ["White"],
        "makeup": ["Platinum-group"],
        "durable": "True",
        "resizeable": "True"
    },
    {
        "name": "Silver",
        "id": 5,
        "color": ["White"],
        "makeup": ["Silver"],
        "durable": "False",
        "resizeable": "True"
    },
    {
        "name": "Steel",
        "id": 6,
        "color": ["White"],
        "makeup": ["Iron"],
        "durable": "True",
        "resizeable": "False"
    },
    {
        "name": "Titanium",
        "id": 7,
        "color": ["White"],
        "makeup": ["Titanium"],
        "durable": "True",
        "resizeable": "False"
    },
    {
        "name": "Tungsten",
        "id": 8,
        "color": ["White"],
        "makeup": ["Tungsten"],
        "durable": "True",
        "resizeable": "False"
    }
]

module.exports = {
    gems,
    metals
}