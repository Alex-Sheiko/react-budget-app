import styled from "styled-components";
import { close } from "assets";

export const StyledListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 0.1fr 0.1fr;
  grid-template-rows: 20px;
  padding: 15px 20px;
  align-items: center;
  border-bottom: 2px solid #ccd5ff;
`;

export const StyledItemText = styled.p`
  text-transform: lowercase;
  font-weight: 400;
`;

export const StyledItemBadge = styled.span`
  justify-self: center;
  background-color: #23c9ff;
  border-radius: 10px;
  padding: 3px 10px;
  font-size: 12px;
  color: #fff;
`;

export const StyledButtonDelete = styled.button`
  width: 15px;
  height: 15px;
  margin-left: 20px;
  background: url(${close}) no-repeat;
  border: none;
  transform: s;
`;
