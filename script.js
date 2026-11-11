

function showFlowerMessage(flower) {

    const messages = {

        rose: {
            icon: "🌹",
            title: "Love & Romance",
            text: "Every rose represents love, affection, and beautiful moments. At Carmina, we create bouquets that help express what words cannot."
        },

        sunflower: {
            icon: "🌻",
            title: "Happiness & Joy",
            text: "Like a sunflower that follows the sunlight, we hope every Carmina bouquet brings happiness and sunshine to someone's day."
        },

        tulip: {
            icon: "🌷",
            title: "Care & Elegance",
            text: "Every tulip reminds us that simple things can be beautiful. We carefully prepare each arrangement with love and attention."
        },

        cherry: {
            icon: "🌸",
            title: "New Beginnings",
            text: "Every blossom represents new beginnings, sweet memories, and fresh opportunities to make someone smile."
        },

        white: {
            icon: "💮",
            title: "Pure & Sincere",
            text: "Flowers are more than gifts. They are thoughtful expressions of kindness, gratitude, and sincere appreciation."
        }

    };

    const selected = messages[flower];
    const messageBox = document.getElementById("gardenMessage");

    if (!selected || !messageBox) return;

    messageBox.innerHTML = `
        <span>${selected.icon}</span>
        <h3>${selected.title}</h3>
        <p>${selected.text}</p>
    `;

    messageBox.animate(
        [
            {
                opacity: 0,
                transform: "translate(-50%, -45%) scale(.9)"
            },
            {
                opacity: 1,
                transform: "translate(-50%, -50%) scale(1)"
            }
        ],
        {
            duration: 400,
            easing: "ease-out"
        }
    );

}