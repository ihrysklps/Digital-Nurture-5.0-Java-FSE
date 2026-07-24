function ListofPlayers() {

    const players = [
        { name: "Rohit", score: 95 },
        { name: "Virat", score: 88 },
        { name: "Gill", score: 60 },
        { name: "Rahul", score: 45 },
        { name: "Pant", score: 78 },
        { name: "Hardik", score: 69 },
        { name: "Jadeja", score: 81 },
        { name: "Ashwin", score: 66 },
        { name: "Bumrah", score: 30 },
        { name: "Shami", score: 72 },
        { name: "Siraj", score: 58 }
    ];

    const lowScorePlayers = players.filter(
        player => player.score < 70
    );

    return (
        <div>
            <h2>List of Players</h2>

            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>

            <h2>Players with Score Below 70</h2>

            <ul>
                {lowScorePlayers.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListofPlayers;
