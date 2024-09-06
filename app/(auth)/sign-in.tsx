import { Image, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputFields from "@/components/InputFields";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/Oauth";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onSignInPress = async () => {
    console.log(form);
  };
  return (
    <ScrollView className=" flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className=" relative w-full h-[250px]">
          <Image source={images.signUpCar} className="Z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            {" "}
            Welcome 👋
          </Text>
        </View>

        <View className=" p-5">
  
          <InputFields
            label="Email"
            placeholder="Enter Your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputFields
            label="Password"
            placeholder="Enter your password"
            secureTextEntry={true}
            icon={icons.lock}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton
            title="Sign In"
            className=" mt-6"
            onPress={onSignInPress}
          />

          <OAuth />

          <Link
            href="/sign-up"
            className=" text-lg text-center text-general-200 mt-10"
          >
            <Text>Don't have an accunt? </Text>
            <Text className=" text-primary-500">sign up</Text>
          </Link>
        </View>

        {/*  */}
      </View>
    </ScrollView>
  );
};

export default SignIn;
