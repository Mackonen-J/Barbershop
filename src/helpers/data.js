const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const rating = () => {
    return (Math.random() * 5).toFixed(0);
};
const appointment = () => {
    return random(['30', '45', '60', '75', '90']);
};
const time = () => {
    return random(['10:00', '11:00', '12:00', '13:00', '14:00']);
};

const color = () => {
    return random(['original', 'Black', 'White', 'Red', 'Green', 'Blue', 'Brown', 'Yellow']);
};

const address = () => {
    return random([
        'Street 1, Stockholm',
        'Street 2, Stockholm',
        'Street 3, Stockholm',
        'Street 4, Stockholm',
        'Street 5, Stockholm',
        'Street 6, Stockholm',
        'Street 7, Stockholm',
        'Street 8, Stockholm',
        'Street 9, Stockholm'
    ]);
};

const type = () => {
    return random([
        'Company 1',
        'Company 2',
        'Company 3',
        'Company 4',
        'Company 5',
        'Company 6',
        'Company 7',
        'Company 8',
        'Company 9'
    ]);
};

const price = () => {
    return (Math.floor(Math.random() * (1000 - 100) + 100).toFixed(0));
};

function generate(count) {
    const data = [];
    for(let i = 0; i < count; i++) {
        const currentColor = color();
        const cutTime = appointment();
        const plannedTime = time();
        const currentRating = rating();
        const currentType = type();
        const currentAddress = address();
        const currentPrice = price();

        data.push({
            name: `${plannedTime}: ${currentAddress} with ${currentType} and ${currentColor} color`,
            color: currentColor,
            appointment: cutTime,
            time: plannedTime,
            rating: currentRating,
            address: currentAddress,
            type: currentType,
            price: currentPrice,
            salesPrice: currentPrice * .8
        });
    }
    return data;
}

export default generate;