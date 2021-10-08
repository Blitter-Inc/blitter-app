import React from "react";
import { SafeAreaView } from "@components/ui";
import { BillManagerScreenNavigationProps } from "@d/navigation";
import { Button } from "react-native-elements";


interface BillManagerScreenProps extends BillManagerScreenNavigationProps { };

export default ({ navigation }: BillManagerScreenProps) => {

  const closeSearchBar = () => {
    navigation.setOptions({
      header: undefined,
    });
  };

  return (
    <SafeAreaView
      onTouchStart={closeSearchBar}
      style={{ justifyContent: "center", alignItems: "center", height: "100%", paddingHorizontal: 80 }}
    >
      <Button title="Sample Button" buttonStyle={{ maxWidth: 200, paddingHorizontal: 20 }} />
    </SafeAreaView>
  );
}
