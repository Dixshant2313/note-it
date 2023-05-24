import React from 'react';

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>This is a simple note-taking app created using React. You can use it to create, view, edit, and delete notes.</p>
      <h3>Features</h3>
      <ul>
        <li><b>Create new notes</b> - To create a new note, simply click the "Add Note" button on the homepage. This will bring up a new note editor where you can enter the title and content of your note.</li>
        <li><b>View existing notes</b> - All of your existing notes will be displayed on the homepage. You can click on any note to view its contents in more detail.</li>
        <li><b>Edit notes</b> - To edit a note, simply click on the note you want to edit and then click the "Edit" button. This will bring up the note editor with the current contents of the note. You can make changes and then click "Save" to update the note.</li>
        <li><b>Delete notes</b> - To delete a note, simply click on the note you want to delete and then click the "Delete" button. This will remove the note from your list of notes.</li>
      </ul>
      <h3>Technologies Used</h3>
      <ul>
        <li><b>React</b> - A JavaScript library used to build user interfaces.</li>
        <li><b>React Router</b> - A routing library used to handle navigation between different pages of the app.</li>
        <li><b>Express</b> - A Node.js web application framework used to build the backend of the app.</li>
        <li><b>Node.js</b> - A JavaScript runtime used to build the backend of the app.</li>
        <li><b>MongoDB</b> - A NoSQL database used to store the notes in the app.</li>
        <li><b>Bootstrap</b> - A popular front-end framework used to create responsive and mobile-first web pages.</li>
      </ul>
    </div>
  );
}

export default About;
