import { useQuery, useMutation, useQueryClient } from "react-query";
import { toast } from 'react-toastify';

import * as tasksApi from "@/lib/api/taskApi";

const useTasks = () => {
  return useQuery('tasks', async () => tasksApi.getTask());
};

const useUpdateDoneTask = () => {
  const queryClient = useQueryClient();

  return useMutation(tasksApi.updateDoneTask, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('tasks');
    },
    onError: () => {
      toast.error('更新に失敗しました');
    }
  });
};

export { useTasks, useUpdateDoneTask };


