import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    gap: 20,
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
  genderInputText: {
    fontSize: 17,
    fontWeight: 600,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 500,
    color: '#fff',
  },
  container: {

  },
  header: {
    paddingVertical: 20,
    backgroundColor: '#f0f0f0',
  },
  inputContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 20,
  },
  verticalInputStyle: {
    paddingTop: 75,
  },
  headerTitleText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 600,
    color: '#339F44',
  },
  submitButton: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    paddingVertical: 12,
    backgroundColor: '#007AFF',
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerLineText: {
    textAlign: 'center',
    fontSize: 20,
    paddingBottom: 10,
  }
});