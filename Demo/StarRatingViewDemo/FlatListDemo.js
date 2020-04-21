import React, { Component } from "react"
import {
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    Text,
} from "react-native"
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar'
import MatIcon from "react-native-vector-icons/MaterialCommunityIcons"
// import Text from '../components/Text'

export default class StarRatingTesting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobList: []
        }
    }
    componentDidMount() {
        this.loadData()
    }
    loadData() {
        const ENTRIES1 = [
            {
                id: 1,
                jobImage: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",
                jobPosition: "Barista",
                outlet: "KLCC Third Floor",
                shopName: "Starbucks",
                location: "Kuala Lumpur",
                workingDays: "S S",
                workingTime: "18:00 - 22:00",
                wages: "RM 10 per hour",
                rating: 4.7,
                review: 200
            },
            {
                id: 2,
                jobImage: "https://thebrewhouse.my/wp-content/themes/thebrewhouse/images/logo-wc-b.png",
                jobPosition: "Cashier",
                outlet: "Puchong Jaya",
                shopName: "The Brew House",
                location: "Puchong",
                workingDays: "F S S",
                workingTime: "12:00 - 21:00",
                wages: "RM 15 per hour",
                rating: 2.5,
                review: 60

            },
            {
                id: 3,
                jobImage: "https://1000logos.net/wp-content/uploads/2017/08/Domino%E2%80%99s-Emblem.jpg",
                jobPosition: "Barista",
                outlet: "Pandan Jaya",
                shopName: "Domino's Pizza",
                location: "Cheras",
                workingDays: "M T W",
                workingTime: "18:00 - 22:00",
                wages: "RM 12 per hour",
                rating: 5.0,
                review: 0

            },
            {
                id: 4,
                jobImage: "https://media-cdn.tripadvisor.com/media/photo-s/06/cf/bc/49/moonlight-cafe.jpg",
                jobPosition: "Kitchen Helper",
                outlet: "Puchong Jaya",
                shopName: "Moonlight Cake House",
                location: "Puchong",
                workingDays: "S S",
                workingTime: "12:00 - 22:00",
                wages: "RM 17 per hour",
                rating: 4.5,
                review: 55

            },
            {
                id: 5,
                jobImage: "https://upload.wikimedia.org/wikipedia/ms/4/43/Marrybrown_Logo.png",
                jobPosition: "Barista",
                outlet: "Melawati Mall",
                shopName: "Marrybrown",
                location: "Kuala Lumpur",
                workingDays: "S S",
                workingTime: "18:00 - 22:00",
                wages: "RM 10 per hour",
                rating: 4.2,
                review: 30

            }
        ];
        this.setState({ jobList: ENTRIES1 })
    }
    _renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.slider}
        activeOpacity={1}
            // onPress={this._navigateToListItem.bind(this, item.id)}
            >

            <View style={styles.outer}>

            <Image style={styles.imageStyle}
        source={{ uri: item.jobImage }}>

    </Image>

        <View style={styles.secondContainer}>
            <View style={styles.truncateContainer}>
            <Text style={styles.jobPostText}
            // numberOfLines={1}
            >
            {item.jobPosition}
            </Text>
            <Text style={styles.outletText}>
            {"(" + item.outlet + ")"}
            </Text>
            </View>
            <View style={styles.truncateContainer}>
            <Text style={styles.shopNameText}
            // numberOfLines={1}
            >
            {item.shopName}
            </Text>
            </View>
            <View style={styles.truncateContainer}>
            <MatIcon style={styles.pinIcon}
        name="pin"
        size={20}
        />
        <Text style={styles.locationText}
        numberOfLines={1}>
            {item.location}
            </Text>
            </View>
            <View style={styles.truncateContainer}>
            <MatIcon style={styles.calendarIcon}
        name="calendar"
        size={20}
        />
        <Text style={styles.daysText}
        numberOfLines={1}
            >
            {item.workingDays}
            </Text>
            </View>
            <View style={styles.truncateContainer}>
            <MatIcon style={styles.clockIcon}
        name="alarm"
        size={20}
        />
        <Text style={styles.workingHoursText}
        numberOfLines={1}>
            {item.workingTime}

            </Text>
            </View>
            <View style={styles.truncateContainer}>
            <MatIcon style={styles.clockIcon}
        name="currency-usd"
        size={20}
        />
        <Text style={styles.wagesText}
        numberOfLines={1}
            >
            {item.wages}
            </Text>
            </View>
            <View style={styles.thirdContainer}>
            <Text style={styles.ratingText}>
            {item.rating}
            </Text>
            <StarRatingBar
        style={styles.starRatingStyle}
        // starStyle={{
        //     width: 15,
        //     height: 15,
        //     // flex: 1
        // }}
        score={item.rating}
        dontShowScore={true} // true: not show the score text view
        allowsHalfStars={true}
        spacing={3}
        continuous={false}
        accurateHalfStars={true}
        />
        <Text style={styles.reviewText}>
            {item.review + " " + "reviews"}
            </Text>

            </View>

            </View>
            </View>
            </TouchableOpacity>
    );
    }
    render() {
        return (
            <View style={styles.container}>
            <FlatList
        data={this.state.jobList}
        renderItem={this._renderItem}>

            </FlatList>

            </View>
    )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    truncateContainer: {
        flexDirection: "row"
    },
    outer: {
// flex: 1,
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#696969",
        flexDirection: "column",
// padding: 10,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        width: "100%",
        height: 100,
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9
    },
})
