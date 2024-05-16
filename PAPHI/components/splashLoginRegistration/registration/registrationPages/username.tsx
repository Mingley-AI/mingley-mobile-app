import React, { useState } from 'react';
import { View, Text, Button, Platform, TouchableOpacity, TextInput } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { RootStackParamList } from '../../../../types'; // Adjust the import path as necessary
import styles from './username.style';

type UsernameRouteProp = RouteProp<RootStackParamList, 'Username'>;

export default function Username() {
    const route = useRoute<UsernameRouteProp>();
    const { fullName,date, gender } = route.params;

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [username, setUsername] = useState('');

    const handleNext = () => {
        navigation.navigate('Email', { fullName, date, gender, username });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>What is your username?</Text>
            <TextInput
                style={styles.input}
                value={fullName}
                onChangeText={setUsername}
                placeholder="Enter your username"
            />
            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}