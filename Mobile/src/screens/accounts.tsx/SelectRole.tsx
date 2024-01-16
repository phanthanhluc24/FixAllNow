import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
const SelectRole = () => {
    const navigation: any = useNavigation();
    const [selectedRole, setSelectedRole] = useState('');

    const handleRoleChange = (role:string) => {
        setSelectedRole(role);
    };

    const handleRadioPress = (role:string) => {
        handleRoleChange(role);
    };
    const handleContinuePress = () => {
        if (selectedRole === 'Thợ sửa chữa') {
            navigation.navigate('ThoSuaChuaScreen');
        } else if (selectedRole === 'Tìm thợ') {
            navigation.navigate('SignUp');
        } else {
            Alert.alert('Please select a role before continuing.');
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <View style={styles.logoContainer}>
                    <Image source={require('../../assets/role/logo.png')} style={styles.logo} />
                </View>
            </View>
            <Text style={styles.title_1}>ĐĂNG KÝ</Text>
            <Text style={styles.title_2}>Bạn muốn trở thành</Text>

            {/* Thêm hai radio buttons */}
            <View style={styles.radioContainer}>
                <RadioButton
                    label="Thợ sửa chữa"
                    onPress={() => handleRadioPress('Thợ sửa chữa')}
                    isSelected={selectedRole === 'Thợ sửa chữa'}
                />
                <RadioButton
                    label="Tìm thợ"
                    onPress={() => handleRadioPress('Tìm thợ')}
                    isSelected={selectedRole === 'Tìm thợ'}
                />
            </View>

            {/* Thêm nút bấm */}
            <View style={styles.buttonDiv}>
                <TouchableOpacity style={styles.button}  onPress={handleContinuePress}>
                    <Text style={styles.buttonText}>TIẾP TỤC</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// Thành phần RadioButton
const RadioButton = ({ label, onPress, isSelected }:any) => {
    return (
        <View style={styles.radioButton}>
            <TouchableOpacity
                style={[styles.radioButtonCircle, isSelected && styles.radioButtonCircleSelected]}
                onPress={onPress}
            />
            <Text style={styles.radioButtonLabel}>{label}</Text>
        </View>
    );
};

// Styles cho thành phần SelectRole
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fca234',
        padding: 16,
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 50,
    },
    logoContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    logo: {
        width: 140,
        height: 140,

        resizeMode: 'contain',
    },
    title_1: {
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        marginTop: 20,
    },
    title_2: {
        fontSize: 25,
        marginTop: 40,
        marginLeft: 10,
        color: 'black',
    },
    radioContainer: {
        flexDirection: 'column',
        marginTop: 30,
        marginLeft: 40,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50,
    },
    radioButtonCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
        marginRight: 10,
    },
    radioButtonCircleSelected: {
        backgroundColor: '#394C6D',
    },
    radioButtonLabel: {
        fontSize: 25,
        color: 'black',
    },
    button: {
        backgroundColor: '#394C6D',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginTop: 20,
        alignSelf: 'flex-start',
        alignContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
    },
    buttonDiv: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SelectRole;