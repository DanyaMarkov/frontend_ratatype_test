import { observer } from "mobx-react-lite";
import css from "./Card.module.css";

// import img from "../../assets/cardImages/gornostay.jpg";
// import img from "../../assets/cardImages";

const Card = observer(
    ({ name, costType, cost, attack, hp, image, special }) => {
        return (
            <div className={css.card}>
                <div className={css.card__up}>
                    <div>{name}</div>
                    <div>
                        {cost > 0 ? cost : null}
                        {costType === "blood" ? (
                            <img
                                src={require(`../../assets/cardIcons/blood.png`)}
                                alt="Картинка карты"
                            />
                        ) : (
                            <img
                                src={require(`../../assets/cardIcons/bone.png`)}
                                alt="Картинка карты"
                            />
                        )}
                    </div>
                </div>
                <div className={css.card__image}>
                    <img
                        src={require(`../../assets/cardImages/${image}.jpg`)}
                        alt="Картинка карты"
                    />
                </div>
                <div className={css.card__lower}>
                    <div className={css.stats}>
                        <div> {attack}</div>
                        <div>
                            <img
                                src={require(`../../assets/cardIcons/attack.png`)}
                                alt="Картинка атаки"
                            />
                        </div>
                    </div>
                    <div className={css.stats__image}>
                        {special === "none" ? (
                            ""
                        ) : "weakening" ? (
                            <img
                                src={require(`../../assets/specials/${special}.jpg`)}
                                alt="Картинка особенности"
                            />
                        ) : "fly-defence" ? (
                            <img
                                src={require(`../../assets/specials/${special}.jpg`)}
                                alt="Картинка особенности"
                            />
                        ) : (
                            "ничего"
                        )}
                    </div>
                    <div className={css.stats}>
                        <div>
                            <img
                                src={require(`../../assets/cardIcons/hp.png`)}
                                alt="Картинка здоровья"
                            />
                        </div>
                        <div> {hp}</div>
                    </div>
                </div>
            </div>
        );
    }
);

export default Card;
