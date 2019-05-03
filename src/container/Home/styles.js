import { StyleSheet, Dimensions } from "react-native";
import { Color } from "common_f";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);
const { width, height } = Dimensions.get("window");
function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export default StyleSheet.create({
  container: {
    paddingBottom: 24,
    backgroundColor: "#fefefe"
  },
  headerContainer: {
    top: 0,
    height: height * 0.15,
    width: width
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.15,
    paddingHorizontal: 14
  },
  settings: {
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingRight: 16,
    flexDirection: "row"
  },
  options: {
    flex: 1,
    paddingHorizontal: 14
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  paginationContainer: {
    paddingVertical: 8
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8
  },
  recommendation: {
    flexDirection: "column",
    width: 150,
    marginHorizontal: 8,
    marginBottom: 12,
    backgroundColor: "green",
    overflow: "hidden",
    borderRadius: 12,
    //borderTopRightRadius: 12,
    // borderTopLeftRadius: 12,
    elevation: 2
  },

  recommendationImage: {
    width: 150,
    height: 160
  },
  recommendedHeader: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 36,
    marginVertical: 36 * 0.66,
    flexDirection: "row"
  },
  recommendationHeader: {
    flex: 1,
    overflow: "hidden",
    //borderRadius: 8,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    backgroundColor: "black"
  },
  shadow: {
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2
  },
  destination: {
    width: width - 36 * 2,
    height: width * 0.6,
    marginHorizontal: 36,
    paddingHorizontal: 36,
    paddingVertical: 36,
    borderRadius: 12
  },
  rating: {
    fontSize: 14 * 2,
    color: Color.white,
    fontWeight: "bold"
  },
  destinationInfo: {
    position: "absolute",
    borderRadius: 12,
    paddingHorizontal: 36 / 2,
    paddingVertical: 36 / 2,
    marginHorizontal: 36,
    bottom: -30,
    right: 36,
    left: 36,
    zIndex: 999,
    elevation: 2,
    backgroundColor: "#fff",
    flexDirection: "column"
  },
  dots: {
    width: 8,
    height: 8,
    borderWidth: 2,
    borderRadius: 8,
    marginHorizontal: 6,
    backgroundColor: Color.gray,
    borderColor: "transparent"
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 12,
    borderColor: "#007BFA"
  },
  locationText: {
    fontSize: 14,
    color: Color.gray,
    marginBottom: 5,
    fontFamily: "Nunito-SemiBold"
  },
  actualLocation: {
    fontSize: 18,
    color: Color.black,
    fontFamily: "Nunito-Bold"
  },
  iconMap: { height: 25, width: 25, marginRight: 28 },
  recommendContainer: { flex: 1, flexDirection: "column" },
  recommendText: {
    fontSize: 14 * 1.4,
    color: Color.black,
    fontFamily: "Nunito-Black"
  },
  viewAllText: { color: Color.gray2, fontFamily: "Nunito-Regular" },
  bottomContainer:  {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    overflow: "hidden",
    padding: 14,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  recommendationTitle:{
    fontSize: 16,
    paddingBottom: 4,
    color: Color.black,
    fontFamily: "Nunito-Bold"
  },
  recommendlocation:{
    color: Color.gray2,
    fontFamily: "Nunito-Regular",
    fontSize: 12
  },
  recommendRating:{
    flexDirection: "row",
    marginTop: 16
  },
  recommendPrice: {
    color: Color.primary,
    fontFamily: "Nunito-Bold",
    fontSize: 12,
    marginLeft: 10
  },
  carouselContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column"
  },
  carouselTextView:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingTop: 8
  },
  dotsContainer:{
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 2,
    flexDirection: "row",
    flex: 1
  }
});
