import React, {Component} from 'react';
import './NoteForm.css';

class NoteForm extends React.Component {
   constructor(props) {
   super(props);
        this.state = {
            newNoteContent:"",
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
   }

   handleUserInput(e) {
       this.setState({
           newNoteContent: e.target.value,
       })
   }

   writeNote(){

       this.props.addNote(this.state.newNoteContent); //na kliku wysylamy zawartość statu newNoteContent,który zawiera obecną notatke

       this.setState({ //na kliku czyscimy tez placeholder
           newNoteContent: '',
       })
   }

   render(){
     return (

         <div className="formWrapper">
             <input className="noteInput"
             placeholder="Write a note ..."
             value={this.state.newNoteContent}
             onChange={this.handleUserInput}/>
             <button className="noteButton"
             onClick={this.writeNote}>Add Note</button>
         </div>

     )
   }
 }

 export default NoteForm;