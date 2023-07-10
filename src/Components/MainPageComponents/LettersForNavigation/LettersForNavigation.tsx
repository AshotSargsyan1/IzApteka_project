import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import classes from './LettersForNavigation.module.css'

export const LettersForNavigation = () => {

    const { t } = useTranslation()

    const lettersForNavigation: string[] = [
        '0-9', 'A-Z', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'
    ]
    return (
        <div className={classes.wrapperForLetter}>
            <small className={classes.searchWithLetter}>{t("lettersForNavigation.searchAlphabetically")}</small>
            <div className={classes.letters}>
                {lettersForNavigation.map(letter => <Link to='#' className={classes.letter}>{letter}</Link>)}
            </div>
        </div >
    )
}
