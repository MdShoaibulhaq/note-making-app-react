import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/form';
import Notes from './components/Notes';
import EditModel from './components/EditModel';
import { useState } from 'react';

function App() {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [notes, setNotes] = useState([])
  const [editid, seteditid] = useState("")
  
  

  return (
    <>
      <EditModel editid={editid} notes={notes} setNotes={setNotes} />
      <Navbar />
      <Form title={title} settitle={settitle} desc={desc} setdesc={setdesc} notes={notes} setNotes={setNotes} />
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <h1 className='mb-3'>You Notes</h1>
            {
              notes.legth === 0 ?<div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Message</h5>
                    <p className="card-text">No Notes Are for reading</p>

                  </div>
                </div> : notes.map((element) => {
                  return (
                    <Notes element={element} key={element.id} notes={notes} setNotes={setNotes} seteditid={seteditid}/>
                  )
                })
            }
          </div>
        </div>
      </div>
    </>
  );
  
  
  }
export default App;
