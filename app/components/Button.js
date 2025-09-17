// components/Button.js

import styles from '../styles/Calculator.module.css';

 /*
 * Componente Button
 *
 * Um botão genérico para a calculadora. Ele pode ser estilizado
 * de forma diferente com base nas suas propriedades.
 *
 * @param {object} props - As propriedades do componente.
 * @param {string} props.label - O texto a ser exibido no botão.
 * @param {function} props.onClick - A função a ser chamada quando o botão é clicado.
 * @param {string} [props.type] - O tipo do botão ('operator', 'double'), usado para estilização.
 * @returns {JSX.Element} O elemento do botão.
 */
const Button = ({ label, onClick, type }) => {
    // Constrói a lista de classes CSS com base no tipo do botão
    const buttonClasses = [
        styles.button,
        type === 'operator' ? styles.operator : '',
        type === 'double' ? styles.double : '',
    ].join(' ').trim(); // .trim() remove espaços extras

    return (
        <button className={buttonClasses} onClick={() => onClick(label)}>
            {label}
        </button>
    );
};

export default Button;