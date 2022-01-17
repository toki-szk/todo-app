import { AxiosError } from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { toast } from 'react-toastify';

import * as tasksApi from "@/lib/api/taskApi";
const useTasks = () => {
  return useQuery('tasks', async () => tasksApi.getTask());
};

type MESSAGE_ERR = {
  errors: {
    title: string[]
  }
}


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

const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation(tasksApi.createTask, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('tasks');
      toast.success('登録に成功しました');
    },
    onError: (error: AxiosError<MESSAGE_ERR>) => {
      if (error.response?.data.errors) {
        Object.values(error.response?.data.errors).map(
          (messages) => {
            messages.map((message: string) => {
              toast.error(message);
            });
          }
        );
      } else {
        toast.error("登録に失敗しました");
      }
    }
  });
};

export { useTasks, useUpdateDoneTask, useCreateTask };


