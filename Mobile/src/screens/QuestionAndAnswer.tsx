import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
interface Answer {
    question: string;
    answer: string;
}
const QuestionAndAnswer = (answer: any,isLoading:any) => {
    const renderItem = ({ item }: { item: Answer }) => {
        return (
        <>
            <View style={styles.container}>
                <View style={styles.questionContainer}>
                    <Text style={styles.question}>{item.question}</Text>
                </View>
                <View style={styles.answerContainer}>
                    <Text style={styles.answer}>{item.answer}</Text>
                </View>
            </View>
            {isLoading==true && <Text style={styles.loadingText}>loading...</Text>}
        </>
        );
    };
    return (
        <View style={{ flex: 8.5 }}>
            <FlatList
                data={answer.answer}
                renderItem={renderItem}
                keyExtractor={item => item.answer}
            />
        </View>
    )
}

export default QuestionAndAnswer;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    questionContainer: {
        paddingBottom: 10,
    },
    answerContainer: {
        paddingTop: 10,
    },
    question: {
        color: '#FCA234',
        fontSize: 15,
        textAlign: 'right',
        borderWidth:1,
        backgroundColor:"#394C6D",
        padding:4,
        borderRadius:10,
    },
    answer: {
        color: '#394C6D',
        fontSize: 15,
        maxWidth: 250,
        borderWidth:1,
        borderColor:"#FCA234",
        backgroundColor:"#FCA234",
        padding:4,
        borderRadius:10
    },
    loadingText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
        textAlign: 'center',
        marginTop: 10,
      }
});