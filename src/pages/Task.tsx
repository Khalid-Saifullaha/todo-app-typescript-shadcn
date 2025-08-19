import React from "react";
import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";
import TaskCard from "../components/module/tasks/TaskCard";
import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);

  // Filtered tasks
  const filteredTasks = tasks.filter((task) =>
    filter === "all" ? true : task.priority === filter
  );

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <AddTaskModal />
      </div>

      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
