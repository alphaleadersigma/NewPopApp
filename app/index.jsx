import { StyleSheet} from 'react-native';
import { Redirect } from 'expo-router'

export default function App() {
  return (
   <Redirect href={'/home'}/>
  );
}

const styles = StyleSheet.create({

});
