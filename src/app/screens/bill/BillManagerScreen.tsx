import React, { useState } from "react";
import { useTheme } from "react-native-elements";
import { ActionBar, ListContainer, NotFound, SafeAreaView } from "@components/ui";
import { BillManagerScreenNavigationProps } from "@d/navigation";


interface BillManagerScreenProps extends BillManagerScreenNavigationProps { };

export default ({ navigation }: BillManagerScreenProps) => {

  const { theme: { Styles } } = useTheme();
  const [bills, setBills] = useState([]);

  const closeSearchBar = () => {
    navigation.setOptions({
      header: undefined,
    });
  };

  return (
    <SafeAreaView
      style={[Styles.ExpandedContainer, Styles.FlexCenteredContainer]}
      onTouchStart={closeSearchBar}
    >
      <ActionBar styles={[Styles.ActionBarContainer, Styles.FlexCenteredContainer]} />
      <ListContainer styles={[Styles.ListContainer]}>
        {
          bills.length ? (
            bills.map(() => { })   // TODO: Rendering BillCard Component
          ) : (
            <NotFound entity="bills" styles={[Styles.ExpandedContainer, Styles.FlexCenteredContainer]} />
          )
        }
      </ListContainer>
    </SafeAreaView>
  );
}
