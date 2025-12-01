module.exports = (req, res) => {
    const greetings = [
        '¡Hola, compañero!',
        '¿Qué pasa, máquina?',
        '¡Buenos días!',
        '¡Bienvenido al sistema!',
        'No os fiéis de la comida de Joaquín 😄'
    ];

    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    res.json({ greeting: randomGreeting });
};
