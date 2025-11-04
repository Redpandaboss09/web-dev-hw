import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as db from "../Database";

export type Enrollment = { _id?: string; user: string; course: string };

type State = { enrollments: Enrollment[] };

const initialState: State = {
    enrollments: (db.enrollments as Enrollment[]) ?? [],
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        enroll: (state, { payload }: PayloadAction<{ user: string; course: string }>) => {
            const { user, course } = payload;
            const already = state.enrollments.some(e => e.user === user && e.course === course);
            if (!already) state.enrollments.push({ user, course });
        },
        unenroll: (state, { payload }: PayloadAction<{ user: string; course: string }>) => {
            const { user, course } = payload;
            state.enrollments = state.enrollments.filter(e => !(e.user === user && e.course === course));
        },
        toggleEnrollment: (state, { payload }: PayloadAction<{ user: string; course: string }>) => {
            const { user, course } = payload;
            const idx = state.enrollments.findIndex(e => e.user === user && e.course === course);
            if (idx >= 0) state.enrollments.splice(idx, 1);
            else state.enrollments.push({ user, course });
        },
    },
});

export const { enroll, unenroll, toggleEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;