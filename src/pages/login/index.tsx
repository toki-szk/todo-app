import Link from 'next/link';
import React from 'react';

import Layout from '@/components/common/Layout';

const LoginPage = () => {
  return <Layout title="LoginPage">
    <div className="login-page">
      <div className="login-panel">
        <form>
          <div className="input-group">
            <label>メールアドレス</label>
            <input type="email" className="input" />
          </div>
          <div className="input-group">
            <label>パスワード</label>
            <input type="password" className="input" />
          </div>
          <button type="submit" className="btn">ログイン</button>
        </form>
      </div>

      <div className="links">
        <Link href="/help">
          <a>Help</a>
        </Link>
      </div>
    </div>
  </Layout>;
};

export default LoginPage;
