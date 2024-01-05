import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Panel = styled.div<{ flex: number }>`
  flex: ${({flex}) => flex};
`;

interface SplitScreenProps {
  Left: React.ComponentType;
  Right: React.ComponentType;
  leftWidth: number;
  rightWidth: number;
}

const SplitScreen = ({
  Left,
  Right,
  leftWidth = 1,
  rightWidth = 1,
}: SplitScreenProps) => {
  return (
    <Container>
      <Panel flex={leftWidth}>
        <Left />
      </Panel>
      <Panel flex={rightWidth}>
        <Right />
      </Panel>
    </Container>
  );
};

export default SplitScreen;
