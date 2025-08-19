import React, { useState } from "react";
import { ITask } from "@/types";
import { Button } from "@/components/ui/button";
import { Trash2, Check } from "lucide-react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";

interface TaskCardProps {
  task: ITask;
}

const TaskCard = ({ task }: TaskCardProps) => {
  // State যোগ করা হলো
  const [isCompleted, setIsCompleted] = useState(task.isCompleted || false);

  return (
    <div className="border px-3 py-3 rounded-md   mt-5 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("w-3 h-3 rounded-full", {
              "bg-green-500": task.priority === "Low",
              "bg-yellow-500": task.priority === "Medium",
              "bg-red-500": task.priority === "High",
            })}
          ></div>
          <h1>{task.title}</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button variant="link" className="p-0 text-red-500">
            <Trash2 />
          </Button>

          {/* Radix Checkbox */}
          <Checkbox.Root
            checked={isCompleted}
            onCheckedChange={(checked) => setIsCompleted(!!checked)}
            className="w-5 h-5 border rounded flex items-center justify-center"
          >
            <Checkbox.Indicator>
              <Check className="w-4 h-4 text-green-500" />
            </Checkbox.Indicator>
          </Checkbox.Root>
        </div>
      </div>
      <p className="mt-5">{task.description}</p>
    </div>
  );
};

export default TaskCard;
