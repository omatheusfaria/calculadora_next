// components/CalculatorUI.js

import Display from './Display';
import Button from './Button';
import styles from '../styles/Calculator.module.css';

/**
 * Componente CalculatorUI
 *
 *
 * @param {object} props - As propriedades do componente.
 * @param {string} props.displayValue - O valor principal a ser mostrado no visor.
 * @param {string} props.expression - A expressão completa a ser mostrada.
 * @param {function} props.handleNumberClick - Função para cliques em números.
 * @param {function} props.handleOperatorClick - Função para cliques em operadores.
 * @param {function} props.handleClear - Função para o botão de limpar (AC).
 * @param {function} props.handleEquals - Função para o botão de igual (=).
 * @param {function} props.handleDecimal - Função para o botão de ponto (.).
 * @param {function} props.handleToggleSign - Função para o botão de +/-.
 * @returns {JSX.Element} A interface completa da calculadora.
 */
const CalculatorUI = (props) => {
    return (
        <div className={styles.calculator}>
            <Display value={props.displayValue} expression={props.expression} />
            <div className={styles.buttons}>
                {/* Linha 1 */}
                <Button label="AC" onClick={props.handleClear} type="operator" />
                <Button label="+/-" onClick={props.handleToggleSign} type="operator" />
                <Button label="/" onClick={props.handleOperatorClick} type="operator" />
                <Button label="*" onClick={props.handleOperatorClick} type="operator" />
                {/* Linha 2 */}
                <Button label="7" onClick={props.handleNumberClick} />
                <Button label="8" onClick={props.handleNumberClick} />
                <Button label="9" onClick={props.handleNumberClick} />
                <Button label="-" onClick={props.handleOperatorClick} type="operator" />
                {/* Linha 3 */}
                <Button label="4" onClick={props.handleNumberClick} />
                <Button label="5" onClick={props.handleNumberClick} />
                <Button label="6" onClick={props.handleNumberClick} />
                <Button label="+" onClick={props.handleOperatorClick} type="operator" />
                {/* Linha 4 e 5 */}
                <Button label="1" onClick={props.handleNumberClick} />
                <Button label="2" onClick={props.handleNumberClick} />
                <Button label="3" onClick={props.handleNumberClick} />
                <Button label="=" onClick={props.handleEquals} type="operator" />
                <Button label="0" onClick={props.handleNumberClick} type="double" />
                <Button label="." onClick={props.handleDecimal} />
            </div>
        </div>
    );
};

export default CalculatorUI;