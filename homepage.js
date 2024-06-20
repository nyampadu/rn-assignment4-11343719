import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView } from 'react-native';
import { SearchBar, Card, Avatar } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

const HomePage = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.header}>
                    <Avatar
                        rounded
                        source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }} // Placeholder image
                        size="large"
                    />
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>Eric Atsu</Text>
                        <Text style={styles.userEmail}>eric@gmail.com</Text>
                    </View>
                    <FontAwesome name="bell-o" size={24} color="black" />
                </View>
                <SearchBar
                    placeholder="Search a job or position"
                    lightTheme
                    round
                    containerStyle={styles.searchBarContainer}
                    inputContainerStyle={styles.searchBarInput}
                />
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Featured Jobs</Text>
                        <Text style={styles.seeAll}>See all</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                        <Card containerStyle={styles.featuredCard}>
                            <View style={styles.cardContent}>
                                <FontAwesome name="facebook" size={24} color="white" />
                                <View style={styles.featuredJobDetails}>
                                    <Text style={styles.featuredJobTitle}>Software Engineer</Text>
                                    <Text style={styles.featuredJobCompany}>Facebook</Text>
                                    <Text style={styles.featuredJobSalary}>$180,000</Text>
                                    <Text style={styles.featuredJobLocation}>Accra, Ghana</Text>
                                </View>
                            </View>
                        </Card>
                        <Card containerStyle={styles.featuredCard}>
                            <View style={styles.cardContent}>
                                <FontAwesome name="google" size={24} color="white" />
                                <View style={styles.featuredJobDetails}>
                                    <Text style={styles.featuredJobTitle}>Product Manager</Text>
                                    <Text style={styles.featuredJobCompany}>Google</Text>
                                    <Text style={styles.featuredJobSalary}>$160,000</Text>
                                    <Text style={styles.featuredJobLocation}>New York, US</Text>
                                </View>
                            </View>
                        </Card>
                    </ScrollView>
                </View>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Popular Jobs</Text>
                        <Text style={styles.seeAll}>See all</Text>
                    </View>
                    <Card containerStyle={styles.popularCard}>
                        <View style={styles.cardContent}>
                            <Image
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png' }} // Burger King logo
                                style={styles.cardImage}
                            />
                            <View style={styles.jobDetails}>
                                <Text style={styles.cardTitle}>Jr Executive</Text>
                                <Text style={styles.cardSubtitle}>Burger King</Text>
                            </View>
                            <View style={styles.salaryLocation}>
                                <Text style={styles.cardSalary}>$96,000/y</Text>
                                <Text style={styles.cardLocation}>Los Angeles, US</Text>
                            </View>
                        </View>
                    </Card>
                    <Card containerStyle={styles.popularCard}>
                        <View style={styles.cardContent}>
                            <Image
                                source={{ uri: 'https://i.pinimg.com/originals/fc/27/85/fc278579b194763ab4dcbd4665da43da.png' }} // Beats logo
                                style={styles.cardImage}
                            />
                            <View style={styles.jobDetails}>
                                <Text style={styles.cardTitle}>Product Manager</Text>
                                <Text style={styles.cardSubtitle}>Beats</Text>
                            </View>
                            <View style={styles.salaryLocation}>
                                <Text style={styles.cardSalary}>$84,000/y</Text>
                                <Text style={styles.cardLocation}>Florida, US</Text>
                            </View>
                        </View>
                    </Card>
                    <Card containerStyle={styles.popularCard}>
                        <View style={styles.cardContent}>
                            <Image
                                source={{ uri: 'https://www.facebook.com/images/fb_icon_325x325.png' }}
                                style={styles.cardImage}
                            />
                            <View style={styles.jobDetails}>
                                <Text style={styles.cardTitle}>Project Manager</Text>
                                <Text style={styles.cardSubtitle}>Facebook</Text>
                            </View>
                            <View style={styles.salaryLocation}>
                                <Text style={styles.cardSalary}>$86,000/y</Text>
                                <Text style={styles.cardLocation}>Accra, Ghana</Text>
                            </View>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f4f4f8',
    },
    container: {
        flex: 1,
        backgroundColor: '#f4f4f8',
    },
    contentContainer: {
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    userInfo: {
        flex: 1,
        marginLeft: 15,
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    userEmail: {
        fontSize: 16,
        color: 'gray',
    },
    searchBarContainer: {
        backgroundColor: '#f4f4f8',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    searchBarInput: {
        backgroundColor: '#e9ecef',
        borderRadius: 20,
    },
    section: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    seeAll: {
        color: '#007bff',
    },
    horizontalScroll: {
        paddingBottom: 10,
    },
    featuredCard: {
        backgroundColor: '#4267B2',
        borderRadius: 24,
        padding: 15,
        marginRight: 10,
        width: 280,
        height: 186,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    featuredJobDetails: {
        marginTop: 15,
        marginLeft: 15,
    },

    featuredJobTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    featuredJobCompany: {
        fontSize: 16,
        color: '#fff',
    },
    featuredJobSalary: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 30, // Adjust margin bottom to move closer to bottom
    },
    featuredJobLocation: {
        fontSize: 16,
        color: '#fff',
        marginBottom: -40, // Adjust margin bottom to move closer to bottom right
    },
    popularCard: {
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    cardImage: {
        width: 50,
        height: 50,
        marginRight: 15,
    },
    jobDetails: {
        flex: 1,
    },
    salaryLocation: {
        alignItems: 'flex-end',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    cardSubtitle: {
        fontSize: 14,
        color: 'gray',
    },
    cardSalary: {
        fontSize: 14,
        fontWeight: '700',
        color: '#000',
    },
    cardLocation: {
        fontSize: 14,
        color: 'gray',
    },
});

export default HomePage;
