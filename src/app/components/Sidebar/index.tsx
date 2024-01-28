import styled from "styled-components";
import MenuItem from "@/app/components/Sidebar/MenuItem";

const MENU = [
    {id: 1, title: 'wewew', url: '/'},
    {id: 2, title: 'wewfffwewew', url:'/'},
    {id: 3, title: 'dfdwewew', url:'/'}]
export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 300px;
  grid-area: 1/1/2/2;
  position: relative;
`;
export default function Sidebar() {
    return <SidebarContainer>{MENU.map(({id,title, url})=><MenuItem key={id} title={title} url={url}/>)}</SidebarContainer>;
}