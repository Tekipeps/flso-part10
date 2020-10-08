import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke",
    padding: 10,
    borderRadius: 5,
  },
  image: { width: 50, height: 50 },
  languageButton: {
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    color: "white",
  },
  flexContainer: { flexDirection: "row" },
  statsTab: {
    alignContent: "center",
  },
});

const StatsTab = ({ text, number }) => {
  const suffixNumber = () => {
    return number < 1000 ? number : `${Math.round((number / 1000) * 10) / 10}k`;
  };
  return (
    <View style={styles.statsTab}>
      <Text fontWeight="bold" style={{ textAlign: "center" }}>
        {suffixNumber()}
      </Text>
      <Text style={{ textAlign: "center", color: theme.colors.textSecondary }}>
        {text}
      </Text>
    </View>
  );
};

const RepositoryItem = ({ data }) => {
  const { item } = data;
  // console.log(item.ownerAvatarUrl);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={styles.image}
          source={{ uri: `${item.ownerAvatarUrl}` }}
        />
        <View style={{ paddingLeft: 10, paddingRight: 10 }}>
          <Text fontWeight="bold">{item.fullName}</Text>
          <Text style={{ color: theme.colors.textSecondary }}>
            {item.description}
          </Text>
          <View style={styles.flexContainer}>
            <TouchableWithoutFeedback onPress={() => alert("pressed")}>
              <Text style={styles.languageButton}>{item.language}</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
      <View style={{ ...styles.flexContainer, justifyContent: "space-around" }}>
        <StatsTab text="Stars" number={item.stargazersCount} />
        <StatsTab text="Forks" number={item.forksCount} />
        <StatsTab text="Reviews" number={item.reviewCount} />
        <StatsTab text="Rating" number={item.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;
