import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  Platform,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { useState } from "react";

const RegistrationScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginFocused, setLoginFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const xml = `
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12.5" cy="12.5" r="12" fill="white" stroke="#FF6C00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z" fill="#FF6C00"/>
</svg>
  `;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : ""}
    >
      <View style={styles.form}>
        <Image
          style={styles.image}
          source={require("../images/photo.webp")}
          alt="photo"
        />

        <SvgXml xml={xml} style={styles.svg} />
        <Text style={styles.title}>Реєстрація</Text>
        <View style={styles.wrapperInput}>
          <TextInput
            style={[
              styles.input,
              loginFocused ? styles.inputFocused : styles.inputBlurred,
            ]}
            placeholder="Логін"
            onFocus={() => setLoginFocused(true)}
            onBlur={() => setLoginFocused(false)}
          />
        </View>
        <View style={styles.wrapperInput}>
          <TextInput
            placeholder="Адрес електронної пошти"
            style={[
              styles.input,
              emailFocused ? styles.inputFocused : styles.inputBlurred,
            ]}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
          />
        </View>
        <View>
          <TextInput
            secureTextEntry={!showPassword}
            placeholder="Пароль"
            style={[
              styles.input,
              passwordFocused ? styles.inputFocused : styles.inputBlurred,
            ]}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.showPasswordButton}
          >
            <Text>{showPassword ? "Приховати" : "Показати"}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Зареєструватись</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Вже є акаунт? Війти</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  inputFocused: {
    borderColor: "#FF6C00",
    backgroundColor: "#ffffff",
    color: "#212121",
  },
  inputBlurred: {
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    color: "#BDBDBD",
  },
  showPasswordButton: {
    position: "absolute",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    right: 16,
    top: 13,
    color: "#1B4371",
  },
  image: {
    position: "absolute",
    top: -52,
    borderRadius: 16,
  },
  svg: {
    position: "absolute",
    top: 30,
    right: 135,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 33,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    height: 50,
    width: 343,
    padding: 13,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 1.2,
    color: "#BDBDBD",
  },
  wrapperInput: {
    marginBottom: 16,
  },
  form: {
    position: "relative",
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingBottom: 80,
  },
  btn: {
    height: 55,
    width: 343,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 45,
    marginBottom: 16,
  },
  btnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "center",
    paddingTop: 16,
    paddingBottom: 16,
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
  },
});

export default RegistrationScreen;
