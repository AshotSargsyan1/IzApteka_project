import classes from './List.module.css'

export const List: React.FC = (): JSX.Element => {
    return (
        <div className={classes.listDivs}>
            <div >
                <ul>
                    <li>Д-Пантенол</li>
                    <li>ДОНА</li>
                    <li>ДОППЕЛЬГЕРЦ</li>
                    <li>ДУПЛЕКОР</li>
                    <li>Дазолик</li>
                </ul>
            </div>
            <div >
                <ul>
                    <li>Дайвобет</li>
                    <li>Дайвонекс</li>
                    <li>Дакарбазин</li>
                    <li>Дакарбазин Лахема</li>
                    <li>Дакарбазин-ЛЭНС</li>
                </ul>
            </div>

            <div >
                <ul>
                    <li>Даксас</li>
                    <li>Дактарин</li>
                    <li>Даларгин</li>
                    <li>Даларгин-Эллара</li>
                    <li>Далацин</li>
                </ul>
            </div>
            <div >
                <ul>
                    <li>Далацин Ц</li>
                    <li>Далацин Ц фосфат</li>
                    <li>Далерон</li>
                    <li>Далерон С</li>
                    <li>Далерон С юниор</li>
                </ul>
            </div>
            <div >
                <ul>
                    <li>Дальнева</li>
                    <li>Дальтифэн</li>
                    <li>Дальфаз</li>
                    <li>Дальфаз СР</li>
                    <li>Дальфаз ретард</li>
                </ul>
            </div>
        </div>
    )
}
