import { useQuery } from "react-query";


import * as tasksApi from "@/lib/api/task-api";

const useTasks = () => {
  return useQuery('tasks', async () => tasksApi.getTask());
};

export { useTasks };


