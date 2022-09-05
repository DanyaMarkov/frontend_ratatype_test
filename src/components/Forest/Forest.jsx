import { observer } from "mobx-react-lite";
import css from "./Forest.module.css";
import forestStore from "../../store/forestStore";

import { useState } from "react";
import { useEffect } from "react";
import TakeCards from "../../Modals/TakeCards/TakeCards";
import takeCardsStore from "../../store/takeCardsStore";
import BloodBones from "../../Modals/BloodBones/BloodBones";

const Forest = observer(() => {
    useEffect(() => {
        forestStore.makeRandom();
        // alert("обновился");
    }, []);

    //const navigate = useNavigate();
    const [takeCardsVisible, setTakeModalVisible] = useState(false);
    const [bloodBonesVisible, setBloodBonesVisible] = useState(false);

    return (
        <div className={css.forest}>
            <div className={css.line}>
                <div className={css.location}> Босс </div>
            </div>
            <div className={css.line}>
                <div className={css.location}> Кровь/костяшки </div>
                <div className={css.location}> Рулетка </div>
            </div>
            <div className={css.line}>
                <div className={css.location}> Предметы</div>
                <div className={css.location}> Костёр улучшения</div>
            </div>
            <div className={css.line}>
                <div className={css.location}> Противник </div>
            </div>
            <div className={css.line}>
                <div className={css.location}> Предметы</div>
                <div className={css.location}> Костёр улучшения</div>
            </div>
            <div className={css.line}>
                {forestStore.random1 === 1 ? (
                    forestStore.loc2 === false ? (
                        <div
                            className={css.location}
                            // onClick={() => forestStore.goTo("Карты")}
                            onClick={() => {
                                forestStore.loc2 = true;
                                forestStore.locate1 = "takeCards";
                                takeCardsStore.makeRandom();
                                setTakeModalVisible(true);
                            }}
                        >
                            Карты
                        </div>
                    ) : (
                        <div className={css.passedLocation}> Карты </div>
                    )
                ) : forestStore.loc2 === false ? (
                    <div
                        className={css.location}
                        onClick={() => {
                            forestStore.loc2 = true;
                            forestStore.locate1 = "bloodBones";
                            takeCardsStore.makeRandom();

                            setBloodBonesVisible(true);
                        }}
                    >
                        Кровь/костяшки
                    </div>
                ) : (
                    <div className={css.passedLocation}> Кровь/костяшки </div>
                )}
            </div>
            <div className={css.line}>
                <div className={css.passedLocation}> Начало</div>
            </div>

            <TakeCards
                show={takeCardsVisible}
                onHide={() => setTakeModalVisible(false)}
            />

            <BloodBones
                show={bloodBonesVisible}
                onHide={() => setBloodBonesVisible(false)}
            />
        </div>
    );
});

export default Forest;
