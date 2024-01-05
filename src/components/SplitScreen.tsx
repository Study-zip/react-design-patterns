import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Panel = styled.div<{ flex: number }>`
  flex: ${({ flex }) => flex};
`;

interface SplitScreenProps {
  children: [React.ReactElement, React.ReactElement];
  leftWidth: number;
  rightWidth: number;
}

const SplitScreen = ({
  children,
  leftWidth = 1,
  rightWidth = 1,
}: SplitScreenProps) => {
  const [left, right] = children;
  return (
    <Container>
      <Panel flex={leftWidth}>{left}</Panel>
      <Panel flex={rightWidth}>{right}</Panel>
    </Container>
  );
};

export default SplitScreen;
