import { useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { getLoader } from "redux/userSelector";
import { fetchContacts } from "services/fetchApi";
import { ContactForm } from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

export const App = () => {
  const dispatch = useDispatch();
  const loader = useSelector(getLoader);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {loader && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <InfinitySpin width="400" color="#4c2ef7" />
          </div>
        )}
        <ContactList />
      </div>
    </>
  );
};