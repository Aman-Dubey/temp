import { useRef  } from "react";
import Input from "./Input.jsx";
import Modal from './Modal.jsx';

export default function NewProject({onAdd, onCancel} ) {
    const modal= useRef();
    const title=useRef();
    const description=useRef();
    const dueDate=useRef();

    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

    function handleSave() {
        const enteredTitle=title.current.value;
        const enteredDescription=description.current.value;
        const enteredDueDate=dueDate.current.value;

        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            modal.current.open();
            return;
        }
        onAdd ({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    return (
    <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className="text-xl font-bold text-stone-800 mt-4 my-4">Invalid Input!</h2>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-sm text-stone-800 hover:text-stone-950 hover:text-base mx-4 hover:font-semibold"
                     onClick={onCancel}>
                        Cancel
                    </button></li>
                <li>
                    <button className="px-6 py-2 text-sm rounded-md bg-teal-900  text-stone-50 hover:bg-teal-700 hover:text-base hover:font-semibold" 
                    onClick={handleSave}>        
                        Save
                    </button></li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title"/>
                <Input ref={description} label="Description" textarea/>
                <Input type="date" ref={dueDate} label="Due Date" min={date}/>
            </div>
        </div>
    </>
    )
}