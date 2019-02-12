const gems = [
    {
        "Name": "Aquamarine",
        "id": 1,
        "Color": ["Blue"],
        "Family": "Beryl",
        "Hardness": [7.5, 8]
    },
    {
        "Name": "Bixbite",
        "id": 2,
        "Color": ["Red"],
        "Family": "Beryl",
        "Hardness": [7.5, 8]
    },
    {
        "Name": "Emerald",
        "id": 3,
        "Color": ["Green"],
        "Family": "Beryl",
        "Hardness": [7.5, 8]
    },
    {
        "Name": "Goshenite",
        "id": 4,
        "Color": ["White"],
        "Family": "Beryl",
        "Hardness": [7.5, 8]
    },
    {
        "Name": "Heliodor",
        "id": 5,
        "Color": ["Yellow"],
        "Family": "Beryl",
        "Hardness": [7.5, 8]
    },
    {
        "Name": "Maxixe",
        "id": 6,
        "Color": ["Yellow"],
        "Family": "Beryl",
        "Hardness": [7.5, 8]
    },
    {
        "Name": "Morganite",
        "id": 7,
        "Color": ["Pink"],
        "Family": "Beryl",
        "Hardness": [7.5, 8]
    },
    {
        "Name": "Ruby",
        "id": 8,
        "Color": ["Red"],
        "Family": "Corundum",
        "Hardness": [9]
    },
    {
        "Name": "Sapphire",
        "id": 9,
        "Color": ["Yellow", "Green", "Blue", "Purple", "Pink", "White", "Black", "Brown"],
        "Family": "Corundum",
        "Hardness": [9]
    },
    {
        "Name": "Padparadscha",
        "id": 10,
        "Color": ["Orange", "Pink"],
        "Family": "Corundum",
        "Hardness": [9]
    },
    {
        "Name": "Diamond",
        "id": 11,
        "Color": ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "White", "Black", "Grey", "Brown"],
        "Family": "Diamond",
        "Hardness": [10]
    },
    {
        "Name": "MoonStone",
        "id": 12,
        "Color": ["White"],
        "Family": "Feldspar",
        "Hardness": [6, 6.5]
    },
    {
        "Name": "Almandine",
        "id": 13,
        "Color": ["Red"],
        "Family": "Garnet",
        "Hardness": [6.5, 8.5]
    },
    {
        "Name": "Hessonite",
        "id": 14,
        "Color": ["Orange"],
        "Family": "Garnet",
        "Hardness": [6.5, 8.5]
    },
    {
        "Name": "Pyrope",
        "id": 15,
        "Color": ["Red", "Purple"],
        "Family": "Garnet",
        "Hardness": [6.5, 8.5]
    },
    {
        "Name": "Rhodalite",
        "id": 16,
        "Color": ["Red", "Pink"],
        "Family": "Garnet",
        "Hardness": [6.5, 8.5]
    },
    {
        "Name": "Tsavorite",
        "id": 17,
        "Color": ["Green"],
        "Family": "Garnet",
        "Hardness": [6.5, 8.5]
    },
    {
        "Name": "Jadeite",
        "id": 18,
        "Color": ["Green", "Blue", "Purple"],
        "Family": "Jade",
        "Hardness": [6, 7]
    },
    {
        "Name": "Nephrite",
        "id": 19,
        "Color": ["Yellow", "Green", "Blue", "Purple", "White", "Black", "Grey", "Brown"],
        "Family": "Jade",
        "Hardness": [6, 7]
    },
    {
        "Name": "Fire Opal",
        "id": 20,
        "Color": ["Red", "Orange", "Yellow"],
        "Family": "Jade",
        "Hardness": [5.5, 6.5]
    },
    {
        "Name": "Opal",
        "id": 21,
        "Color": ["Blue", "Purple", "Pink", "White", "Black", "Brown"],
        "Family": "Jade",
        "Hardness": [5.5, 6.5]
    },
    {
        "Name": "Pearl",
        "id": 22,
        "Color": ["Orange", "Yellow", "Green", "Blue", "Pink", "White", "Black", "Grey", "Brown"],
        "Family": "Pearl",
        "Hardness": [2.5, 4.5]
    },
    {
        "Name": "Peridot",
        "id": 23,
        "Color": ["Green"],
        "Family": "Peridot",
        "Hardness": [7]
    },
    {
        "Name": "Amethyst",
        "id": 24,
        "Color": ["Purple"],
        "Family": "Quartz",
        "Hardness": [7]
    },
    {
        "Name": "Carnelian",
        "id": 25,
        "Color": ["Red", "Orange"],
        "Family": "Quartz",
        "Hardness": [7]
    },
    {
        "Name": "Citrine",
        "id": 26,
        "Color": ["Yellow"],
        "Family": "Quartz",
        "Hardness": [7]
    },
    {
        "Name": "Onyx",
        "id": 27,
        "Color": ["Black"],
        "Family": "Quartz",
        "Hardness": [7]
    },
    {
        "Name": "Prasiolite",
        "id": 28,
        "Color": ["Green"],
        "Family": "Quartz",
        "Hardness": [7]
    },
    {
        "Name": "Rose Quartz",
        "id": 29,
        "Color": ["Pink"],
        "Family": "Quartz",
        "Hardness": [7]
    },
    {
        "Name": "Smoky Quartz",
        "id": 30,
        "Color": ["Green"],
        "Family": "Quartz",
        "Hardness": [7]
    },
    {
        "Name": "Almandine Spinel",
        "id": 31,
        "Color": ["Purple"],
        "Family": "Spinel",
        "Hardness": [7.5, 8.0]
    },
    {
        "Name": "Gahnospinel",
        "id": 32,
        "Color": ["Green"],
        "Family": "Spinel",
        "Hardness": [7.5, 8.0]
    },
    {
        "Name": "Peridotite",
        "id": 33,
        "Color": ["Green"],
        "Family": "Spinel",
        "Hardness": [7.5, 8.0]
    },
    {
        "Name": "Rubicelle",
        "id": 34,
        "Color": ["Red"],
        "Family": "Spinel",
        "Hardness": [7.5, 8.0]
    },
    {
        "Name": "Spinel",
        "id": 35,
        "Color": ["Blue", "Pink", "White", "Black", "Brown"],
        "Family": "Spinel",
        "Hardness": [7.5, 8.0]
    },
    {
        "Name": "Topaz",
        "id": 36,
        "Color": ["Red", "Orange", "Yellow", "Green", "Blue", "Pink", "White", "Brown"],
        "Family": "Topaz",
        "Hardness": [8]
    },
    {
        "Name": "Achroite",
        "id": 37,
        "Color": ["White"],
        "Family": "Tourmaline",
        "Hardness": [7, 7.5]
    },
    {
        "Name": "Chrome Tourmaline",
        "id": 38,
        "Color": ["Green"],
        "Family": "Tourmaline",
        "Hardness": [7, 7.5]
    },
    {
        "Name": "Dravite",
        "id": 39,
        "Color": ["Black", "Brown"],
        "Family": "Tourmaline",
        "Hardness": [7, 7.5]
    },
    {
        "Name": "Elbaite",
        "id": 40,
        "Color": ["Green"],
        "Family": "Tourmaline",
        "Hardness": [7, 7.5]
    },
    {
        "Name": "Indicolite",
        "id": 41,
        "Color": ["Blue"],
        "Family": "Tourmaline",
        "Hardness": [7, 7.5]
    },
    {
        "Name": "Rubellite",
        "id": 42,
        "Color": ["Red", "Pink"],
        "Family": "Tourmaline",
        "Hardness": [7, 7.5]
    },
    {
        "Name": "Schorl",
        "id": 43,
        "Color": ["Green"],
        "Family": "Tourmaline",
        "Hardness": [7, 7.5]
    },
    {
        "Name": "Siberite",
        "id": 44,
        "Color": ["Purple"],
        "Family": "Tourmaline",
        "Hardness": [7, 7.5]
    },
    {
        "Name": "Verdelite",
        "id": 45,
        "Color": ["Green"],
        "Family": "Tourmaline",
        "Hardness": [7, 7.5]
    },
    {
        "Name": "Watermelon Tourmaline",
        "id": 46,
        "Color": ["Red", "Green", "Pink"],
        "Family": "Tourmaline",
        "Hardness": [7, 7.5]
    },
    {
        "Name": "Turquoise",
        "id": 47,
        "Color": ["Green", "Blue"],
        "Family": "Turquoise",
        "Hardness": [5, 6]
    },
    {
        "Name": "Zircon",
        "id": 48,
        "Color": ["Red", "Yellow", "Green", "Blue", "White", "Grey", "Brown"],
        "Family": "Zircon",
        "Hardness": [7.5]
    }
]

const metals = [
    {
        "Name": "Gold",
        "id": 1,
        "Color": ["Yellow", "Pink", "Green"],
        "Makeup": ["Gold", "Silver", "Copper"],
        "Durable": "True",
        "Resizeable": "True"
    },
    {
        "Name": "White Gold",
        "id": 2,
        "Color": ["White"],
        "Makeup": ["Gold", "Silver", "Rhodium-Plated"],
        "Durable": "True",
        "Resizeable": "True"
    },
    {
        "Name": "Palladium",
        "id": 3,
        "Color": ["White"],
        "Makeup": ["Platinum-group"],
        "Durable": "True",
        "Resizeable": "True"
    },
    {
        "Name": "Platinum",
        "id": 4,
        "Color": ["White"],
        "Makeup": ["Platinum-group"],
        "Durable": "True",
        "Resizeable": "True"
    },
    {
        "Name": "Silver",
        "id": 5,
        "Color": ["White"],
        "Makeup": ["Silver"],
        "Durable": "False",
        "Resizeable": "True"
    },
    {
        "Name": "Steel",
        "id": 6,
        "Color": ["White"],
        "Makeup": ["Iron"],
        "Durable": "True",
        "Resizeable": "False"
    },
    {
        "Name": "Titanium",
        "id": 7,
        "Color": ["White"],
        "Makeup": ["Titanium"],
        "Durable": "True",
        "Resizeable": "False"
    },
    {
        "Name": "Tungsten",
        "id": 8,
        "Color": ["White"],
        "Makeup": ["Tungsten"],
        "Durable": "True",
        "Resizeable": "False"
    }
]

module.exports = {
    gems,
    metals
}