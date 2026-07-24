import ListofPlayers from "./Components/ListofPlayers";
import IndianPlayers from "./Components/IndianPlayers";

function App() {

    const flag = true;

    return (

        <div
            style={{
                margin: "30px",
                fontFamily: "Arial"
            }}
        >

            <h1>Cricket Application</h1>

            {
                flag
                    ? <ListofPlayers />
                    : <IndianPlayers />
            }

        </div>

    );
}

export default App;