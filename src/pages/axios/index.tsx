import axios from 'axios';
import { useEffect } from 'react';

const instance = axios.create();

const Page = () => {
  useEffect(() => {
    instance.get('/api/test', {
      params: {
        q: '테스트입니다.:$,+[]',
      },
    });
  }, []);
  return <div></div>;
};

export default Page;
