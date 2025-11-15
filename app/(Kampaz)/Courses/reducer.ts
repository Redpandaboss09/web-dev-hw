import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { courses as seedCourses } from "../Database";
import { v4 as uuidv4 } from "uuid";

export interface Course {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    image: string;
    description: string;
}

interface CoursesState {
    courses: Course[];
}

const initialState: CoursesState = {
    courses: seedCourses as unknown as Course[],
};

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addNewCourse: (state, action: PayloadAction<Omit<Course, "_id">>) => {
            const newCourse: Course = { ...action.payload, _id: uuidv4() };
            state.courses.push(newCourse);
        },
        deleteCourse: (state, action: PayloadAction<string>) => {
            state.courses = state.courses.filter((c) => c._id !== action.payload);
        },
        updateCourse: (state, action: PayloadAction<Course>) => {
            const updated = action.payload;
            state.courses = state.courses.map((c) =>
                c._id === updated._id ? updated : c
            );
        },
        setCourses: (state, { payload: courses }) => {
            state.courses = courses;
        },
    },
});

export const { addNewCourse, deleteCourse, updateCourse, setCourses } = coursesSlice.actions;
export default coursesSlice.reducer;
