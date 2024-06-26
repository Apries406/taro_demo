import AButton from "@/components/button";
import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import styles from "./index.module.scss";

export default function Home() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className={styles["home"]}>
      <AButton />
    </View>
  );
}
