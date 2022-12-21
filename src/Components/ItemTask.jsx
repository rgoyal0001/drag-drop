import React from "react";
import { Draggable } from "react-beautiful-dnd";
import ItemsEditForm from "./ItemEdit";
import useToggle from "./ToggleState";
import './../App.css'

const ItemTask = (props) => {
    const [isEditing, toggle] = useToggle(false);

    return (
        <Draggable draggableId={`${props.task.id}`} index={props.index}>
            {(provided) => (
                <div
                    className="ItemsTask"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {isEditing ? (
                        <ItemsEditForm
                            color={props.color}
                            // backgroundColor={props.color}
                            editTask={props.editTask}
                            taskId={props.task.id}
                            toggle={toggle}
                            startText={props.task.text}
                        />
                    ) : (
                        <div className="ex" style={{backgroundColor: `${props.color}`}}>
                           
                            <div className="ItemsTask-content">
                                {props.task.text}
                            </div>
                            <div className="ItemsTask-options">
                                <button
                                    className="ItemsTask-btn-edit"
                                    style={{
                                        backgroundColor: `${props.color}`,
                                    }}
                                    onClick={toggle}
                                >
                                    Edit
                                </button>
                                <button
                                    className="ItemsTask-btn-delete"
                                    style={{
                                        backgroundColor: `${props.color}`,
                                    }}
                                    onClick={() =>
                                        props.removeTask(props.task.id)
                                    }
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </Draggable>
    );
};

export default ItemTask;