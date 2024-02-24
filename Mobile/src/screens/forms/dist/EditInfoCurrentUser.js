"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
// const options = {
//   title: 'Select Avatar',
//   customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
//   storageOptions: {
//     skipBackup: true,
//     path: 'images',
//   },
// };
var EditInfoCurrentUser = function () {
    //   const {
    //     control,
    //     handleSubmit,
    //     // formState: {errors},
    //   } = useForm();
    //   const onSubmit = () => {};
    //   const openImagePicker = () => {
    //     const options = {
    //       title: 'Select Avatar',
    //       storageOptions: {
    //         skipBackup: true,
    //         path: 'images',
    //       },
    //     };
    //     ImagePicker.launchImageLibrary(options, response => {
    //       if (response.didCancel) {
    //         console.log('User cancelled image picker');
    //       } else if (response.error) {
    //         console.log('ImagePicker Error: ', response.error);
    //       } else {
    //         console.log('Selected image:', response.uri);
    //       }
    //     });
    //   };
    //   const [filePath, setFilePath] = useState({data: '', uri: ''});
    //   const [fileData, setFileData] = useState('');
    //   const [fileUri, setFileUri] = useState('');
    //   const chooseImage = () => {
    //     let options = {
    //       title: 'Select Image',
    //       customButtons: [
    //         {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
    //       ],
    //       storageOptions: {
    //         skipBackup: true,
    //         path: 'images',
    //       },
    //     };
    //     ImagePicker.showImagePicker(options, response => {
    //       console.log('Response = ', response);
    //       if (response.didCancel) {
    //         console.log('User cancelled image picker');
    //       } else if (response.error) {
    //         console.log('ImagePicker Error: ', response.error);
    //       } else if (response.customButton) {
    //         console.log('User tapped custom button: ', response.customButton);
    //         Alert.alert(response.customButton);
    //       } else {
    //         const source = {uri: response.uri};
    //         console.log('response', JSON.stringify(response));
    //         setFilePath(response);
    //         setFileData(response.data);
    //         setFileUri(response.uri);
    //       }
    //     });
    //   };
    //   const launchCamera = () => {
    //     let options = {
    //       storageOptions: {
    //         skipBackup: true,
    //         path: 'images',
    //       },
    //     };
    //     ImagePicker.launchCamera(options, response => {
    //       console.log('Response = ', response);
    //       if (response.didCancel) {
    //         console.log('User cancelled image picker');
    //       } else if (response.error) {
    //         console.log('ImagePicker Error: ', response.error);
    //       } else if (response.customButton) {
    //         console.log('User tapped custom button: ', response.customButton);
    //         Alert.alert(response.customButton);
    //       } else {
    //         const source = {uri: response.uri};
    //         console.log('response', JSON.stringify(response));
    //         setFilePath(response);
    //         setFileData(response.data);
    //         setFileUri(response.uri);
    //       }
    //     });
    //   };
    //   const launchImageLibrary = () => {
    //     let options = {
    //       storageOptions: {
    //         skipBackup: true,
    //         path: 'images',
    //       },
    //     };
    //     ImagePicker.launchImageLibrary(options, response => {
    //       console.log('Response = ', response);
    //       if (response.didCancel) {
    //         console.log('User cancelled image picker');
    //       } else if (response.error) {
    //         console.log('ImagePicker Error: ', response.error);
    //       } else if (response.customButton) {
    //         console.log('User tapped custom button: ', response.customButton);
    //         Alert.alert(response.customButton);
    //       } else {
    //         const source = {uri: response.uri};
    //         console.log('response', JSON.stringify(response));
    //         setFilePath(response);
    //         setFileData(response.data);
    //         setFileUri(response.uri);
    //       }
    //     });
    //   };
    //   const renderFileData = () => {
    //     if (fileData) {
    //       return (
    //         <Image
    //           source={{uri: 'data:image/jpeg;base64,' + fileData}}
    //           style={styles.images}
    //         />
    //       );
    //     } else {
    //       return (
    //         <Image source={require('../../assets/Homes/avatar.png')} style={styles.images} />
    //       );
    //     }
    //   };
    //   const renderFileUri = () => {
    //     if (fileUri) {
    //       return <Image source={{uri: fileUri}} style={styles.images} />;
    //     } else {
    //       return (
    //         <Image
    //           source={require('../../assets/Homes/avatar.png')}
    //           style={styles.images}
    //         />
    //       );
    //     }
    //   };
    // return (
    //   <View style={styles.container}>
    //     <View style={styles.formEdit}>
    //       <View style={styles.part}>
    //         <Text style={styles.infoEdit}>Tên của bạn </Text>
    //         <Controller
    //           control={control}
    //           render={({field: {onChange, onBlur, value}}) => (
    //             <TextInput
    //               style={styles.inputInfo}
    //               onBlur={onBlur}
    //               onChangeText={onChange}
    //               value={value}
    //             />
    //           )}
    //           name="full_name"
    //           rules={{required: 'Tên không được bỏ trống'}}
    //           defaultValue=""
    //         />
    //         {/* {errors.name && (
    //           <Text style={{color: 'red'}}>{errors.name.message}</Text>
    //         )} */}
    //       </View>
    //       <View style={styles.part}>
    //         <Text style={styles.infoEdit}>Số điện thoại</Text>
    //         <Controller
    //           control={control}
    //           render={({field: {onChange, onBlur, value}}) => (
    //             <TextInput
    //               style={styles.inputInfo}
    //               onBlur={onBlur}
    //               onChangeText={onChange}
    //               value={value}
    //             />
    //           )}
    //           name="number_phone"
    //           rules={{required: 'SĐT không được bỏ trống '}}
    //           defaultValue=""
    //         />
    //         {/* {errors.email && (
    //           <Text style={{color: 'red'}}>{errors.email.message}</Text>
    //         )} */}
    //       </View>
    //       <View style={styles.part}>
    //         <Text style={styles.infoEdit}>Email của bạn</Text>
    //         <Controller
    //           control={control}
    //           render={({field: {onChange, onBlur, value}}) => (
    //             <TextInput
    //               style={styles.inputInfo}
    //               onBlur={onBlur}
    //               onChangeText={onChange}
    //               value={value}
    //             />
    //           )}
    //           name="email"
    //           rules={{required: 'Email không được bỏ trống'}}
    //           defaultValue=""
    //         />
    //         {/* {errors.email && (
    //           <Text style={{color: 'red'}}>{errors.email.message}</Text>
    //         )} */}
    //       </View>
    //       <View style={styles.part}>
    //         <Text style={styles.infoEdit}>Ảnh của bạn</Text>
    //         <Controller
    //           control={control}
    //           render={({field: {onChange, onBlur, value}}) => (
    //             <View style={{flex: 1, alignItems: 'center'}}>
    //               <TouchableOpacity onPress={openImagePicker}>
    //                 <View style={styles.imageView}>
    //                   <Entypo name="camera" size={50} color="#FCA234" />
    //                 </View>
    //               </TouchableOpacity>
    //             </View>
    //           )}
    //           name="email"
    //           rules={{required: 'Vui lòng ảnh không được bỏ trống'}}
    //           defaultValue=""
    //         />
    //         <Fragment>
    //           <StatusBar barStyle="dark-content" />
    //           <SafeAreaView>
    //             <View style={styles.body}>
    //               <Text
    //                 style={{
    //                   textAlign: 'center',
    //                   fontSize: 20,
    //                   paddingBottom: 10,
    //                 }}>
    //                 Pick Images from Camera & Gallery
    //               </Text>
    //               <View style={styles.ImageSections}>
    //                 <View>
    //                   {renderFileData()}
    //                   <Text style={{textAlign: 'center'}}>Base 64 String</Text>
    //                 </View>
    //                 <View>
    //                   {renderFileUri()}
    //                   <Text style={{textAlign: 'center'}}>File Uri</Text>
    //                 </View>
    //               </View>
    //               <View style={styles.btnParentSection}>
    //                 <TouchableOpacity
    //                   onPress={chooseImage}
    //                   style={styles.btnSection}>
    //                   <Text style={styles.btnText}>Choose File</Text>
    //                 </TouchableOpacity>
    //                 <TouchableOpacity
    //                   onPress={launchCamera}
    //                   style={styles.btnSection}>
    //                   <Text style={styles.btnText}>Directly Launch Camera</Text>
    //                 </TouchableOpacity>
    //                 <TouchableOpacity
    //                   onPress={launchImageLibrary}
    //                   style={styles.btnSection}>
    //                   <Text style={styles.btnText}>
    //                     Directly Launch Image Library
    //                   </Text>
    //                 </TouchableOpacity>
    //               </View>
    //             </View>
    //           </SafeAreaView>
    //         </Fragment>
    //         {/* {errors.email && (
    //           <Text style={{color: 'red'}}>{errors.email.message}</Text>
    //         )} */}
    //       </View>
    //     </View>
    //     <View style={styles.eventSubmit}>
    //       <Button
    //         color={'#FCA234'}
    //         onPress={handleSubmit(onSubmit)}
    //         title="Hủy"
    //       />
    //       <Button
    //         color={'#FCA234'}
    //         onPress={handleSubmit(onSubmit)}
    //         title="Cập nhật"
    //       />
    //     </View>
    //   </View>
    // );
};
exports["default"] = EditInfoCurrentUser;
var styles = react_native_1.StyleSheet.create({
    imageView: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: '#FCA234',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginVertical: 30
    },
    part: {
        marginVertical: 5
    },
    infoEdit: {
        color: '#FCA234',
        fontSize: 15,
        fontWeight: 'bold'
    },
    eventSubmit: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    formEdit: {
        flex: 9,
        marginVertical: 20
    },
    container: {
        backgroundColor: '#394C69',
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    inputInfo: {
        backgroundColor: 'white',
        borderColor: '#FCA234',
        borderRadius: 10,
        marginTop: 5,
        borderWidth: 1,
        paddingLeft: 15,
        color: '#000000'
    }
});
