import { useState, useEffect } from 'react';
import { Wrapper, Text1, Text2, Button, Title } from './Card.styled';

export const Card = () => {
  const [tweets] = useState(777);
  const [followers, setFollowers] = useState(() => {
    return JSON.parse(localStorage.getItem('myFollowers')) ?? 100500;
  });
  const [isChecked, setIsChecked] = useState(() => {
    return JSON.parse(localStorage.getItem('myIsChecked')) ?? false;
  });

  useEffect(() => {
    localStorage.setItem('myFollowers', JSON.stringify(followers));
    localStorage.setItem('myIsChecked', JSON.stringify(isChecked));
  }, [followers, isChecked]);

  const onFollow = () => {
    setIsChecked(prev => !prev);
    !isChecked
      ? setFollowers(prev => prev + 1)
      : setFollowers(prev => prev - 1);
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
        onClick={onFollow}
        style={{
          background: !isChecked ? '#ebd8ff' : '#5cd3a8',
        }}
      >
        <Title>{!isChecked ? 'Follow ' : 'Following'}</Title>
      </Button>
    </Wrapper>
  );
};
