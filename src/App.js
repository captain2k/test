import { Layout } from 'antd';


import './App.css';
import 'antd/dist/antd.css'
import MainHeader from './Component/MainHeader/MainHeader';
import SiderMenu from './Component/SiderMenu/SiderMenu';
import { useEffect } from 'react';


function App() {

  const { Header, Sider, Content } = Layout
  return (
    <div className="App">
      <Layout style={{
        backgroundColor: '#fff'
      }}>
        <Header
          style={{
            backgroundColor: '#E6311A',
            padding: '8px 20px',
            lineHeight: 0,
            height: 56,
            width: 1440,
            margin: 'auto',
            position: 'fixed',
            right: '50%',
            transform: "translateX(50%)",
            zIndex: 1
          }}>
          <MainHeader />
        </Header>
        <Layout style={{
          width: 1440,
          margin: 'auto',
          backgroundColor: '#ffffff',
          marginTop: 56
        }}>
          <Sider
            width={220}
            style={{
              backgroundColor: '#F3F2F1'
            }}>
            <SiderMenu />
          </Sider>

        </Layout>
      </Layout>
    </div>
  );
}

export default App;
