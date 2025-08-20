import React from "react";
import {
  selectFilter,
  selectTasks,
  updateFilter,
} from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import TaskCard from "../components/module/tasks/TaskCard";
import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  // Filtered tasks
  const filteredTasks = tasks.filter((task) =>
    filter === "all" ? true : task.priority === filter
  );

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center gap-5">
        <h1 className="text-2xl font-bold mr-auto">Tasks</h1>
        <Tabs defaultValue={"all"}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              onClick={() => dispatch(updateFilter("all"))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("Low"))}
              value="Low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("Medium"))}
              value="Medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("High"))}
              value="High"
            >
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
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
