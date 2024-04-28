import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const vw = width / (100 * 4.3);

const styles = StyleSheet.create({
    container: {
        marginTop: 20 * vw,
        marginLeft: 33 * vw
    },
    headingContainer: {
        marginBottom: 10 * vw
    },
    headerText: {
        fontFamily: 'SF Pro',
        fontSize: 14 * vw,
        fontWeight: 'bold'
    }, 
    topicContainer: {
        // arrange items vertically
    }
});

export default styles;
