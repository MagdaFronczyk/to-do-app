import React, {Component} from 'react';
import Note from './Note'
import NoteForm from './NoteForm'
import "../scss/_Main.scss"
import {DB_CONFIG} from "../Config/config";
import firebase from 'firebase/app';
import 'firebase/database'

class App extends Component {

    constructor(props) {
        super(props);

        this.addNote = this.addNote.bind(this); //przyklejamy this aby wskazywał na komponent App
        this.removeNote = this.removeNote.bind(this);
        this.app = firebase.initializeApp(DB_CONFIG);
        this.database = this.app.database().ref().child('notes');

        this.state = { //notatki przechowujemy w stacie, będą się zmieniać
            notes: [],
        }
    }

    componentWillMount() {
        const previousNotes = this.state.notes;

        this.database.on('child_added', snap => {
            previousNotes.push({
                id: snap.key,
                noteContent: snap.val().noteContent,
            });

            this.setState({
                notes: previousNotes
            });

        });

        this.database.on('child_removed', snap => {
            for (let i = 0; i < previousNotes.length; i++) {
                if (previousNotes[i].id === snap.key) {
                    previousNotes.splice(i, 1);
                }
            }

            this.setState({
                notes: previousNotes
            });

        });
    }

    addNote(note) {
        this.database.push().set({noteContent: note});
    }

    removeNote(noteId) {
        this.database.child(noteId).remove();
    }

    render() {
        return (
            <div className="notes">
                <div className="header_container">
                    <header className="notes_header container">
                        <h1 className="header_title">To-Do List</h1>
                    </header>
                </div>
                <div className="body_container">
                    <article className="notes_body container">
                        {
                            this.state.notes.map((note) => { //mapujemy tablicę ze state'ów aby wyświetlić Note na stronie, "note" to jeden obiekt z tablicy, po "." dostajemy się do zawartości
                                return (
                                    <Note noteContent={note.noteContent}
                                          noteId={note.id}
                                          key={note.id}
                                          removeNote={this.removeNote}/> //tworzymy komponenty Notes na podtawie głownej klasy,mają propsy, które pojawiają się w konstruktorze,przyjmują wartości ze statów
                                )
                            })
                        }
                    </article>
                </div>
                <div className="footer_container">
                    <footer className="notes_footer container">
                        <NoteForm addNote={this.addNote}/>
                    </footer>
                </div>
            </div>
        );
    }
}

export default App;
