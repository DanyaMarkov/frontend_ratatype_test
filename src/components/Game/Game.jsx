import { observer } from "mobx-react-lite";
// import { NavLink } from "react-router-dom";
import css from "./Game.module.css";

const Game = observer(() => {
    return (
        <div className={css.body}>
            <div className={css.body__left}>
                <div className={css.enemy}>
                    <div>Аватар</div>
                    <div>Имя</div>
                    <div>Чат</div>
                </div>
                <div>Костяшки</div>
            </div>
            <div className={css.body__middle}>
                <div className={css.main}>
                    <div className={css.main__match}>
                        <div>ХПшка</div>
                        <div>Колокольчик</div>
                    </div>
                    <div className={css.main__field}>
                        <div className={css.fieldLine}>
                            <div className={css.card}>Карта</div>
                            <div className={css.card}>Карта</div>
                            <div className={css.card}>Карта</div>
                            <div className={css.card}>Карта</div>
                        </div>
                        <div className={css.fieldLine}>
                            <div className={css.card}>Карта</div>
                            <div className={css.card}>Карта</div>
                            <div className={css.card}>Карта</div>
                            <div className={css.card}>Карта</div>
                        </div>
                        <div className={css.fieldLine}>
                            <div className={css.card}>Карта</div>
                            <div className={css.card}>Карта</div>
                            <div className={css.card}>Карта</div>
                            <div className={css.card}>Карта</div>
                        </div>
                    </div>
                </div>
                <div className={css.myCards}>
                    <div className={css.myCard}>Карта</div>
                    <div className={css.myCard}>Карта</div>
                    <div className={css.myCard}>Карта</div>
                    <div className={css.myCard}>Карта</div>
                    <div className={css.myCard}>Карта</div>

                    {/* productTypeStore.productTypes.map((productType) => {
                        return (
                            <NavLink
                                to={productType.id.toString()}
                                key={productType.id}
                                className={setActive}
                            > */}
                </div>
            </div>
            <div className={css.body__right}>
                <div className={css.items}>
                    Ваши предметы
                    <div className={css.items__el}>Доп. белка</div>
                    <div className={css.items__el}>Доп. белка</div>
                    <div className={css.items__el}>Пусто</div>
                    {/* productTypeStore.productTypes.map((productType) => {
                        return (
                            <NavLink
                                to={productType.id.toString()}
                                key={productType.id}
                                className={setActive}
                            > */}
                </div>
                <div className={css.takeCards}>
                    <div className={css.newCard}>Карта</div>
                    <div className={css.newCard}>Белка</div>
                </div>
            </div>
        </div>
    );
});

export default Game;
