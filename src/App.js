import React, {Component} from 'react';
import Note from './Note/Note'
import NoteForm from './NoteForm/NoteForm'
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.addNote = this.addNote.bind(this); //przyklejamy this aby wskazywał na komponent App

        this.state = { //notatki przechowujemy w stacie, będą się zmieniać
            notes: [ //tablica z notatkami z odpowiednimi parami klucz i wartość
                {id: 1, noteContent: "note 1 here!"},
                {id: 2, noteContent: "note 2 here!"}
            ],
        }
    }

    addNote(note) {

        const previousNotes = this.state.notes; //pobieramy obecny stan notatek
        previousNotes.push({id: previousNotes.length+1, noteContent:note}); //dodajemy kolejną notatkę i id
        this.setState({
            notes: previousNotes //podstawiamy uaktualniony zbior notatek
        })
    }

    render() {
        return (
            <div className="notesWrapper">
                <div className="notesHeader">
                    <div className="heading">React & Firebase To-Do List</div>
                </div>
                <div className="notesBody">
                    {
                        this.state.notes.map((note) => { //mapujemy tablicę ze state'ów aby wyświetlić Note na stronie, "note" to jeden obiekt z tablicy, po "." dostajemy się do zawartości
                            return (
                                <Note noteContent={note.noteContent} noteId={note.id} key={note.id}/> //tworzymy komponenty Notes na podtawie głownej klasy,mają propsy, które pojawiają się w konstruktorze,przyjmują wartości ze statów
                            )
                        })
                    }
                </div>
                <div className="notesFooter">
                    <NoteForm addNote={this.addNote}/>
                </div>

            </div>
        );
    }
}

export default App;
