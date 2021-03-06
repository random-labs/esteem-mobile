import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: '$primaryBackgroundColor',
    flex: 1,
  },
  formStyle: {
    backgroundColor: '$white',
    height: 30,
    marginTop: 8,
  },
  label: {
    fontSize: 14,
    color: '$primaryDarkText',
    fontWeight: '500',
  },
  formItem: {
    marginBottom: 24,
  },
  coverImg: {
    borderRadius: 5,
    height: 60,
    marginBottom: 12,
    alignSelf: 'stretch',
    backgroundColor: '#296CC0',
  },
  coverImageWrapper: {},
  addIcon: {
    color: '$white',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '$iconColor',
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    borderColor: '$white',
    borderWidth: 1,
    position: 'absolute',
    bottom: 0,
    right: 10,
  },

  saveButton: {
    backgroundColor: '$primaryBlue',
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    position: 'absolute',
    top: -25,
    right: 10,
    zIndex: 999,
    borderWidth: 2,
    borderColor: '$white',
  },
  saveIcon: {
    color: '$white',
    textAlign: 'center',
  },

  input: {
    fontSize: 14,
    color: '$primaryDarkText',
    alignSelf: 'flex-start',
    width: '100%',
    height: 30,
  },
});
