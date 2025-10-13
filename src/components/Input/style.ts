import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
  },
  labelText: {
    fontSize: 17,
    fontWeight: 600,
    paddingBottom: 15,
  },
  inputStyle: {
    flex: 1,
    height: '100%',
  },
  noDisplay: {
    display: 'none',
  },
  focusedInputStyle: {
    borderWidth: 1.5,
    borderColor: '#007AFF',
  },
  inputStyleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '100%',
    backgroundColor: '#f4f4f4',
    borderRadius: 25,
    paddingHorizontal: 12,
    gap: 12,
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  errorInputStyle: {
    borderWidth: 1,
    borderColor: '#f00',
  },
  errorText: {
    color: '#f00',
    fontSize: 13,
    marginTop: 4,
    paddingHorizontal: 10,
  },
  eyeIconButton: {

  }
});