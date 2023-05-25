import React from 'react';
import { Container, Box, BoxTitle, BoxText } from './index.styles';

type boxData = {
  id: number;
  title: string;
  text: string;
  bgColor: string;
};

type Props = {
  boxData: boxData[];
};

export const Home: React.FC<Props> = ({ boxData }) => {
  return (
    <Container>
      {boxData.map((box) => (
        <Box key={box.id} $bgColor={box.bgColor}>
          <BoxTitle>{box.title}</BoxTitle>
          <BoxText>{box.text}</BoxText>
        </Box>
      ))}
    </Container>
  );
};
