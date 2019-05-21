import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  Image,
  FlatList,
  ScrollView
} from 'react-native';
import { Color } from 'common_f';
import Icon from 'react-native-vector-icons/Ionicons';

const mocks = [
  {
    id: 1,
    user: {
      name: 'Lelia Chavez',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    saved: true,
    location: '0.4 Km from you',
    temperature: 34,
    title: 'Santorini',
    description:
      'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC',
    rating: 4.3,
    price: 224.0,
    reviews: 3212,
    preview:
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 2,
    user: {
      name: 'Lelia Chavez',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    saved: false,
    location: '0.4 Km from you',
    temperature: 34,
    title: 'Loutraki',
    description: 'This attractive small town, 80 kilometers from Athens',
    rating: 4.6,
    reviews: 3212,
    price: 122.0,
    preview:
      'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 3,
    user: {
      name: 'Lelia Chavez',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    saved: true,
    location: '0.4 Km from you',
    temperature: 34,
    title: 'Santorini',
    description: 'Santorini - Description',
    rating: 3.2,
    reviews: 3212,
    price: 432.0,
    preview:
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 4,
    user: {
      name: 'Lelia Chavez',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    location: '0.4 Km from you',
    temperature: 34,
    title: 'Loutraki',
    description: 'This attractive small town, 80 kilometers from Athens',
    rating: 5,
    reviews: 3212,
    price: 400.0,
    preview:
      'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

class Search extends Component {
  renderRecentlyAdded = () => {
    return (
      <View style={styles.recommendContainer}>
        <View style={styles.recommendedHeader}>
          <Text style={styles.recommendText}>Recommended for you</Text>
        </View>
        <View style={{ flexDirection: 'column' }}>
          <FlatList
            style={{ overflow: 'visible' }}
            data={mocks}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item, index }) =>
              this.renderRecentlyAddedItems(item, index)
            }
          />
        </View>
      </View>
    );
  };

  renderRecentlyAddedItems = (item, index) => {
    return (
      <View
        style={[
          styles.shadow,
          {
            flexDirection: 'row',
            backgroundColor: '#fff',
            padding: 15,
            //marginHorizontal: 20,
            marginLeft: 32,
            marginRight: 32,
            marginVertical: 6,
            borderRadius: 12,
            flex: 1
          }
        ]}
      >
        <View
          style={{ flex: 0.3, paddingRight: Platform.OS === 'ios' ? 14 : 0 }}
        >
          <Image
            style={{ width: 85, height: 85, borderRadius: 6 }}
            source={{ uri: item.preview }}
          />
        </View>
        <View
          style={{
            flex: 0.7,
            flexDirection: 'column'
          }}
        >
          <View
            style={{ justifyContent: 'space-between', flexDirection: 'row' }}
          >
            <Text
              style={{
                color: Color.black,
                fontSize: 16,
                fontFamily: 'Nunito-Bold'
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                color: Color.secondary,
                fontFamily: 'Nunito-Bold',
                marginRight: 10
              }}
            >
              Rs. {Number(item.price).toFixed(2)}
            </Text>
          </View>
          <Text
            style={{
              color: Color.gray2,
              fontFamily: 'Nunito-Regular',
              fontSize: 12,
              marginVertical: 5
            }}
          >
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={styles.searchSection}>
          <Icon
            style={styles.searchIcon}
            name='ios-search'
            size={20}
            color={Color.gray}
          />
          <TextInput
            //defaultValue={email}
            onChangeText={text => this.setState({ email: text })}
            style={styles.input}
            placeholder='Search Homemade food'
            placeholderTextColor={Color.gray}
            //keyboardType={"email-address"}
          />
        </View>

        <Text style={styles.recentSearchText}>Recent Search</Text>
        <Text style={styles.recentText}>Aloo Paratha</Text>
        <Text style={styles.recentText}>Momo</Text>
        <Text style={styles.recentText}>Chicken Burger</Text>

        {this.renderRecentlyAdded()}
      </ScrollView>
    );
  }
}
export default Search;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 22
  },

  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFF',
    margin: 32,
    borderRadius: 22,
    paddingTop: Platform.OS === 'ios' ? 14 : 0
  },
  searchIcon: {
    padding: 12
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#F9FAFF',
    color: Color.gray,
    backgroundColor: '#F9FAFF',
    fontFamily: 'Nunito-Regular',
    borderRadius: 22
  },
  recentSearchText: {
    color: Color.black,
    fontFamily: 'Nunito-Bold',
    paddingHorizontal: 34,
    paddingBottom: 10,
    fontSize: 20
  },
  recentText: {
    color: Color.gray,
    fontFamily: 'Nunito-Regular',
    paddingHorizontal: 34,
    paddingBottom: 10,
    fontSize: 16
  },
  recommendContainer: { flex: 1, flexDirection: 'column', paddingTop: 7 },
  recommendedHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 36,
    paddingVertical: 20,
    flexDirection: 'row'
  },
  recommendText: {
    fontSize: 14 * 1.4,
    color: Color.black,
    fontFamily: 'Nunito-Black'
  },
  viewAllText: { color: Color.gray2, fontFamily: 'Nunito-Regular' },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2
  }
});