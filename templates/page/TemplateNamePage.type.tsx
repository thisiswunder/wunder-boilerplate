import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type ITemplateNamePageParams = {
  TemplateName: undefined;
};

export interface ITemplateNamePageProps {
  navigation: StackNavigationProp<ITemplateNamePageParams, 'TemplateName'>;
  route: RouteProp<ITemplateNamePageParams, 'TemplateName'>;
}
