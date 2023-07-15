import React from 'react'
import { View, Text,TouchableOpacity,FlatList } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'

const TabButton = ( name, activeTab, onHandleSearch) => {
  <TouchableOpacity>
    <Text>{name}</Text>
  </TouchableOpacity>
}
const Tabs = (tabs,activeTab,setActiveTab) => {
  return (
    <View style={styles.container}>
    <FlatList
      data={tabs}
      renderItem={({item}) => (
      <TouchableOpacity>
        <TabButton
          name={item}
          activeTab={activeTab}
          onHandleSearch = {() => setActiveTab(item)}
        />
      </TouchableOpacity>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item}
      contentContainerStyle = {{columnGap: SIZES.small/2}}

    />
      
    </View>
  )
}

export default Tabs