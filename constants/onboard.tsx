import { Image } from 'react-native';

import Onboarding3 from '../assets/onboarding/ai.png';
import Onboarding1 from '../assets/onboarding/diet.png';
import Onboarding2 from '../assets/onboarding/salad.png';

export type onBoardingDataType = {
  id: number | string;
  title: string;
  subtitle: string;
  image: React.ReactNode;
};

export const onBoardingData: onBoardingDataType[] = [
  {
    id: 1,
    title: 'Start with Your Ingredients',
    subtitle: 'Simply enter the ingredients you have, and let ChefBuddy do the magic.',
    image: <Image source={Onboarding1} style={{ width: 200, height: 200 }} />,
  },
  {
    id: 2,
    title: 'Get Tailored Recipes',
    subtitle: 'ChefBuddy finds the best recipes based on what you already have in your kitchen.',
    image: <Image source={Onboarding2} style={{ width: 200, height: 200 }} />,
  },
  {
    id: 3,
    title: 'Cook & Enjoy!',
    subtitle: 'Follow easy step-by-step instructions by AI and enjoy meals made just for you.',
    image: <Image source={Onboarding3} style={{ width: 200, height: 200 }} />,
  },
];
