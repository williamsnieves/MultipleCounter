import {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Counter} from './Counter';

type CountersOptions = {
  id: number;
  value: number;
};
const App = () => {
  const [data, setData] = useState<CountersOptions[]>([
    {id: 1, value: 0},
    {id: 2, value: 0},
    {id: 3, value: 0},
  ]);

  const increment = (id: number) => {
    setData(currentCounters => {
      return currentCounters.map(currentCounter => ({
        ...currentCounter,
        value:
          currentCounter.id === id
            ? ++currentCounter.value
            : currentCounter.value,
      }));
    });
  };

  const decrement = (id: number) => {
    setData(currentCounters => {
      return currentCounters.map(currentCounter => ({
        ...currentCounter,
        value:
          currentCounter.id === id
            ? --currentCounter.value
            : currentCounter.value,
      }));
    });
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Multiple counter</Text>
      </View>
      {data.map(counter => {
        return (
          <Counter
            data-testid={``}
            key={counter.id}
            id={counter.id}
            value={counter.value}
            {...{increment, decrement}}
          />
        );
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#273c75',
    alignSelf: 'stretch',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    padding: 20,
    fontSize: 20,
  },
});

export default App;
