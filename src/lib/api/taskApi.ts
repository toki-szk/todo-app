import api from "@/lib/api/axios";
import { TASK } from "@/types/tasks";


const getTask = async () => {
  const { data } = await api.get<TASK[]>('api/tasks');
  return data;
};

const updateDoneTask = async ({ id, is_done }: TASK) => {
  const { data } = await api.patch<TASK>(
    `api/tasks/update-done/${id}`,
    { is_done: !is_done }
  );
  return data;
};

export {
  getTask,
  updateDoneTask
};