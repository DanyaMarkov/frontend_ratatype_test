import css from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.footer__contacts}>
                <div className={css.footer__contacts_el}>
                    <span>
                        {/* +7 (495) 617-04-29 <br></br> 8 (966) 112-55-44 */}
                        <a href="tel:+74956170429">+7 (495) 617-04-29</a>
                        <br></br>
                        <a href="tel:+79661125544">+7 (966) 112-55-44</a>
                    </span>
                </div>

                <div className={css.footer__contacts_el}>
                    {/* <span>formula_stekla@mail.ru</span> */}
                    <a href="mailto:formula_stekla@mail.ru&body=Здравствуйте! Хочу заказать..?subject=Вопрос">
                        formula_stekla@mail.ru
                    </a>
                </div>
            </div>

            <div className={css.footer__socialNetworks}>
                Социальные сети: <br></br>
                <a href="https://vk.com/public177143330">Вконтакте</a>
            </div>

            <div className={css.footer__copyright}>
                <div className={css.footer__copyright_el}>
                    <div>© {new Date().getFullYear()} "Формула стекла"</div>
                </div>

                <div className={css.footer__copyright_el}>
                    <span>г.Москва, ул. Деловая, д.12</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
