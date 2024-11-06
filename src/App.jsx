import { useSelector } from 'react-redux';
import { selectContacts } from './redux/contactsSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

import './App.css';

const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        {contacts.length === 0 ? (
          <p>You don&apos;t have any contacts yet.</p>
        ) : (
          <>
            <SearchBox />
            <ContactList />
          </>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
