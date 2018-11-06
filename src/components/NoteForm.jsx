import React, {Component} from 'react';

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

         <div className="footer_form">
             <input className="form_input"
             placeholder="Write a note ..."
             value={this.state.newNoteContent}
             onChange={this.handleUserInput}
             type="text"/>
             <button className="form_button"
             onClick={this.writeNote}>Add Note</button>
         </div>

     )
   }
 }

 export default NoteForm;