import React, { useRef, useState } from 'react';
import styles from './MealItemForm.module.scss';
import Input from '../../UI/Input';

interface MealItemFormProps {
  onAddToCart: (amount: number) => void;
}

const MealItemForm = (props: MealItemFormProps) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!amountInputRef.current) return;

    const enteredAmount = +amountInputRef.current.value;
    if (enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
