import React from 'react'

export default function Form({title,settitle,desc,setdesc,notes,setNotes}) {
    const inputHandler=(e)=>{
        if(e.target.id==="desc"){
            setdesc(e.target.value)
        }else{
            settitle(e.target.value)
        }
        console.log(title,desc)
    }
    const addNoteshandler=(e)=>{
        e.preventDefault()
        if(title!==""&&desc!==""){
            setNotes((note)=>{
                return(
                    [...notes,{
                        title:title,
                        desc:desc,
                        id:new Date().getTime()
                    }]
                )
            })
        }
      
        settitle("");
        setdesc("");
    }
    return (
        <>
            <div className="container my-3">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <form style={{border:"2px solid #adb5bd;",borderRadius:"10px",padding:"30px"}}>
                            <div className="mb-3">
                                <label for="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title "placeholder='Enter Your Title' value={title} onChange={inputHandler} />

                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Description</label>
                                <textarea name='desc' id='desc' rows='3' className='form-control' placeholder='Enter Your Description' value={desc} onChange={inputHandler} ></textarea>
                            </div>
                            
                            <button type="submit" className="btn btn-primary"onClick={addNoteshandler}>Add Notes</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
