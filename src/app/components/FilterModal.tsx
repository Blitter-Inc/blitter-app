import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { CheckBox } from "react-native-elements";
import { useAppTheme } from "$config/theme";
import { FilterContext } from "$config/context";
import { SetFilterComponent, ToggleFilterComponent } from "$types/components";
import { FilterStateObject } from "$types/config/context";
import { FilterType, UseStateObject } from "$types/modules/shared";
import Pill from "./Pill";


const SetFilter: SetFilterComponent = ({
  filterName,
  options,
  state,
}) => {

  const [filterState, setFilterState] = state;

  const isChecked = (option: string) => (filterState[filterName].data as Set<string>).has(option);

  const onPressHandler = (option: string) => () => {
    const dataSet = (filterState[filterName].data as Set<string>);
    let active: boolean = filterState[filterName].active;

    if (isChecked(option)) {
      dataSet.delete(option);
      if (dataSet.size === 0) {
        active = false;
      }
    } else {
      dataSet.add(option);
      active = true;
    }

    setFilterState({
      ...filterState,
      [filterName]: {
        active,
        data: dataSet,
      }
    });
  };

  return (
    <View style={styles.setFilterContainer}>
      {
        options.map((option: string, index: number) => (
          <CheckBox
            key={index}
            iconRight
            size={18}
            containerStyle={{ padding: 2 }}
            title={option.toUpperCase()}
            checked={isChecked(option)}
            onPress={onPressHandler(option)}
          />
        ))
      }
    </View>
  );
};

const ToggleFilter: ToggleFilterComponent = ({ filterName, state }) => {
  const [filterState, setFilterState] = state;

  const onPressHandler = (active: boolean, data?: boolean) => () => {
    setFilterState({
      ...filterState,
      [filterName]: { active, data },
    });
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <Pill
        label="Disabled"
        size={15}
        onPress={onPressHandler(false)}
        containerStyle={{
          ...styles.toggleFilterContainer,
          ...(!filterState[filterName].active && { backgroundColor: "green" }),
        }}
      />
      <Pill
        label="Yes"
        size={15}
        onPress={onPressHandler(true, true)}
        containerStyle={{
          ...styles.toggleFilterContainer,
          ...((filterState[filterName].active && filterState[filterName].data) && { backgroundColor: "green" }),
        }}
      />
      <Pill
        label="No"
        size={15}
        onPress={onPressHandler(true, false)}
        containerStyle={{
          ...styles.toggleFilterContainer,
          ...((filterState[filterName].active && !filterState[filterName].data) && { backgroundColor: "green" }),
        }}
      />
    </View>
  );
};

const FilterModal = ({ hideOverlayHandler }: { hideOverlayHandler: () => void; }) => {
  const ColorPalette = useAppTheme();
  const { filters, status, activate, refresh, reset, renderOptions, state } = useContext(FilterContext);

  const renderFilter: (params: {
    filterName: string;
    filterType: FilterType;
    state: UseStateObject<FilterStateObject>;
    [propName: string]: any;
  }) => JSX.Element = ({ filterName, filterType, state, ...props }) => {
    switch (filterType) {
      case FilterType.SET:
        return (
          <SetFilter
            filterName={filterName}
            state={state}
            options={props.options ?? []}
          />
        );
      case FilterType.TOGGLE:
        return <ToggleFilter filterName={filterName} state={state} />;
      default:
        return (
          <></>
        );
    }
  };

  const clearHandler = () => {
    reset();
    hideOverlayHandler();
  };

  const applyHandler = () => {
    if (status.active) {
      refresh();
    } else if (Object.values(state[0]).some(filterState => filterState.active)) {
      activate();
    }
    hideOverlayHandler();
  };

  return (
    <View>
      <Text style={styles.filterModalTitle}>Filters</Text>
      {filters.map(({ name, type }) => (
        <View key={name} style={{ marginBottom: 15 }}>
          <Text style={styles.filterNameTitle}>{name.toUpperCase()}</Text>
          {renderFilter({
            state,
            filterName: name,
            filterType: type,
            ...(renderOptions[name] && { options: renderOptions[name] }),
          })}
        </View>
      ))}
      <View style={styles.filterModalButtonContainer}>
        <TouchableOpacity style={styles.filterModalButton} onPress={clearHandler}>
          <Text style={{ color: ColorPalette.ACCENT, fontSize: 14 }}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterModalButton} onPress={applyHandler}>
          <Text style={{ color: ColorPalette.ACCENT, fontSize: 14 }}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  setFilterContainer: { flexWrap: "wrap", flexDirection: "row" },
  toggleFilterContainer: {
    height: 30,
    width: 75,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    paddingVertical: 0,
  },
  filterModalButtonContainer: { flexDirection: "row", justifyContent: "space-between" },
  filterModalTitle: { fontSize: 28, fontWeight: "bold", marginBottom: 15 },
  filterModalButton: { flex: 1, alignItems: "center" },
  filterNameTitle: { fontWeight: "bold", fontSize: 16, marginBottom: 5 },
});

export default FilterModal;
