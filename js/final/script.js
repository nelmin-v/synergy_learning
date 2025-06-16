document.addEventListener('DOMContentLoaded', () => {
    const noteText = document.getElementById('note-text');
    const addNoteBtn = document.getElementById('add-note-btn');
    const notesContainer = document.getElementById('notes-container');

    let notes = JSON.parse(localStorage.getItem('notes')) || [];

    // Сохранить в localStorage
    const saveNotes = () => {
        localStorage.setItem('notes', JSON.stringify(notes));
    };

    // отрисовать заметку
    const createNoteElement = (note, index) => {
        const noteItem = document.createElement('div');
        noteItem.classList.add('note-item');
        noteItem.setAttribute('data-index', index);

        const noteContent = document.createElement('p');
        noteContent.textContent = note.text;
        noteContent.contentEditable = false;

        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('actions');

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.textContent = 'Редактировать';

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = 'Удалить';

        actionsDiv.appendChild(editBtn);
        actionsDiv.appendChild(deleteBtn);

        noteItem.appendChild(noteContent);
        noteItem.appendChild(actionsDiv);

        // Редактирование
        editBtn.addEventListener('click', () => {
            if (noteContent.contentEditable === 'true') {
                noteContent.contentEditable = false;
                editBtn.textContent = 'Редактировать';
                noteContent.style.outline = 'none';
                noteContent.style.border = 'none';
                notes[index].text = noteContent.textContent;
                saveNotes();
            } else {
                noteContent.contentEditable = true;
                noteContent.focus();
                editBtn.textContent = 'Сохранить';
                noteContent.style.outline = '1px dashed #007bff';
                noteContent.style.border = '1px solid #007bff';
            }
        });

        // Удаление
        deleteBtn.addEventListener('click', () => {
            noteItem.classList.add('fade-out');

            noteItem.addEventListener('animationend', () => {
                notes.splice(index, 1);
                saveNotes();
                renderNotes();
            }, { once: true });
        });

        return noteItem;
    };

    // отрисовать все
    const renderNotes = () => {
        notesContainer.innerHTML = '';
        notes.forEach((note, index) => {
            const noteElement = createNoteElement(note, index);
            notesContainer.appendChild(noteElement);
        });
    };

    // Добавить заметку
    addNoteBtn.addEventListener('click', () => {
        const text = noteText.value.trim();

        if (text) {
            const newNote = { text: text, id: Date.now() };
            notes.push(newNote);
            saveNotes();
            noteText.value = '';
            const newNoteElement = createNoteElement(newNote, notes.length - 1);
            notesContainer.appendChild(newNoteElement);
            void newNoteElement.offsetWidth;
            newNoteElement.classList.add('fade-in');
        } else {
            alert('Пожалуйста, введите текст заметки!');
        }
    });

    renderNotes();
});