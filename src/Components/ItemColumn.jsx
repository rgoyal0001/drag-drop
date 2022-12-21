import React from "react";
import {Droppable} from 'react-beautiful-dnd'
import ItemTask from "./ItemTask";
import './../App.css'

const ItemColumn=(props)=>{
    return (
        <div
            className="ItemsColumn"
        >
            <div className="ItemsColumn-main">
                <h2 className="ItemsColumn-name" style={{color:props.columnData.color}}>{props.columnData.name}</h2>
                <p className="ItemsColumn-numbers">
                    {props.columnData.taskIds.length}/{props.columnData.limit}
                </p>
                <div className="ItemsColumn-header">
                    <button 
                        className="ItemsColumn-btn-add"
                        style={{backgroundColor:props.columnData.color,color:'white'}}                        onClick={() =>{ props.openModal(props.columnData) ;console.log(props.columnData)}}
                        disabled={
                            props.columnData.taskIds.length >= 8 ? true : false
                        }
                    >
                        Add
                    </button>
                </div>
                <Droppable droppableId={`${props.columnData.id - 1}`}>
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            className="ItemsColumns-tasks-container"
                            {...provided.droppableProps}
                        >
                            
                            {props.columnData.taskIds.map((task, index) => {
                                return (
                                    <ItemTask
                                        key={task.id}
                                        id={task.id}
                                        task={task}
                                        color={props.columnData.color}
                                        index={index}
                                        removeTask={props.removeTask}
                                        editTask={props.editTask}
                                    />
                                );
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
            
        </div>
    );
}
export default ItemColumn