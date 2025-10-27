import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import { styles } from './style';
import { BarChart, PieChart } from 'react-native-gifted-charts'
import { SafeAreaView } from 'react-native-safe-area-context';
import { currentYearData } from './data';

const Charts = () => {
  const totalData = currentYearData;
  const data = currentYearData.monthlyExpenses;
  const monthlyData = data.map((x) =>
  ({
    stacks: [
      { value: x.categories.Food, color: '#f00' },
      { value: x.categories.Transport, color: '#0f0' },
      { value: x.categories.Entertainment, color: '#00f' },
      { value: x.categories.Shopping, color: '#f00' },
      { value: x.categories.Bills, color: '#0f0' },
      { value: x.categories.Health, color: '#00f' },
    ],
    label: x.month.slice(0, 3)
  }));
  const pieData = [
    { value: 54, color: '#177AD5' },
    { value: 40, color: '#79D2DE' },
    { value: 20, color: '#ED6665' }
  ];

  const { width } = useWindowDimensions();
  const barWidth = width / 12 - 25;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BarChart
          barWidth={barWidth}
          noOfSections={3}
          frontColor="#007AFF"
          spacing={40}
          rotateLabel
          stackData={monthlyData}
          yAxisThickness={1}
          xAxisThickness={1}
        />
        <Text style={styles.centeredText}>{totalData.year}</Text>
        <PieChart
          data={pieData}
          showGradient
        />
      </View>
    </SafeAreaView>
  )
}

export default Charts;