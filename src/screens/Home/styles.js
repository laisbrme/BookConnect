
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

/* HEADER */
const ContainerHome = styled.View ` 
    flex-direction: column;
    padding-top: 36px;
    padding-right: 16px;
    paddingBottom: 44px;
    marginTop: 25px;
    
  
    padding-Top: statusBarHeight;
    background-Color: #333061;
    height: 75%;
    width: 100%;
    border-end-start-radius: 50px;
    border-end-end-radius: 50px;
  `

    
 
 const Content = styled.View ` 
    flex: 1;
    align-items: flex-start;
    flex-Direction: column; `
    
  
const ButtonUser = styled.TouchableOpacity ` 
    padding-Top: 25px;     
    width: 44px;
    height: 44px;
    background-color: #F8F8F8;
    justify-content: center;
    align-items: center;
    border-radius: 22px;;
    padding: 10px;
    `
   
  
  
  const Username = styled.Text ` 
font-size: 18px;
color: #FFF;
font-weight: bold;
`


export { ContainerHome, ButtonUser, Content, Username }