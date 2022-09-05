import Modal from "react-bootstrap/Modal";
import { observer } from "mobx-react-lite";
import { Card } from "react-bootstrap";
import myDeck from "../../store/myDeck";
import takeCardsStore from "../../store/takeCardsStore";
import css from "./BloodBones.module.css";

const BloodBones = observer(({ show, onHide, curType }) => {
    function addCardToMyDeck(name, costType, cost, image, attack, hp, special) {
        myDeck.cards.push({ name, costType, cost, image, attack, hp, special });
    }

    return (
        <Modal show={show} onHide={onHide} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-name-vcenter">
                    Выбери тип цены карты
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

export default BloodBones;
