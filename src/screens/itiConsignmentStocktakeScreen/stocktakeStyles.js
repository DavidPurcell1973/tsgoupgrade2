import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardStyle: {backgroundColor: 'white'},
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 0,
    paddingBottom: 5,
    alignContent: 'center',
  },
  labelStyle: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    color: '#999999',
  },
  overlayContainer: {
    width: '90%',
    // minHeight: '30%',
    height: '90%',
  },
  dropdownTextStyle: {
    // borderWidth: 1,
    // borderColor: 'red',
    marginTop: 10,
    // flex: 1,
    // height: 100,
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  dropdownStyle: {
    // borderWidth: 1,
    // borderColor: 'red',
    // marginTop: -40,
    // width: 100,
    // paddingTop: 5,
    // paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 5,
    // verticalAlign: 'bottom',
  },
  inputStyle: {
    // borderWidth: 1,
    // borderColor: 'black',
    // paddingTop: 15,
    // paddingBottom: -20,
    // paddingLeft: 5,
    // paddingRight: 5,
    // marginTop: 5,
    marginBottom: -10,
    // flex: 1,
    // verticalAlign: 'bottom',
  },
  shortButtonStyle: {
    borderRadius: 5,
    width: '100%',
    // width: 150,
  },
  buttonContainerStyle: {
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    // borderWidth: 10,
    // borderColor: 'black',
  },
  shortButton: {
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#3498db',
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    // margin: 5,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
});

export const colors = {
  primary: '#3498db',
  // secondary: '#ddd',
};

export default styles;
