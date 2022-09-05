import { observer } from "mobx-react-lite";
import myDeck from "../../store/myDeck";
import Card from "../Card/Card";
import css from "./MyDeck.module.css";

const MyDeck = observer(() => {
    return (
        <div className={css.myDeck}>
            {myDeck.cards.length
                ? myDeck.cards.map((card) => {
                      return (
                          <Card
                              name={card.name}
                              costType={card.costType}
                              cost={card.cost}
                              image={card.image}
                              attack={card.attack}
                              hp={card.hp}
                              special={card.special}
                          />
                      );
                  })
                : null}
        </div>
    );
});

export default MyDeck;
