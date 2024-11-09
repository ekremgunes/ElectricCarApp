import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

type props = {
    size?: number,
    src?: string
}

const Avatar = ({ size = 50, src }: props) => {
    const defaultSrc = require("../../assets/avatardefault.jpeg");
    return (
        <View className="">
            <Image
                className="rounded-full"
                style={{ width: size, height: size, objectFit: "cover" }}
                source={src ? { uri: src } : defaultSrc}
            ></Image>
        </View>
    );
};

export default Avatar;

const styles = StyleSheet.create({});
