const messages = [
    'René Roura Barrera',
    'Candelas Peña Echeverría',
    'Amor Arias Lastra',
    'Estela del Amat',
    'Selena Quiroga Agustí',
    'Salomé Clavero Santos',
    'Gabino Peralta Beltrán',
    'Benjamín Moles Castells',
    'Sebastian Bilbao Ariño',
    'Ceferino Roig',
    'Carlito Gámez Salas',
    'Julia Huerta Anguita',
    'Cristóbal Chacón Pina',
    'Carlos Escribano - Soriano',
    'Carmelita Cabrera Carranza',
    'Plácido Adadia Casares',
    'Rafael de Dueñas',
    'Clementina Viana Carrión',
    'Vidal Donoso Lara',
    'Visitación Jover Moya',
];
const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg }