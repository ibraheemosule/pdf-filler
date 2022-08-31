import type { NextPage } from 'next';
import { IIndexPageProps } from '../ts-types/componentTypes';
import { HomeStyle } from '../styles/HomeStyle.styled';
import ConvertFile from '../components/convert-file';

const Home: NextPage<IIndexPageProps> = () => {
  return (
    <HomeStyle>
      <ConvertFile />
    </HomeStyle>
  );
};

export default Home;
