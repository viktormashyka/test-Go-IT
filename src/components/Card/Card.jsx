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
    isChecked ? setFollowers(prev => prev - 1) : setFollowers(prev => prev + 1);
    setIsChecked(prev => !prev);
    localStorage.setItem('myFollowers', followers + (isChecked ? -1 : 1));
    localStorage.setItem('myIsChecked', !isChecked);
  };

  function commafy(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
