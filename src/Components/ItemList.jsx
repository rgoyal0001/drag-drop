import React, { useState,useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import ItemColumn from "./ItemColumn";
import { columnsRawData } from "./ItemData";
import ItemsModal from "./ItemModel";
import './../App.css'
const ItemList = () => {

    const [columns,setColumns]=useState(JSON.parse(window.localStorage.getItem("columns")) || columnsRawData);
    const [modal, setModal] = useState(false);

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const start = columns[source.droppableId];
        const finish = columns[destination.droppableId];

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);

            const swapTask = newTaskIds[source.index];
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, swapTask);

            const newColumnsState = columns.map((c) => {
                if (c.id === start.id) {
                    c.taskIds = newTaskIds;
                    return c;
                } else return c;
            });

            const newColumnsState2 = [...newColumnsState];
            setColumns(newColumnsState2);
        } else {
            if (finish.taskIds.length < finish.limit) {
                const startTaskIds = Array.from(start.taskIds);
                const [item] = startTaskIds.splice(source.index, 1);

                const finishTaskIds = Array.from(finish.taskIds);
                finishTaskIds.splice(destination.index, 0, item);

                const newColumnsState = columns.map((c) => {
                    if (c.id === start.id) {
                        c.taskIds = startTaskIds;
                        return c;
                    } else if (c.id === finish.id) {
                        c.taskIds = finishTaskIds;
                        return c;
                    } else return c;
                });
                const newColumnsState2 = [...newColumnsState];
                setColumns(newColumnsState2);
            } else return;
        }
    };

    const openModal = (data) => {
        const columnId = data.id;
        setModal(columnId);
    };

    const closeModal = () => {
        setModal(false);
    };

    const addTask = (newTask) => {
        setModal(false);
        const updatedColumns = columns.map((column) => {
            if (column.id === newTask.idColumn && column.taskIds.length < 8) {
                column.taskIds.push(newTask);
                return column;
            } else return column;
        });
        setColumns(updatedColumns);
    };

    const removeTask = (taskId) => {
        const updatedColumns = columns
            .map((column) => {
                return Object.assign({}, column, {
                    taskIds: column.taskIds.filter(
                        (task) => task.id !== taskId
                    ),
                });
            })
            .filter((column) => column.taskIds.length >= 0);
        setColumns(updatedColumns);
    };

    const editTask = (taskId, newText) => {
        const updatedColumns = columns.map((column) => {
            return Object.assign({}, column, {
                taskIds: column.taskIds.map((task) => {
                    if (task.id === taskId) {
                        task.text = newText;
                        return task;
                    }
                    return task;
                }),
            });
        });
        setColumns(updatedColumns);
    };

    useEffect(() => {
        window.localStorage.setItem("columns", JSON.stringify(columns));
    }, [columns]);
  return (
    <div>
        <DragDropContext onDragEnd={onDragEnd}>
                <div className="Items">
                    {modal && (
                        <ItemsModal
                            closeModal={closeModal}
                            addTask={addTask}
                            columnData={modal}
                        />
                    )}
                    <div className="Items-columns-container">
                        {columns.map((c) => {
                            return (
                                <ItemColumn
                                    columnData={c}
                                    key={c.name}
                                    openModal={openModal}
                                    removeTask={removeTask}
                                    editTask={editTask}
                                />
                            );
                        })}
                    </div>
                </div>
            </DragDropContext>
    </div>
  );
};
export default ItemList;
