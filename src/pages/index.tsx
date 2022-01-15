import React from 'react';

import Layout from '@/components/common/Layout';
import { useTasks } from "@/lib/queries/task-query";

const Home: React.VFC = (): JSX.Element => {

  const { data: tasks, status } = useTasks();

  if (status === 'loading') {
    return <div className="loader" />;
  } else if (status === 'error') {
    return <div className="item-center">データの読み込みに失敗しました。</div>;
  } else if (!tasks || tasks.length <= 0) {
    return <div className="item-center">登録されたTODOはありません</div>;
  }

  return (
    <Layout title="Home">
      <form className="input-form">
        <div className="inner">
          <input type="text" className="input" placeholder="TODOを入力してください。" defaultValue="" />
          <button className="btn is-primary">追加</button>
        </div>
      </form>
      <div className="inner">
        <ul className="task-list">
          {
            tasks.map(task => (
              <li key={task.id}>
                <label className="checkbox-label">
                  <input type="checkbox" className="checkbox-input" />
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
