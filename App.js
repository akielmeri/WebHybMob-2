import { StyleSheet, Modal, Text, View, Pressable } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.container}>
          <View style={styles.modal}>
            <Text style={styles.text}>Hello! This is a modal.</Text>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.closeText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable onPress={() => {
          setModalVisible(true);
        }}
        style={styles.button}>
      <Text style={styles.text}>Tap here to show modal message</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(220,214,202)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    paddingVertical: 20,
    width: '80%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(239,122,20)',
  },
  button: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeText: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    marginBottom: 10,
    fontSize: 16,
  },
});
