import styled from "styled-components";

export const ItemWrapper = styled.a`
  font-family: Raleway, serif;
  color: #333;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  position: relative;
  text-align: center;
  margin: 1vh auto;
  padding: 1.5vh 0;
  width: 80%;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(15px);
  border-radius: 5px;
  box-shadow: 1px 1px 0 0 rgba(255, 255, 255, 0.8) inset,
  3px 5px 10px 0 rgba(0, 0, 0, 0.1);
  text-decoration: none;
  will-change: color, text-shadow, font-size;
  transition: ease all 0.3s;
  &:hover {
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.8);
  }
`;

type MenuItemProps={title: string,url:string}
export default function MenuItem({title,url}: MenuItemProps) {
    return <ItemWrapper href={url}>{title}</ItemWrapper>;
}