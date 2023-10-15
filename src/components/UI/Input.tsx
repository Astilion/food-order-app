// Input.tsx
import React, { forwardRef, Ref } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  label: string;
  input: {
    id: string;
    type: string;
    min?: string;
    max?: string;
    step?: string;
    defaultValue?: string;
  };
}

const Input = forwardRef(
  ({ label, input }: InputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <div className={styles.input}>
        <label htmlFor={input.id}>{label}</label>
        <input ref={ref} {...input} />
      </div>
    );
  }
);

export default Input;
