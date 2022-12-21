import React from "react";
import useInputState from "./useInputState";
import './../App.css'

const ItemsEditForm = (props) => {
    const [text, handleChangeText] = useInputState(props.startText);
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                props.editTask(props.taskId, text);
                props.toggle();
            }}
            className="ItemsEditForm"
            style={{ backgroundColor: `${props.color}`,color:'white' }}
        >
            <div className="ItemsEditForm-input-container" >
                <input
                    className="ItemsEditForm-input"
                    type="text"
                    value={text}
                    onChange={handleChangeText}
                    name="task"
                    id="task"
                    width="200px"
                    required
                ></input>
            </div>
            <button
                className="ItemsEditForm-btn"
                style={{ backgroundColor: `${props.color}`,color:'white' }}
            >
                Save
            </button>
        </form>
    );
};

export default ItemsEditForm;