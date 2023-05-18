import React from 'react';
import classes from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';

const ErrorModal = ({title, message, onConfirm}) => {
  return (
    <>
    <div className={classes.backdrop} onClick={onConfirm}/>
    <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{title}</h2>
        </header>
        <div className={classes.content}>
            <p>{message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={onConfirm}>Okey</Button>
        </footer>
    </Card>
    </>
  )
}

export default ErrorModal;