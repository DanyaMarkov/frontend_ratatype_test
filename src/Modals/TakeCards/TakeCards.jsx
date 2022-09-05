import { observer } from "mobx-react-lite";
import css from "./TakeCards.module.css";
import Modal from "react-bootstrap/Modal";
import myDeck from "../../store/myDeck";
import Card from "../../components/Card/Card";
import takeCardsStore from "../../store/takeCardsStore";

const TakeCards = observer(({ show, onHide, curType }) => {
    function addCardToMyDeck(name, costType, cost, image, attack, hp, special) {
        myDeck.cards.push({ name, costType, cost, image, attack, hp, special });
    }

    return (
        <Modal show={show} onHide={onHide} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-name-vcenter">
                    Возьми карту себе в колоду
                </Modal.Title>
            </Modal.Header>
            <div className={css.content}>
                {myDeck.cards.length
                    ? takeCardsStore.chooseCards.map((card) => {
                          return (
                              <div
                                  onClick={() => {
                                      //   alert(card.name);
                                      addCardToMyDeck(
                                          card.name,
                                          card.costType,
                                          card.cost,
                                          card.image,
                                          card.attack,
                                          card.hp,
                                          card.special
                                      );
                                      onHide();
                                  }}
                                  className={css.fon}
                              >
                                  <Card
                                      className={css.oneCard}
                                      name={card.name}
                                      costType={card.costType}
                                      cost={card.cost}
                                      image={card.image}
                                      attack={card.attack}
                                      hp={card.hp}
                                      special={card.special}
                                  />
                              </div>
                          );
                      })
                    : null}
            </div>
        </Modal>
    );
});

export default TakeCards;
