import React, {Component} from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component {
    constructor(props) {
        super(props);
        this.noteContent = props.noteContent; //pobieramy z propsów przekazanych w App
        this.noteId = props.noteId; //pobieramy z propsów przekazanych w App
    }

    render() {
        return (
            <div className="note">
                <p className="noteContent">{this.noteContent}</p>
            </div>
        )
    }
}

Note.propTyps = {
    noteContent: PropTypes.string
};
export default Note;