import React, { useState } from 'react';
import { View } from 'react-native';
import ContactList from './ContactList';
import SearchBar from './SearchBar';
import ContactPopup from './ContactPopup';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'Arjun', number: '1234567890' },
    { id: '2', name: 'John', number: '987654321
