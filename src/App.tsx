import PageRender from 'components/Container/PageRender';
import Header from 'components/global/Header';
import { onAuthStateChanged, sendEmailVerification, signOut } from 'firebase/auth';
import { auth } from 'lib/firebase';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (!user.emailVerified) {
          await signOut(auth);
          await sendEmailVerification(user);
          return;
        }

        console.log(user);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<PageRender />} />
        <Route path="/:page" element={<PageRender />} />
        <Route path="/:page/:slug" element={<PageRender />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
