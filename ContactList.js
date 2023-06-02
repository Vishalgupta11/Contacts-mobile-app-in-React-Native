import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';

const ContactList = ({ contacts, onContactPress }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onContactPress(item)}>
      <View>
        <Text>{item.name}</Text>
        <Text>{item.number}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={contacts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ContactList;
