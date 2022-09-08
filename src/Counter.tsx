import {FC} from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

type CounterProps = {
  id: number;
  value: number;
  increment: (id: number) => void;
  decrement: (id: number) => void;
};
export const Counter: FC<CounterProps> = ({
  id,
  value,
  increment,
  decrement,
}) => {
  const onHandleIncrement = () => {
    increment(id);
  };

  const onHandleDecrement = () => {
    decrement(id);
  };

  return (
    <View style={styles.counterContainer}>
      <Text style={styles.counterLabel}>{value}</Text>
      <View>
        <Pressable style={styles.buttons} onPress={onHandleIncrement}>
          <Text style={styles.buttonLabel}>+</Text>
        </Pressable>
        <Pressable style={styles.buttons} onPress={onHandleDecrement}>
          <Text style={styles.buttonLabel}>-</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: '#454C73',
    marginBottom: 2,
    width: 300,
    alignSelf: 'center',
    color: 'white',
    textAlign: 'center',
    padding: 12,
  },
  buttonLabel: {
    color: 'white',
    fontSize: 29,
    textAlign: 'center',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  counterLabel: {
    fontSize: 100,
    marginRight: 20,
    textAlign: 'center',
  },
});
