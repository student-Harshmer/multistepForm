import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  labelText: {
    fontSize: 17,
    fontWeight: 600,
    paddingBottom: 15,
  },
  radioIputContainer: {
    gap: 10,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
  },
  radioView: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#f00',
    fontSize: 13,
    marginTop: 4,
    paddingHorizontal: 10,
  },
  activeButton: {
    backgroundColor: '#007AFF',
  },
  radioButton: {
    height: 12,
    width: 12,
    borderRadius: 6,
  },
  bioInput: {
    borderRadius: 10,
    height: 90,
    padding: 5,
    backgroundColor: '#f4f4f4',
    borderWidth: 1.5,
    borderColor: '#fff',
  },
});