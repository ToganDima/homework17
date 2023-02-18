import StatusBar from "../components/StatusBar";
import ContactList from "../components/ContactList";
import Footer from "../components/Footer";

import "../components/ContactsBook.css";

function ContactsBook() {
    return (
      <div className="contacts-book">
        <StatusBar />
        <ContactList />
        <Footer />
      </div>
    );
}

export default ContactsBook;
