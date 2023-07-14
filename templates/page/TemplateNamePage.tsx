import { View } from 'react-native';
import { Button, Text } from 'tamagui';

import { styles } from './TemplateNamePage.style';
import { ITemplateNamePageProps } from './TemplateNamePage.type';

export const TemplateNamePage = (props: ITemplateNamePageProps) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <Text style={styles.view}>TemplateNamePage page</Text>
      <Button
        onPress={() => {
          console.log('button pressed');
        }}>
        toggle
      </Button>
    </View>
  );
};
