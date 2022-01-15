import api from "@/lib/api/axios";
import { TASK } from "@/types/tasks";

const getTask = async () => {
  const { data } = await api.get<TASK[]>('api/tasks');
  return data;
};

export {
  getTask
};