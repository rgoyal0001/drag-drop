import { v4 as uuid } from "uuid";

const taskLimitNumber = 8;

export const columnsRawData = [
    {
        id: 1,
        name: "Red",
        limit: taskLimitNumber,
        color: "red",
        taskIds: [
            {
                id: uuid(),
                text: "ball",
                idColumn: 1,
            },
            {
                id: uuid(),
                text: "bat",
                idColumn: 1,
            },
            {
                id: uuid(),
                text: "tennis",
                idColumn: 1,
            },
        ],
    },
    {
        id: 2,
        name: "Blue",
        limit: taskLimitNumber,
        color: "blue",
        taskIds: [
            { id: uuid(), text: "cricket", idColumn: 2},
            { id: uuid(), text: "sports", idColumn: 2},
            { id: uuid(), text: "football", idColumn: 2},
            { id: uuid(), text: "NBA", idColumn: 2},
        ],
    },
    {
        id: 3,
        name: "Green",
        limit: taskLimitNumber,
        color: "green",
        taskIds: [
            { id: uuid(), text: "worldcup", idColumn: 3 },
            { id: uuid(), text: "IPL", idColumn: 3 },
        ],
    },
    {
        id: 4,
        name: "Black",
        limit: taskLimitNumber,
        color: "black",
        taskIds: [
            {
                id: uuid(),
                text: "FIFA",
                idColumn: 4
            },
            { id: uuid(), text: "India", idColumn: 4 },
            { id: uuid(), text: "Hockey", idColumn: 4 },
        ],
    }
];