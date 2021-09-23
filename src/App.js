import React, { useState } from 'react';

import './App.css';
import ContentList from './components/ContentsList';

function App() {

  const [contents, setContents] = useState([]);
  
  function fetchHandler() {
    fetch('https://reqres.in/api/users?page=1').then(response => {
      return response.json();
    }).then(data => {
      const transformedContents = data.data.map(contentData => {
        return {
          id: contentData.id,
          title: contentData.email,
          openingText: contentData.first_name,
          releaseDate: contentData.last_name,
          photo: contentData.avatar
        }
      });
      setContents(transformedContents);
    });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchHandler}> Get Users</button>
      </section>
      <section>
        <ContentList contents={contents} />
      </section>
    </React.Fragment>
  );
}

export default App;
