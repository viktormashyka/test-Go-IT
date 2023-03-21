import styled from 'styled-components';
import logo from '../../images/Logo.png';
import picture from '../../images/Picture.png';
import boy from '../../images/Boy.png';
import rectangle from '../../images/Rectangle.png';

export const Wrapper = styled.div`
  /* Following */

  /* position: absolute; */
  position: relative;
  width: 380px;
  height: 460px;
  left: 435px;
  top: 168px;

  /* background-image: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  ); */
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  /* Rectangle 1 */

  /* background: #ebd8ff top 214px left 0px;
  width: 380px;
  height: 8px; */

  /* 
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff; */

  /* Pictures */

  background-image: url(${logo}), url(${picture}), url(${boy}),
    url(${rectangle}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  /* margin: 0 auto; */

  /* background-size: cover; */
  background-repeat: no-repeat;
  /* background-position: center; */

  background-size: 76px 22px, 308px 168px, 80px 80px, 380px 8px, cover;
  background-position: top 20px left 20px, top 28px left 36px,
    top 178px left 150px, top 214px left 0px, center;
`;

export const Text1 = styled.p`
  /* 777 tweets */

  position: absolute;
  width: 132px;
  height: 24px;
  left: 124px;
  top: 284px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Text2 = styled.p`
  /* 100,500 Followers */

  position: absolute;
  width: 214px;
  height: 24px;
  left: 83px;
  top: 324px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Button = styled.button`
  /* button */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;

  position: absolute;
  width: 196px;
  height: 50px;
  left: 92px;
  top: 374px;

  /* background: #ebd8ff; */
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  /* :active {
    background: #5cd3a8;
  } */
`;

export const Title = styled.span`
  /* Follow */

  /* width: 84px; */
  width: auto;
  height: 22px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  text-transform: uppercase;

  /* Landing/button text color */

  color: #373737;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
