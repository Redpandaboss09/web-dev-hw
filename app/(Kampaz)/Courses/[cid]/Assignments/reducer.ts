import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as db from "../../../Database";
import { v4 as uuidv4 } from "uuid";

export type Assignment = {
    _id: string;
    title: string;
    course: string;
    description?: string;
    points?: number;
    dueISO?: string;
    availableFromISO?: string;
    availableUntilISO?: string;
    editing?: boolean;
};

type AssignmentsState = {
    assignments: Assignment[];
};

const initialState: AssignmentsState = {
    assignments: (db.assignments as Assignment[]) ?? [],
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (
            state,
            { payload }: PayloadAction<Omit<Assignment, "_id"> & Partial<Pick<Assignment, "_id">>>
        ) => {
            const _id = payload._id ?? uuidv4();
            const newAssignment: Assignment = {
                _id,
                title: payload.title || "Untitled Assignment",
                course: payload.course,
                description: payload.description ?? "",
                points: payload.points ?? 100,
                dueISO: payload.dueISO,
                availableFromISO: payload.availableFromISO,
                availableUntilISO: payload.availableUntilISO,
            };
            state.assignments = [...state.assignments, newAssignment];
        },
        updateAssignment: (state, { payload }: PayloadAction<Assignment>) => {
            state.assignments = state.assignments.map((a) =>
                a._id === payload._id ? { ...a, ...payload } : a
            );
        },
        deleteAssignment: (state, { payload: assignmentId }: PayloadAction<string>) => {
            state.assignments = state.assignments.filter((a) => a._id !== assignmentId);
        },
        // optional convenience if you want an 'editing' flag like modules:
        editAssignment: (state, { payload: assignmentId }: PayloadAction<string>) => {
            state.assignments = state.assignments.map((a) =>
                a._id === assignmentId ? { ...a, editing: true } : a
            );
        },
    },
});

export const {
    addAssignment,
    updateAssignment,
    deleteAssignment,
    editAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;