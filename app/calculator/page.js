// app/calculator/page.js

"use client";

import { useState } from 'react';
import CalculatorUI from '../components/CalculatorUI';
import styles from '../styles/Calculator.module.css';

export default function CalculatorPage() {
    // NOVO ESTADO: Mais detalhado para as novas funcionalidades
    const [currentValue, setCurrentValue] = useState('0'); // Valor principal no display
    const [previousValue, setPreviousValue] = useState(null); // Valor anterior para o cálculo
    const [operator, setOperator] = useState(null); // Operador selecionado
    const [expression, setExpression] = useState(''); // String da expressão completa
    const [overwrite, setOverwrite] = useState(true); // Flag para saber se o próximo número deve sobrescrever o display

    // FUNÇÕES DE LÓGICA

    const handleNumberClick = (number) => {
        if (overwrite) {
            setCurrentValue(number);
            setOverwrite(false);
        } else {
            setCurrentValue(currentValue === '0' ? number : currentValue + number);
        }
    };

    const handleDecimal = () => {
        if (overwrite) {
            setCurrentValue('0.');
            setOverwrite(false);
            return;
        }
        if (!currentValue.includes('.')) {
            setCurrentValue(currentValue + '.');
        }
    };

    const handleToggleSign = () => {
        setCurrentValue(String(parseFloat(currentValue) * -1));
    };

    const handleOperatorClick = (nextOperator) => {
        const numericCurrentValue = parseFloat(currentValue);

        // Se já existe uma operação pendente, calcula primeiro
        if (previousValue !== null && operator) {
            const result = performCalculation();
            setPreviousValue(result);
            setCurrentValue(String(result));
            setExpression(String(result) + ' ' + nextOperator);
        } else {
            setPreviousValue(numericCurrentValue);
            setExpression(currentValue + ' ' + nextOperator);
        }

        setOperator(nextOperator);
        setOverwrite(true);
    };

    const handleEquals = () => {
        if (!operator || previousValue === null) return;

        const result = performCalculation();
        setExpression(previousValue + ' ' + operator + ' ' + currentValue + ' =');
        setCurrentValue(String(result));

        // Reseta para a próxima operação
        setPreviousValue(null);
        setOperator(null);
        setOverwrite(true);
    };

    const handleClear = () => {
        setCurrentValue('0');
        setPreviousValue(null);
        setOperator(null);
        setExpression('');
        setOverwrite(true);
    };

    const performCalculation = () => {
        const prev = parseFloat(previousValue);
        const current = parseFloat(currentValue);

        switch (operator) {
            case '+': return prev + current;
            case '-': return prev - current;
            case '*': return prev * current;
            case '/': return prev / current;
            default: return current;
        }
    };

    return (
        <div className={styles.container}>
            <CalculatorUI
                displayValue={currentValue}
                expression={expression}
                handleNumberClick={handleNumberClick}
                handleOperatorClick={handleOperatorClick}
                handleClear={handleClear}
                handleEquals={handleEquals}
                handleDecimal={handleDecimal}
                handleToggleSign={handleToggleSign}
            />
        </div>
    );
}