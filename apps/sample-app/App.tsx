import React from 'react';

import RootNavigationContainer from '@/app/navigation';
import SignedInProvider from '@/app/SignedInProvider';

export default function App() {
  return (
    <SignedInProvider>
      <RootNavigationContainer />
    </SignedInProvider>
  );
}
