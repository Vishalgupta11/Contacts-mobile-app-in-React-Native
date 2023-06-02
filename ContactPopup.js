import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

const ContactPopup = ({ contact, onClose }) => {
  return (
    <Modal visible={!!contact} animationType="slide" transparent>
      <View>
        <View>
          <Text>{contact && contact.name}</Text>
          <Text>{contact && contact.number}</Text>
          <TouchableOpacity onPress={onClose}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ContactPopup;
