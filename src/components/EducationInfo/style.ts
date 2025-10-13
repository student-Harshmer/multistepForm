import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 30,
  },
  dropdownStyle: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  labelText: {
    fontSize: 17,
    fontWeight: 600,
    paddingBottom: 15,
  },
  errorText: {
    color: '#f00',
    fontSize: 13,
    marginTop: 4,
    paddingHorizontal: 10,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  rightTickContainer: {
    width: 26,
    height: 26,
    borderWidth: 1,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  checkboxContainer: {
    gap: 10,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
});