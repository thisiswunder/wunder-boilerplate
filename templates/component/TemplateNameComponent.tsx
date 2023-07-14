import { Text } from 'react-native';

import { styles } from './TemplateNameComponent.style';
import { ITemplateNameComponentProps } from './TemplateNameComponent.type';

export const TemplateNameComponent = (props: ITemplateNameComponentProps) => {
  return <Text style={styles.view}>TemplateNamePage page</Text>;
};
