import { observer } from "mobx-react-lite";
import Forest from "../Forest/Forest";
import MyDeck from "../MyDeck/MyDeck";
import css from "./Map.module.css";

const Map = observer(() => {
    return (
        <div className={css.body}>
            <div className={css.map}>
                <Forest />
            </div>
            <div className={css.myDeck}>
                Ваша колода:
                <MyDeck />
            </div>
        </div>
    );
});

export default Map;
