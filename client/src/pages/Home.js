import React from 'react';
import { useQuery } from '@apollo/client';

import ShowList from '../components/ShowList';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';

import { QUERY_COMMENTS, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

function Home() {

  const { loading, data } = useQuery(QUERY_COMMENTS);
  const { data: userData } =useQuery(QUERY_ME);

  const comments = data?.comments || [];
  const loggedIn = Auth.loggedIn();

  return (
    <>
      <main>
        <ShowList />

        <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <CommentForm />
          </div>
        )}
        </div>
      </main>
    </>
  );
};

export default Home;
