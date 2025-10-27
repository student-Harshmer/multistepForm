import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingTop: 20,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 500,
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    backgroundColor: '#007AFF',
    padding: 6,
    borderRadius: 10,
  },
  clearButton: {
    backgroundColor: '#f00',
  },
  focusedInput: {
    borderColor: '#007AFF',
  },
  buttonText: {
    color: '#fff',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
});