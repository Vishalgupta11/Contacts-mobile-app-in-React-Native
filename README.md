# Contacts-mobile-app-in-React-Native
When the app is launched, show the contacts of the phone (name and number) Show a Search box at the top, where we can search contacts. For example if we type Arjun, all Arjuns must get listed If a contact is clicked on, show their name and number in a dismissable popup.

1. ContactList.js:
-> This component will be responsible for displaying the list of contacts.
-> It will receive an array of contacts as a prop and map through them to provide individual contact items.
-> Each contact item will display the name and number of the contact.
-> When a contact item is clicked, it will call a callback function passed as a prop to handle the click event.

2. SearchBar.js:
-> This component will display a search input box at the top of the screen.
-> It will receive a callback function as a prop to handle the search query.
-> When the user types in the input box, it will call the callback function with the search query.

3. ContactPopup.js:
-> This component will display a dismissable popup with the name and number of a selected contact.
-> It will receive the selected contact as a prop and render its details.
-> The popup can be dismissed by calling a callback function passed as a prop.

4. App.js:
-> This is the main component that combines all the above components to create the Contacts app.
-> It maintains the state for the list of contacts, the search query, and the selected contact.
-> It handles the search functionality and opening/closing of the contact popup.



