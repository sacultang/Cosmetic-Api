import React from 'react';
import Image from 'next/image';
import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';
const Top = () => {
  return (
    <div>
      <div style={{ display: 'flex', paddingTop: 20 }}>
        <div style={{ flex: '100px 0 0' }}>
          <Image
            src='/vercel.svg'
            alt='img'
            width={80}
            height={40}
            style={{ display: 'block' }}
          />
        </div>
        <Header as='h1'>Hello World</Header>
      </div>
      <Gnb />
    </div>
  );
};

export default Top;
