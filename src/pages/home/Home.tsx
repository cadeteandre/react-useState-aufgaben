import Level1_1 from "../../components/level-1_1/Level-1_1";
import Level1_3 from "../../components/level-1_3/Level-1_3";
import Level1_6 from "../../components/level-1_6/Level-1_6";
import Level2_2 from "../../components/level-2_2/Level-2_2";
import "./Home.css";

const Home = () => {
    return (  
        <div className="container">
            <Level1_1 />
            <hr />
            <Level1_3 />
            <hr />
            <Level1_6 />
            <hr />
            <Level2_2 />
        </div>
    );
}

export default Home;