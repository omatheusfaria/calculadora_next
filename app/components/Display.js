// components/Display.js

import styles from '../styles/Calculator.module.css';

/**
 * Componente Display
 *
 * Exibe duas informações: a expressão completa da operação em uma linha menor e
 * o valor atual (ou resultado) em uma linha maior.
 *
 * @param {object} props - As propriedades do componente.
 * @param {string} props.expression - A expressão matemática a ser exibida (ex: "9+8=").
 * @param {string} props.value - O valor atual a ser exibido (ex: "17").
 * @returns {JSX.Element} O elemento do visor.
 */
const Display = ({ expression, value }) => {
    return (
        <div className={styles.display}>
            <div className={styles.expression}>{expression}</div>
            <div className={styles.currentValue}>{value}</div>
        </div>
    );
};

export default Display;