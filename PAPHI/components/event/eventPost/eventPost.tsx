import React, { useState } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import { PanGestureHandler, State, PanGestureHandlerStateChangeEvent } from 'react-native-gesture-handler';
import styles from './eventPost.style';
import Categories from './categories/categories';
import Info from './information/info';
import EventCreator from './eventCreator/eventCreator';
import ImagePost from './imagePost/imagePost';
import Attendees from './attendees/attendees';
import Icons from './icons/icons';
import { useNavigation, ParamListBase,  NavigationProp } from '@react-navigation/native';

<<<<<<< HEAD
interface EventPostItem {
=======
export interface EventPostProps {
>>>>>>> 51348372c1aaaa228b4ee5c417b7239682a2aabb
    name: string;
    price: number;
    labels: {
        name: string;
        color: string;
    }[];
    profile: {
        name: string;
        img: string;
    };
    description: string;
    date: string;
    time: string;
    location: string;
    image: string;
    attendees: {
        number: number;
        profiles: {
            username: string;
            img: string;
        }[];
    };
    saved: boolean;
}

interface EventPostProps {
    eventPostData: EventPostItem[];
    currentPostIndex: number;
    setCurrentPostIndex: (index: number) => void;
    navigateToAttendeesPage: () => void;
    setEventPostData: React.Dispatch<React.SetStateAction<EventPostItem[]>>;
}

<<<<<<< HEAD
const EventPost: React.FC<EventPostProps> = ({ eventPostData, currentPostIndex, setCurrentPostIndex, navigateToAttendeesPage, setEventPostData }) => {

    // const [eventPostData, setEventPostData] = useState<EventPostProps[]>([
    //     {
    //         name: 'ohgeesy1',
    //         price: 35,
    //         labels: [
    //             {
    //                 name: 'public',
    //                 color: '#9CFE50',
    //             }, 
    //             {
    //                 name: 'concert',
    //                 color: '#ECDC4D',
    //             }, 
    //             {
    //                 name: 'id required',
    //                 color: '#4DECD9',
    //             },
    //         ],
    //         profile: {
    //             name: 'MATT DIZON',
    //             img: require('../../../assets/bio/bio-pic.png'),
    //         },
    //         description: 'we getting fucked up',
    //         date: 'May 10th',
    //         time: '9:30PM to 12:00AM',
    //         location: 'YiFang',
    //         image: require('../../../assets/event/sampleEvent.jpg'),
    //         attendees: {
    //             number: 100,
    //             profiles: [
    //                 {
    //                     username: 'John Doe',
    //                     img: require('../../../assets/bio/bio-pic.png')
    //                 },
    //                 {
    //                     username: 'John Doe',
    //                     img: require('../../../assets/bio/bio-pic.png')
    //                 },
    //                 {
    //                     username: 'John Doe',
    //                     img: require('../../../assets/bio/bio-pic.png')
    //                 },
    //                 {
    //                     username: 'John Doe',
    //                     img: require('../../../assets/bio/bio-pic.png')
    //                 },
    //                 {
    //                     username: 'John Doe',
    //                     img: require('../../../assets/bio/bio-pic.png')
    //                 },
    //             ],
    //         },
    //         saved: false,
    //     },
    //     {
    //         name: 'ohgeesy2',
    //         price: 35,
    //         labels: [
    //             {
    //                 name: 'public',
    //                 color: '#9CFE50',
    //             }, 
    //             {
    //                 name: 'concert',
    //                 color: '#ECDC4D',
    //             }, 
    //             {
    //                 name: 'id required',
    //                 color: '#4DECD9',
    //             },
    //         ],
    //         profile: {
    //             name: 'MATT DIZON',
    //             img: require('../../../assets/bio/bio-pic.png'),
    //         },
    //         description: 'we getting fucked up',
    //         date: 'May 10th',
    //         time: '9:30PM to 12:00AM',
    //         location: 'YiFang',
    //         image: require('../../../assets/event/sampleEvent.jpg'),
    //         attendees: {
    //             number: 100,
    //             profiles: [
    //                 {
    //                     username: 'John Doe',
    //                     img: require('../../../assets/bio/bio-pic.png')
    //                 },
    //                 {
    //                     username: 'John Doe',
    //                     img: require('../../../assets/bio/bio-pic.png')
    //                 },
    //                 {
    //                     username: 'John Doe',
    //                     img: require('../../../assets/bio/bio-pic.png')
    //                 },
    //                 {
    //                     username: 'John Doe',
    //                     img: require('../../../assets/bio/bio-pic.png')
    //                 },
    //                 {
    //                     username: 'John Doe',
    //                     img: require('../../../assets/bio/bio-pic.png')
    //                 },
    //             ],
    //         },
    //         saved: false,
    //     },
    //     {
    //         name: 'ohgeesy3',
    //         price: 35,
    //         labels: [
    //             {
    //                 name: 'public',
    //                 color: '#9CFE50',
    //             }, 
    //             {
    //                 name: 'concert',
    //                 color: '#ECDC4D',
    //             }, 
    //             {
    //                 name: 'id required',
    //                 color: '#4DECD9',
    //             },
    //         ],
    //         profile: {
    //             name: 'MATT DIZON',
    //             img: require('../../../assets/bio/bio-pic.png'),
    //         },
    //         description: 'we getting fucked up',
    //         date: 'May 10th',
    //         time: '9:30PM to 12:00AM',
    //         location: 'YiFang',
    //         image: require('../../../assets/event/sampleEvent.jpg'),
    //         attendees: {
    //             number: 100,
    //             profiles: [
    //                 {
    //                     username: 'John Doe',
    //                     img: require('../../../assets/bio/bio-pic.png')
    //                 },
    //                 {
    //                     username: 'John Doe',
    //                     img: require('../../../assets/bio/bio-pic.png')
    //                 },
    //                 {
    //                     username: 'John Doe',
    //                     img: require('../../../assets/bio/bio-pic.png')
    //                 },
    //                 {
    //                     username: 'John Doe',
    //                     img: require('../../../assets/bio/bio-pic.png')
    //                 },
    //                 {
    //                     username: 'John Doe',
    //                     img: require('../../../assets/bio/bio-pic.png')
    //                 },
    //             ],
    //         },
    //         saved: false,
    //     },
    // ]);

    const currentPost = eventPostData[currentPostIndex];
=======
const EventPost: React.FC = ({}) => {
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    
    const [eventPostData, setEventPostData] = useState<EventPostProps[]>([
        {
            name: 'ohgeesy1',
            price: 35,
            labels: [
                {
                    name: 'public',
                    color: '#9CFE50',
                }, 
                {
                    name: 'concert',
                    color: '#ECDC4D',
                }, 
                {
                    name: 'id required',
                    color: '#4DECD9',
                },
            ],
            profile: {
                name: 'MATT DIZON',
                img: require('../../../assets/bio/bio-pic.png'),
            },
            description: 'we getting fucked up',
            date: 'May 10th',
            time: '9:30PM to 12:00AM',
            location: 'YiFang',
            image: require('../../../assets/event/sampleEvent.jpg'),
            attendees: {
                number: 100,
                profiles: [
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                ],
            },
            saved: false,
        },
        {
            name: 'ohgeesy2',
            price: 35,
            labels: [
                {
                    name: 'public',
                    color: '#9CFE50',
                }, 
                {
                    name: 'concert',
                    color: '#ECDC4D',
                }, 
                {
                    name: 'id required',
                    color: '#4DECD9',
                },
            ],
            profile: {
                name: 'MATT DIZON',
                img: require('../../../assets/bio/bio-pic.png'),
            },
            description: 'we getting fucked up',
            date: 'May 10th',
            time: '9:30PM to 12:00AM',
            location: 'YiFang',
            image: require('../../../assets/event/sampleEvent.jpg'),
            attendees: {
                number: 100,
                profiles: [
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                ],
            },
            saved: false,
        },
        {
            name: 'ohgeesy3',
            price: 35,
            labels: [
                {
                    name: 'public',
                    color: '#9CFE50',
                }, 
                {
                    name: 'concert',
                    color: '#ECDC4D',
                }, 
                {
                    name: 'id required',
                    color: '#4DECD9',
                },
            ],
            profile: {
                name: 'MATT DIZON',
                img: require('../../../assets/bio/bio-pic.png'),
            },
            description: 'we getting fucked up',
            date: 'May 10th',
            time: '9:30PM to 12:00AM',
            location: 'YiFang',
            image: require('../../../assets/event/sampleEvent.jpg'),
            attendees: {
                number: 100,
                profiles: [
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                ],
            },
            saved: false,
        },
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);
>>>>>>> 51348372c1aaaa228b4ee5c417b7239682a2aabb
    const translateX = new Animated.Value(0);
    const translateY = new Animated.Value(0);

    const handleGesture = Animated.event(
        [{ nativeEvent: { translationX: translateX, translationY: translateY } }],
        { useNativeDriver: true }
    );

    const handleStateChange = ({ nativeEvent }: PanGestureHandlerStateChangeEvent) => {
        if (nativeEvent.state === State.END) {
            if (nativeEvent.translationX < -50) {
                // Swiped left
                if (currentPostIndex < eventPostData.length - 1) {
                    setCurrentPostIndex(currentPostIndex + 1);
                }
            } else if (nativeEvent.translationY < -50) {
                // Swiped up
                saveEvent();
            }
            Animated.spring(translateX, {
                toValue: 0,
                useNativeDriver: true,
            }).start();
            Animated.spring(translateY, {
                toValue: 0,
                useNativeDriver: true,
            }).start();
        }
    };

    const saveEvent = () => {
        // implement save event
    };

<<<<<<< HEAD
=======
    const currentPost = eventPostData[currentIndex];
    
    const eventClicked = () => {
        navigation.navigate('IndividualEvent', { eventData: currentPost });
    };
>>>>>>> 51348372c1aaaa228b4ee5c417b7239682a2aabb

    return (

        <PanGestureHandler
            onGestureEvent={handleGesture}
            onHandlerStateChange={handleStateChange}
        >
            <Animated.View style={[styles.container, styles.shadowProp, { transform: [{ translateX }, { translateY }] }]}>
                <TouchableOpacity onPress={eventClicked}>
                    <View>
                        <View style={styles.firstRow}>
                            <Text style={styles.title}>{currentPost.name}</Text>
                            <Text style={styles.price}>${currentPost.price}</Text>
                        </View>
                        <Categories categoriesList={currentPost.labels} />
                        <Info date={currentPost.date} time={currentPost.time} location={currentPost.location} />
                        <EventCreator profile={currentPost.profile} />
                        <Text style={{fontSize: 18}}>{currentPost.description}</Text>
                        <ImagePost img={currentPost.image} />
                        <View style={styles.bottom}>
                            <Attendees number={currentPost.attendees.number} profileList={currentPost.attendees.profiles} />
                            <Icons />
                        </View>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        </PanGestureHandler>
        

    );
};

export default EventPost;