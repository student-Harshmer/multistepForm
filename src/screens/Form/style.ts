import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {

  },
  logoStyle: {
    width: '100%',
    height: 50,
  },
  safePadding: {
    paddingTop: 15,
  },
  header: {
    paddingVertical: 20,
    marginTop: 20,
  },
  leftPadding: {
    left: 20,
  },
  rightPadding: {
    right: 20,
  },
  inputContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 20,
  },
  horizontalInputStyle: {
    marginTop: 30,
  },
  verticalInputStyle: {
    paddingTop: 50,
  },
  headerTitleText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 600,
    color: '#339F44',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 10,
  },
  progressbar: {
    height: 3,
    width: '100%',
    backgroundColor: '#007AFF',
  },
  totalProgressIndicator: {
    height: 3,
    width: '100%',
    backgroundColor: '#e0e0e0',
  },
  noDisplay: {
    display: 'none',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  stepContainer: {
    height: 20,
    width: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  activestep: {
    backgroundColor: '#007AFF',
  },
  disabledStep: {
    backgroundColor: '#f00',
  },
  currentStep: {
    height: 26,
    width: 26,
    borderRadius: 13,
  },
  activestepText: {
    color: '#fff',
  },
  horizontalLogo: {
    width: '100%',
    height: 95,
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
    fontSize: 16,
    fontWeight: 600,
    color: '#fff',
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
  headerLineText: {
    textAlign: 'center',
    fontSize: 23,
    paddingTop: 20,
  }
});