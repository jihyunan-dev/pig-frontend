import React from "react";
import styled from "styled-components";

import { Text } from "../../elem";
import flex from "../../themes/flex";

const Tags = ({ tags, gap, textType }) => {
  return (
    <TagBox gap={gap}>
      {tags.map((tag, idx) => (
        <Tag key={idx}>
          <Text type={textType ? textType : "body_4"} color="darkgrey">
            {tag}
          </Text>
        </Tag>
      ))}
    </TagBox>
  );
};

const TagBox = styled.div`
  ${flex("start")};
  gap: ${(props) => (props.gap ? `${props.gap}px;` : "5px;")};
`;

const Tag = styled.div`
  ${flex()}
  padding: 4px 10px 3px 10px;
  border: 1px solid var(--grey);
  border-radius: 4px;
`;

export default Tags;
