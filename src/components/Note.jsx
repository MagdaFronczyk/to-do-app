import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Note extends Component {
    constructor(props) {
        super(props);
        this.noteContent = props.noteContent; //pobieramy z propsów przekazanych w App
        this.noteId = props.noteId; //pobieramy z propsów przekazanych w App
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
    }

    handleRemoveNote(id) {
        this.props.removeNote(id);
    }

    render() {
        return (
            <div className="body_note">
                <p className="note_content">{this.noteContent}</p>
                <span className="note_button" onClick={()=> this.handleRemoveNote(this.noteId)}>
                    &times;
                </span>
            </div>
        )
    }
}

Note.propTyps = {
    noteContent: PropTypes.string
};
export default Note;