import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";
import css from "./MainMenu.module.css";

const MainMenu = observer(() => {
    return (
        <div className={css.menu}>
            <div className={css.block}>Card Game</div>
            <div className={css.buttons}>
                <NavLink to="map">Начать</NavLink>
                <NavLink to="game">Обучение</NavLink>
            </div>
        </div>
    );
});

export default MainMenu;
