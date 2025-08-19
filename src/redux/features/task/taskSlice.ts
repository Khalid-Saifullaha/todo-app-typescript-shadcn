import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "High" | "Medium" | "Low" | "all";
}
const initialState: InitialState = {
  tasks: [
    {
      id: "asdf",
      title: "Initialize",
      description: "hello",
      dueDate: "2025",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "qwer",
      title: "Create Components",
      description: "Build reusable UI components",
      dueDate: "2025-08-26",
      isCompleted: true,
      priority: "Medium",
    },
    {
      id: "zxcv",
      title: "Implement Redux",
      description: "Setup Redux store and slices",
      dueDate: "2025-08-27",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "tyui",
      title: "Routing",
      description: "Configure React Router for pages",
      dueDate: "2025-08-28",
      isCompleted: false,
      priority: "Low",
    },
    {
      id: "hjkl",
      title: "Styling",
      description: "Add TailwindCSS for UI styling",
      dueDate: "2025-08-29",
      isCompleted: true,
      priority: "Medium",
    },
    {
      id: "bnm1",
      title: "Testing",
      description: "Write unit and integration tests",
      dueDate: "2025-08-30",
      isCompleted: false,
      priority: "High",
    },
  ],
  filter: "all",
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
