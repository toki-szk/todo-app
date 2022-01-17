import React, { useState } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import Layout from '@/components/common/Layout';
import { useTasks } from "@/lib/queries/taskQuery";
import { useUpdateDoneTask, useCreateTask } from '@/lib/queries/taskQuery';
const Home: React.VFC = (): JSX.Element => {

  const { data: tasks, status } = useTasks();
  const updateDoneTask = useUpdateDoneTask();
  const [title, setTitle] = useState('');
  const createTask = useCreateTask();

  if (status === 'loading') {
    return <div className="loader" />;
  } else if (status === 'error') {
    return <div className="item-center">データの読み込みに失敗しました。</div>;
  } else if (!tasks || tasks.length <= 0) {
    return <div className="item-center">登録されたTODOはありません</div>;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTask.mutate(title);
    setTitle('');
  };

  return (
    <Layout title="Home">
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="inner">
          <input
            type="text"
            className="input"
            placeholder="TODOを入力してください。"
            value={title}
            onChange={(e) => setTitle(e.target.value)} />
          <button className="btn is-primary">追加</button>
        </div>
      </form>
      <div className="inner">
        <ul className="task-list">
          {
            tasks.map(task => (
              <li key={task.id} className={task.is_done ? 'done' : ''}>
                <label className="checkbox-label">
                  <input type="checkbox" className="checkbox-input" onClick={() => updateDoneTask.mutate(task)} />
                </label>
                <div><span>{task.title}</span></div>
                <button className="btn is-delete">削除</button>
              </li>
            ))
          }
        </ul>
      </div>
    </Layout>);
};

export default Home;
