function IndianPlayers() {

    const players = [
        "Rohit",
        "Virat",
        "Gill",
        "Rahul",
        "Pant",
        "Hardik",
        "Jadeja",
        "Ashwin"
    ];

    const oddPlayers = players.filter(
        (_, index) => index % 2 === 0
    );

    const evenPlayers = players.filter(
        (_, index) => index % 2 !== 0
    );

    const T20Players = [
        "Rohit",
        "Virat",
        "Surya"
    ];

    const RanjiTrophyPlayers = [
        "Pujara",
        "Rahane",
        "Sarfaraz"
    ];

    const mergedPlayers = [
        ...T20Players,
        ...RanjiTrophyPlayers
    ];

    return (
        <div>

            <h2>Odd Team Players</h2>

            <ul>
                {oddPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

            <h2>Even Team Players</h2>

            <ul>
                {evenPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

            <h2>Merged Players</h2>

            <ul>
                {mergedPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

        </div>
    );
}

export default IndianPlayers;