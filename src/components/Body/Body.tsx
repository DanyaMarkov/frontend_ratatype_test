import russian from "./../../assets/russian.png";
import english from "../../assets/english.png";
import css from "./Body.module.css";

import React from "react";
import { observer } from "mobx-react-lite";
import statsStore from "../../store/statsStore";

const Body: React.FC = observer(() => {
    return (
        <div className={css.body}>
            <div className={css.body__text}>
                <div className={css.behindText}>{statsStore.selectedText}</div>
                <div className={css.mainText}>
                    <textarea value={statsStore.currentInput} onChange={(e) => statsStore.handleChange(e)}>
                        {statsStore.currentInput}
                    </textarea>
                </div>
            </div>
            <div className={css.body__info}>
                <div className={css.languages}>
                    <div
                        onClick={() => statsStore.setLanguage("russian")}
                        className={statsStore.currLanguage === "russian" ? css.languages__el_active : css.languages__el}
                    >
                        <img src={russian} alt="русский" />
                    </div>
                    <div
                        onClick={() => statsStore.setLanguage("english")}
                        className={statsStore.currLanguage === "english" ? css.languages__el_active : css.languages__el}
                    >
                        <img src={english} alt="английский" />
                    </div>
                </div>
                <div className={css.speed}>
                    <div className={css.indicators}>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="currentColor"
                                className="bi bi-speedometer"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"></path>
                                <path
                                    fill-rule="evenodd"
                                    d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"
                                ></path>
                            </svg>
                        </div>
                        <div>СКОРОСТЬ</div>
                    </div>
                    <div className={css.indicators__number}>
                        {statsStore.speed.toFixed(0)}
                        ⠀ЗН./МИН
                    </div>
                </div>
                {/* Точность */}
                <div className={css.accuracy}>
                    <div className={css.indicators}>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="currentColor"
                                className="bi bi-record-circle"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                            </svg>
                        </div>
                        <div>ТОЧНОСТЬ</div>
                    </div>
                    <div className={css.indicators__number}>{statsStore.accuracy.toFixed(2)}%</div>
                </div>
                {/* Заново */}
                <div className={css.reset}>
                    <button onClick={() => statsStore.reset()}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            className="bi bi-arrow-clockwise"
                            viewBox="0 0 16 16"
                            data-v-7d56558e=""
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                                data-v-7d56558e=""
                            ></path>
                            <path
                                d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
                                data-v-7d56558e=""
                            ></path>
                        </svg>{" "}
                        ЗАНОВО
                    </button>
                </div>
            </div>
        </div>
    );
});

export default Body;
