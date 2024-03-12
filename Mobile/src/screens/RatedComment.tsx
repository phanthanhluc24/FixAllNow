import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import StarRating from './StarRating';
import useRatingComment from '../hooks/useRatingComment';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
import {useRoute} from '@react-navigation/native';
const RatedComment = () => {
  const [loading, setLoading] = useState(false);
  const route = useRoute();
  const {service_id,booking_id}: any = route.params;
  const navigation: any = useNavigation();
  const [content, setContent] = useState('');
  const [star, setStar] = useState(0);
  const [error, setError] = useState('');
  const handleStarPress = (starValue: any) => {
    setStar(starValue);
  };

  const handleContentChange = (text: any) => {
    setContent(text);
  };
  const {sendData} = useRatingComment();
  const handleSubmit = async (data: any) => {
    setLoading(true);
    if (content === '') {
      setError('Vui lòng nhập nội dung đánh giá!');
      setLoading(false);
      return;
    }
    if (star === 0) {
      setError('Vui lòng chọn mức độ đánh giá!');
      setLoading(false);
      return;
    }
    data.content = content;
    data.star = star;
    const body = {
      content: data.content,
      star: data.star.toString(),
    };
    const responseData = await sendData(body, service_id,booking_id);
    if (responseData) {
      setLoading(false);
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Thành công',
        textBody: 'Đã đánh giá thành công!',
      });
      navigation.reset({
        index: 0,
        routes: [{ name: 'Root' }],
      });
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
            <Modal
        animationType="fade"
        transparent={true}
        visible={loading}
        onRequestClose={() => {
          setLoading(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <ActivityIndicator size={40} color="#FCA234" />
            </View>
          </View>
        </View>
      </Modal>
        <View style={styles.containerRatedComment}>
          <View style={{marginVertical: 40}}>
            <View style={styles.messageErrors}>
            {error !== '' && <Text style={styles.errorMessage}>{error}</Text>}
            </View>
          
            <View style={styles.comment}>
              <TextInput
                multiline={true}
                style={styles.input}
                placeholderTextColor={'#394C69'}
                placeholder="Hãy đánh giá theo cảm nhận của bạn!"
                value={content}
                onChangeText={handleContentChange}></TextInput>
            </View>
         
          </View>
          <Text style={styles.level}>Mức độ hài lòng:</Text>
          <StarRating star={0} onRatingPress={handleStarPress} />
        
        </View>
        <View style={styles.bottom}>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.bgButton} onPress={handleSubmit}>
              <Text style={styles.nameBook}>Gửi</Text>
            </TouchableOpacity>
            <Image
              style={styles.imgFooter}
              source={require('../assets/Form/double.png')}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RatedComment;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  messageErrors:{
    alignItems:"center",
    justifyContent:"center",
    marginVertical:20
  },
  errorMessage: {
    color: 'red',
  },
  nameBook: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FCA234',
  },
  imgFooter: {
    width: '100%',
  },
  bgButton: {
    backgroundColor: '#394C6D',
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 50,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: -20,
  },
  boxInput: {
    marginVertical: 30,
  },
  level: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  container: {
    flex: 1,
    backgroundColor: '#FCA234',
  },
  containerRatedComment: {
    marginHorizontal: 20,
    flex: 5,
  },
  bottom: {
    flex: 5,
    marginHorizontal: 20,
  },
  comment: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#394C6D',
    paddingVertical: 10,
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
});
