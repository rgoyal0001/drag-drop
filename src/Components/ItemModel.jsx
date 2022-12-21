import React from "react";
import useInputState from "./useInputState";
import { v4 as uuidv4 } from "uuid";
import './../App.css'

const ItemsModal = (props) => {
    const [text, handleChangeText] = useInputState("");

    const idColumn = props.columnData;

    const newTask = {
        id: uuidv4(),
        text: text,
        idColumn: idColumn,
    };
    
    console.log(`${props.columnData}`)

    return (
        <div className="ItemsModal" >
            <section className="ItemsModal-content" >
                <span
                    className="ItemsModal-close-btn"
                    onClick={props.closeModal}
                ></span>
                <form
                    className="ItemsModal-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        props.addTask(newTask);
                    }}
                >
                    <div className="ItemsModal-input-container">
                        <label htmlFor="item">Item: </label>
                        <textarea
                            className="ItemsModal-input"
                            type="text"
                            cols="20"
                            rows="5"
                            value={text}
                            onChange={handleChangeText}
                            name="task"
                            id="task"
                        ></textarea>
                    </div>
                    <button className="ItemsModal-input-submit-btn">
                        Submit
                    </button>   
                </form>
            </section>
        </div>
    );
};

export default ItemsModal;