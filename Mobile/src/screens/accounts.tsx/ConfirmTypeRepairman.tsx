import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
interface ItemType {
    id: number;
    label: string;
    value: string;
  }
const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];
const ConfirmTypeRepairman = () => {
  const navigation: any = useNavigation();
  const [value, setValue] = useState(null);

  const renderItem = (item:ItemType) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };
  return (
    <Formik
      initialValues={{job: '', address: ''}}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.confirmTypeContainer}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.header}>
              <Image source={require('../../assets/Confirm/confirmType.png')} />
            </View>
            <View style={styles.body}>
              <View style={styles.container}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>ĐĂNG KÝ</Text>
                </View>
                <View style={styles.form}>
                  <Text style={styles.titleJob}>Bạn là thợ gì?</Text>

                  <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select item"
                    searchPlaceholder="Search..."
                    value={value}
                    onChange={item => {
                      setValue(item.value);
                    }}
                    renderItem={renderItem}
                  />

                  <Text style={styles.titleJob}>Địa chỉ</Text>
                  <View style={styles.spaceContainer}>
                    <TextInput
                      style={styles.inputCode}
                      onChangeText={handleChange('address')}
                      onBlur={handleBlur('address')}
                      value={values.address}
                    />
                  </View>
                  <View style={styles.buttonOnpress}>
                    <View style={styles.buttonConfirms}></View>
                    <TouchableOpacity
                      style={styles.buttonConfirm}
                      onPress={() => navigation.navigate('SignUp')}>
                      <Text style={styles.textConfirm}>TIẾP TỤC</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.footer}>
              <View style={styles.bgImg}>
                <Image
                  source={require('../../assets/Confirm/demo.png')}
                  style={styles.imgDemo}></Image>
                <Image
                  source={require('../../assets/Confirm/demo1.png')}
                  style={styles.imgDemo1}
                />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

export default ConfirmTypeRepairman;

const styles = StyleSheet.create({
  confirmTypeContainer: {
    flex: 1,
    backgroundColor: '#FCA234',
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 2,
    position: 'absolute',
    zIndex: 2,
    justifyContent: 'center',
    width: '100%',
    marginTop: '10%',
  },
  footer: {
    flex: 1,
  },
  bgImg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 100,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#394C6D',
    fontSize: 30,
    fontWeight: 'bold',
  },
  titleCode: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputCode: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
    width: '80%',
  },
  spaceContainer: {
    alignItems: 'center',
  },

  container: {
    marginTop: 40,
  },
  buttonConfirms: {
    width: '50%',
  },
  buttonConfirm: {
    width: '50%',
    backgroundColor: '#394C6D',
    borderRadius: 10,
    height: 60,
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  textConfirm: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imgDemo: {
    marginRight: 65,
  },
  imgDemo1: {
    marginTop: 100,
  },
  titleJob: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 40,
  },
  form: {
    marginTop: 30,
  },
  buttonOnpress: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 40,
  },
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 37,
    shadowColor: '#000',
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
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
  spaceContainers: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 36,
    borderWidth: 1,
    width: '80%',
  },
});
