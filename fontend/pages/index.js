import React from 'react';
import Link from 'next/link';
const Index = () => {
  return (
    <div>
      <ul className='demo'>
        <Link href="/admin">Admin</Link>
        <Link href="/associate">Associate</Link>
        <Link href="/customer">Customer</Link>
        <Link href="/employee">Employee</Link>
      </ul>
    </div>
  );
}

export default Index;
