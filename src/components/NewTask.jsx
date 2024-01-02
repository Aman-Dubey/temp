import { useRef } from "react";
import Modal from './Modal.jsx';
import {useState} from 'react';

export default function NewTask({onAdd}) {
    const [enteredTask, setEnteredTask] = useState('');
    const modal= useRef();
    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        if(enteredTask.trim()=== '') {
            modal.current.open();
            return;
        }
        onAdd(enteredTask);
        setEnteredTask('');
    }

    return (
    <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className="text-xl font-bold text-stone-800 mt-4 my-4">Task can't be Empty!</h2>
        </Modal>
        <div className="flex items-center my-8 gap-4">
            <input type="text" className="w-96 h-12 px-2 py-1 rounded-md bg-stone-200" 
            onChange={handleChange}
            value={enteredTask}
            />
            <button className="text-stone-700 hover:text-stone-950" 
            onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                </button>
        </div>
    </>
    )
}