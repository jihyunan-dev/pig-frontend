import React from "react";
import styled from "styled-components";

import { Text } from "../../elem";
import flex from "../../themes/flex";
import { regex } from "../../shared/regex";

const Tags = ({ tag, gap, textType }) => {
  const filterTag =
    typeof tag === "string"
      ? tag.split(regex.commaAndTrim).filter(Boolean)
      : tag;
  return (
    <TagBox gap={gap}>
      {filterTag &&
        filterTag.map((tag, idx) => {
          return (
            <Tag key={idx}>
              <Text type={textType ? textType : "body_4"} color="darkgrey">
                {tag}
              </Text>
            </Tag>
          );
        })}
    </TagBox>
  );
};

const TagBox = styled.div`
  ${flex("start")};
  gap: ${(props) => (props.gap ? `${props.gap}px;` : "5px;")};
  flex-wrap: wrap;
  cursor: pointer;
`;

const Tag = styled.div`
  ${flex()}
  padding: 4px 10px 3px 10px;
  border: 1px solid var(--grey);
  border-radius: 4px;
`;

export default Tags;
