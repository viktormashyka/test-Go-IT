import { useState, useEffect } from 'react';
import { Wrapper, Text1, Text2, Button, Title } from './Card.styled';

export const Card = () => {
  const [tweets] = useState(777);
  const [followers, setFollowers] = useState(100500);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const savedFollowers = localStorage.getItem('myFollowers');
    const savedIsChecked = localStorage.getItem('myIsChecked');

    if (savedFollowers) {
      setFollowers(savedFollowers);
    }
    if (savedIsChecked) {
      setIsChecked(savedIsChecked);
    }
  }, []);

  const onFollow = () => {
    !isChecked ? setFollowers(followers + 1) : setFollowers(followers - 1);
    setIsChecked(!isChecked);
    localStorage.setItem('myFollowers', followers);
    localStorage.setItem('myIsChecked', isChecked);
  };

  function commafy(num) {
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
      str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
  }

  const followersNormalize = commafy(followers);

  return (
    <Wrapper>
      <Text1> {tweets} tweets</Text1>
      <Text2>{followersNormalize} Followers</Text2>
      <Button
        type="button"
        onClick={() => onFollow()}
        style={{
          background: !isChecked ? '#ebd8ff' : '#5cd3a8',
        }}
      >
        <Title>{!isChecked ? 'Follow ' : 'Following'}</Title>
      </Button>
    </Wrapper>
  );
};
